const fs = require('fs')
const chalk = require('chalk')


/*
🤖 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OFFLINE = false // if you want put bot offline put true
global.BOT_PRIVATE = false // if you want use bot privet 
global.AUTO_CHATGPT = true // if you want auto ai bot mod
global.READ_MESSAGE = true // if you want read message from bot
global.ONLY_INBOX = false // Only inbox mod ( only pm ) use
global.ONLY_GROUPS = false // Only Groups Use


/*
🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OWNER_NAME = 'R.H.GHOST' // Owner Name
global.OWNER_NUMBER = ['94770611055'] //Owner Number
global.BOT_ADMINS = ['94754124943','94743271170'] //Bot admins numbers Like a Sudo Numbers
global.BLOCK_CHAT = [] // If you want Block Bot From Chats Use .jid Command and put Jids
global.IMAGE_QUALITY = 'high' // Available Quality Are => low | mediam | high
global.CAPTION = '*© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙾𝙿𝙴𝙽-𝙰𝙸(𝙲𝙷𝙰𝚃𝙶𝙿𝚃) R.H.GHOST 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃*'

/*
📌⭕ 𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗕𝗘𝗙𝗢𝗥𝗘 𝗗𝗘𝗣𝗟𝗢𝗬 𝗕𝗢𝗧 📌⭕
> Ai Bot Password Get From Watching This Video 
*/
global.AI_PASSWORD = 'king-nima-gpt-bot'
global.SESSION_ID = 'elisa_md@;;;Mdt31IIJ#7fll_bJDp2GzgXU0wd8aKLccoMFLAoXGvdzoEyULVXE'

/*
🎲 𝗢𝗧𝗛𝗘𝗥 𝗦𝗘𝗧𝗜𝗡𝗚𝗦
*/
global.CMD1 = 'ai' // .ai Command
global.CMD2 = 'ai2' // .ai2 Command
global.IMAGE_CMD = 'aiimg' // .aiimg Command 
global.PORT = process.env.PORT || '5000' // Port No need Change.

mess = {
	owner: '*This Command is only For Owner ඔයා මගේ ස්වාමියා නොවේ.....*',
	need_text: '*Please Give Some words  මට අවශය වාක්‍ය ලබා දෙන්න....*'
}
react = {
    ai_message : '🤖',
    ai_image : '🤖'
}










let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
