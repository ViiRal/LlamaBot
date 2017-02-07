module.exports = (bot, db, config, winston, userDocument, serverDocument, channelDocument, memberDocument, msg, suffix) => {
	if(suffix && ["bug", "suggestion", "feature", "issue"].indexOf(suffix.toLowerCase())>-1) {
		msg.channel.createMessage(`🐜 Please file your ${suffix.toLowerCase()} here: **Not Available**`);
	} else {
		msg.channel.createMessage(`Hello! I'm LlamaBot, the best discord bot! 🐬 Use \`${bot.getCommandPrefix(msg.guild, serverDocument)}help\` to list commands. by ViiRal. Built on NodeJS with Eris. Go to <https://llamabot.us:8080/> to learn more, or join our Discord server: <https://discord.gg/pQwcNPN>`);
	}
};
