const axios = require("axios");
const FormData = require("form-data");
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require("@whiskeysockets/baileys");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let handler = async (m, { Putzz, command }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || "";

    if (!/image/.test(mime))
      return m.reply(`✨ Balas *gambar* dengan caption *.${command}*`);

    await Putzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Unduh gambar
    const buffer = await q.download();
    if (!buffer) throw new Error("❌ Gagal mengunduh gambar");

    // Upload ke Catbox
    const uploadToCatbox = async (buffer, filename = "photo.jpg") => {
      const form = new FormData();
      form.append("reqtype", "fileupload");
      form.append("fileToUpload", buffer, {
        filename,
        contentType: "image/jpeg",
      });
      const res = await axios.post("https://catbox.moe/user/api.php", form, {
        headers: form.getHeaders(),
      });
      if (typeof res.data === "string" && res.data.startsWith("http"))
        return res.data.trim();
      throw new Error("Gagal upload ke Catbox: " + res.data);
    };

    const imageUrl = await uploadToCatbox(buffer);
    console.log("Image URL:", imageUrl);

    const resultUrls = [];

    // Jalankan 5 kali API FAA secara BERURUT (tidak paralel)
    for (let i = 1; i <= 5; i++) {
      try {
        m.reply(`🪄 Membuat hasil ke-${i}...`);
        const apiUrl = `https://api-faa.my.id/faa/tofigurav2?url=${encodeURIComponent(imageUrl)}`;
        const resApi = await axios.get(apiUrl, {
          responseType: "arraybuffer",
          timeout: 180000,
        });

        const resultBuffer = Buffer.from(resApi.data);
        if (!resultBuffer || resultBuffer.length < 1000)
          throw new Error("Gambar tidak valid");

        const uploaded = await uploadToCatbox(resultBuffer, `result${i}.jpg`);
        resultUrls.push(uploaded);

        console.log(`Hasil ke-${i}:`, uploaded);

        // Jeda agar API tidak error
        await sleep(3000);
      } catch (e) {
        console.error("Error hasil ke-", i, e.message);
      }
    }

    if (!resultUrls.length) throw new Error("Tidak ada hasil valid dari API");

    // === Coba kirim sebagai carousel ===
    try {
      const cards = [];
      for (let i = 0; i < resultUrls.length; i++) {
        const imgUrl = resultUrls[i];
        const media = await prepareWAMessageMedia(
          { image: { url: imgUrl } },
          { upload: Putzz.waUploadToServer }
        );

        cards.push({
          header: proto.Message.InteractiveMessage.Header.create({
            imageMessage: media.imageMessage,
            title: `🖼️ Hasil ${i + 1}`,
          }),
          body: { text: `✨ Hasil ke-${i + 1}` },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"🔍 Lihat Gambar","url":"${imgUrl}","merchant_url":"${imgUrl}"}`,
              },
            ],
          },
        });
      }

      const msg = generateWAMessageFromContent(
        m.chat,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: { text: "✨ Geser untuk melihat hasil AI-mu!" },
                carouselMessage: { cards, messageVersion: 1 },
              },
            },
          },
        },
        {}
      );

      await Putzz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
      await Putzz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    } catch (err) {
      console.error("Carousel gagal, fallback ke album:", err.message);
      for (let i = 0; i < resultUrls.length; i++) {
        const imgUrl = resultUrls[i];
        const imgBuffer = (await axios.get(imgUrl, { responseType: "arraybuffer" })).data;
        await Putzz.sendMessage(m.chat, { image: imgBuffer, caption: `✨ Hasil ke-${i + 1}` }, { quoted: m });
      }
    }
  } catch (e) {
    console.error(e);
    m.reply(`❌ Error: ${e.message}`);
  }
};

handler.help = ["tofigure2"];
handler.tags = ["ai"];
handler.command = ["tofigure2"];
handler.premium = true;

module.exports = handler;
