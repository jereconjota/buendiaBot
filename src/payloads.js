import dotenv from 'dotenv';
dotenv.config();
import { week, pet } from './messages.js';

// we can add embeds to the webhook
// const embed = new EmbedBuilder()
// 	.setTitle('🐶🐱🐰🐴🦄🐦🐠')
// 	.setDescription('Dejanos unas fotos para alegrar la tarde')
// 	.setColor(0x00FFFF);

export const monday = {
    content: week.monday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
    // embeds: [embed],
}
export const gifMonday = {
    content: week.gifMonday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const tuesday = {
    content: week.tuesday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifTuesday = {
    content: week.gifTuesday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const wednesday = {
    content: week.wednesday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifWednesday = {
    content: week.gifWednesday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const thursday = {
    content: week.thursday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifThursday = {
    content: week.gifThursday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const friday = {
    content: week.friday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifFriday = {
    content: week.gifFriday,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const pets = {
    content: pet.message,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifPets = {
    content: pet.gif,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
