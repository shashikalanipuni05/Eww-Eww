const fetch = require('node-fetch');
const { cmd } = require('../command');
const { getBuffer, fetchJson } = require('../lib/functions');
const ufs = require('../lib/ufs');  // Assuming ufs is your custom utility to get file size
const config = require('../config');  // Configuration for file size limits

// Define maximum file size allowed for download
let newsize = config.MAX_SIZE * 1024 * 1024;

cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    react: '📁',
    desc: "Download mediafire files.",
    category: "download",
    use: '.mediafire <mediafire link>',
    filename: __filename
}, async (conn, mek, m, { from, body, args, quoted, reply }) => {
    try {
        // Check if there's a Mediafire link provided
        if (!args[0]) return await reply('*Please provide a Mediafire URL.*');
        
        const mediafireUrl = args[0];

        // Validate if the URL is actually a Mediafire link
        if (!mediafireUrl.includes("mediafire.com")) return reply('*This is not a valid Mediafire URL.*');

        // Fetch mediafire link details (replace the API with your own or the one you trust)
        let res = await fetchJson('https://xorizn-downloads.vercel.app/api/downloads/mediafire?url=' + mediafireUrl);

        // Handle API response
        if (!res || !res.result) return reply('*Error fetching Mediafire link details.*');
        
        const data = res.result;
        const fileName = data.filename;
        const fileLink = data.link;
        
        // Check file size before downloading
        const fileSize = await ufs(fileLink);  // Assuming ufs is your utility for file size check
        if (fileSize >= newsize) return reply('*This file is too large to download!*');

        // Create a button to download the file
        const buttons = [
            { buttonId: 'downloadfile', buttonText: { displayText: 'Download File' }, type: 1 }
        ];

        const buttonMessage = {
            contentText: `*File:* ${fileName}\n\n*Size:* ${fileSize} MB\n\nPress the button below to download the file.`,
            footerText: 'Mediafire Download',
            buttons: buttons,
            headerType: 1
        };

        // Send the button message
        await conn.sendMessage(from, buttonMessage, { quoted: mek });

        // Handle button press
        conn.on('button', async (buttonData) => {
            if (buttonData.buttonId === 'downloadfile') {
                // Send the file through the bot
                const mediaFile = await conn.sendMessage(from, {
                    document: { url: fileLink },
                    fileName: fileName,
                    mimetype: 'application/octet-stream',
                    caption: `*File:* ${fileName}\n\n*Info:* Downloaded from Mediafire`
                }, { quoted: mek });

                // React with a success emoji
                await conn.sendMessage(from, { react: { text: '📁', key: mediaFile.key } });
            }
        });

    } catch (error) {
        // Error handling
        console.error('Error:', error);
        reply('*An error occurred while processing the Mediafire link.*');
    }
});
