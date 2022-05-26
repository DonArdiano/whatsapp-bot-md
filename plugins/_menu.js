const bot = require('../lib/events')
const {
	ctt,
	addSpace,
	textToStylist,
	PREFIX,
	getUptime,
	PLUGINS,
	getRam,
} = require('../lib/')
const { VERSION } = require('../config')
bot.addCommand(
	{
		pattern: 'menu ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const date = new Date()
		let CMD_HELP = `
		✨ 𝑷𝒊𝒙𝒚 𝑩𝒐𝒕 ✨

╭────────────────
│ Prefix : ${PREFIX}
│ Current Time : ${date.toLocaleTimeString()}
│ Version : 1.0
│ Total Plugins : ${PLUGINS.count}
│ Ram Usage : ${getRam()}
│ Bot Uptime : ${getUptime('t')}
│ Developer: Fantox
╰────────────────

`
		const commands = []
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				commands.push(ctt(command.pattern))
			}
		})
		commands.forEach((command, i) => {
			CMD_HELP += `│ ${i + 1} ${addSpace(
				i + 1,
				commands.length
			)}${textToStylist(command.toUpperCase(), 'mono')}\n`
		})
		CMD_HELP += `\n🎀 *Pixy Bot* by *Fantox* 🎀`
		return await message.sendMessage('```' + CMD_HELP + '```')
	}
)
