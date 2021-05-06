module.exports = {
	name: 'delete',
	description: 'Information about the arguments provided.',
	args: false,
	delete: true,
	execute(message) {
		console.log(message.author.username);
	},
};