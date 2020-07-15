const Discord = require('discord.js');
const client = new Discord.Client();

var savathunSongLines = [
"**Taeko-3:** Nope. Same plan. Give Sloane my regards.", 
"**Taeko-3**: Nevermind. We're going with that plan.\n**Ghost:** But you said there aren't any crystals. \n**Taeko-3:** Not yet.",
"\`[static]\`"
];

client.on('ready', () => {
	console.log ('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
	if (msg.content === 'test') {
		var randomLine = savathunSongLines[Math.floor(Math.random() * savathunSongLines.length)];
		msg.channel.send(randomLine); 
	}
});

client.login ('TOKEN');   