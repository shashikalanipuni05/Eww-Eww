const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
cmd({
        pattern: "alive",
        react: "🍬",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `${monspace}👋 Hello ${pushname} I'm alive now${monspace}

*💩DARK SHUTER - MD*
    
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
    
*🍭 Have A Nice Day 🍭*`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Get Menu",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
        pattern: "ping",
        react: "📍",
        alias: ["speed"],
        desc: "Check bot\'s ping",
        category: "other",
        use: '.ping',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        reply
    }) => {
        try {
            let inital = new Date().getTime();
            let ping = await conn.sendMessage(from, {
                text: '```Pinging To index.js!!!```'
            }, {
                quoted: mek
            })
            let final = new Date().getTime();
            return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ')
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
        pattern: "menu",
        react: "🗄️",
        alias: ["panel", "list", "commands"],
        desc: "Get bot\'s command list.",
        category: "other",
        use: '.menu',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const MNG = `${monspace}👋 Hello ${pushname}${monspace}

*💩DARK SHUTER - MD command panel...*
  
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}`

let buttons = [{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
    }),
},
{
    name: "single_select",
   "buttonParamsJson": `{"title":"Select a Category :",
                 "sections":
                   [{
                    "title":"SELECT MENU",
                    "highlight_label":"BLACK PANTHER-MD",
                    "rows":[
                      
                    {
                       "header":"",
                       "title":"ALL MENU",
                       "description":"All menu",
                       "id":".allmenu"
                       },
                       {
                       "header":"",
                       "title":"DOWNLOAD MENU",
                       "description":"Download menu",
                       "id":".downloadmenu"
                       },
                       {
                       "header":"",
                       "title":"SEARCH MENU",
                       "description":"Search menu",
                       "id":".searchmenu"
                       },
                       {
                       "header":"",
                       "title":"CONVERT MENU",
                       "description":"Convert menu",
                       "id":".convertmenu"
                       },
                       {
                       "header":"",
                       "title":"OWNER MENU",
                       "description":"Owner menu",
                       "id":".ownermenu"
                       }








                    ]}
                  ]}`
                },
              ]

              let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: MNG

            }


         
            return await conn.sendButtonMessage(from, buttons, m, opts)













           
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

    
    cmd({
        pattern: "allmenu",
        react: "🧬",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "genaral",
        use: '.system',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💠Command : alive
💭Desc : Check bot online or no.
☘Use: .alive

💠Command : sc
💭Desc : Get bot's command list.
☘Use: .sc

💠Command : menu
💭Desc : Get bot's command list.
☘Use: .menu

💠Command : menu2
💭Desc : Get bot's command list.
☘Use: .menu`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM",
            id: ".system"
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
    
    cmd({
        pattern: "downloadmenu",
        react: "🧬",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "genaral",
        use: '.system',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💠Command : alive
💭Desc : Check bot online or no.
☘Use: .alive

💠Command : sc
💭Desc : Get bot's command list.
☘Use: .sc

💠Command : menu
💭Desc : Get bot's command list.
☘Use: .menu

💠Command : menu2
💭Desc : Get bot's command list.
☘Use: .menu`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM",
            id: ".system"
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


    cmd({
        pattern: "searchmenu",
        react: "🧬",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "genaral",
        use: '.system',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💠Command : alive
💭Desc : Check bot online or no.
☘Use: .alive

💠Command : sc
💭Desc : Get bot's command list.
☘Use: .sc

💠Command : menu
💭Desc : Get bot's command list.
☘Use: .menu

💠Command : menu2
💭Desc : Get bot's command list.
☘Use: .menu`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM",
            id: ".system"
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

    cmd({
        pattern: "convertmenu",
        react: "🧬",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "genaral",
        use: '.system',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💠Command : alive
💭Desc : Check bot online or no.
☘Use: .alive

💠Command : sc
💭Desc : Get bot's command list.
☘Use: .sc

💠Command : menu
💭Desc : Get bot's command list.
☘Use: .menu

💠Command : menu2
💭Desc : Get bot's command list.
☘Use: .menu`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM",
            id: ".system"
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

    cmd({
        pattern: "ownermenu",
        react: "🧬",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "genaral",
        use: '.system',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💠Command : alive
💭Desc : Check bot online or no.
☘Use: .alive

💠Command : sc
💭Desc : Get bot's command list.
☘Use: .sc

💠Command : menu
💭Desc : Get bot's command list.
☘Use: .menu

💠Command : menu2
💭Desc : Get bot's command list.
☘Use: .menu`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM",
            id: ".system"
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







































    










cmd({
        pattern: "del",
        react: "🍬",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            const key = {
                remoteJid: m.chat,
                fromMe: false,
                id: m.quoted.id,
                participant: m.quoted.sender
            }
            await conn.sendMessage(m.chat, { delete: key })
} catch (e) {
reply('Error !!')
l(e)
}
})

cmd({
        pattern: "join",
        desc: "joins group by link",
        category: "main",
        use: '<group link.>',
    },
   async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
try{  if (!q) return reply('Please give me Query');
        if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
           reply("Link Invalid, Please Send a valid whatsapp Group Link!");
        let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
        await conn.groupAcceptInvite(result)
            .then((res) => reply("🟩Joined Group"))
           
 } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })





