exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
    var rand = [':fist: Rock', ' :raised_hand: Paper', ':v: Scissors'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail("https://cdn.vectorstock.com/i/1000x1000/91/89/rock-paper-scissors-game-vector-3959189.jpg")
           	   .setAuthor(name,thumbnail)
		   .setTitle(":fist: Rock, :raised_hand: Paper, :v: Scissors")
		   .addField("Result: ",doMagic8BallVoodoo())
		   .setFooter("Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send(":8ball: from: " + author);
		   message.channel.send({embed})
    

}
