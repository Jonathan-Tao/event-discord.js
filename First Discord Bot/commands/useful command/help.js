module.exports = {
	name: 'help',
	description: 'use this command to get a list of commands',
	args: false,
	delete: false,
	execute(message) {

		const messageReturn = {
			color: 0x0099ff,
			fields: [
				{
					name: '!event',
					value: 'allows you to create a event \n !event <month/day/year/time(seperate by slashes)> <place/link> <description>',
				},
				{
					name: '!embed',
					value: 'allows you to create a fancy embeded message \n !embed <imagine link(not required)> <text>',
				},
				{
					name: '!help',
					value: 'prints out a list of commands',
					inline: false,
				},
				{
					name: '!args-info',
					value: 'argument debugging command \n !args-info <input>',
					inline: false,
				},
				{
					name: '!clear',
					value: 'Allows you to clear up to 99 messages \n !clear <number of messages>',
					inline: false,
				},
			],
			timestamp: new Date(),
			footer: {
				text: '!help',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};

		return message.reply({ embed: messageReturn });


	},
};