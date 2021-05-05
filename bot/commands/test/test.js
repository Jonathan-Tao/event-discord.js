module.exports = {
	name: 'test',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		let thing = false;
		if (args === 'thing') {
			thing = true;
		}
		else if (args === 'hello world') {
			thing = true;
		}
		else if (args === 'why') {
			thing = true;
		}
		const countdownEmbed = {
			color: 0x0099ff,
			author: {
				name: message.author.username,
				icon_url: message.author.displayAvatarURL({ dynamic: true }),
			},
			description: 'kek',
			timestamp: new Date(),
			footer: {
				text: '!embed',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};


		const countdownEmbed2 = {
			color: 0x0099ff,
			author: {
				name: message.author.username,
				icon_url: message.author.displayAvatarURL({ dynamic: true }),
			},
			description: args,
			timestamp: new Date(),
			footer: {
				text: '!embed',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};

		message.channel.send({ embed: countdownEmbed }).then((msg) => {
			if (thing === true) {
				msg.edit({ embed: countdownEmbed2 });
			}
		});
	},
};