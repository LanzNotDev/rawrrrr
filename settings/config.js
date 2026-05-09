/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/
require('../settings/setting-cpanel');
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("../package.json")

global.reactsw = true
global.bancall = false //ubah ke false untuk mematikan anti call
global.prefixmode = true
//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6287862058684'
global.versi = version
global.version = '6.0.0'
global.baileys = '@whiskeysockets/baileys'
global.namaOwner = "ʟᴀɴᴢᴇxᴇ​᭄"
global.packname = 'Lanzx V6'
global.botname = 'Lanzx V6'
global.botname2 = 'Lanzx V6'
global.author = 'Putzzslebew'
global.reqpair = 'XXXXXXXX' // HARUS 8 HURUF
//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283852426553"
global.linkGrup = "https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 800
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029Vb7BMXC9sBI8pXjrEY05"
global.idSaluran = "120363404782325678@newsletter"
global.namaSaluran = "亥 Putzzslebew"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "081252915681"
global.ovo = "-"
global.gopay = "083852426553"

//~~~~~~~~ Settting Sreate Web ~~~~~~~~//

global.vercelToken = "1cPzzWQF2z5znFSiXC2cCnLb"
global.netlifyToken = "nfp_SuUsJTc1QkMmVjvKsJmxJACyAkiCgE6p56aa"
//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/uq02xf.jpg", 
reply: "https://files.catbox.moe/uq02xf.jpg", 
logo: "https://files.catbox.moe/uq02xf.jpg", 
qris: "https://img1.pixhost.to/images/5708/597970088_putzganteng.jpg"
}
global.larangan = "https://files.catbox.moe/q57r0k.jpg"

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Owner Bot ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	admin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Admin Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	botAdmin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Bot Harus Jadi Admin Terlebih dahulu ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	group: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya berlaku di Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	private: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya dapat di lakukan di private cht ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	prem: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya Untuk User Premium ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})