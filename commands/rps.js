exports.run = (Discord, client, message, args) => {

function doMagic8BallVoodoo() {
    var rand = [':fist: Rock', ' :raised_hand: Paper', ':v: Scissors'];

    return rand[Math.floor(Math.random()*rand.length)];
}

    message.channel.sendMessage(doMagic8BallVoodoo())
    
}
