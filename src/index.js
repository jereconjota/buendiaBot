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

async function sendOnDay(webhook, pets) {
	let message;
	let gif;

	if (pets) {
		message = pets;
		gif = gifPets;
	} else {
		const day = new Date().toLocaleString('en-us', { weekday: 'long' });
		console.log(chalk.bgCyan("Today is: " + day));

		switch (day) {
			case "Monday":
				message = monday;
				gif = gifMonday;
				break;
			case "Tuesday":
				message = tuesday;
				gif = gifTuesday;
				break;
			case "Wednesday":
				message = wednesday;
				gif = gifWednesday;
				break;
			case "Thursday":
				message = thursday;
				gif = gifThursday;
				break;
			case "Friday":
				message = friday;
				gif = gifFriday;
				break;
		}
	}

	try {
		await sendMessage(message, webhook);
		if (gif) {
			await sendMessage(gif, webhook);
		}
	} catch (error) {
		console.log(chalk.red("Error: " + error));
	}
}

//CRON JOBS

//job to run every 1 day at 00:09:00
const jobDay = nodeCron.schedule('0 9 * * 1-5', () => sendOnDay(webhookGeneralChannel, false));

//job to run every thursday ay 11:45:00
const jobPets = nodeCron.schedule('0 45 11 * * 4', () => sendOnDay(webhookPetsChannel, pets));


const spinner = ora({
	text: "Genoshi is starting...",
	color: "blue",
	hideCursor: false,
}).start();
spinner.succeed(chalk.greenBright("Genoshi is online"));
spinner.clear();
