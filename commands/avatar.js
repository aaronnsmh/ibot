var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
if(message.mentions.users.first()) { //Check if the message has a mention in it.
          let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let output = "Avatar URL: " + user.avatarURL";
    
          message.channel.sendMessage(output); //We send the output in the current channel.
        
          
    } else {
          message.reply("Dat user dont exist"); //Reply with a mention saying "Invalid user."
    }
}
