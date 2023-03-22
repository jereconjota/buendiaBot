import ora from 'ora';
import chalk from 'chalk';
import nodeCron from 'node-cron';
import {
	monday, gifMonday,
	tuesday, gifTuesday,
	wednesday, gifWednesday,
	thursday, gifThursday,
	friday, gifFriday,
	pets, gifPets, test
} from './payloads.js';
import { webhookGeneralChannel, webhookPetsChannel, webhookTestChannel } from './webhooks.js';


function sendMessage(payload, webhook) {
	console.log(chalk.yellow("|------------------------------------|"));
	console.log(chalk.cyan("Running scheduled job"));
	const spinner1 = ora({
		text: "Sending message to Discord",
		color: "blue",
		hideCursor: false,
	}).start();

	try {
		webhook.send(payload);
		spinner1.succeed("Message sent to Discord");
		spinner1.clear();
		console.log(chalk.green("Finished at: " + new Date().toISOString()));
	} catch (error) {
		spinner1.fail("Error sending message to Discord");
		spinner1.clear();
		console.log(chalk.red("Error: " + error));

	}
}

function sendToDiscordOnMonday() {
	sendMessage(monday, webhookGeneralChannel);
	sendMessage(gifMonday, webhookGeneralChannel);
}

function sentToDiscordOnTuesday() {
	sendMessage(tuesday, webhookGeneralChannel);
	sendMessage(gifTuesday, webhookGeneralChannel);
}

function sentToDiscordOnWednesday() {
	sendMessage(wednesday, webhookGeneralChannel);
	sendMessage(gifWednesday, webhookGeneralChannel);
}

function sentToDiscordOnThursday() {
	sendMessage(thursday, webhookGeneralChannel);
	sendMessage(gifThursday, webhookGeneralChannel);
}

function sentToDiscordOnFriday() {
	sendMessage(friday, webhookGeneralChannel);
	sendMessage(gifFriday, webhookGeneralChannel);
}

function sentPetsMessage() {
	sendMessage(pets, webhookPetsChannel);
	sendMessage(gifPets, webhookPetsChannel);
}


// test message ////////////////////

// function sentTestMessage() {
// 	sendMessage(test, webhookTestChannel);
// }

//test job to run every 5 seconds
//const job = nodeCron.schedule('*/5 * * * * *', sentTestMessage);

////////////////////////////////////


//CRON JOBS
//job to run every monday ay 09:00:00
const jobMonday = nodeCron.schedule('0 0 9 * * 1', sendToDiscordOnMonday);

//job to run every tuesday ay 09:00:00
const jobTuesday = nodeCron.schedule('0 0 9 * * 2', sentToDiscordOnTuesday);

//job to run every wednesday ay 09:00:00
const jobWednesday = nodeCron.schedule('0 0 9 * * 3', sentToDiscordOnWednesday);

//job to run every thursday ay 09:00:00
const jobThursday = nodeCron.schedule('0 0 9 * * 4', sentToDiscordOnThursday);

//job to run every friday ay 09:00:00
const jobFriday = nodeCron.schedule('0 0 9 * * 5', sentToDiscordOnFriday);

//job to run every thursday ay 11:45:00
const jobPets = nodeCron.schedule('0 45 11 * * 4', sentPetsMessage);



const spinner = ora({
	text: "Genoshi is starting...",
	color: "blue",
	hideCursor: false,
}).start();

setTimeout(() => {
	spinner.succeed(chalk.greenBright("Genoshi is online"));
	spinner.clear();
}, 500);