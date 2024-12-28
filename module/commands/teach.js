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

	console.log("Key:", cleanKey);
	console.log("Value:", value);

	const axios = require('axios');

	const sendData = async (key, value) => {
		try {
			const response = await axios.post('https://talk-t3tz.onrender.com/save', {
				key: key, 
				text: value 
			}, {
				headers: { "Content-Type": "application/json" } 
			});
			console.log('Success:', response.data); 
		} catch (error) {
			if (error.response) {
				console.error('Error Response:', error.response.data); 
			} else {
				console.error('Error:', error.message);
			}
		}
	};

	
	sendData(cleanKey, value);
};
