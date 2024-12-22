const path = require('path');
const fs = require('fs');

module.exports.config = {
    name: "info",           
    description: "admin information",
    permission: 0,          
    prefix: true,         
    cooldown: 5,
}

module.exports.run = ({api, event, args}) => {
  
    const photo = path.join(__dirname, 'cache', '20241012_194302.jpg');

    
    
    

    
    
    
    
    const msg = {
        body: `➢𝗢𝘄𝗻𝗲𝗿 𝗔𝗻𝗱 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼🔰

⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${global.config.BOTNAME}
✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: ${global.config.PREFIX}
✫𝘾𝙤𝙙𝙚 𝙊𝙬𝙣𝙚𝗿🌼 :🔰𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐀𝐧𝐢𝐤🔰,

✬𝐅𝐛 𝐋𝐢𝐧𝐤: https://www.facebook.com/LostFragmentX
✬𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+601161213515

➳✴️𝙈𝘼𝙎𝙏𝙀𝙍 𝙊𝙁 𝘽𝙊𝙏'𝙎 𝙄𝙉𝙎𝙄𝘿𝙀✴️

🔰𝘾𝙤𝙙𝙚 𝘼𝙙𝙢𝙞𝙣𝙨🔰: [𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐀𝐧𝐢𝐤]

➳𝙑𝙚𝙧𝙨𝙞𝙤𝙣 ✨: 1.0.0
✬𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐀𝐧𝐢𝐤 🔰

➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ ${global.startTime}

🔻𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒🔺 

✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} Bot!`,

        attachment: fs.createReadStream(photo)
    }

    api.sendMessage(msg, event.threadID)
}
