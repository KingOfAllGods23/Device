code = async (client, type, msg, new_msg) => {
const { AttachmentBuilder } = require('discord.js');
g_id = msg.guildId || msg.users.reaction.message.guild.id  
if (msg.author?.id === '1160967079533482054') return console.log('It was the device');
if (g_id === '1150872808394588310') return console.log('from Z.P.A');
//if (msg.channel.id === '1162343690761674832') return console.log('A message has been sent in the spoiler channel');
if (!msg.author && type === 'edited') return;
let image
const axios = require('axios')
if (msg.attachments?.size > 0) { 
image = msg.attachments.first();
response = await axios.get(image.url, { responseType: 'arraybuffer' });
buffer = response.data;
final = new AttachmentBuilder(buffer, {name: 'image.png'});
//console.log('A finaaaal: '+final)
};
if (msg.users?.reaction?.message?.attachments?.size > 0) {
  image = msg.users.reaction.message.attachments.first();
  response = await axios.get(image.url, { responseType: 'arraybuffer' });
  buffer = response.data;
  final = new AttachmentBuilder(buffer, {name: 'image.png'});
}
console.log(image)
const logChannel = client.guilds.cache.get('1090772624608612393').channels.cache.get('1161343721003032607');

  const logChannel2 = client.guilds.cache.get('1150872808394588310').channels.cache.get('1161037555165315173');

async function textbox (content) {
  newContent = "```"+content+"```";
  return newContent
} 
async function sender (embed) {
  if (!image) {
  logChannel.send({embeds: [embed]});
  };
  if (image) {
  logChannel.send({embeds: [embed], files: [final]});
  };
};  
  if (type === 'edited') {
    edited = {
      title: '[ EDITED ] a message was edited',
      description: `### Original value \n ${await textbox(msg.content)} \n### New value \n ${await textbox(new_msg.content)} \n### Author \n## <@${msg.author.id}>\n### Channel \n## <#${msg.channel.id}>`,
      image: {
        url: null
      }
      
    };
    if (image) {edited.image.url = 'attachment://image.png'; edited.title = '[ EDITED ] A message was edited and it has the image bellow'}
    sender(edited)
  };
  if (type === 'deleted') {
    deleted = {
      title: '[ DELETED ] A message was deleted',
      description: `### Message content\n ${await textbox(msg.content)} \n### Author \n## <@${msg.author.id}>\n### Channel \n## <#${msg.channel.id}>`,
      image: { url: null}
    };
    if (image) {deleted.image.url = 'attachment://image.png'; deleted.title = '[ DELETED ] A message was deleted and it has the image bellow'}
    sender(deleted)
    
  };
  if (type === 'reaction_removed') {
    r_deleted = {
      title: '[ REACTION DELETED ] A reaction has been removed',
      description: `### Message content\n ${await textbox(msg.users.reaction.message.content)} \n### Author \n## <@${msg.users.reaction.message.author.id}>\n### Channel \n## <#${msg.users.reaction.message.channel.id}>\n### Reaction Author \n## <@${new_msg.id}>\n### Reaction \n## ${msg._emoji.name}`,
      image: { url: null}
    };
    if (image) {r_deleted.image.url = 'attachment://image.png'; r_deleted.title = '[ REACTION DELETED ] A reaction was deleted and it the message has the image bellow'}
    sender(r_deleted)

  };
}//

module.exports = code