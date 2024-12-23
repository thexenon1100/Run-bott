const {gpt} = require('../../node_modules/nayan-api-server/src/index.js')


module.exports.config = {
  name: "gpt",
  prefix: false,
  permission: 0,
  eventType: ["event"],
  version: "1.0.0",
  credits: "Anik",
  description: "Reply to the word 'gpt' with a random message"
};

module.exports.handleEvent = async ({ api, event }) => {
if(event.body) {
if(event.body.toLowerCase().startsWith('gpt') || event.body.toLowerCase().startsWith('ai') || event.body.startsWith('জিপিটি')) {

gpt({
    messages: [
        {
            role: "assistant",
            content: "Hello! How are you today?"
        },
        {
            role: "user",
            content: "Hello, my name is Anik."//your name
        },
        {
            role: "assitant",
            content: "Hello, Anik! How are you today?"
        }
    ],
    prompt: event.body,
    model: "GPT-4",
    markdown: false
}, (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        api.sendMessage(data.gpt, event.threadID, event.messageID)
    }
});







    
}
    
}
    
    
    
    
    
    
    
}