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
const errmsg = '~~ওহ্,! এটা আমাকে শিখানো হয় নাই🥺।~~\n\n এইটা আমাকে শিখাও এইভাবে\n\n /teach কি করো = কিছু না ।। তুমি কি করছো? \n\n /teach khaico = tumi khele amar khaua hoye jai🥰'


if(event.body) {

if (event.body.toLowerCase() === 'bot' || event.body === 'বট') {
            const tl = [
                "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
                "ki re? ",
                "এতো ডাকো কেন প্রেম করবা নাকি 😌",
                "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
                "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋",
                "উফ্ বল কি বলবা ",
                "I love you",
                "মেয়েরা প্রেম করলে মেসেজ দেও 👉😁  m.me/",
                "I love you janu🥰",
                "Bot বলে অসম্মান করছি,😰😿",
                "Bot না , জানু বল জানু 😘",
                "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋",
                "বলো কি করতে পারি তোমার জন্য",
                "আমি তো অন্ধ কিছু দেখি না🐸 😎",
                "হুম জান😘",
                "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
                "I love you jan 💝🙈",
                "হুম জান তোমার জন্য ই তো অপেক্ষা করছিলাম😷😘",
                "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰",
                "আমি এখন Galib বস আর সাথে বিজি আছি",
                "what are you asking me to do?",
                "Hmm bolo ",
                "jang hanga korba 🙂🖤",
                "iss ato dako keno lojja lage to 🫦🙈"
            ];

            const randomMessage = tl[Math.floor(Math.random() * tl.length)];
            await api.sendMessage(randomMessage, event.threadID, event.messageID);
        } else if(event.body.toLowerCase().startsWith("bot")) {



var rcv = event.body.slice(4);
try {
const res = await axios.get(`${global.anikApi.talk}/get?key=${rcv}`);
api.sendMessage(res.data.reply, event.threadID, event.messageID);
} catch (error) {
    console.error("Error:", error.message);
    api.sendMessage(errmsg, event.threadID, event.messageID); 
}


    }else if(event.body.toLowerCase().startsWith("galib")) {



var rcv = event.body.slice(5);
try {
const res = await axios.get(`${global.anikApi.talk}/get?key=${rcv}`);
api.sendMessage(res.data.reply, event.threadID, event.messageID);
} catch (error) {
    console.error("Error:", error.message);
    api.sendMessage(errmsg, event.threadID, event.messageID); 
}


    }else {
    
    try{
    
    if (repliedMessage && repliedMessage.senderID === botID) {
    
    
 const msg = event.body.toLowerCase().trim();
 
        const response = await axios.get(`${global.anikApi.talk}/get?key=${encodeURIComponent(msg)}`);
        
        
    api.sendMessage(response.data.reply, event.threadID, event.messageID);
        
        
    }
        
    } catch(error) {
    
    console.log(error)
      api.sendMessage(errmsg, event.threadID, event.messageID); 
        
    }
    
   
    
}







    
}}
