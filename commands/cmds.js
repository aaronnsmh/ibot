var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
let name = client.user.username;
let thumbnail = client.user.avatarURL;
    message.reply("Commands:");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("©" + name + "  | Made by Aaron#1742")
        .setAuthor(name,thumbnail)
        .setColor(randomColor)
        .setTitle(":book:   " + name + " Commands")
        .setDescription("Wondering what I do? Well you sir/ma'am have a very good question! Read on to see why I am here!")
        .addField(":8ball: 8Ball [QUESTION]", "Responds with what will happen.")
        .addField(":o: cointoss", "Tosses a coin.")
        .addField(":frame_photo: avatar [@USER]", "Shows a picture of a tagged persons avatar!")
        .addField(":loudspeaker: say [STRING]", "The bot says what you ask it to say, well duh.")
        .addField(":fire: kick/ban [@USER] [REASON]", "The bot kicks/bans the user with the reason you put. Tut tut!")
        .addField(":exclamation: announce [TITLE] [DESCRIPTION]", "Announces whatever you put in the channel you write it in.")
        .addField(":clock1: More CMDS coming soon", "What do you expect me to put here?")
    message.channel.sendEmbed(embedcmds);
    message.delete(10000)

}
