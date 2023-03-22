import dotenv from 'dotenv';
dotenv.config();

// we can add embeds to the webhook
// const embed = new EmbedBuilder()
// 	.setTitle('🐶🐱🐰🐴🦄🐦🐠')
// 	.setDescription('Dejanos unas fotos para alegrar la tarde')
// 	.setColor(0x00FFFF);

export const monday = {
    content: process.env.PAYLOAD_MONDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
    // embeds: [embed],
}
export const gifMonday = {
    content: process.env.GIF_MONDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const tuesday = {
    content: process.env.PAYLOAD_TUESDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifTuesday = {
    content: process.env.GIF_TUESDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const wednesday = {
    content: process.env.PAYLOAD_WEDNESDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifWednesday = {
    content: process.env.GIF_WEDNESDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const thursday = {
    content: process.env.PAYLOAD_THURSDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifThursday = {
    content: process.env.GIF_THURSDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const friday = {
    content: process.env.PAYLOAD_FRIDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifFriday = {
    content: process.env.GIF_FRIDAY,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const pets = {
    content: process.env.PAYLOAD_PETS,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}
export const gifPets = {
    content: process.env.GIF_PETS,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}

export const test = {
    content: process.env.PAYLOAD_TEST,
    username: process.env.PAYLOAD_USERNAME,
    avatarURL: process.env.PAYLOAD_AVATAR_URL,
}