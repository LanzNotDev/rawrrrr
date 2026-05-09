let handler = async (m, { Putzz, reply }) => {

    const sticker =
        m.message?.stickerMessage ||
        m.msg

    if (!sticker?.fileSha256) return

    const fileSha = sticker.fileSha256.toString('base64')

    console.log("SHA TERDETEKSI:", fileSha)

    if (fileSha !== "AZXnSkIq8kO2FtHVfCPC9dlQ2wNAg2fWN3jbFpiCFbQ=") return

    await Putzz.sendMessage(
        m.chat,
        { text: "STICKER TERDETEKSI 🔥" },
        { quoted: m }
    )
}

handler.command = []

module.exports = handler