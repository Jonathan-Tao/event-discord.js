module.exports = {
	name: 'event',
	description: 'command used for events',
	args: true,
	execute(message, args, slicedArgs) {
		let messageReturn;
		if (slicedArgs[3] != null) {
			messageReturn = {
				color: 0x0099ff,
				author: {
					name: message.author.username,
					icon_url: message.author.displayAvatarURL({ dynamic: true }),
				},
				fields: [
					{
						name: 'month/day/year/time',
						value: slicedArgs[0],
						inline: false,
					},
					{
						name: 'Place',
						value: slicedArgs[1],
						inline: false,
					},
					{
						name: 'description',
						value: slicedArgs[2],
						inline: false,
					},
					{
						name: 'link',
						value: slicedArgs[3],
						inline: false,
					},
					{
						name: 'Signed Up',
						value: 'stuff',
						inline: false,
					},
				],
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
				fields: [
					{
						name: 'month/day/year/time',
						value: slicedArgs[0],
						inline: false,
					},
					{
						name: 'Place',
						value: slicedArgs[1],
						inline: false,
					},
					{
						name: 'description',
						value: slicedArgs[2],
						inline: false,
					},
					{
						name: 'Signed Up',
						value: 'stuff',
						inline: false,
					},
				],
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