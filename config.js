const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Q7lHCJ7Z#pgGOI4bNzBLJ-o19Xlbkqh1WvuMb-cZ9rR_W3Yano2Y' : process.env.SESSION_ID,
BTN: "FOLLOW US :)",
FOOTER: "*ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴀʀᴋꜱᴀᴅᴀꜱ*",
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
OWNER: process.env.OWNER === undefined ? `94778138202` : process.env.OWNER,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
BTNURL: "https://whatsapp.com/channel/0029VafDel9C1Fu7FlLGqM00",
MAX_SIZE: 200,
LOGO: process.env.LOGO === undefined ? 'sadas.jpeg': process.env.LOGO
};
