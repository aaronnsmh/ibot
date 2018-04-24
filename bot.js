const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const db = require('quick.db');

var randomColor = Math.floor(Math.random() * 16777215).toString(16);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity(' nothing | =-help', { type: 'WATCHING' });
    client.user.setStatus("online");
});


client.on('message', message => { 
    let sender = message.author;
}
          
if (sender.bot) return;

     if (message.channel.type === 'dm') {
        var embederrordm = new Discord.RichEmbed()
        .setTitle('Error 404:')
        .setDescription('Our system can only detect things in a guild!')
        .setImage('https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif')
        .setFooter('Error 404: DM Message')
        .setColor('#000000');
        message.channel.send(embederrordm);
        return;
    }
    
client.on("message", message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  prefix = prefixMention.match(message.content) ? message.content.match(prefixMention)[0] + " " : prefix;
    message.channel.send(`Hi there! How can I help? My prefix is '-'.`);
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

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`);

        }
    })



////////////////////////////////////////////////////////////




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
