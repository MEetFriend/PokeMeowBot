const Discord = require('discord.js.old');
const client = new Discord.Client();
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    //Move bot into server
    if(message.channel.id === process.env.SERVER_ID_KEY){
        if(message.attachments.size !== 0){
            console.log(message.attachments.first().url);
        };

        //cases for different PokeMeow commands
       switch(message.content){
           //start the program
           case 'start': setTimeout(function(){message.channel.send(';p')}, 2000);
           break;
           //play
           case ';p': setTimeout(function(){message.channel.send('pb')}, 2000);
           break;
           //pokeball
           case 'pb': setTimeout(function(){message.channel.send(';p')}, 13000);
           break;
           //stop program
           case 'stop': setTimeout(function(){console.log("press start to resume")}, 25000);
           break;
       }
    }
});

client.login(mfa.-XUAKwQhsbtgeJsLqT1fCpcBAYKVt_YScjH8s3G3Q__NazzKi89WYTgRrKjJw08rCN35tZuiOrKsjP81cgL8);
