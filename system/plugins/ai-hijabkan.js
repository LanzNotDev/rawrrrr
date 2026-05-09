const axios = require('axios') 
const FormData = require('form-data') 

let handler = async (m, { Putzz, command }) => {
  try {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime))
      return m.reply(`✨ Balas *gambar* dengan caption *.${command}*`)

    await Putzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

    // Unduh gambar
    const buffer = await q.download()
    if (!buffer) throw new Error("❌ Gagal mengunduh gambar")

    // Upload ke Catbox
    const uploadToCatbox = async (buffer) => {
      const form = new FormData()
      form.append('reqtype', 'fileupload')
      form.append('fileToUpload', buffer, {
        filename: 'photo.jpg',
        contentType: 'image/jpeg'
      })
      const res = await axios.post('https://catbox.moe/user/api.php', form, {
        headers: form.getHeaders()
      })
      if (typeof res.data === 'string' && res.data.startsWith('http'))
        return res.data.trim()
      throw new Error('Gagal upload ke Catbox: ' + res.data)
    }

    const imageUrl = await uploadToCatbox(buffer)
    if (!/^https?:\/\//.test(imageUrl))
      throw new Error('URL hasil upload tidak valid')

    console.log('Image URL:', imageUrl)

    // Panggil API FAA ToGhibli
    const apiUrl = `https://api-faa.my.id/faa/todubai?url=${encodeURIComponent(imageUrl)}`
    const resApi = await axios.get(apiUrl, {
      responseType: 'arraybuffer',
      timeout: 180000
    })

    const resultBuffer = Buffer.from(resApi.data)
    if (!resultBuffer || resultBuffer.length < 1000)
      throw new Error('❌ API tidak mengembalikan gambar yang valid')

    // Kirim hasil
    await Putzz.sendMessage(
      m.chat,
      { image: resultBuffer, caption: `✨ Hasil AI To Hijab` },
      { quoted: m }
    )

    await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

  } catch (e) {
    console.error(e)
    m.reply(`❌ Terjadi kesalahan: ${e.message}`)
  }
}

handler.help = ['tohijab', 'hijabkan']
handler.tags = ['ai', 'premium', 'tools']
handler.command = ['tohijab', 'hijabkan']
handler.premium = true

module.exports = handler;