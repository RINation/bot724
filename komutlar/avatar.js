const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 message.delete();

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor([0,101,255])
  .setImage(mention.avatarURL)
  .addField('R&IBOT| Avatar System', `[See The Avatar Bigger!](${mention.avatarURL})`, false);
  message.react("����");
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor([0,101,255])
  .setImage(message.author.avatarURL)
  .addField('R&IBOT | Avatar System', `[See The Avater Bigger!](${message.author.avatarURL})`, false);
  console.log("t!avatar komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
  message.channel.send(avatarEmbedYou);
  return;
}
message.channel.send("An error occured!");
};

module.exports.help = {
  name: "avatar"
}