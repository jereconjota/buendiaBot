require('dotenv').config()
const { EmbedBuilder, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

const embed = new EmbedBuilder()
	.setTitle('Dejanos unas fotos para alegrar la tarde 🐶🐱🐰🐴🦄🐦🐠')
	.setColor(0x00FFFF);

webhookClient.send({
	content: 'Que estan haciendo tus mascotas?',
	username: 'Rami',
	avatarURL: 'https://jereconjota.com/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75',
	embeds: [embed],
});