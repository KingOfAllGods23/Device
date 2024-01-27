command = async (client, interaction) => {
 const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); 
 console.log('This is the type: '+interaction.options.data[0]?.type) 
s1 = interaction.options.data[0]?.value
s2 = interaction.options?.data[1]?.value || false
type = interaction.options.data[0]?.type
var admins =['680077059137339422', '488084678713278474', '490180199388938250', '707633408834011146']
var user = interaction.user.id;
if (!type) { 
interaction.editReply({content: "Error! You must pick one of the options!", ephemeral: true});
await delay(2000)
interaction.channel.bulkDelete(1);
return;
};
if (type === 6 && !s2) {    const embed = {
    color: process.env.color,
    image: {
      url: 'https://media.discordapp.net/attachments/1160968118072516608/1161021752932044931/SFM_FNAF_Anomaly_of_Destiny_3.gif?ex=6536c8c4&is=652453c4&hm=d83fbc6bbebf946dcfdb1f9a19094c0105f02ebe594868f0e9a42fbe10dd71c9&='
    },
    description: `<@${interaction.user.id}> used memory eraser on <@${interaction.options.data[0].value}>`
  }  

interaction.editReply({embeds: [embed]});}
let is_admin
if (type === 4 && !s2) {
const value = interaction.options.data[0].value;
for (const word of admins) {
  if (user.includes(word)) {
    is_admin = true;
    break;
  }
}
console.log(is_admin)
if (!is_admin) { 
interaction.editReply({content: "Error! You do not have permission to use this command!", ephemeral: true}); return;
};
if (value < 0 || value === 0 || value > 100) { 
  
interaction.editReply({content: 'Error! The minimun value is 1, and the maximun is 100!'});
await delay(2000)
interaction.channel.bulkDelete(1);
return;};
  
interaction.editReply({content: 'Erasing messages now'});
await delay(2000) 
interaction.channel.bulkDelete(1)
embed2 = {

  color: process.env.color,
    image: {
      url: 'https://media.discordapp.net/attachments/1160968118072516608/1161021752932044931/SFM_FNAF_Anomaly_of_Destiny_3.gif?ex=6536c8c4&is=652453c4&hm=59d83fbc6bbebf946dcfdb1f9a19094c0105f02ebe4868f0e9a42fbe10dd71c9&='
    },
    description: `a total of ${value} messages were erased`
  }  
delete_messages = async (v) => {
  
await interaction.channel.bulkDelete(v);
await interaction.channel.send({embeds: [embed2]});};
const the_deleted = await interaction.channel.messages.fetch({limit: value + 1});
await delay (1000)
const listamusic = the_deleted.map((song) => `${song.author.username}:${song.content}`).join('\n');
console.log(listamusic);
interaction.user.send({content: `here are all of the deleted messages in <#${interaction.channel.id}>`})
//console.log(the_deleted)
log_msg(listamusic);
function log_msg(msg_text) {
  if (msg_text.length < 1994 || msg_text.length === 1994) { 
    
  final_text = msg_text
  interaction.user.send({content: "```"+final_text+"```"})
  }
  else if (msg_text.length > 1994) { 
  final_text = msg_text.slice(0, 1994)
  interaction.user.send({content: "```"+final_text+"```"})
  const remains = msg_text.slice(1995, msg_text.length)
  log_msg(remains)
  }
  
}
  
await delay(3000)
delete_messages(value);
};

if (s1 && s2) { 
  
interaction.editReply({content: 'Error! pick only one option!'})
await delay(2000);
interaction.channel.bulkDelete(1);
return;
}

}


module.exports = command