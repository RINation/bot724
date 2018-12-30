const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kick;').setDescription(message.author.tag + ', You Can Not Use This Command On DM.').setTimestamp()); }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kick;').setDescription(message.author.tag + ', **Usage: t!kick <@user> <Reason>.**').setTimestamp());
    if (reason.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kick;').setDescription(message.author.tag + ', **Usage: t!kick <@user> <Reason>.**').setTimestamp());

    if (!message.guild.member(user).kickable) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kick;').setDescription(message.author.tag + ', **I Can Not Kick Moderators.**').setTimestamp());
    message.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('You Kicked From Server;')
      .setDescription(message.guild.name + ' named server which you are kicked.')
      .addField('Moderator:', message.author.tag, true)
      .addField('Reason:', reason, true)
      .setFooter('R&IBOT|Copyright', bot.user.avatarURL)
      .setTimestamp()
    user.send(embed);
    const embed2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Kick;')
      .setDescription(user.tag + ' named user kicked successfully.')
      .setFooter('R&IBOT|Copyright', bot.user.avatarURL)
      .setTimestamp()
    message.channel.send(embed2);
}

module.exports.help = {
  name: "kick"
}