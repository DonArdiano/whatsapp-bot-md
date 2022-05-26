const { bot } = require('../lib/')

bot(
	{ pattern: 'ping ?(.*)', fromMe: true, desc: 'To check ping' },
	async (message, match) => {
		const start = new Date().getTime()
		await message.sendMessage('```Testing My Ping...```')
		const end = new Date().getTime()
		return await message.sendMessage(
			'*My Current Ping is:*\n ```' + (end - start) + '``` *ms*'
		)
	}
)
