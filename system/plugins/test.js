
let handler = async (m, { Putzz, isAdmins, text, participants, reply }) => {
  if (!m.isGroup) return reply(mess.group);

  let message = text || m.quoted?.text;
  if (!message) return reply('Kirim teks atau reply pesan untuk dihidetag.');

  let member = m.metadata.participants.map(u => u.id);
  await Putzz.sendMessage(m.chat, { text: message, mentions: member });
};

handler.command = ['hidetag', 'ht'];
handler.tags = ['group'];
handler.help = ['hidetag'];
module.exports = handler;