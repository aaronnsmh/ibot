exports.run = (Discord, client, message, args) => {

let allowedRole = message.guild.roles.find("name", "bot admin");	

 if(message.member.roles.has(allowedRole.id)) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("I can't announce nothing. Use the format: -announce [TITLE] [DESCRIPTION].");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail("https://t6.rbxcdn.com/fad4c603a443958512e8adb3660ff221")
		   .setTitle(":mega: Announcement:")
		   .setDescription(text)
		   .setFooter("An announcment from " + author + " made at ")
		   .setTimestamp()
		   message.channel.send("Announcement from: " + author);
		   message.channel.send({embed})
	   }
else {
	message.channel.send("You need to have the 'bot admin' role to announce!")
	return;
}
}
