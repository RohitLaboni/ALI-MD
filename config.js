
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61W2Y6bSBT9lahebcXsi6WWwmJo7LaNF7wwmocyFLjM6qLw0pEfZj4hP5GfyMfkOV8xwu6etJRMp0cKT0UB955z6t5z+QjyAldogM6g+xGUBB8gRc2SnksEukCvowgR0AYhpBB0gaEzijXUBqy7Hh13B8u3Pa9SeK8FN/aA27BoMV4I/UEiJ8M7cGmDst6kOHglYNHxM4zlQeDEWITmoxOwROqLVTFpDYmVr3X7ngqdPjuZVnfg0kSEmOA87pVblCEC0wE6uxCTt8GvbW1JGdsfKPzCwdlkB+uZEWuPvUpZ7FZQsulh47vTRFl5b4MfV8zScgflcRPBlK+IZFe7UB2vRN0wziquFblgS4+ZLebxDX6F4xyFTohyiun5zboPRsYuNb1KL3oHbrrXzZGE0/FyiaPEscZuEZ65WTTwEr03eRtwP9U7B7JcbMo1de1WcRTIdMEfIpjuVku3Cpil589guX68114Cd8lzrST/R3dpvK/w1uBkJ2e9/aI0F49Z0tHCiklhsn0o0jyThDG0dCZ5G3zTVGf+4uHePQnogUrbpZdq8DQfh/NZJz9SOcJz3zwW49FVjyf4kNbkNZTQUt1jFJenqI6nQ5VuuNQ/W7EpJhXGZ7gXOgOaFxtHwS2o6HyqGLw6paN9eTSGwRr76z5kOx4t19GBebD3O3fUaxnHuyujBJ2dEHTZSxsQFOOKEkhxkTd7ktgGMDzMUEAQvaoLsgE/zVuGb+Xe3l3ZXp8U22TY349dDheByagmsk1/ac73kzvQBiUpAlRVKLzHFS3IeYiqCsaoAt0/rgfVcCYoKyjq4xB0gcoqkszwEsuzwofq/XELaQXL8n2OKGiDiBTZEIEuJTVqg+sHismZjGYZnCrKPVXpcWKPE/meJOuMJMkG1zDMbknnOEMVhVkJuqwsyorEMJJ8af8eHJpuiRJraZbUU2RG7hmqLJg6J0iqyXCG/gscsvC7cKiGqvAqY1qmYUg9RlYFgbFUoSfIkqFwgvU6DvW36WGqiqjokmAZoqariqGoliDoIqOYAsvo7Ot6sCx3+bMNcnSit7ZuipFn2yDCpKJeXpdpAcPnnn9+CIOgqHM6O+eB0SwQAd0X24hSnMdVw6zOIQm2+ICMhgfoRjCt0L/1jwgKn7k8ebpRhE1bitxKnd/bJmiwN4F+0KbL/ahOen2LY0VGYBmB52WFF8Qu96HZb4McNqHAt89/ff3yyey/fzeEEYbvvn759O3z341KT/ibdCGiEKdVM+36h6gl98zeyNhmytq2NSfWjFgD3/k+28qtbwM8xh6xZx1jLOqus7NWi3pTetBGS0MMnPVI0UfnFdoalnL3kyCgC7YDMc/v9bWWcPVpMbZGENtzmjATRGxzcVzvznZf2/sdPXjkhy48TAaOuU3h8RR67ug07rdUNUDebHA2rcetbYnc47zU4rsmW4gOOEAvk/mRz8fK8mTmtPRYrT4whDnuNv5GXs4fHNZb1E5dcsK2CLOl3h9H7EGSmTipxukGVwUzESdCRodMR+sJgiJYo8BEGz2+Gd7VcNOnQYefvAhfbyOMrnPj6VB+dbI33E39MZf2ixBPg+g/zFxfObsiHZySw3FXT+Zn57RgN5m0sLd5GtcrwzYjbR6kfDHZRuDSNEKZQhoVJGsmQR6S4lo4pKibgnbyqHj1t8hxDO1GPIUV1b43yc/8kLu95ZKivIfVFnSB4E9dadZU/FkryxmF9LnngNZc1k4El38AZgn/K60JAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
