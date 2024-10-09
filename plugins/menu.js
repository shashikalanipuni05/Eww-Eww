const { copy } = require('fs-extra')
const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
let cap = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
//=====================================================================================
cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "list", "commands", "cmd"],
    desc: "Get bot\'s command list.",
    category: "other",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const MNG = `╰──╮. . . . . . .ʚ♡ɞ. . . . . . .╭──╯
        
👋 *ʜɪ* ${pushname} ,
◦ ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ ⚡ *(ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ)* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ* .🌐

> *ɴᴀᴍᴇ ʙᴏᴛ* : Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
> *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
> *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
> *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
> *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*`

        const categories = [];
        const categoryMap = new Map();

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                const category = cmd.category.toUpperCase();
                if (!categoryMap.has(category)) {
                    categories.push(category);
                    categoryMap.set(category, []);
                }
                categoryMap.get(category).push(cmd.pattern);
            }
        }

        const rows = []
        for (const category of categories) {
            rows.push({
                header: '',
                title: `${category} MENU`,
                description: '',
                id: `.category ${category}`
            })
        }

        let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: 'Follow Our Channel',
                    url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`,
                    merchant_url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`
                }),
            },
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: 'Select a Category ⚙️',
                    sections: [{
                        title: 'Please select a category',
                        highlight_label: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
                        rows: rows
                    }]
                }),
            }
        ]

        let opts = {
            image: `https://8030.us.kg/file/mKXIMtf1PF1i.jpg`,
            header: '',
            footer: wm,
            body: MNG
        }

        return await conn.sendButtonMessage(from, buttons, m, opts)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
    pattern: "category",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let wm = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
        const category = q.trim().toUpperCase();
        let commandList = `*㊂ ${category} Command List:*\n\n`;

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.category.toUpperCase() === category) {
                commandList += ` • *${cmd.use}* \n`;
            }
        }

        commandList += `\n⭓ *Total Commands in ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192956026815@newsletter',
      newsletterName: "😼ＫＥＮＺＩ-ＭＤ🤍",
      serverMessageId: 1234
    },
externalAdReply: { 
title: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/mine-bbh" ,
thumbnailUrl: 'https://8030.us.kg/file/mKXIMtf1PF1i.jpg' ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
