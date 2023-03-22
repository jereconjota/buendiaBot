import dotenv from 'dotenv';
dotenv.config();
import { EmbedBuilder, WebhookClient } from 'discord.js';


export const webhookGeneralChannel = new WebhookClient({
	id: process.env.WEBHOOK_GENERAL_CHANNEL_ID,
	token: process.env.WEBHOOK_GENERAL_CHANNEL_TOKEN
});

export const webhookPetsChannel = new WebhookClient({
	id: process.env.WEBHOOK_PETS_CHANNEL_ID,
	token: process.env.WEBHOOK_PETS_CHANNEL_TOKEN
});

export const webhookTestChannel = new WebhookClient({
	id: process.env.WEBHOOK_TEST_CHANNEL_ID,
	token: process.env.WEBHOOK_TEST_CHANNEL_ID
});
