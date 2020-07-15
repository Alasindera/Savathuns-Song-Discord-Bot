const Discord = require('discord.js');
const client = new Discord.Client();

var savathunSongLines = [
"**Taeko-3:** Nope. Same plan. Give Sloane my regards.", 
"**Taeko-3**: Nevermind. We're going with that plan.\n**Ghost:** But you said there aren't any crystals. \n**Taeko-3:** Not yet.",
"\`[static]\`"
];

// If we wanna grow this, commands should exist in an enum or something but this is fine for now because we just goofin'
var commandSendSongLine = "!song"
var commandGetRaidTime = "!raidtime"
var setRaidTime = "!setraid"

// Hard-coding because this is a proof of concept. Obviously it'll require extra logic to actually work.
var nextRaidTime = "**Thursday, Smarch 35th at 13 PM EDT**"

client.on('ready', () => {
	console.log ('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
	if (msg.content.includes(commandSendSongLine)) {
		var randomLine = savathunSongLines[Math.floor(Math.random() * savathunSongLines.length)];
		msg.channel.send(randomLine); 
	}
});

// There are a fuckton of features we could add for raid scheduling. This is just a basic thing to show the idea.
client.on('message', msg => {
	if (msg.content.includes(commandGetRaidTime)) {
		// idk if this is actually how string escapes work in javascript because I never write shit in js, but google says it is
		msg.channel.send(`The next raid is on ${nextRaidTime}`); 
	}
});

client.on('message', msg => {
	if (msg.content.includes(setRaidTime)) {
		nextRaidTime = setRaidTime.substr(9);
		msg.channel.send(`Raid time scheduled! It will take place on ${nextRaidTime}`); 
	}
});
