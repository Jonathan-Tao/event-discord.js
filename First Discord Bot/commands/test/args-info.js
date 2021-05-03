module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	args: true,
	delete: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Recieved argumant: ${args}`);
	},
};