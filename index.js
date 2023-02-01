require('dotenv').config()
const ora = require('ora');
const chalk = require('chalk');
const nodeCron = require('node-cron');
const { EmbedBuilder, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

// we can add embeds to the webhook
const embed = new EmbedBuilder()
	.setTitle('🐶🐱🐰🐴🦄🐦🐠')
	.setDescription('Dejanos unas fotos para alegrar la tarde')
	.setColor(0x00FFFF);

const messagePeyload = {
	content: process.env.PAYLOAD_CONTENT,
	username: process.env.PAYLOAD_USERNAME,
	avatarURL: process.env.PAYLOAD_AVATAR_URL,
	// embeds: [embed],
};

function sendToDiscord() {

	console.log(chalk.green("Running scheduled job"));
	const spinner = ora({
		text: "Sending message to Discord",
		color: "blue",
		hideCursor: false,
	}).start();

	try {
		webhookClient.send(messagePeyload);
		spinner.succeed("Message sent to Discord");
		spinner.clear();
		console.log(chalk.green("Finished at: " + new Date().toISOString()));
		
	} catch (error) {
		spinner.fail("Error sending message to Discord");
		spinner.clear();
		console.log(chalk.red("Error: " + error));
		
	}
}

// job to run every 5 seconds
// const job = nodeCron.schedule('*/5 * * * * *', sendToDiscord);

// job to run every 1 month, on the 18th at 11:30:00
const job = nodeCron.schedule('0 30 11 18 *', sendToDiscord);




