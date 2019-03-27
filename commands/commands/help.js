const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require(`fs`);
const PREFIX = require("../config.json").PREFIX;

module.exports.run = async (client,msg,args,searchString,url,serverQueue,queue,youtube,handleVideo,play) => {

    msg.delete()

    let embed = new Discord.RichEmbed()
    .setColor(`#ff7400`)
    .setTitle("μ's bot command list")
    .setDescription(`

    **Music Bot Prefix** ===> \"${PREFIX}\"

    **Requested in** ===> \"${msg.guild.name}\"

    -**Music Help**- 

    **${PREFIX}play** <song or author> | To Play A Song.

    **${PREFIX}queue** | To Check The List Of Songs Added.

    **${PREFIX}skip** | Skip and go to the next song.

    **${PREFIX}vol <volume to set>** | To change the volume of the music

    **${PREFIX}pa** | To Pause The Song.

    **${PREFIX}re** | To Resume The Song.

    **${PREFIX}stop** | To Stop Playing The Song.
    
    -**Bot Commands**-

    **${PREFIX}help** | For viewing the list of commands.

    **${PREFIX}serverinfo** | For viewing server info.

    **${PREFIX}botinfo** | For viewing bot info.
    `)
   // .addField("Incase you need help using these commands join our Offical discord server by using",)
    .setFooter(`Requested by ${msg.author.tag}`)
    
    msg.reply(`:mailbox_with_mail: It has been send to your DMs`).then(msg => msg.delete(5000))
    msg.member.send(embed);
    return msg.delete(5000);
}

module.exports.help = {
    name: "help"
}
