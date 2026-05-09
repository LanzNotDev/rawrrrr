const axios = require("axios");
const FormData = require("form-data");

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
const uploadToCatbox = async (buffer) => {
  const form = new FormData();
  form.append("reqtype", "fileupload");
  form.append("fileToUpload", buffer, {
    filename: "photo.jpg",
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
if (!/^https?:\/\//.test(imageUrl))
  throw new Error("URL hasil upload tidak valid");

console.log("Image URL:", imageUrl);

// Fungsi pemrosesan utama dengan fallback
const getFigureImage = async (url) => {
  const endpoints = [
    `https://api-faa.my.id/faa/tofigurav3?url=${encodeURIComponent(url)}`,
    `https://api-faa.my.id/faa/tofigurav2?url=${encodeURIComponent(url)}`,
  ];

  for (const api of endpoints) {
    try {
      console.log("Mencoba API:", api);
      const resApi = await axios.get(api, {
        responseType: "arraybuffer",
        timeout: 180000,
      });
      if (resApi.status === 200 && resApi.data) return Buffer.from(resApi.data);
    } catch (err) {
      console.warn("⚠️ Gagal di API:", api, "-", err.message);
    }
  }
  throw new Error("Semua API gagal merespons!");
};

const resultBuffer = await getFigureImage(imageUrl);
if (!resultBuffer || resultBuffer.length < 1000)
  throw new Error("❌ API tidak mengembalikan gambar yang valid");

// Kirim hasil
await Putzz.sendMessage(
  m.chat,
  { image: resultBuffer, caption: "✨ Hasil AI To Figure V3 (Auto-Fallback)" },
  { quoted: m }
);

await Putzz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });


} catch (e) {
console.error(e);
m.reply(`❌ Terjadi kesalahan: ${e.message}`);
}
};

handler.help = ["tofigure3"];
handler.tags = ["ai"];
handler.command = ["tofigure"];
//handler.premium = true;

module.exports = handler;
