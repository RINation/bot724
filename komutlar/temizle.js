const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	 console.log("r!clear komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Oops! You Do Not Have Permission For Using That Command!");
if(!args[0]) return message.channel.send("**Please Say How Many Messages I Should Delete.**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Messages Deleted. ✅`).then(msg => msg.delete(5000));
})
}

module.exports.help = {
  name: "clear"
}