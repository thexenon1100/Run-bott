module.exports.config = {
    name: "uptime",
    description: "Check bot uptime",
    permission: 0,  // সকল ব্যবহারকারীর জন্য
    prefix: true,
    cooldown: 5,
}

module.exports.run = ({ api, event }) => {
    // বট চালু হওয়ার সময়
    const startTime = global.startTime || new Date().getTime();

    // বট চলমান সময় হিসাব করা
    const currentTime = new Date().getTime();
    const uptime = currentTime - startTime;

    // সময় ফরম্যাট করা (ঘণ্টা, মিনিট, সেকেন্ড)
    const hours = Math.floor(uptime / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((uptime % (1000 * 60)) / 1000);

    // মেসেজ তৈরি করা
    const uptimeMessage = `বটটি ${hours} ঘণ্টা, ${minutes} মিনিট, ${seconds} সেকেন্ড ধরে চলেছে।`;

    // মেসেজ পাঠানো
    api.sendMessage(uptimeMessage, event.threadID);
}