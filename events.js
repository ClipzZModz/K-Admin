const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const MessageHandler = require('discord-message-handler');
const music = require(`./music.js`);
const commands = require(`./commands.js`);

client.on("ready", () => {
  console.log(`Events loaded - ${client.user.username}`);
});


client.on(`guildMemberAdd`, member => {
  console.log(`${member.user.username} joined!`);
  client.channels.find("id", "285776536941101056").send(`Please welcome **${member.user.username}** to the server!`);
  member.send("Welcome to KillerBot HQ! Please verify that you have read the rules in the rules channel.");
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setAuthor(`ID: ${member.user.id}`)
  .addField(`Welcome ${member.user.username} to the __**KillerBotHQ!**__`, 'Be sure to read the #rules to avoid any trouble. If you need help with Killer Bot please ask in #support and any bug reports you may have can be posted in #report-bugs Thank you for using Killer Bot! ')
  .addField(`Thanks for joining and we hope you enjoy you're stay!`, 'If you are in need of help, dont be shy to ask.')
  let joinChannel = client.channels.find("name", "welcome_goodbye");
  joinChannel.send({ embed });
});

client.on(`guildMemberRemove`, member => {
  console.log(`**${member.user.username}** left :frowning: we will miss them.`);
  client.channels.find("id", "285776536941101056").send(` **${member.user.username}** left the server :frowning: we will miss you!`);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .addField(`${member.user.username} has left __**KillerBotHQ**__!`, `Have a good day ${member.user.username}!`)
  let joinChannel = client.channels.find("name", "welcome_goodbye");
  joinChannel.send({ embed });
  member.send("We hope you enjoyed your stay at KillerBotHQ! Come back soon!");

});



client.login(config.token);
