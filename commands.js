const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const MessageHandler = require('discord-message-handler');
const music = require(`./music.js`);
const commands = require(`./commands.js`);

client.on("ready", () => {
  console.log(`Commands loaded - ${client.user.username}`);
});




client.on('message', message => {
  const prefix = "k)";
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return;
  if(message.channel.type === 'dm' || message.author.bot) return message.reply("You cant use me in PM.");

  if (command === "ping") {
    message.channel.send(`Pong!`);
  }

  if(command === "info") {
   var textArray = [
     `1.2 MB`,
     `1.0 MB`,
     `1.3 MB`,
     `1.1 MB`,
     `1.3 MB`,
     `1.4 MB`
   ];

   var randomRAM = Math.floor(Math.random()*textArray.length);

    const embed = new Discord.RichEmbed()
       .setAuthor(`Information`, `http://icons.iconarchive.com/icons/visualpharm/must-have/256/Information-icon.png`)
       .setTimestamp()
       .addField(`Author`, `ClipzZModz`)
       .addField(`Host`, `Windows Server 2012 R2`)
       .addField(`Client Status`, `${client.status}`)
       .addField(`Client Uptime`, `${Math.round(process.uptime(`HH:mm:ss`))} Seconds`)
       .addField(`RAM Usage`, `${textArray[randomRAM]}`)
       .addField(`CPU Usage`, `0%`)
       .addField(`GPU Usage`, `0%`)
       .addField(`Bot Programmed In`, `discord.js v11.1.0`)
       .setFooter(`© ClipzZModz`)
       .setDescription(`Info Command`)
       message.channel.send({embed});
  }
  if(command === "help") {
    const embed = new Discord.RichEmbed()
       .setAuthor(`Help`, `https://vignette3.wikia.nocookie.net/nethack/images/b/b3/Info.png/`)
       .setTimestamp()
       .addField(`Ping`, `k)ping`)
       .addField(`Information`, `k)info`)
       .addField(`Help`, `k)help`)
       .addField(`Kick`, `k)kick`)
       .addField(`Ban`, `k)ban`)
       .addField(`Warn`, `k)warn`)
       .addField(`Joke`, `k)joke`)
       .addField(`Meme`, `k)meme`)
       message.author.send({embed})

       message.channel.send(":mailbox_with_mail: ");
  }

  if(command === "help") {
    const embed = new Discord.RichEmbed()
       .setAuthor(`Help Music`, `https://vignette3.wikia.nocookie.net/nethack/images/b/b3/Info.png/`)
       .setTimestamp()
       .addField(`Summon`, `k)summon`)
       .addField(`Leave`, `k)leave`)
       .addField(`Play`, `k)play`)
       .setDescription('Adding more soon.')
       message.author.send({embed})

  }

  if (command === "joke") {
    message.reply(`You want a joke huh? Ok let me think :thinking:`).then(message => {
      setTimeout(timer, 5000)
      function timer() {
        let message = client.user.lastMessage;
        var textArray = [
      'Some Texans are mingling at the bar when an Oxford graduate walks in. “Howdy, stranger,” one Texan says. “Where are you from?”, The Oxford graduate answers, “I come from a place where we do not end our sentences in prepositions.”, “Oh, I’m sorry,” replies the Texan. “Where are you from, jackass?”',
      'A panda walks into a bar and gobbles some beer nuts. Then he pulls out a gun, fires it in the air, and heads for the door. “Hey!” shouts the bartender, but the panda yells back, “I’m a panda. Google me!” Sure enough, panda: “A tree-climbing mammal with distinct black-and-white coloring. Eats shoots and leaves.”',
      `While I was out to lunch, my coworker answered my phone and told the caller that I would be back  in 20 minutes. The woman asked,  “Is that 20 minutes Central Standard Time?”`
    ];
    var randomSong = Math.floor(Math.random()*textArray.length);
        message.edit(`${textArray[randomSong]}`);
      }
    });
  }
  if (command === "meme") {
    var textArray = [
    `https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg`,
    `https://media1.giphy.com/media/ehc19YLR4Ptbq/200_s.gif`,
    `https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg`,
];
var meme = Math.floor(Math.random()*textArray.length);
    message.channel.send(textArray[meme]);
  }



})



client.login(config.token);
