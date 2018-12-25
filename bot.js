const discord = require("discord.js");
const randomWord = require("random-words");
const bot = new discord.Client();
bot.on("ready", () => {
	console.log("I'm ready to do work!");
        bot.user.setGame("Golden Eagle" , "https://www.twitch.tv/ninja");
    var server = bot.guilds.find("id","514384338734022657");
    var chan = new discord.TextChannel(server,{"id":"526770047528599606"});
    bot.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{
        });
 
    },0.0001);
});
bot.login(process.env.BOT_TOKEN);