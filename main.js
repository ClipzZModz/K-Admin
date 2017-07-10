const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const MessageHandler = require('discord-message-handler');
const music = require(`./music.js`);
const commands = require(`./commands.js`);
const events = require("./events.js");
const kickBan = require("./kickBan.js");
const eval = require("./eval.js");

client.on("ready", () => {
  console.log(`Main loaded - ${client.user.username}`);
  client.user.setGame(`${client.user.username} | k)help`);
});

music => {
  console.log("Running music module.");
}

commands => {
  console.log("Running commands module.");
}

events => {
  console.log("Running music module.");
}

kickBan => {
  console.log("Running commands module.");
}

eval => {
  console.log("Running eval module.");
}


client.login(config.token);
