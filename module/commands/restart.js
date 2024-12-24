const { spawn } = require("child_process");

module.exports.config = {
    name: "restart",
    version: "1.0.0",
    permission: 2, 
    description: "বট পুনরায় চালু করার কমান্ড",
    category: "system",
    cooldowns: 5,
};

module.exports.run = function ({ api, event }) {
    api.sendMessage("বট রিস্টার্ট হচ্ছে...", event.threadID, () => {
        // নতুন প্রসেস শুরু করা
        spawn("node", ["index.js"], {
            stdio: "inherit",
            detached: true,
        }).unref();

        // বর্তমান প্রসেস বন্ধ করা
        process.exit(0);
    });
};