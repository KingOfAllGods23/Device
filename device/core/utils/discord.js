const { Client, GatewayIntentBits, Partials } = require('discord.js');
const Intents = GatewayIntentBits
var client = new Client({ 
  
intents:[
Intents.Guilds, 
Intents.GuildMessages,
Intents.GuildVoiceStates,
Intents.DirectMessages,
Intents.DirectMessageReactions,
Intents.DirectMessageTyping,
Intents.GuildMessageReactions,
Intents.GuildMessages,
Intents.MessageContent
],
partials: [
  Partials.Channel,
  Partials.Message
]
});
log = (key) => {
  client.login(key)
}
device = {
  client: client,
  client_login: log
}

module.exports =  device