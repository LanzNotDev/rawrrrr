const axios = require('axios') 
const FormData = require('form-data') 

let handler = async (m, { Putzz, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, fdoc, qfake, qmsg, sleep, fetchJson, botNumber, detectOperator, prefixOperator, totalFitur, salam, reply, CatBox }) => {
//f (!isPremium) return m.reply(mess.prem)

 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
        let directLink = await CatBox(media);
        
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${directLink}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (media && fs.existsSync(media)) {
            fs.unlinkSync(media);
        }
    }
}


handler.command = ['tofigura', 'tofgurav2', 'tofigurav3']
handler.tags = ['tools']
handler.help = ['tofigura']

module.exports = handler