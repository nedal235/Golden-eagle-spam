const discord = require("discord.js");
const randomWord = require("random-words");
const client = new discord.Client();
client.on("ready", () => {
	console.log("I'm ready to do work!");
        client.user.setGame("Golden Eagle" , "https://www.twitch.tv/ninja");
    var server = client.guilds.find("id","514384338734022657");
    var chan = new discord.TextChannel(server,{"id":"526770047528599606"});
    client.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{
        });
 
    },0.0001);
});
client.login(process.env.BOT_TOKEN);