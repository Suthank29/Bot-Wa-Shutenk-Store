const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/download')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, runtime, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//=================================================//
//=================================================//

owner = '6285200523864'
ownername = 'Bangkok~'
botname = 'Shutenk Bot'
gaya = '➢'


const fakeimage = fs.readFileSync ('./media/logo.jpg')
const thumb = fs.readFileSync ('./media/thumb.jpg')

//=================================================//
//=================================================//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam 🏙'
}

//=================================================//
//=================================================//

module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)

//=================================================//
//=================================================//

mess = {
         wait: 'Proses kak',
         eror: 'Maaf terjadi kesalahan !!',
         success: 'Sukses️',
error: {
         stick: 'Itu bukan sticker kak !!',
         Iv: 'Link invalid !!'
},
only: {
         nsfw: 'Fitur nsfw belum di aktifkan silakan hubungi admin untuk mengaktifkan',
         group: 'Fitur khusus grup !!',
         owner: 'Fitur khusus owner !!',
         admin: 'Fitur khusus admin !!',
         Badmin: 'Silakan jadikan bot admin dulu !!'
}
}
         const listmsg = (from, title, desc, list) => {
         let po = Dhani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": ``,"listType": "SINGLE_SELECT","sections": list}}, {})
         return Dhani.relayWAMessage(po, {waitForAck: true})
         }
		 const isUrl = (url) => {
         return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
         }
         const reply = (teks) => {
         Dhani.sendMessage(from, teks, text, {quoted:mek, thumbnail: thumb})
         }
         const sendMess = (hehe, teks) => {
         Dhani.sendMessage(hehe, teks, text)
         }
         const mentions = (teks, memberr, id) => {
         (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
         }
         const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
         const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
         const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
         const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
         const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
         const textImg = (teks) => { return Dhani.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/thumb.jpg')})}
         const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
         const fakefoto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {imageMessage: {caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb}}}
         const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {productMessage: {product: {currencyCode: "BRL", title: `${ucapanWaktu} ${pushname}`, priceAmount1000: 2000, productImageCount: 2007, productImage: {jpegThumbnail: thumb}}, businessOwnerJid: `0@s.whatsapp.net`}}}
         const fdoc = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanWaktu} ${pushname}`, pageCount: 0, fileName: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb}}}
         const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: {contactMessage: {displayName: `${ucapanWaktu} ${pushname}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, jpegThumbnail: thumb}}}
         const finvite = {key: {fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net`}, message: {groupInviteMessage: {groupJid: from, inviteCode: `${ucapanWaktu} ${pushname}`, groupName: groupName, caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb}}}
         
//=================================================//
//=================================================//

         const sendButton = async (from, context, fortext, but, mek) => {
         buttonMessages = {
         contentText: context,
         footerText: fortext,
         buttons: but,
         headerType: 1
         }
         Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
         quoted: fgi
         })
         }
         const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
         const buttonMessage = {
         contentText: text1,
         footerText: desc1,
         buttons: but,
         headerType: 1
         }
         Dhani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
         }
         const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
         kma = gam1
         mhan = await Dhani.prepareMessage(from, kma, image)
         const buttonMessages = {
         imageMessage: mhan.message.imageMessage,
         contentText: text1,
         footerText: desc1,
         buttons: but,
         headerType: 4
         }
         Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
         }
         const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
         kma = vid1
         mhan = await Dhani.prepareMessage(from, kma, video)
         const buttonMessages = {
         videoMessage: mhan.message.videoMessage,
         contentText: text1,
         footerText: desc1,
         buttons: but,
         headerType: 5
         }
         Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
         }
         const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
         kma = gam1
         mhan = await Dhani.prepareMessage(from, kma, location)
         const buttonMessages = {
         locationMessage: mhan.message.locationMessage,
         contentText: text1,
         footerText: desc1,
         buttons: but,
         headerType: 6
         }
         Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
         }
         
//=================================================//
//=================================================//
         
         const sendStickerFromUrl = async(to, url) => {
         var names = Date.now() / 10000;
         var download = function (uri, filename, callback) {
         request.head(uri, function (err, res, body) {
         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
         });
         };
         download(url, './media/sampah' + names + '.png', async function () {
         console.log('selesai');
         let filess = './media/sampah' + names + '.png'
         let asw = './media/sampah' + names + '.webp'
         exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
         let media = fs.readFileSync(asw)
         Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
         fs.unlinkSync(filess)
         fs.unlinkSync(asw)
         });
         });
         }
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
         if(mids.length > 0){
         text = normalizeMention(to, text, mids)
         }
         const fn = Date.now() / 10000;
         const filename = fn.toString()
         let mime = ""
         var download = function (uri, filename, callback) {
         request.head(uri, function (err, res, body) {
         mime = res.headers['content-type']
         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
         });
         };
         download(url, filename, async function () {
         console.log('done');
         let media = fs.readFileSync(filename)
         let type = mime.split("/")[0]+"Message"
         if(mime === "image/gif"){
         type = MessageType.video
         mime = Mimetype.gif
         }
         if(mime.split("/")[0] === "audio"){
         mime = Mimetype.mp4Audio
         }
         Dhani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
         fs.unlinkSync(filename)
         });
         }
         const hideTag = async function(from, text){
	     let anu = await Dhani.groupMetadata(from)
	     let members = anu.participants
	     let ane = []
	     for (let i of members){
	     ane.push(i.jid)
         }
	     Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
         }

//=================================================//
//=================================================//

         if (budy.includes("https://chat.whatsapp.com/")) {
         if (!isGroup) return
         if (!isAntiLink) return
         if (isGroupAdmins) return
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
         reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
         setTimeout(() => {
         Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
         }, 0)
         }

         if (budy.length > 3500) {
         if (!isGroup) return
         if (!isAntiVirtex) return
         if (isGroupAdmins) return
         reply('Tandai telah dibaca\n'.repeat(300))
         reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
         console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
         Dhani.groupRemove(from, [sender])
         }

//=================================================//
//=================================================//

		 colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		 const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		 const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		 const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	 if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//=================================================//
//=================================================//

case 'menu':
case 'help':
list = []
listmenu = [`ff`,`ffpromo`,`mlhemat`,`mlfast`,`mlsemifast`,`starlightsemifast`,`pubgallregion`,`pubgregindo`,`pay`,`allfitur`]
listmenuu = [`FREEFIRE`,`FREEFIRE PROMO`,`ML HEMAT`,`ML FAST`,`ML SEMIFAST`,`STARLIGHT SEMIFAST`,`PUBG ALL REGION`,`PUBG REG INDO`,`PAYMENT`,`ALLFITUR`]
nombor = 1
startnum = 0
for (let x of listmenu) {
const yy = {title: 'store ke' + nombor++,
rows: [
{
title: `${listmenuu[startnum++]}`,
description: ``,
rowId: `${prefix}${x}`
}
]
}
list.push(yy)
}
listmsg(from, `hai kak ${pushname}`,`Silahkan pilih menu store di bawah ya !`, list)
break


case 'pay':
case 'payment':
menu = `!-*PAYMENT SHUTENK-STORE*-!
*BANK*
BCA  :  1590395753 An : Moh Faiq Hamdani

*E-Wallet*
DANA      : 085200523864 An Moh Faiq Hamdani
OVO        : CLOSE

#E-Wallet Un-Verif harus verifikasi dahulu untuk transfer

#*Pastikan dan di Cek kembali Sebelum Transfer*#
!-*Kesalahan Transfer Bukan Tanggung Jawab Admin*-!`
reply(menu)
break
case 'ffpromo':
case 'freefirepromo':
menu = `Paket FreeFire Via ID Proses 10 - 30 Menit Max 3 Jam - 24 Jam apabila Sistem Error/ Maintenance.

    70💎 : Rp 8.800
  140💎 : Rp 17.600
  355💎 : Rp 44.000
  720💎 : Rp 88.000
1450💎 : Rp 176.000
2900💎 : Rp 350.000
4350💎 : Rp 530.000
5800💎 : Rp 704.000
7250💎 : Rp 880.000

Wajib pake Format ⤵
FREEFIRE⬅
Nama :
User ID :
Username :
Order :

Rules : SETIAP SENIN - JUMAT, 09.00 AM - 20.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'ff':
case 'freefire':
menu = `Paket FreeFire Via ID Proses 10 - 20 Menit Max 3 Jam - 24 Jam apabila Sistem Error/ Maintenance.

20  💎 : Rp 3.000
50  💎 : Rp 6.880
70  💎 : Rp 9.200
100💎 : Rp 13.360
140💎 : Rp 18.300
210💎 : Rp 27.100
355💎 : Rp 45.500
495💎 : Rp 63.000
720💎 : Rp 91.000
1075💎 : Rp 135.000
1440💎 : Rp 180.200
2000💎 : Rp 247.000
2140💎 : Rp 263.820
2355💎 : Rp 287.550
2720💎 : Rp 335.100
3075💎 : Rp 380.650
4000💎 : Rp 490.000
7290💎 : Rp 900.000
9290💎 : Rp 1.140.000
36.500💎 : Rp 4.465.000
MM : 27.500
MB : 137.000

Wajib pake Format ⤵
FREEFIRE⬅
Nama :
User ID :
Username :
Order :

Rules : 09.00 AM - 22.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'mlhemat':
menu = `Paket Diamonds Mobile Legends Via ID Proses 10 - 60 Menit Max 24 Jam apabila Sistem Error/ Maintenance.
TANYA STOCK SEBELUM ORDER

    70 💎 : Rp 15.000
  140 💎 : Rp 30.000
  284 💎 : Rp 59.000
  355 💎 : Rp 75.000
  429 💎 : Rp 89.000
  716 💎 : Rp 148.000
1446 💎 : Rp 299.000
2976 💎 : Rp 590.000
7502 💎 : Rp 1.500.000

Wajib pake Format ⤵
ML⬅
Nama:
User ID (Server) :
Username :
Order :

Rules : 09.00 AM - 21.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'mlfast':
menu = `Paket Diamonds Mobile Legends Via ID Proses 10 - 20 Menit Max 24 Jam apabila Sistem Error/ Maintenance.

  86💎: Rp 19.390
172💎: Rp 38.780
257💎: Rp 58.170
344💎: Rp 77.560
429💎: Rp 96.550
514💎: Rp 116.060
600💎: Rp 135.070
706💎: Rp 154.880
878💎: Rp 193.080
963💎: Rp 212.210
1050💎: Rp 231.320
1220💎: Rp 269.540
1412💎: Rp 308.760
2194💎: Rp 459.545
3072💎: Rp 651.645
3688💎: Rp 763.210
4032💎: Rp 840.650
5532💎: Rp 1.147.680
6238💎: Rp 1.299.560
7726💎: Rp 1.600.225
9288💎: Rp 1.910.890
12188💎: Rp 2.600.315

SL/TW	: Rp.127.126
SL PLUS : Rp.288.650

Wajib pake Format ⤵
ML⬅
Nama:
User ID (Server) :
Username :
Order :

Rules : 09.00 AM - 22.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'mlsemifast':
menu = `Paket Diamonds Mobile Legends Via ID Proses 10 - 60 Menit Max 24 Jam apabila Sistem Error/ Maintenance.

💎113     : Rp 24.000
💎168     : Rp 36.000
💎460     : Rp 95.000
💎1427   : Rp 285.000
💎2398   : Rp 478.000
💎3596   : Rp 710.000
💎6038 	: Rp 1.183.000

SL / TW : Rp 97.000
Starlight Member + Rp. 203.000

Wajib pake Format ⤵
ML⬅
Nama:
User ID (Server) :
Username :
Order :

Rules : 09.00 AM - 19.00 PM 
APABILA DROP DI ATAS JAM TERSEBUT , DI PROSES KEESOKANNYA
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'starlightsemifast':
menu = `Starlight / Twillight Member Via Id Server
Proses 10 - 45 Menit Max 24Jam Jika Sistem EROR

SL BIASA  : Rp 88.000
TW PASS  : Rp 88.000
SL PLUS+ : Rp 199.000

Wajib pake Format ⤵
ML⬅
Nama:
User ID (Server) :
Username :
Order :

Rules : 09.00 AM - 18.30 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'pubgallregion':
menu = `Paket UC PUBG Global Via ID Proses 10 - 45 Menit Max 24 Jam apabila Sistem Error/ Maintenance.

💵 63        UC : Rp 14.400
💵 198      UC : Rp 42.300
💵 690      UC : Rp 139.000
💵 1875    UC : Rp 347.000
💵 4000    UC : Rp 683.000
💵 8400    UC : Rp 1.355.000
💵 10920  UC : Rp 1.780.000

Wajib pake Format ⤵
PUBG⬅
Nama :
User ID :
Username :
Order :

Rules : 09.00 AM - 21.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break
case 'pubgregindo':
menu = `Paket UC PUBG Reg Indonesia Via ID Proses 10 - 30 Menit Max 24Jam apabila Sistem Error/ Maintenance.

💵 105    UC : Rp 17.500
💵 131    UC : Rp 22.000
💵 263    UC : Rp 43.300
💵 530    UC : Rp 86.300
💵 825    UC : Rp 129.500
💵 1100  UC : Rp 173.000
💵 1363  UC : Rp 216.000
💵 1650  UC : Rp 259.000
💵 1925  UC : Rp 302.000
💵 2200  UC : Rp 345.000
💵 2750  UC : Rp 431.000
💵 3300  UC : Rp 517.000
💵 4125  UC : Rp 646.000
💵 4400  UC : Rp 689.000
💵 6000  UC : Rp 876.000

Wajib pake Format ⤵
PUBG⬅
Nama :
User ID :
Username :
Order :

Rules : 09.00 AM - 22.00 PM 
Kesalahan Input Nickname/User ID, Bukan Tanggung Jawab Kami.`
reply(menu)
break

case 'allfitur':
menu = `Hai ${pushname} ${ucapanWaktu}

👑 Owner name : ${ownername}
🤖 Bot name : ${botname}
🗓️ Tanggal : ${tanggal}
🕕 Jam : ${time} WIB


*「 GROUP MENU 」*
${gaya} ${prefix}listadmin
${gaya} ${prefix}open
${gaya} ${prefix}close
${gaya} ${prefix}linkgrup
${gaya} ${prefix}infogrup
${gaya} ${prefix}resetlinkgrup
${gaya} ${prefix}listonline
${gaya} ${prefix}tagall
${gaya} ${prefix}owner
${gaya} ${prefix}promote <reply/@tag>
${gaya} ${prefix}demote <reply/@tag>
${gaya} ${prefix}add <628xx>
${gaya} ${prefix}kick <reply/@tag>
${gaya} ${prefix}setname <teks>
${gaya} ${prefix}setdesc <teks>
${gaya} ${prefix}setppgrup <reply image>
${gaya} ${prefix}antilink <on/off>
${gaya} ${prefix}antivirtex <on/off>
${gaya} ${prefix}welcome <on/off>
${gaya} ${prefix}hidetag <teks>

*「 OWNER MENU 」*
${gaya} ${prefix}freefire
${gaya} ${prefix}freefirepromo
${gaya} ${prefix}mlhemat
${gaya} ${prefix}mlfast
${gaya} ${prefix}mlsemifast
${gaya} ${prefix}starlightsemifast
${gaya} ${prefix}pubgallregion
${gaya} ${prefix}pubgregindo
- *Kasir :*
${gaya} ${prefix}pay

*「 OWNER MENU 」*
${gaya} ${prefix}bc <teks>
${gaya} ${prefix}bc2 <teks>
${gaya} ${prefix}bcnowm <teks>`
reply(menu)
break

case 'owner':
case 'own':
          members_ids = []
          for (let mem of groupMembers) {
          members_ids.push(mem.jid)
          }
          vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:${ownername}\n`
          + `ORG: Creator ${ownername} ;\n`
          + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
          + 'END:VCARD'.trim()
          Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, { quoted: mek })
          sendButMessage(from, `Nih kak ownerku, Btw mau ngapain yak kok cari owner saya ?`, `*Powered By @${owner.split("@")[0]}*`, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {quoted: mek, contextInfo: { mentionedJid: [sender,owner]}})
          break

case 'bcnowm':
          if (!isOwner && !mek.key.fromMe) return  reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya ?')
          anu = await Dhani.chats.all()
          if (isMedia && !Lan.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await Dhani.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          Dhani.sendMessage(_.jid, buff, image, { caption: `${body.slice(7)}` })
          }
          reply('Sukses Broadcast Image')
          } else {
          for (let _ of anu) {
          sendMess(_.jid, `${body.slice(7)}`)
          }
          reply('Sukses Broadcast Text')
          }
          break
case 'bc':
          if (!isOwner && !mek.key.fromMe) return  reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya ?')
          anu = await Dhani.chats.all()
          if (isMedia && !Lan.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await Dhani.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          Dhani.sendMessage(_.jid, buff, image, { caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}` })
          }
          reply('Sukses Broadcast Image')
          } else {
          for (let _ of anu) {
          sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
          }
          reply('Sukses Broadcast Text')
          }
          break
case 'bc2':
          if (!isOwner && !mek.key.fromMe) return  reply(mess.only.ownerB)
          if (args.length < 1) return reply('teks?')
          anu100 = await Dhani.chats.all()
          if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Dhani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Dhani
          bc100 = await Dhani.downloadMediaMessage(encmedia)
          for (let _ of anu100) {
          Dhani.sendMessage(_.jid, bc100, image, {quoted: fonceimg, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
          }
          reply('Suksess broadcast')
          } else {
          for (let _ of anu100) {
          Dhani.sendMessage(_.jid, 
          {"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
          "footerText": `*_© ${ownername} || 2022_*`,
          "buttons": [
          {"buttonId": `${prefix}sewabot`,
          "buttonText": {"displayText": "sᴇᴡᴀʙᴏᴛ"
          },"type": "RESPONSE"}
          ], "headerType": 'LOCATION',
          locationMessage: { degreesLatitude: '',
          degreesLongitude: '',
          jpegThumbnail: fakeimage,
          }}, MessageType.buttonsMessage )
          }
          reply('Suksess broadcast')
          }
          break

case 'antilink':
	      if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		  if (args[0] === 'on') {
		  if (isAntiLink) return reply('Fitur antilink udah aktif')
		  _antilink.push(from)
		  fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
		  reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (args[0] === 'off') {
		  if (!isAntiLink) return reply('Fitur antilink sudah mati')
		  var ini = _antilink.indexOf(from)
		  _antilink.splice(ini, 1)
		  fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
		  reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (!c){
          menu = `Silakan Pilih Salah Satu\nUntuk Mengaktifkan/Menonaktifkan Fitur antilink`
		  but = [
          { buttonId: `${prefix}antilink on`, buttonText: { displayText: 'ANTILINK ON' }, type: 1 },
          { buttonId: `${prefix}antilink off`, buttonText: { displayText: 'ANTILINK OFF' }, type: 1 }
          ]
          sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
          }
		  break
case 'antivirtex':
	      if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		  if (args[0] === 'on') {
		  if (isAntiVirtex) return reply('Fitur antivirtex udah aktif')
		  _antivirtex.push(from)
		  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
		  reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (args[0] === 'off') {
		  if (!isAntiVirtex) return reply('Fitur antivirtex sudah mati')
		  var ini = _antivirtex.indexOf(from)
		  _antivirtex.splice(ini, 1)
		  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
		  reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (!c){
          menu = `Silakan pilih salah satu\nUntuk mengaktifkan/menonaktifkan fitur antivirtex`
		  but = [
          { buttonId: `${prefix}antivirtex on`, buttonText: { displayText: 'ANTIVIRTEX ON' }, type: 1 },
          { buttonId: `${prefix}antivirtex off`, buttonText: { displayText: 'ANTIVIRTEX OFF' }, type: 1 }
          ]
          sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
          }
		  break
case 'welcome':
	      if (!isGroup) return reply(mess.only.group)
		  if (args[0] === 'on') {
		  if (isWelkom) return reply('Fitur welcome udah aktif')
		  _welkom.push(from)
		  fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
		  reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (args[0] === 'off') {
		  if (!isWelkom) return reply('Fitur welcome sudah mati')
		  var ini = _welkom.indexOf(from)
		  _welkom.splice(ini, 1)
		  fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
		  reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
		  } else if (!c){
          menu = `Silakan Pilih Salah Satu\nUntuk Mengaktifkan/Menonaktifkan Fitur Welcome`
		  but = [
          { buttonId: `${prefix}welcome on`, buttonText: { displayText: 'WELCOME ON' }, type: 1 },
          { buttonId: `${prefix}welcome off`, buttonText: { displayText: 'WELCOME OFF' }, type: 1 }
          ]
          sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
          }
		  break
case 'hidetag':
          try {
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          quotedText = kyy.message.extendedTextMessage.contextInfo.quotedMessage.conversation
          hideTag(from, `${quotedText}`)
          } catch {
          hideTag(from, `${q}`)
          }
          break
case 'listadmin':
case 'adminlist':
		  if (!isGroup) return reply(mess.only.group)
		  teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
		  no = 0
		  for (let admon of groupAdmins) {
		  no += 1
		  teks += `${no.toString()}. @${admon.split('@')[0]}\n`
		  }
		  mentions(teks, groupAdmins, true)
		  break
case 'groupbuka':
case 'grupbuka':
case 'open':
case 'buka':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
          Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
          break
case 'grouptutup':
case 'gruptutup':
case 'close':
case 'tutup':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
          Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
          break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
          if (!isGroup) return reply(mess.only.group)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          linkgc = await Dhani.groupInviteCode(from)
          yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
          Dhani.sendMessage(from, yeh, text, { quoted: mek })
          break
case 'promote':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
          teks = 'Perintah di terima, anda menjdi admin :\n'
          for (let _ of mentioned) {
          teks += `@${_.split('@')[0]}\n`
          }
          mentions(teks, mentioned, true)
          Dhani.groupMakeAdmin(from, mentioned)
          } else {
          mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
          Dhani.groupMakeAdmin(from, mentioned)
          }
          break
case 'demote':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
          teks = 'Perintah di terima, anda tidak menjadi admin :\n'
          for (let _ of mentioned) {
          teks += `@${_.split('@')[0]}\n`
          }
          mentions(teks, mentioned, true)
          Dhani.groupDemoteAdmin(from, mentioned)
          } else {
          mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
          Dhani.groupDemoteAdmin(from, mentioned)
          }
          break
case 'add' :
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (args.length < 1) return reply('Yang mau di add siapa??')
          if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
          try {
          num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          Dhani.groupAdd(from, [num])
          } catch (e) {
          console.log('Error :', e)
          reply('Gagal menambahkan target, mungkin karena di private')
          }
          break
case "kick":
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
          )
          return reply("Tag target yang ingin di kick!");
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (mentioned.length > 1) {
          Dhani.groupRemove(from, mentioned);
          reply(mess.success);
          } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          Dhani.groupRemove(from, [anu]);
          reply(mess.success);
          } else {
          Dhani.groupRemove(from, mentioned);
          reply(mess.success);
          }
          break;
case 'tagall':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          members_id = []
          teks = (args.length > 1) ? args.join(' ').trim() : ''
          teks += '\n\n'
          for (let mem of groupMembers) {
          teks += `• @${mem.jid.split('@')[0]}\n`
          members_id.push(mem.jid)
          }
          mentions(teks, members_id, true)
          break
case 'setname':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
          Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
          break
case 'setdesc':
case 'setdesk':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
          Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
          break
case 'setppgrup':
case 'setppgroup':
case 'setpp':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (isQuotedImage) {
          let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          let media = await Dhani.downloadMediaMessage(encmedia)
          Dhani.updateProfilePicture(from, media)
          .then((res) => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
          } else {
          reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
          }
          break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
          if (!isGroup) return reply(mess.only.group)
          try {
          var pic = await Dhani.getProfilePicture(from)
          } catch {
          var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
          }
          let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*AntiVirtex :* ${isAntiVirtex ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
          Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
          break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
          Dhani.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
          break
case 'online':
case 'listonline':
case 'here':          
          if (!isGroup) return reply(mess.only.group)
          try {
          let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
          let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
          Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
          } catch (e) {
          reply(`${e}`)
          }
          break
default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}