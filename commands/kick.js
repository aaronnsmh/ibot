exports.run = (Discord, client, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");


    message.guild.member(kUser).kick(kReason);
    let kickChannel = '419094345858154496';
    let pkickchannel = message.guild.channels.find(`name`, "logs");
    message.channel.send('User kicked!')
    if (!pkickChannel) return message.channel.send("I can not find the log channel, the user has been kicked. For logs, get the sever admin to make a channel called `logs`.");

    
}
