const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const MessageHandler = require('discord-message-handler');
const music = require(`./music.js`);
const commands = require(`./commands.js`);

client.on("ready", () => {
  console.log(`Kick Ban loaded - ${client.user.username}`);
});


MessageHandler.setCaseSensitive(false);

client.on('message', message => {
    MessageHandler.handleMessage(message);
    console.log(`${message.author.username} - ${message.content}`);
});

MessageHandler.enableLogging((filterType, filter, message) => {
    console.log(`${new Date().toISOString()} ${filterType}: ${filter} - "${message.content}"`);
});



MessageHandler.onCommand("k)kick").do((args, rawArgs, message) => {
  if(message.channel.type === 'dm' || message.author.bot) return message.reply("You cant use me in PM.");
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) { return message.reply("please mention a user to kick."); }
    message.guild.member(kickMember).kick();
    message.channel.sendMessage("Member kicked.");
    const embed = new Discord.RichEmbed()
    .setAuthor(`Member Kicked`, `https://vignette3.wikia.nocookie.net/nethack/images/b/b3/Info.png/`)
    .setTimestamp()
    .addField(`Member`, `${kickMember}`)
    .addField(`Type`, `Member Kicked`)
    .addField(`Staff Member`, `${message.author.username}`)
    let WarnChannel = client.channels.find("name", "killerbot_logs");
    WarnChannel.send({embed});
  } else {
    const embed = new Discord.RichEmbed()
    .setAuthor('Something bad happend..', `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Help-browser-red.svg/600px-Help-browser-red.svg.png`)
    .setTimestamp()
    .addField(`ERROR:`, `${message.author.username} doesnt have access to that command, contact ClipzZModz if you think this is an error client-sided.`)
    message.channel.send({embed});
  }
})

MessageHandler.onCommand("k)ban").do((args, rawArgs, message) => {
  if(message.channel.type === 'dm' || message.author.bot) return message.reply("You cant use me in PM.");
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) { return message.reply("please mention a user to swing the dank  hammer on! :hammer:."); }
    message.guild.member(kickMember).ban();
    message.channel.sendMessage(`YOU SWUNG THE HAMMER ON ${kickMember}!!!!!! :hammer:`);
    const embed = new Discord.RichEmbed()
    .setAuthor(`Member Banned`, `https://vignette3.wikia.nocookie.net/nethack/images/b/b3/Info.png/`)
    .setTimestamp()
    .addField(`Member`, `${kickMember}`)
    .addField(`Type`, `Member Banned`)
    .addField(`Staff Member`, `${message.author.username}`)
    let WarnChannel = client.channels.find("name", "killerbot_logs");
    WarnChannel.send({embed});
  } else {
    const embed = new Discord.RichEmbed()
    .setAuthor('Something bad happend..', `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Help-browser-red.svg/600px-Help-browser-red.svg.png`)
    .setTimestamp()
    .addField(`ERROR:`, `Kid.. you cant swing that hammer like that! Your only a child!`)
    message.channel.send({embed});
  }
})

MessageHandler.onCommand("k)warn").do((args, rawArgs, message) => {
  if(message.channel.type === 'dm' || message.author.bot) return message.reply("You cant use me in PM.");
  let modRole = message.guild.roles.find("name", "Staff");
  if(message.member.roles.has(modRole.id)) {
    let warnMember = message.guild.member(message.mentions.users.first());
    let reason = args.join(" ");
    if (!warnMember) { return message.reply("please mention a user to warn."); }
    if (!reason) { return message.reply("Please provide me a reason to warn this user."); }

    message.channel.sendMessage("Member Warned.");
    const embed = new Discord.RichEmbed()
    .setAuthor(`Member Warned`, `https://vignette3.wikia.nocookie.net/nethack/images/b/b3/Info.png/`)
    .setTimestamp()
    .addField(`Member`, `${warnMember}`)
    .addField(`Type`, `Warned`)
    .addField(`Staff Member`, `${message.author.username}`)
    .addField(`Reason`, `${reason}`)
    let WarnChannel = client.channels.find("name", "killerbot_logs");
    WarnChannel.send({embed});
    warnMember.send({ embed });
  } else {
    const embed = new Discord.RichEmbed()
    .setAuthor('Something bad happend..', `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Help-browser-red.svg/600px-Help-browser-red.svg.png`)
    .setTimestamp()
    .addField(`ERROR:`, `${message.author.username} doesnt have access to that command, contact ClipzZModz if you think this is an error client-sided.`)
    message.channel.send({embed});
  }
})


client.login(config.token);
