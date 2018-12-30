const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
	 console.log("r!help komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
    message.channel.sendCode("R&I Commands", `
help                  Shows Commands List
info                  Shows The Info About Bot
avatar                Shows The Avatar Of The Person You Mentioned
status                Shows The Status Of Bot
channelinfo           Shows Info About Current Channel
changenameofchannel   Changes Name Of Current Channel
kick                  Kicks The Person You Mentioned and You Need To Give Reason
clear                 Clears The Message Ammount You Entered
clear2                Clear But More Usefull

Thanks For Selecting R&IBOT
`);
};

module.exports.help = {
  name: "help"
}