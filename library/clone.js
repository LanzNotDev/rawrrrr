const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  DisconnectReason,
  generateWAMessageFromContent,
  proto
} = require("@whiskeysockets/baileys")

const pino = require("pino")
const fs = require("fs")

async function startPairing(sock, m, sender) {
  const sessionFolder = `./session/clone_${sender}`

  if (!fs.existsSync(sessionFolder)) {
    fs.mkdirSync(sessionFolder, { recursive: true })
  }

  const { state, saveCreds } = await useMultiFileAuthState(sessionFolder)
  const { version } = await fetchLatestBaileysVersion()

  const client = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
    },
    browser: ['Ubuntu', 'Chrome', '20.0.04']
  })

  client.ev.on("creds.update", saveCreds)

  let done = false

  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update

    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        startPairing(sock, m, sender)
      }
    }

    // ✅ FIX: WAJIB nunggu CONNECT OPEN
    if (connection === "open" && !done && !client.authState.creds.registered) {
      done = true

      try {
        const code = await client.requestPairingCode(sender, 'PUTZAJLH')

        // 🔥 CTA COPY REAL (bukan button biasa)
        const msg = generateWAMessageFromContent(
          m.chat,
          {
            viewOnceMessage: {
              message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: {
                    text: "🔗 *PAIRING CODE*\nKlik tombol dibawah"
                  },
                  footer: {
                    text: "Lanz Official"
                  },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "📋 Copy Code",
                          copy_code: code
                        })
                      }
                    ]
                  }
                })
              }
            }
          },
          { quoted: m }
        )

        await sock.relayMessage(m.chat, msg.message, {
          messageId: msg.key.id
        })

      } catch (err) {
        console.log("PAIRING ERROR:", err)
        m.reply("❌ Error pairing, coba lagi")
      }
    }
  })

  return client
}

module.exports = { startPairing }