const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./cfg.json')
client.on('ready' , () => 
{
   console.log('A bot online lett!') 
   client.user.setActivity('Fejlesztés alatt.', {type: 'PLAYING'})
});

client.login(TOKEN)