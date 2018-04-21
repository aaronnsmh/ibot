const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const db = require('quick.db');
const sql = require("sqlite");
sql.open("./score.sqlite");
var randomColor = Math.floor(Math.random() * 16777215).toString(16);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
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



client.on('message', message => {    
    /// if (message.mentions.members.firstKey() === '436253576537440256') {
   /// message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:')
///}
    
    
    let sender = message.author;
    
    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in a guild (server). You can invite me here:**")
        return;
    }
    
    if (message.mentions.members.firstKey() === '422393536420511752') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:')
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

client.on('message', message => {  
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
    });
  }
});
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
