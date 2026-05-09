/*
 ** sumber https://whatsapp.com/channel/0029VbAbEkb5Ejy7jjjG7p3H **
*/
let handler = async (m, { Putzz, isOwner, text }) => {
try {
    if (!isOwner) return m.reply(mess.owner)
    if (!text) return m.reply(`Contoh:\n.pol judul,opsi 1,opsi 2, opsi 3, dst`)
    const args = text.split(',').map(v => v.trim());
    const title = args.shift();

    if (!title || args.length < 2) 
        return m.reply(`Masukkan minimal 2 opsi!\nContoh:\n.pol Pilih warna?,Merah,Biru,Hijau`);

    
        await Putzz.sendMessage(m.chat, {
            poll: {
                name: title,
                values: args,
                selectableCount: 1,
                // ini penting biar bisa juga di private chat
                toAnnouncementGroup: false 
            }
        });
    } catch (e) {
        console.error(e);
        m.reply('❌ Gagal mengirim polling! Pastikan versi Baileys-mu support fitur poll.');
    }
}

handler.command = ["pol2", "poll"];
module.exports = handler;