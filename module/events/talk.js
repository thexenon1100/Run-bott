const axios = require('axios');
module.exports.config = {
	name: "talkk",
	version: "1.0.0",
	permission: 0,
	eventType: ["event"],
	credits: "Anik",
	prefix: true,
	description: "",
	category: "",
	cooldowns: 5
};

module.exports.handleEvent = async ({api, event}) => {
const botID = api.getCurrentUserID(); 
const repliedMessage = event.messageReply;


if(event.body) {
if(event.body.toLowerCase().startsWith("bot")) {



var rcv = event.body.slice(4);
try {
const res = await axios.get(`https://talk-t3tz.onrender.com/get?key=${rcv}`);
api.sendMessage(res.data.reply, event.threadID, event.messageID);
} catch (error) {
    console.error("Error:", error.message);
    api.sendMessage("দুঃখিত! আমি কিছু খুঁজে পাইনি।", event.threadID); 
}


    }else if(event.body.toLowerCase().startsWith("anik")) {



var rcv = event.body.slice(5);
try {
const res = await axios.get(`https://talk-t3tz.onrender.com/get?key=${rcv}`);
api.sendMessage(res.data.reply, event.threadID, event.messageID);
} catch (error) {
    console.error("Error:", error.message);
    api.sendMessage("দুঃখিত! আমি কিছু খুঁজে পাইনি।", event.threadID); 
}


    }else {
    
   
    
}







    
}}
