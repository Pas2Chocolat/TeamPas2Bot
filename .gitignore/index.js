const Discord = require ("discord.js");

var bot = Discord.Client();

bot.on("ready" , function() {
   bot.user.SetGame("TeamPas2, p!help");
   console.log("Le bot a bien été connecté");
});
bot.login("NDMwNjg2NjUxNzk1MTExOTM2.DaT0Tg.3lgB5XVdR3EmCTYGfLrmzVTJDPA");

