const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {


 
 console.log(`Logged in as [ Pharaohs]`);

});














const adminprefix = "!";
const devs = ['466237189244715008'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله الي  : ${argresult}**`)
}
});







client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '4fun');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField('' , ` **Welcome To 4FUN Server :dizzy:**, ${member}`)
   
              
               
              
    
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });









client.login(process.env.BOT_TOKEN);
