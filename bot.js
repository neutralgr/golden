import { Client, GatewayIntentBits, ActivityType } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity('Golden Market', { type: ActivityType.Watching });
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);

export default function handler(req, res) {
    res.status(200).json({ message: 'Bot is running!' });
}
