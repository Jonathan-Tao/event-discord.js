module.exports = {
	name: 'clear',
	description: 'Prune up to 99 messages.',
	execute(message, args, cut_args) {
		const amount = parseInt(cut_args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		const messageReturn = {
			color: 0x0099ff,
			description: `${message.author} deleted ${amount - 1} messages`,
			timestamp: new Date(),
			footer: {
				text: '!clear',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying execute the clear command in this channel!');

		});
		return message.channel.send({ embed: messageReturn });

	},
};