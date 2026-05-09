const axios = require("axios");
const FormData = require("form-data");

let handler = async (m, { Putzz, text }) => {
  try {
    if (!text) {
      const contoh = `
🪪 *Format KTP*:

.ktp Nama|TTL|Jenis Kelamin|Alamat|RT/RW|Kel/Desa|Kecamatan|Kota|Provinsi|Agama|Status|Pekerjaan|Golongan Darah|Kewarganegaraan|Masa Berlaku|Terbuat

📌 *Contoh Pengisian*:

.ktp Renza Test|01-01-2000|Laki-Laki|Jl Contoh No.123|001/002|Cibaduyut|Bojongloa Kidul|Sukabumi|Jawa Barat|Katolik|Belum Kawin|Pelajar/Mahasiswa|O|WNI|Seumur Hidup|Kota Sukabumi 

✅ Setelah mengetik command sesuai format di atas, reply foto wajah yang ingin dijadikan KTP.
`;
      return m.reply(contoh);
    }

    const parts = text.split('|').map(p => p.trim());
    if (parts.length !== 16) {
      return m.reply(`❌ Format salah! Pastikan semua 16 field diisi sesuai contoh.`);
    }

    const [
      nama, ttl, jenis_kelamin, alamat, rt_rw, kel_desa, kecamatan, kota,
      provinsi, agama, status, pekerjaan, golongan_darah, kewarganegaraan,
      masa_berlaku, terbuat
    ] = parts;

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
    if (!/image/.test(mime))
      return m.reply(`🪪 Balas *foto wajah* dengan command .ktp yang sudah diisi datanya`);

    await Putzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const buffer = await q.download();

    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', buffer, {
      filename: 'photo.jpg',
      contentType: 'image/jpeg'
    });

    const upload = await axios.post(
      'https://catbox.moe/user/api.php',
      form,
      { headers: form.getHeaders() }
    );

    const pas_photo =
      typeof upload.data === 'string' && upload.data.startsWith('http')
        ? upload.data.trim()
        : (() => { throw new Error('❌ Gagal upload foto'); })();

    const params = {
      provinsi,
      kota,
      nik: "3201021111110001",
      nama,
      ttl,
      jenis_kelamin,
      golongan_darah,
      alamat,
      rt_rw,
      kel_desa,
      kecamatan,
      agama,
      status,
      pekerjaan,
      kewarganegaraan,
      masa_berlaku,
      terbuat,
      pas_photo
    };

    const qs = new URLSearchParams(params).toString();
    const apiUrl = `https://zelapioffciall.koyeb.app/imagecreator/ektp?${qs}`;

    const res = await axios.get(apiUrl, {
      responseType: "arraybuffer",
      timeout: 180000
    });

    const resultBuffer = Buffer.from(res.data);

    if (!resultBuffer || resultBuffer.length < 1000)
      throw new Error("❌ API tidak mengembalikan gambar yang valid");

    await Putzz.sendMessage(
      m.chat,
      { image: resultBuffer, caption: "🪪 KTP berhasil dibuat!" },
      { quoted: m }
    );

    await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (e) {
    console.error(e);
    if (e.response && e.response.data) {
      m.reply(
        `❌ Eror API: ${e.response.status}\n${
          Buffer.isBuffer(e.response.data)
            ? e.response.data.toString()
            : JSON.stringify(e.response.data, null, 2)
        }`
      );
    } else {
      m.reply(`❌ Eror kak: ${e.message}`);
    }
  }
};

handler.help = ['ktp'];
handler.tags = ['maker', 'tools'];
handler.command = ["fktp"]
handler.register = true;
handler.limit = true;

module.exports = handler;
