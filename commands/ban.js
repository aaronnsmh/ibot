exports.run = (Discord, client, message, args) => {
    let staffc = message.guild.channels.find("name", "logs")
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    let user = message.mentions.users.first();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    if (!staffc) return message.reply('I cannot find a mod-log channel');

    message.guild.member(kUser).ban(kReason);
    let kickChannel = '419094345858154496';
    let pkickchannel = message.guild.channels.find(`name`, "logs");
    message.channel.send('User banned!')
    if (!pkickChannel) return message.channel.send("I can not find the log channel, the user has been kicked. For logs, get the sever admin to make a channel called `logs`.");
    
    const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${kReason}`);
            staffc.send({embed});
    
}
