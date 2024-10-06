//awulak
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const path = require('path');

// Main command for requesting screenshots
cmd({
    pattern: "ss",
    alias: ["screenshot"],
    use: '.ss <Website URL>',
    react: "📸",
    desc: 'Get screenshots of websites',
    category: "tools",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    if (!q) {
        return await reply('*Please provide a website URL!*');
    }

    let buttons = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Tab Screenshot",
                id: ".sstab " + q
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Desktop Screenshot",
                id: ".sspc " + q
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Phone Screenshot",
                id: ".ssphone " + q
            }),
        }
    ];

    let msg = `*Choose the type of screenshot for the website:*`;
    let message = {
        body: msg,
        footer: wm
    };

    return conn.sendButtonMessage(from, buttons, m, message);
});

//=====================================================
cmd({
    pattern: "sspc",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
//const res = await fetch(`https://api.shannmoderz.xyz/tools/sswebdesktop?url=${q}`);
await conn.sendMessage(from, { image: { url: `https://widipe.com/sspc?url=${q}` }, caption: wm }, { quoted: mek })
//conn.sendMessage(from, { image: await getBuffer(res.result), caption: wm }, { quoted: mek })
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "ssphone",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
//const res = await fetch(`https://api.shannmoderz.xyz/tools/sswebphone?url=${q}`);
await conn.sendMessage(from, { image: { url: `https://widipe.com/sshp?url=${q}` }, caption: wm }, { quoted: mek })
//conn.sendMessage(from, { image: await getBuffer(res.result), caption: wm }, { quoted: mek })
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})

cmd({
    pattern: "sstab",
    react: "💫",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please give me a url !*")
//const res = await fetch(`https://api.shannmoderz.xyz/tools/sswebtab?url=${q}`);
await conn.sendMessage(from, { image: { url: `https://widipe.com/sstab?url=${q}` }, caption: wm }, { quoted: mek })
//conn.sendMessage(from, { image: await getBuffer(res.result), caption: wm }, { quoted: mek })
} catch (e) {
reply("🚩 *I can't get a screenshot. Try again later.*")
console.log(e)
}
})
