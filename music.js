const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const MessageHandler = require('discord-message-handler');
const music = require(`./music.js`);
const commands = require(`./commands.js`);
const yt = require("YTDL-CORE");

client.on("ready", () => {
  console.log(`Music loaded - ${client.user.username}`);
});

client.on('message', message => {
  const prefix = "k)";
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return;
  if(message.channel.type === 'dm' || message.author.bot) return message.reply("You cant use me in PM.");

  if (command === "summon") {
    const voiceChannel = client.channels.find("name", "Music")
    if (!voiceChannel) return message.channel.send("i cant find that channel.");
    voiceChannel.join().then(connection => {
      message.channel.send("I have joined your channel with success, " + message.author.username);
    })
  }
  if (command === "leave") {
    const voiceChannel = client.channels.find("name", "Music")
    if (!voiceChannel) return message.channel.send("im not in a voice channel.");
    voiceChannel.leave();
    message.channel.send("I have left your channel, " + message.author.username);
  }


  if(command === "play") {
    const voiceChannel = message.member.voiceChannel;
  voiceChannel.join()
  .then(Connection => {
    let stream = yt(args.join(" "), {audioonly: true});
    if(!stream) return message.channel.send("Please give me a valid link to play.");
    Connection.playStream(stream);
    yt.getInfo(args.join(" "), function(err, info) {
    const title = info.title;
    message.delete();

    console.log(`${message.author.username}, Queued ${title}`)
    message.channel.send(`**${message.author.username}** Queued, ${title}`)
       })
     })
    }
})


client.login(config.token);
