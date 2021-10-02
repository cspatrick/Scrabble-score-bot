const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log("Bot started!");
});

const one = ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"];
const two = ["d", "g"];
const three = ["b", "c", "m", "p"];
const four = ["f", "h", "v", "w", "y"];
const five = ["k"];
const eight = ["j", "x"];
const ten = ["q", "z"];

client.on('message', msg => {
  //get the contents of the messages sent in the discord server
  if (msg.content.substring(0, 10) == '+scrabble ') {
    var score = 0;
    for (var i = 10; i < msg.content.length; i++) {
      if (one.includes(msg.content.charAt(i).toLowerCase())) {
        score += 1;
      }
      else if (two.includes(msg.content.charAt(i).toLowerCase())) {
        score += 2;
      }
      else if (three.includes(msg.content.charAt(i).toLowerCase())) {
        score += 3;
      }
      else if (four.includes(msg.content.charAt(i).toLowerCase())) {
        score += 4;
      }
      else if (five.includes(msg.content.charAt(i).toLowerCase())) {
        score += 5;
      }
      else if (eight.includes(msg.content.charAt(i).toLowerCase())) {
        score += 8;
      }
      else if (ten.includes(msg.content.charAt(i).toLowerCase())) {
        score += 10;
      }
    }

    msg.channel.send("Scrabble score for " + "**" + msg.content.substring(10, msg.content.length + 1) + "**" + ":  " + score);
  }
});

client.login('YOUR BOT TOKEN');
