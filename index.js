require('dotenv').config()
const { EmbedBuilder, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

const embed = new EmbedBuilder()
	.setTitle('🐶🐱🐰🐴🦄🐦🐠')
	.setDescription('Dejanos unas fotos para alegrar la tarde')
	.setColor(0x00FFFF);

webhookClient.send({
	content: 'Que estan haciendo tus mascotas?\n🐶🐱🐰🐴🦄🐦🐠\nDejanos unas fotos para alegrar la tarde👇 ',
	username: 'Genoshi',
	avatarURL: 'https://i.postimg.cc/3R4jbs3t/IMG-0834.jpg',
	// embeds: [embed],
});