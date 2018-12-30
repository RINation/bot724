const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("**You Should Say What Should I Do The Name Of Channel.**");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`The New Name Of This Channel  ***#${args}***`))
  .catch(console.error);
};

module.exports.help = {
  name: "changenameofchannel"
}