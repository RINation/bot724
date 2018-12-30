const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  const ok = message.client.emojis.get("441922608720510987");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField(" ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField("inappropriate content", "Yes", true)
                }
                else {
                    embed.addField("inappropriate content", "No", true)
                }
                embed.addField('Date That This Channel Made:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL)
                .setFooter('R&IBOT|Copyright', bot.user.avatarURL)
            message.channel.send(embed)
};

module.exports.help = {
  name: "channelinfo"
}

