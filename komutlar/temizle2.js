const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   console.log("r!clear2 komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', 'You Can Not Use`clear` Command On DMS.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
	const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', 'I Need `Edit Messages` Permission For Deleting Message.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Did:', 'Delete Messages')
    .addField('Moderator:', message.author.username)
    .addField('Status:', `Succes :white_check_mark: `)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Chat Deleted By " + message.member + " :white_check_mark: ");
};

module.exports.help = {
  name: "clear2"
}