const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
message.delete();
  console.log("r!istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [day], H [hour], m [minute], s [second]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('R&IBOT|Copyright R&I', bot.user.avatarURL)
  .addField("» Owner Of Bot", "R&I Nation#4523")
  .addField("» Using Memory", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Working Duration", duration)
  .addField("» Users", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Servers", bot.guilds.size.toLocaleString(), true)
  .addField("» Channels", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS Version", "v"+Discord.version, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("» Links", `[Bot Invite Link](https://discordapp.com/oauth2/authorize?client_id=518479972403249168&permissions=0&scope=bot)` + "** | **" + `[Our Server](https://discord.gg/3sgxX29)`, false);
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "status"
}