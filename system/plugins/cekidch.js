const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");

let handler = async (m, { Putzz, command }) => {
try {
const fullText =
m.text ||
m.body ||
m.message?.conversation ||
m.message?.extendedTextMessage?.text ||
m.args?.join(" ") ||
m.input ||
m.quoted?.text ||
"";


const arg = fullText.replace(m.cmd, "").trim().split(" ")[0];

if (!arg)
  return await Putzz.sendMessage(m.chat, {
    text: "❗ *Masukkan link channel WhatsApp!*\nContoh:\n> .idch https://whatsapp.com/channel/XXXXXXXXXXX",
  });

if (!arg.includes("https://whatsapp.com/channel/"))
  return await Putzz.sendMessage(m.chat, { text: "⚠️ *Link channel tidak valid!*" });

const channelId = arg.split("https://whatsapp.com/channel/")[1];
if (!channelId)
  return await Putzz.sendMessage(m.chat, { text: "❌ *Gagal membaca ID channel!*" });

const res = await Putzz.newsletterMetadata("invite", channelId);

const teks =
  `📡 *Informasi Channel WhatsApp*\n\n` +
  `*ID:* ${res.id}\n` +
  `*Nama:* ${res.name || "-"}\n` +
  `*Total Pengikut:* ${res.subscribers || 0}\n` +
  `*Status:* ${res.state || "Unknown"}\n` +
  `*Verified:* ${
    res.verification === "VERIFIED" ? "✅ Terverifikasi" : "❌ Tidak"
  }`;

const msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          body: { text: teks },
          footer: { text: "© Mifinfinity-MD" },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_copy",
                buttonParamsJson: `{"display_text": "COPY ID CHANNEL","copy_code": "${res.id}"}`,
              },
            ],
          },
        },
      },
    },
  },
  { quoted: m }
);

await Putzz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });


} catch (err) {
console.error("❌ CEKIDCH ERROR:", err);
await Putzz.sendMessage(m.chat, {
text: `❌ *Terjadi kesalahan saat mengambil data channel!*\n${err.message}`,
});
}
};

handler.help = ["cekidch", "idch"];
handler.tags = ["tools"];
handler.command = /^cekidch|idch$/i;

module.exports = handler;
