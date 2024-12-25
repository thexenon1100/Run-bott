const axios = require('axios');

module.exports.config = {
  name: "sim",
  prefix: false,
  permission: 0,
  eventType: ["event"],
  version: "1.0.0",
  credits: "Anik",
  description: "Reply to the word 'gpt' with a random message"
};

module.exports.handleEvent = async ({ event, api }) => {
    const botID = api.getCurrentUserID(); 
    const repliedMessage = event.messageReply;

    if (repliedMessage && repliedMessage.senderID === botID) {
        const response = await axios.get(`https://www.simsimi-imran.fun/sim?ask=${encodeURIComponent(event.body)}`);
        api.sendMessage(response.data.reply, event.threadID, event.messageID);
    }
};