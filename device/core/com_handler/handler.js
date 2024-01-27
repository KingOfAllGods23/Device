handler = async (client, interaction, queue) => {
const { commandName, options } = interaction
command = commandName
caminho = `../cmd/${command}.js`
try { var commandPath = caminho } catch (err) {console.log(err)} 
interaction.options.data[0] ? console.log('Nome do comando da interação'+interaction.commandName) : "";

if (commandPath) {   
try {
slashCommand = require(commandPath);
slashCommand(client, interaction, queue);
console.log('Queue at handler: '+queue);
} catch (err) {console.log(err)}
} 
};
module.exports = handler