// ibot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '-';

   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity('nothing | -help', { type: 'WATCHING' });
    client.user.setStatus("online");
});


client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in guilds (servers). Please use our commands in a server with `BloxiCord` in!** *If you believe there is a problem, please contact a server administator or contact our support team.*")
        return;
}
    

   
   
   if (message.mentions.members.firstKey() === '437524390280822784') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:')
   }
   
client.on('guildMemberAdd', member => {
        let name = client.user.username;
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© " + name + " | Made by Aaron #1742")
        .setColor(randomColor)
        .setTitle(":wave: Welcome")
        .setDescription("Use -cmds to find out about the commands!")
     member.sendEmbed(embedinfo);
       console.log(`${member.user.username} has joined`);
});

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ${message.author.id} ran the command: ${cmd} probably unsuccsesfully!`);

        }
    })


client.login(process.env.BOT_TOKEN);
