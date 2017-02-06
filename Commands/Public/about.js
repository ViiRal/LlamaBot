module.exports = (bot, db, config, winston, userDocument, serverDocument, channelDocument, memberDocument, msg, suffix) => {
	if(suffix && ["bug", "suggestion", "feature", "issue"].indexOf(suffix.toLowerCase())>-1) {
		msg.channel.createMessage(`🐜 Please file your ${suffix.toLowerCase()} here: https://github.com/X3N0vViiRal/ *please note that there will be 2 versions of LlamaBot. One **beta** version, that's very different from this. And this one. The githubs will exist, soon.`);
	} else {
		msg.channel.createMessage(`Hello! I'm LlamaBot, the best discord bot! 🐬 Use \`${bot.getCommandPrefix(msg.guild, serverDocument)}help\` to list commands. Created by ViiRal. Built on NodeJS with Eris. Go to <https://llamabot.us:8080/> to learn more, or join our Discord server: <${config.discord_link}>`);
	}
};
