module.exports.config = {
	name: "teach",
	version: "1.0.0",
	permission: 0,
	credits: "Anik",
	prefix: true,
	description: "",
	category: "",
	cooldowns: 5
};

module.exports.run = ({ api, event }) => {
	const body = event.body;
	const commandPrefix = "/teach";
	const message = body.slice(commandPrefix.length).trim();

	
	const [key, ...valueParts] = message.split("=");
	const cleanKey = key.trim(); 
	const value = valueParts.join("=").trim(); // value 

	const key1 = cleanKey.toLowerCase()


	const axios = require('axios');
			

	const sendData = async (key1, value) => {
		try {

			const response = await axios.post(`${global.anikApi.talk}/save`, {
				key: key1, 
				text: value 
			}, {
				headers: { "Content-Type": "application/json" } 
			});
			
			
			console.log('Success:', response.data); 		
			api.sendMessage(`Success: ${cleanKey}=${value}`, event.threadID, event.messageID)
			
			
		} catch (error) {
			if (error.response) {
				console.error('Error Response:', error.response.data); 
			} else {
				console.error('Error:', error.message);
			}
		}
	};

	
	sendData(key1, value);
};
