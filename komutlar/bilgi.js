const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     console.log("r!info komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('I Sent The Info! Check Your DM! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Owner**", "R&I Nation", )
    .addField("**❯ Version**", " v0.0.1 ", )
    .addField("**❯ Created Date**", "2018", )
	.addField("**❯ Bot Invite**", " [Invite](https://discordapp.com/oauth2/authorize?client_id=522449913984843798&permissions=0&scope=bot)", )
    .addField("**❯ Our Server**", " [Come To Our Server](https://discord.gg/keBFVXr) ", )
	.setThumbnail("https://cdn.discordapp.com/attachments/469820782466564096/517390704713007105/ri_3D.jpg");
    return message.author.send(pingozel)
};

module.exports.help = {
  name: "info"
}