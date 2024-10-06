const config = require('../config')
const { cmd, commands } = require('../command')
const ufs = require('../lib/ufs')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const cheerio = require('cheerio');
let foot = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`

async function download(url) {
    try {
        const regex = /post\/([^/?]+)/;
        const match = url.match(regex);
        const id = match ? match[1] : null;

        if (!id) {
            return {
                status: false,
                msg: "Invalid ID."
            };
        }

        const headers = {
            accept: "*/*"
        };

        const { data } = await axios.get(`https://threadster.app/download/${id}`, { headers });
        const $ = cheerio.load(data);
        const media = [];

        $('.download__wrapper .download__items .download_item .image_wrapper .image img').each((index, element) => {
            const imageUrl = $(element).attr('src');
            if (imageUrl) {
                media.push({ type: 'image', url: imageUrl });
            }
        });

        $('.download__wrapper .download__items .download_item .video_wrapper .video video').each((index, element) => {
            const videoUrl = $(element).attr('src');
            if (videoUrl) {
                media.push({ type: 'video', url: videoUrl });
            }
        });

        const title = $('.download__wrapper .download__items .download_item .download__item__caption .download__item__caption__text').first().text();

        return {
            status: true,
            result: {
                title,
                media
            }
        };

    } catch (e) {
        return {
            status: false,
            msg: e.message
        };
    }
}

var needus = "*Please give me threads url !!*" 
var cantf = "*I cant find this video!*"

cmd({
    pattern: "threads",
    alias: ["thread"],
    react: '🧵',
    desc: "Download threads videos/photos.",
    category: "download",
    use: '.threads <url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await reply(needus)
  let { status, result } = await download(q)
  for (let i=0;i<result.media.length;i++) {
    if(result.media[i].type === 'image') await conn.sendMessage(from, { image: { url: result.media[i].url }, caption: foot}, { quoted: mek })
  else await conn.sendMessage(from, { video: { url: result.media[i].url }, caption: foot}, { quoted: mek })
  }
} catch (e) {
reply(cantf)
l(e)
}
})