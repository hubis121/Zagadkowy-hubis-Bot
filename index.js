// index.js

const { Client, GatewayIntentBits } = require('discord.js');
const process = require('node:process');

const TOKEN = process.env.DISCORD_BOT_TOKEN;

if (!TOKEN) {
    console.error("Błąd: Token bota (DISCORD_BOT_TOKEN) nie został znaleziony w zmiennych środowiskowych. Upewnij się, że jest ustawiony na Pella.app.");
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Bot zalogował się jako ${client.user.tag}!`);
    console.log('Bot Discord jest gotowy do działania 24/7 na Pella.app!');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        await message.reply('Pong!');
    }

    if (message.content === '!hello') {
        await message.channel.send(`Cześć, ${message.author.username}! Jestem botem hostowanym na Pella.app.`);
    }
});

client.login(TOKEN);
