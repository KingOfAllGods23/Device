const code = async () => {//boot
console.time('Initializing time');
console.time();
console.info('Starting...')
console.log('Device activaded [✔️]');
process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
  // Faça o tratamento do erro aqui, como registrar em um arquivo de log ou enviar uma notificação.
});
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//variables
device = require('../utils/discord.js');
const axios = require('axios')
// fetch from'./fetch.mjs'
functions = require('../utils/functions.js');
var queue = new Map();
//proces = require('./variables.json');
//device.client_login;
device.client_login(process.env.token);
device.client.on('ready',() => {
device.client.testing_thing = 'a test that has been passed'  
console.log('login sucessful');
functions.f.f2(device.client, queue);
//console.log(device.client.application.commands)
})
device.client.on('messageCreate', async message => {
  functions.f.f1(device.client, message);
if (message.attachments.size > 0 && message.author.id === '680077059137339422') { 
  //image = message.attachments.first();
  //const response = await axios.get(image.url, { responseType: 'arraybuffer' });
  //const buffer = response.data;
  //console.log(message)
  //message.author.send({files: [buffer]});

    };
if (message.content === 'reg_comands' && message.author.id === '680077059137339422') {
  functions.f.f3(device.client);
  
  
} else {console.log('bruh')}
console.log(message.content)});
device.client.on('messageDelete', async del_message => {
  //if (del_message.author.bot) return;
  console.log(del_message)
  type = 'deleted'
  functions.f.f4(device.client, type, del_message);
});
device.client.on('messageUpdate', async (om, nm) => {
  type = 'edited'
  functions.f.f5(device.client, type, om, nm);
});
device.client.on('messageReactionRemove', async (msg, who) => {
    type = 'reaction_removed',
    //console.log(`This is the delete reaction: ${JSON.stringify(msg)}`);
 // console.log(msg.users.reaction.message.attachments)
  //console.log(who)
  
 // channel = device.client.guilds.cache.get('1150872808394588310').channels.cache.get('1161037555165315173');

  //id = msg.users.reaction.message.channel.id
  //g_idd = msg.users.reaction.message.guild.id
  //console.log('a ID do server em questão: '+g_idd)
  //channel.send({content: `deleted reaction: ${msg._emoji.name}\n from: <@${who.id}> \n at channel <#${id}>`})
    functions.f.f6(device.client, type, msg, who);
  }) 
}

code()
