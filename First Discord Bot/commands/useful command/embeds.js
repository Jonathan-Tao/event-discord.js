module.exports = {
	name: 'embed',
	description: 'embed stuff',
	args: true,
	delete: true,
	execute(message, args, split_args) {
		const isImageUrl = require('is-image-url');
		const thing = args.slice(split_args[0].length).trim();
		let messageReturn = 0;
		const Valid = isImageUrl(split_args[0]);

		if(Valid) {
			messageReturn = {
				color: 0x0099ff,
				author: {
					name: message.author.username,
					icon_url: message.author.displayAvatarURL({ dynamic: true }),
				},
				description: thing,
				thumbnail: {
					url: split_args[0],
				},
				timestamp: new Date(),
				footer: {
					text: '!embed',
					icon_url: 'https://i.imgur.com/wSTFkRM.png',
				},
			};
		}
		else {
			messageReturn = {
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
		}

		return message.channel.send({ embed: messageReturn });


	},
};