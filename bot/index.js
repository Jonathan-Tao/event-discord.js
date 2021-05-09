const fs = require('fs');
const Discord = require('discord.js');
console.log(Discord)
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const sliced_args = message.content.slice(prefix.length).trim().split(/ +/);
	const args = message.content.slice(sliced_args[0].length + 1).trim();
	const commandName = sliced_args.shift().toLowerCase();

	const command = client.commands.get(commandName);

	if (message.deleted === true) {
		message.channel.send('snipe doesn\'t work anymore');
		message.delete();
	}

	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	try {
		command.execute(message, args, sliced_args);
	}
	catch (catchCode) {
		message.reply('there was an error trying to execute that command!');
	}

	if (command.delete) {
		return message.delete();
	}
});

client.on('messageDelete', (messageDelete) => {
	if (messageDelete.author.bot) return;
	if (messageDelete.author.username === 'Playbird') {
		messageDelete.channel.send('snipe no work no more').then((msg) => {
			msg.delete();
		});
	}
});

client.login(token);