module.exports = {
	name: 'help',
	description: 'use this command to get a list of commands',
	execute(message) {

		const messageReturn = {
			color: 0x0099ff,
			fields: [
				{
					name: '!event',
					value: 'allows you to create a event \n !event <month/day/year/time(seperate by slashes)> <place> <description> <link(optional)>',
				},
				{
					name: '!embed',
					value: 'allows you to create a fancy embeded message \n !embed <imagine link(not required)> <text>',
				},
				{
					name: '!help',
					value: 'prints out a list of commands',
				},
				{
					name: '!clear',
					value: 'Allows you to clear up to 99 messages \n !clear <number of messages>',
				},
			],
			timestamp: new Date(),
			footer: {
				text: '!help',
				icon_url: 'https://cdn.discordapp.com/attachments/839347682069315614/839570883534389278/discord_bot_help_command_logo.png',
			},
		};

		return message.reply({ embed: messageReturn });


	},
};