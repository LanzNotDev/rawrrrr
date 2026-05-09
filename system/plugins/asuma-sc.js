let handler = async (m, { Putzz, isCreator, isPremium, qtext, runtime, fdoc, pickRandom, readmore, fetchJson, fsaluran }) => {
Putzz.sendMessage(m.chat,

    {

        product: {

            productImage: { url: "https://files.catbox.moe/wktobm.jpg" }, // Masukkan link gambar di tanda kutip

            productImageCount: 1,

            title: "Script Asuma Tokii", // input title in thumbnail

            description: "s h o p - m e n u", // G usah kalo gw

            priceAmount1000: 60000 * 1000, // harga

            currencyCode: "IDR", // indonesia 

            retailerId: "100000", 

            url: "https://files.catbox.moe/vys82r.png", // G usah kalo gw           

        },

        businessOwnerJid: m.sender,

        caption: ".", //, input caption

        title: "order now", // Input title product

        footer: "dycoders.xyz", // G usah kalo gw

        media: true,

        viewOnce: true, 

        shop: "WA",

        id: "171123",

    },

  {

    quoted : fsaluran

  }

)
let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/music.json');

let itil = pler[Math.floor(Math.random() * pler.length)];

await Putzz.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: fdoc })}

handler.command = ["sc", "script", "esceh"]

module.exports = handler