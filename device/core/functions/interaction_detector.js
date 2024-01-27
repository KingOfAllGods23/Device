code = (client, queue) => {
client.on('interactionCreate', async (interaction)=> {

if (!interaction.isCommand()) {
return;
}
  
try {
await interaction.deferReply();
const slashHandler = require('../com_handler/handler.js');
slashHandler(client, interaction, queue);
console.log('Queue at int_detector: '+queue)
} catch (err) { console.log(err) };
  
});
};
module.exports = code