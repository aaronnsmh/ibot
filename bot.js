const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const db = require('quick.db');

var randomColor = Math.floor(Math.random() * 16777215).toString(16);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    let nameid = client.user.id;
    client.user.setPresence({ activity: { name: 'at Koala Cafe!' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});

client.on('ready', () => {
    console.log('Koala Bot is ONLINE. No bugs found at this time.');

});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



    
    
    let sender = message.author;
    
    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in a guild (server). You can invite me here: https://discordapp.com/oauth2/authorize?client_id=383658506060038144&scope=bot&permissions=8200**")
        return;
    }
    
    if (message.mentions.members.firstKey() === '422393536420511752') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:. Run -help if you need any help, or -cmds to view commands.')
    }

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

////////////////////////////////////////////////////////////




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
