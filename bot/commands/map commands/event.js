module.exports = {
	name: 'event',
	description: 'command used for events',
	args: true,
	execute(message, args, slicedArgs) {
		const validUrl = require('valid-url');
		let messageReturn;
		const time = slicedArgs[0].split('/');
		console.log(time);

		if (slicedArgs[3] != null && validUrl.isUri(slicedArgs[3])) {
			messageReturn = {
				color: 0x0099ff,
				author: {
					name: message.author.username,
					icon_url: message.author.displayAvatarURL({ dynamic: true }),
				},
				fields: [
					{
						name: 'Date',
						value: `Month: ${time[0]} \n Day: ${time[1]} \n Year: ${time[2]} \n Time: ${time[3]}`,
						inline: true,
					},
					{
						name: 'Place',
						value: slicedArgs[1],
						inline: true,
					},
					{
						name: 'description',
						value: slicedArgs[2],
						inline: true,
					},
					{
						name: 'link',
						value: slicedArgs[3],
						inline: false,
					},
					{
						name: 'Signed Up',
						value: 'stuff',
						inline: true,
					},
					{
						name: 'Can\'t',
						value: 'stuff',
						inline: true,
					},
				],
				image: {
					url: 'https://cdn.discordapp.com/attachments/839347682069315614/839347707360706570/unknown.png',
				},
				timestamp: new Date(),
				footer: {
					text: '!event',
					icon_url: 'https://i.imgur.com/wSTFkRM.png',
				},
			};
		}
		else if (slicedArgs[3] != null && !validUrl.isUri(slicedArgs[3])) {
			return message.channel.send(`You didn't provide a valid link, ${message.author}!`);
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
						value: `Month: ${time[0]} \n Day: ${time[1]} \n Year: ${time[2]} \n Time: ${time[3]}`,
						inline: true,
					},
					{
						name: 'Place',
						value: slicedArgs[1],
						inline: true,
					},
					{
						name: 'description',
						value: slicedArgs[2],
						inline: true,
					},
					{
						name: '\u200b',
						value: '\u200b',
						inline: false,
					},
					{
						name: 'Signed Up',
						value: 'stuff',
						inline: true,
					},
					{
						name: 'Can\'t',
						value: 'stuff',
						inline: true,
					},
				],
				image: {
					url: 'https://cdn.discordapp.com/attachments/839347682069315614/839347707360706570/unknown.png',
				},
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