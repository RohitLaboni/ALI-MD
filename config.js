
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA71Vy46jRhT9lai2bY3NGyy1NIDBYDfGBr/aURZlKHDZ5uGisI1HXiVSltlFipTRbCJlEUX5j/mLzDKr+YQIuzs90kwmHSkKq6Io7j3n1jn3vgJphgvURxVovwI5wXtIUb2kVY5AG2hlFCECGiCEFII2KHSdCJG6OZFmz/c6Tb70RgfiNb01TCka7k07GetVddjMDrfg3AB5udzi4DMBLWKu5t2RumOFe923nJzh7fWY4yqnz7hhf4x2RYEXzYOgqrfgXEeEmOA0NvIVShCB2z6qhhCT58GvhmpiztOdjfWw445LGlklQ2Z3vOGuPFlPcc525aCKosR5Hvw5d9olxGJ3sQY3xPSVxeJGLkeBxcxvugeYIiHCJ1nodDfyFX6B4xSFdohSimn17LqXboLxTL23iwNnGM0lwuH0MC5OzoaV9CQoxbTFDSKIlO3kecB3zbF74uxgt1Sc/SKvMta9wf2NMTSamnU6LSOZS5E+jkmafQh8SB61svk3db8xFDLwN5Dtl2wqc2wmL8uZ1dSW2XLU1M3pwHWYxQSP92zxPPi6CpGAp566523DOBysPXV7IhdwvFOGXLXPdKcyJGHhe84TfEhL8jmU7mp9NPF4ecriraYdj3fwaNqteBovdq6zWc+M0vWjfh77h2k6OYnp0bqzWm5vr6fWdD7USAz3MrNDYueUCtOuKrnRabga3V4YbVBlh6DNnBuAoBgXlECKs/SyJ8gNAMO9jwKC6KW8QI4tdLdWe9IymbgjpzQGonEzyKsRPpinY9cTZm4kepHmrEe3oAFykgWoKFBo4YJmpHJQUcAYFaD95eWmatIEJRlFPRyCNlAYqcXzgtziWeVl8eKwgrSAef4iRRQ0QESyxEGgTUmJGuDyg6qzEi8wEmdyhmEarKKyjMTIPK+2WpJuGDXF5Jp0jBNUUJjkoM1IgiRJTItlzo3/CochMQbXMXWT70iqwiqMqUkS3+loaqcl6/8fDlXQO6IpMpwiGbxudFS2o4isxgmKxLLiP+Dgz181QIqO9OqnWgUc1wARJgWdpGW+zWD4aLbHjzAIsjKlfpUGer1ABLSZp21EKU7jomZWppAEK7xHes0DtCO4LdBfwkMEhY9cHpqpnoW1H+Q7ZspyGg9q7HWgj2rT5j6uzvZyiuEEQeYZmVF4npP4Nvey3m+AFNahwPs33//07uvX7998+/Mfv7x++8Pb7774/ddv3v34W12oBwp1xhBRiLdF7fCBT/ZBphtDkm+D+25XdWJVj1XwRPnR0lfLGGt5dITperwccpyYb/TWcqc50My9fgtaORUX3sBYavdhNbn9RBDQBgPePM7ZY9GzR+IxyuGs51ol7Z86Nz4d4Mo4uoLk7DC3S3jeySeGTzNfzIKSVJ2DbKWJLIXbbl+aOiHvbOHEH0hcX1Vv62wh2uMAfZiMMYYbKV0nCpxN7rlYj6EWaHt5vmaXS1cLC+eetib362jo5XMvVrx5by03g3FlRVqWloa9r5qK4w+DdNCJ5UXTzhikrw7XZnNpdtuHIYMf2gC+vEYYXXr2w7380+VecdcSbJ0bH4R4GAJ/00g1z24aziznW+xJUW52C5V2xXjcXcGJT7srcYmSydjrHmZWsAXn2gv5FtIoIwloA5iGJLtoh2RlrWk7jbLPjgLbNuIr8S0sqPrkk09YjxGup4Ykyy1YrEAbsI7ZH45q0VdqnvsU0kfbAbV+DIrA+U//H5iwKQkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
