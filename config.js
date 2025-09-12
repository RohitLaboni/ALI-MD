
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VzY6zRhZ9lai2bcUUYAyWWgpg/uy2De1/RlmUoYCy+XNRxo2jXiUPMNuJku2n2YxmlrOIJq/SkyfII0S4u/N9o2R6eqSwoSjg3nPvPefUVyAvSIXHuAGDr0BJSY0YbpesKTEYAO0URZiCDggRQ2AA1sb04GYTlQZJGZoiDc9yJleJyOQw1PbTbTCZwDg01NysbsFjB5SnXUqCNwIWK52uSy28CHJ/GPiLTe3PJEju42OR24pvR8ujvL1ZRcusDdhGRISSPDbKBGeYonSMGxcR+j740mTl990d87bjG6HsktME8qPdQ9d1YXxJVrw9hZUq4X0A1ffB33aTODhnGGubJZ/OjGYYTQVu6q9GD6eLfpDIWb5ZWLmw2ojP8CsS5zh0Qpwzwpp3972wC2vIu8P7YWN0hT20vP2GOfXOXph44cHu/YXub3xth4TJ+4ArOts25IxCC8NoqSvextCVI0wkpRLweb1J4UiMjV0sXv4DuEtfuXL4f/rumKZ9ci+VRU7Dy9pzUj/E9OKrN8s7mNjnIXOW3PbYnHuG/D74dXqfeZhnBzwx77RavVlErshWkOLpUm8kUTR21mbqVCNifISP2Im+hXJsJvv782w948LggbPvRHeSGYgK5Mh7+YM9gpCvwsCtD+I64JeriTA3jU03T2ZO7Ozvorl2hNMD9Qo2t+npNFE9xBM9vr1WdMCNE4IBfOwAimNSMYoYKfJ2T+53AArrOQ4oZtfuAs8W8V5oFq7j0W60PsV1TabWOgpMvV6UvbAr3Tl9ZzSaNfIt6ICSFgGuKhzapGIFbSa4qlCMKzD403VQbc0UZwXDIxK2w4cKFEQI+7LIf1F9fk4Qq1BZfp5jBjogokU2wWDA6Al3wPUHXeF6vCIJPd3QFE2XdFnoiapq9gRJ0FRFaCvMnpMuSIYrhrISDGC/15dkiZeUx84fg6PH9zRR1WRdloeqqPb7nKH2BKUvSWaPUzT4No4+90fhEDlBVTVJFQwoCsqQNyVBkPuK2eegzAmi9CYOgVMev+yAHD+wZzm1JBBgB0SEVmyZn8q0QOGr1l5foiAoTjmbN3mgtwtMweCTbcwYyeOqreyUIxokpMZ6WwcYRCit8K+8wxSHr7W8eKlehK0cYM+WlN5mDFrsbaDf9GYg/LY76fUrXoK8KHGyIEKe58SB8EW73wE5akOBpx+++fn7v/zj5++//frff/vmp+9+fPrwz6cP//rss6cPf3/68EN7/+vTj39u2/ZSUJs/xAyRtGr5N8rcdKdaxowuDpOtZalOrOqxCj424FXfzwLa+rvgfsrPfY/GtExhvMJyd5pwW3O9HCvr2i+jrTxXxmftfPs7QVoJIiuqFpF0RPGD2zuK4pqNpubcoz333rqsSGjucohmeElJ5GzvluqhiVc32+Eukbwqri2qzNINWwezRX+1l+7zPLyYQ++2zRbimgT402STi5WI09WN7C9ROOWK7vo4tu/kzIH9xB5W6ST3G9itcXDojwx/ajWph2PnVNcZ5/OrhZ2US3/Ex6VukG3CmZJml7F2fnaeq/OlLycOeTEFcn2MCL4a+MuU/teon3G3hOQeO5+EeDkR/ouramtrLRiL8JAtx+JY8sOtuandyza0tFWq1yvKow3vGvW8UgPw2CqjTBGLCpqBAUB5SIsrk2hxahnu5FHxRjJdjR3jxXJTVDH1o2p+z5iE569cWpQ2qpKWyBNz7HqtBBq1LOcMsVcRArW9pjsdPP4CU48DczYJAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
