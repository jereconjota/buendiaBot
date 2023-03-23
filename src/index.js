import ora from 'ora';
import chalk from 'chalk';
import nodeCron from 'node-cron';
import {
	monday, gifMonday,
	tuesday, gifTuesday,
	wednesday, gifWednesday,
	thursday, gifThursday,
	friday, gifFriday,
	pets, gifPets
} from './payloads.js';
import { webhookGeneralChannel, webhookPetsChannel, webhookTestChannel } from './webhooks.js';


async function sendMessage(payload, webhook) {
	console.log(chalk.yellow("|------------------------------------|"));
	console.log(chalk.cyan("Running scheduled job"));

	const spinner = ora({
		text: "Sending message to Discord",
		color: "blue",
		hideCursor: false,
	}).start();

	try {
		const res = await webhook.send(payload);
		const message = JSON.stringify(res.content);
		spinner.succeed("Message sent to Discord");
		spinner.clear();
		console.log(chalk.green("Message: " + message));
	} catch (error) {
		spinner.fail("Error sending message to Discord");
		spinner.clear();
		console.log(chalk.red("Error: " + error));
	}
}

function sendOnDay(message, webhook, gif) {
	sendMessage(message, webhook);
	if (gif) {
		sendMessage(gif, webhook);
	}
}

//CRON JOBS
//job to run every monday ay 09:00:00
const jobMonday = nodeCron.schedule('0 0 9 * * 1', sendOnDay(monday, webhookGeneralChannel, gifMonday));

//job to run every tuesday ay 09:00:00
const jobTuesday = nodeCron.schedule('0 0 9 * * 2', sendOnDay(tuesday, webhookGeneralChannel, gifTuesday));

//job to run every wednesday ay 09:00:00
const jobWednesday = nodeCron.schedule('0 0 9 * * 3', sendOnDay(wednesday, webhookGeneralChannel, gifWednesday));

//job to run every thursday ay 09:00:00
const jobThursday = nodeCron.schedule('0 0 9 * * 4', sendOnDay(thursday, webhookGeneralChannel, gifThursday));

//job to run every friday ay 09:00:00
const jobFriday = nodeCron.schedule('0 0 9 * * 5', sendOnDay(friday, webhookGeneralChannel, gifFriday));

//job to run every thursday ay 11:45:00
const jobPets = nodeCron.schedule('0 45 11 * * 4', sendOnDay(pets, webhookPetsChannel, gifPets));


const spinner = ora({
	text: "Genoshi is starting...",
	color: "blue",
	hideCursor: false,
}).start();
spinner.succeed(chalk.greenBright("Genoshi is online"));
spinner.clear();
