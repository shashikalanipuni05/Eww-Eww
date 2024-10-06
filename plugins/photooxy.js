const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var Photooxy = require('@sl-code-lords/photooxy')
var photooxy = new Photooxy()
const fileType = require("file-type");
const fs = require('fs');
var imgmsg = "```Please give me a name !```"
var imgmsg2 = "*Ex: .photooxy2 vihanga+ashinshana*"
var desc = "It creates photooxy logos using 1 word.."
var desc2 = "It creates photooxy logos using 2 word.."
var imgmsgeew = "*Reply to a photo !*"
var errt = "*I cant create this logo :(*"

cmd({
    pattern: "logo2",
    react: '💫',
    alias: ["photoxy","photooxy"],
    desc: desc,
    category: "logo",
    use: '.logo2 ayodya vichakshana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
        for (var i = 0; i < data.length; i++) {
        if(data[i].text === 1 && !data[i].images){
          sections.push({
            rows: [{
              title: data[i].title,
              id: prefix + 'dlogo3 ' + q + '+' + data[i].url
            }]
          })
        }}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from photooxy. 📲',
                        sections
                    })
                }]

let msg =  `┌───[ PinkVenom-MD ]

   *PHOTOOXY LOGO 01*

*🤹 Entered Name:* ${q}`
    
        let message = {
            image: `https://i.pinimg.com/280x280_RS/98/2c/ec/982cec94da2bf516c1163baf1fd59d54.jpg`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "logo3",
    react: '🎡',
    alias: ["photooxy2"],
    desc: desc2,
    category: "logo",
    use: '.photooxy2 ayodya+vichakshana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
if (!q.includes('+')) return await reply(imgmsg2)
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
        for (var i = 0; i < data.length; i++) {
        if(data[i].text === 2 && !data[i].images){
          sections.push({
            rows: [{
              title: data[i].title,
              id: prefix + 'dlogo4 ' + q + '+' + data[i].url
            }]
          })
        }}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from photooxy. 📲',
                        sections
                    })
                }]

let msg =  `┌───[ PinkVenom-MD ]

   *PHOTOOXY LOGO 03*

*🤹 Entered Name:* ${q}`
    
        let message = {
            image: `https://i.pinimg.com/280x280_RS/98/2c/ec/982cec94da2bf516c1163baf1fd59d54.jpg`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 

} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "logo4",
    react: '🎡',
    alias: ["photooxy3"],
    desc: desc2,
    category: "logo",
    use: '.logo3 <reply image',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
if ((m.type === 'imageMessage') || isQuotedImage) {
var namePng = getRandom('');
let buff = isQuotedImage ? await m.quoted.download(namePng) : await m.download(namePng)
let type = await fileType.fromBuffer(buff);
await fs.promises.writeFile("./" + type.ext, buff);
const results = await photooxy.get_urls_list()
let data = results
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
        for (var i = 0; i < data.length; i++) {
        if(data[i].text === 0 && data[i].images.length === 1){
          sections.push({
            rows: [{
              title: data[i].title,
              id: prefix + 'dlogo5 ' + "./" + type.ext + '+' + data[i].url
            }]
          })
        }}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from photooxy. 📲',
                        sections
                    })
                }]

let msg =  `┌───[ PinkVenom-MD ]

   *PHOTOOXY LOGO 03*

*🤹 Entered Name:* ${q}`
    
        let message = {
            image: `https://i.pinimg.com/280x280_RS/98/2c/ec/982cec94da2bf516c1163baf1fd59d54.jpg`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} else return await reply(imgmsgeew)
} catch (e) {
reply(errt)
l(e)
}
})

cmd({
    pattern: "dlogo3",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    var image1 = await photooxy.create({
        url : link,
        text : [`${name}`]
        })
      var img1_buf = await photooxy.image_to_buffer(image1.url)
    await conn.sendMessage(from, { image: img1_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo4",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,name2,link] = q.split('+')
    var image2 = await photooxy.create({
        url : link,
        text : [`${name}`,`${name2}`]
        })
      var img2_buf = await photooxy.image_to_buffer(image2.url)
    await conn.sendMessage(from, { image: img2_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})

cmd({
    pattern: "dlogo5",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    let [name,link] = q.split('+')
    var image2 = await photooxy.create({
        url : link,
        images: [`${name}`]
        })
      var img2_buf = await photooxy.image_to_buffer(image2.url)
    await conn.sendMessage(from, { image: img2_buf, caption: config.FOOTER }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  l(e)
}
})
