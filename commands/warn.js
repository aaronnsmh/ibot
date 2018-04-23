exports.run = (Discord, client, message, args) => {
        let reason = args.slice(1).join(" ");
        let user = message.mentions.users.first();
        let staffc = message.guild.channels.find("name", "support-staff")

        if (!modlog) 
            return message.reply('I cannot find a mod-log channel');

        if (reason.length < 1) 
            return message.reply('You must supply a reason for the warning.');

        if (message.mentions.users.size < 1) 
            return message.reply('You must mention someone to warn them.').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

        guild.channels.get(staffc.id).send({embed}); return
};
