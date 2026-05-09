/*
• Plugins Dev - ESM to CJS Converter
• Buatan: LanzOfficial
*/

const fs = require('fs')
const path = require('path')

let handler = async (m, { Putzz }) => {
  try {
    const quoted = m.quoted || m
    const mime = (quoted.msg || quoted).mimetype || ''
    if (!/javascript|plain/.test(mime))
      return m.reply('📄 Kirim atau reply file `.js` (ESM) yang mau diubah ke CJS.')

    const fileName = path.join(__dirname, `temp_${Date.now()}.js`)
    const buffer = await quoted.download()
    fs.writeFileSync(fileName, buffer)

    let code = fs.readFileSync(fileName, 'utf-8')

    // 🔄 Konversi import/export ke require/module.exports
    code = code
      // import default from 'x'
      .replace(/import\s+([\w]+)\s+from\s+['"](.+?)['"]/g, 'const $1 = require("$2")')
      // import { a, b } from 'x'
      .replace(/import\s+\{([^}]+)\}\s+from\s+['"](.+?)['"]/g, 'const { $1 } = require("$2")')
      // export default handler
      .replace(/export\s+default\s+([\w]+)/g, 'module.exports = $1')
      // export { a, b }
      .replace(/export\s+\{([^}]+)\}/g, 'module.exports = { $1 }')
      // remove type="module" comment if any
      .replace(/\/\/\s*@type\s+module/g, '')

    const outputFile = fileName.replace('temp_', 'converted_')
    fs.writeFileSync(outputFile, code)

    await Putzz.sendMessage(m.chat, {
      document: { url: outputFile },
      mimetype: 'text/javascript',
      fileName: `converted_${path.basename(fileName)}`
    })

    fs.unlinkSync(fileName)
    fs.unlinkSync(outputFile)
  } catch (err) {
    console.error(err)
    m.reply('❌ Terjadi kesalahan saat mengonversi file: ' + err.message)
  }
}

handler.command = ['esm2cjs']
handler.help = ['esm2cjs (reply file .js)']
handler.tags = ['tools']

module.exports = handler
