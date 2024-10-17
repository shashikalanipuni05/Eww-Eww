const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const ufs = require('../lib/ufs')
let newsize = config.MAX_SIZE * 1024 * 1024

cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    react: '📁',
    desc: "Download mediafire files.",
    category: "download",
    use: '.mediafire <mediafire link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply('*Please give me a mediafire url*')
let res = await fetchJson('https://xorizn-downloads.vercel.app/api/downloads/mediafire?url='+q)
let data = res.result
//let res = await mediafiredl(q)
let sizenew = await ufs(data.link)
if (sizenew >= newsize) return conn.sendMessage(from, { text: '🚩 *This file is too big !!*' }, { quoted: mek })
//if(filesizeH.includes('GB')) return await  reply('*This file is too big !!*')
const mfile = conn.sendMessage(from, { document : { url : data.link}, fileName : data.filename, mimetype: 'application/octet-stream', caption: `*Name:* ${data.filename}
*Info:* ${data.detail}

𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)
sɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`}, {quoted: mek})	
await conn.sendMessage(from, { react: { text: '📁', key: mfile.key }})
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
