module.exports.config = {
    name: "",
    version: "1.0.0",
    permission: 0,
    credits: "Anik",
    description: "Responds when only prefix is sent.",
    prefix: true, // Indicates that this command can trigger with the bot's prefix
    category: "general",
    usages: "[send only prefix]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, senderID, body } = event;

const path = require('path');
const fs =require('fs');

const caption = ["hii"];

const randomNumber = Math.floor(Math.random() * caption.length);


const rndmp = Math.floor(Math.random() * 10);

const photo = path.join(__dirname, 'cache', `npx${rndmp}.jpg`);


const reply = {
    body: caption[randomNumber],
    attachment: fs.createReadStream(photo)
}

api.sendMessage(reply, threadID)



   
        
    
};
