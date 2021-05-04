const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	// checks if message doesn't start with prefix or is written by a bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// defines command and argument variables
	// splits up input into a list of words
	const sliced_args = message.content.slice(prefix.length).trim().split(/ +/);
	// just the contents of the argument
	const args = message.content.slice(sliced_args[0].length + 1).trim();
	const command = sliced_args.shift().toLowerCase();
	// info command

	function check(x) {
		let y = `You didn't provide any arguments, ${message.author}!`;
		if (x != null) {
			y = x;
		}
		else {
			y = `You didn't provide any arguments, ${message.author}!`;
		}

		if (!args.length) {
			return message.channel.send(y);
		}
	}

	// checks to see if there was an argument provided
	switch(command) {
	case 'args-info':
		if (!args.length) {
			return message.channel.send('you didn\'t provide any arguments');
		}
		else if (args[0] === 'content') {
			return message.channel.send(args);
		}

		// this sends the first argument in a list definied in the prior line of argument
		message.channel.send(`First argument: ${args[0]}`);
		break;
	case 'test':
		check();
		if (args[0] === 'correct') {
			return message.channel.send('nice job');
		}
		else if (args[0] === 'wrong') {
			return message.channel.send('bad');
		}
		break;
	case 'value':
		check();
		return message.channel.send(args);
	default:
		return message.channel.send('invalid command');
	}

});


client.login(token);

