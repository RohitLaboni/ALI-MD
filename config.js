
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUXZOiOBT9L3nVGgERhaquWqTRRlBBUdSteYgQIAqBTgKKU/73Lezp7tmq3dlenkKSuvfc85EfgBSYIRs1QPsBSopryFG75E2JgAbGVRwjCrogghwCDZz10cgLT8GRKbawTPsR3esk2MyCUdGIzzd6zi+jXiTGKN88gXsXlNUxw+FvCrp6Zo5OHX2lJ47u4GU1kOJ+cmLWcXY7OITJeS0EzXWRN8UTuLcVIaaYJGaZohxRmNmocSGmX4PvWVMpGNZOObcH0rR2hmKxWfqvA29ev2ydedxMLtNolfXt7f5r8BtyUeTJwt6Ko548FKm4zteNodBV8LxanjNTMP3SmZ1eh771Bp/hhKDIihDhmDdf593y6zB3Ih2mJt2r59To3co0JVXYuGX+GglGQ+hCJozMvwb8OJ74wfX1YtbBOYe7Cr446YgxaWCmSzfBphDzWyevkan/DbhL371y/j+8h+5hzZaDxdZLNgLZqjuvpGTV26+Dq+8ry8thW2XjwnbW4hd53ymvQ58bZ1y6/DJL6HU6d+cB3R+Va457qypen0dBb6YvpuYnfMgr+juUxvkgSurZEhy5M2ZblUTrnTlsTqSXcltUeis7MfRYuOJ46ydC4HqxnyBM/PPiNnDCaxwn03S3mKAN8vsdmvv5rj7o3tNjojNqrAho4r0LKEow4xRyXJB2bzToAhjVaxRSxB/sgtjZm/6JlcOgwgznChy6EkWhvZC86ULubanFa1qvBGe1eQJdUNIiRIyh6AUzXtBmjhiDCWJA+/N7FxB05W+6td36YhfEmDK+IVWZFTB6F/X9EIZhURG+bkhotAtEgSZ8biPOMUlYS2NFIA1TXCMjhZwBLYYZQx8DIooioHFaoY/QGkXU8j7RF4ehbk9BF+QPPXAENKCKqqD2+4ok91VNGv7Bvl3asrAsvxHEQRdkj2tiXxQFeaDIijAQZLG92R7cPxC2BSPEIc5Yq6kl3XJuTcxZIPP5fjrVk0Q3Eh18TvTujDfqVdyxNqPdYTNyjOS06qizJDbwTSzt41GdQPl87IWqPvGgeXn6hyJAA/iaWp6OiS5f1ab0BtfVqnQ5e2axa0t2xx9Kzw57DeJAJtKiCLPpSdjWy5LE9c49qMtjSde64iLLWoqxORn462ijjpOntluEahyiX5uNpXGY10vJQwOizEeOYHroEiypPz40bnDqvGQSOq0Mk92Mhbovd6+nmV0urwrVC1UwhoEf5fu57/RQI2wP18nmNrWNd88+MpP9fKvww06tVu1vjNEj+gS2Cv63dm/AW4sJ9+4vNX4+Jv8SyHG8r/HEnUhb17gUlhDX6/3LpWAqXOdSbxVUs2mv73rjzTSdg/v9exeUGeRxQXOgAUgiWuAIdAEtqtazFomL36VfTyw9eZs8g4zrnznwcY4Yh3kJNHE4GElDadBX3m65tChfIEuBBvrx/mLYrakbvSzXHPL3WAG9/WyxBPe/AG14CspxBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
