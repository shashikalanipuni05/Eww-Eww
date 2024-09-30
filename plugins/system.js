const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "system",
    react: "💦",
    alias: ["device","bot","info"],
    desc: "Get bot\'s system..",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

  try{
const tes = `┌───────────────────────
├ 🧬 *Uptime:-*  ${runtime(process.uptime())}
├ 🎲 *Ram usage:-*  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ 🦄  *Owner:-* *DanuXzz ジ*
├ 💠  *Version:-* 1.0.0
└───────────────────────`
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ALIVE",
              id: ".alive"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "MENU",
            id: ".menu"
        }),
    },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })
 
