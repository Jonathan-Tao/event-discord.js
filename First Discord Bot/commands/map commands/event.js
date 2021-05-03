module.exports = {
	name: 'event',
	description: 'command used for events',
	args: true,
	delete: false,
	execute(message, args, slicedArgs) {

		const messageReturn = {
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
					name: 'Place/Link',
					value: slicedArgs[1],
					inline: false,
				},
				{
					name: 'description',
					value: slicedArgs[1],
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

		return message.channel.send({ embed: messageReturn });


	},
};