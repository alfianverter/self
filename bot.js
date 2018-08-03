/*/*
    Ryley Zay Sevier
    1/6/2018

    installed as crashBot.service on terra
    systemd script in /etc/systemd/system/crashBot.service
    systemctl start crashBot.service
    
    will look into a folder called audio in the same directory as the working directory
    and use that as it's source of files. 
*/
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 120000);

   /*
    Ryley Zay Sevier
    1/6/2018

    installed as crashBot.service on terra
    systemd script in /etc/systemd/system/crashBot.service
    systemctl start crashBot.service
    
    will look into a folder called audio in the same directory as the working directory
    and use that as it's source of files. 
*/

    const ytdl = require('ytdl-core');
/*
    config.json should contain your bot's token 
    
    {"token": "KEYVALUEHERE"}
*/

const Discord = require('discord.js');
const client = new Discord.Client();

const bot = new Discord.Client();

let settings = {
    character: "§",
    joinDelay: 500,
    messageDelay: 1000,
    delayPadding: 250
};

function rand(value) {
    return Math.floor(Math.random() * settings.delayPadding + value - settings.delayPadding);
}


client.on('ready', () => {
    console.log("ready");
});
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});



//command listener

client.on('message', message => {

  if (message.content === 'v') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
                    .then(connection => { 
    console.log("joined channel");
            const stream = ytdl('https://www.youtube.com/watch?v=l4fslRSF2kE', { filter : 'audioonly' });
            const streamOptions = { seek: 0, volume: 0.5, repeat: true };
            const dispatcher = connection.playStream(stream, streamOptions);
        

// Files on the internet
//connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3');

// Local files
//connection.play('/home/discord/audio.mp3');
  })
    }}
               
    
    //override the sounds that are playing with a command
    if (message.content === '-') {
        if (message.member.voiceChannel) {
            message.delete(0);
            message.member.voiceChannel.leave();
            console.log("left a channel");
        } else {    }
    }

    if (message.content === "test") { 
      var interval = setInterval (function () {
        message.channel.send(" SELAMAT MALAM SEMUANYA !! HAPPY MAINING !! ")
      }, 1000); 
    }
  });
client.login("NDc0OTQxMDEzODQ5Mjc2NDE2.DkYm7g.EBhB4IdqoGuX5D3l35RbAwfWMh8");