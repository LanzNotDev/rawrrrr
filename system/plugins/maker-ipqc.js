let handler = async (m, { Putzz, fdoc, text }) => {
  if (!text) return m.reply('Mana Text Nya')
  if (text.length > 80) return m.reply('Max 80 Text')
  
  Putzz.sendMessage(m.chat, {
    image: { url: 'https://brat.siputzx.my.id/iphone-quoted?messageText=' + encodeURIComponent(text) },
  }, { quoted: fdoc })
}

handler.help = ['iqc <teks>']
handler.command = ['iqc2']
handler.tags = ['maker']

module.exports = handler;