const axios = require('axios')
const FormData = require('form-data')

let handler = async (m, { Putzz, args } = {}) => {
  args = args || (m.text ? m.text.split(' ').slice(1) : [])

  try {
    const quoted = m.quoted ? m.quoted : m
    const mime =
      (quoted.msg || quoted).mimetype ||
      quoted.mimetype ||
      quoted.message?.mimetype ||
      ''

    if (!/image/.test(mime)) {
      return m.reply('📸 Reply gambar atau kirim gambar dengan command: .img2vid <prompt>')
    }

    const prompt = args.join(' ')
    if (!prompt) return m.reply('📝 Prompt-nya mana kak?')

    m.reply('⏳ Sedang membuat video, tunggu sebentar ya...')

    const img = await quoted.download()

    const form = new FormData()
    form.append('files[]', img, { filename: 'image.jpg', contentType: 'image/jpeg' })

    const upload = await axios.post('https://uguu.se/upload', form, {
      headers: form.getHeaders(),
      maxBodyLength: Infinity
    })

    const imageUrl =
      upload.data?.files?.[0]?.url ||
      upload.data?.url ||
      upload.data?.[0]?.url

    if (!imageUrl) return m.reply('❌ Gagal upload gambar ke server kak')

    const gen = await axios.post('https://veo31ai.io/api/pixverse-token/gen', {
      videoPrompt: prompt,
      videoAspectRatio: '16:9',
      videoDuration: 5,
      videoQuality: '540p',
      videoModel: 'v4.5',
      videoImageUrl: imageUrl,
      videoPublic: false
    })

    const taskId = gen.data?.taskId
    if (!taskId) return m.reply('❌ Gagal membuat task video')

    const timeout = Date.now() + 180000
    let videoUrl

    while (Date.now() < timeout) {
      const res = await axios.post('https://veo31ai.io/api/pixverse-token/get', {
        taskId,
        videoPublic: false,
        videoQuality: '540p',
        videoAspectRatio: '16:9',
        videoPrompt: prompt
      })

      videoUrl = res.data?.videoData?.url
      if (videoUrl) break
      await new Promise((resolve) => setTimeout(resolve, 5000))
    }

    if (!videoUrl) return m.reply('❌ Video gagal dibuat dalam waktu 3 menit')

    await Putzz.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: '🎬 Video berhasil dibuat!'
    })
  } catch (e) {
    console.error(e)
    m.reply(`❌ Terjadi kesalahan: ${e.message}`)
  }
}

handler.help = ['img2vid <prompt>']
handler.tags = ['ai']
handler.command = ['img2vid']

module.exports = handler
