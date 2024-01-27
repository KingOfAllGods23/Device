pc = async (client, message) => {
const array = ['nigga', 'nigger'];
if (message.author.bot) return;  
let containsBadWord = false;
text = message.content.toLowerCase();
for (const word of array) {
  if (text.includes(word)) {
    containsBadWord = true;
    break;
  }
}

if (containsBadWord) {
  //console.log('Você não deveria dizer isso!');
  // Ou, se estiver no contexto de um bot do Discord:
 message.channel.send("```"+`Forbiden word detected! Your message has been logged and the server administration will be aware.`+"```");
  send_to_channel(message)
} else {
  console.log('Texto limpo, sem palavras proibidas.')}
function send_to_channel(message) {

  // Verifica se a mensagem foi enviada por um bot ou é uma mensagem direta
  if (message.author.bot) return;
    // Mensagem contém palavra proibida, prepare o log
    const logMessage = `# The rules may have been violated!\n`+`* Member: <@${message.author.id}>\n` +
                       "* Content: "+"```"+`${message.content}`+"```\n" +
                       `* Channel: <#${message.channel.id}>`;

    const logChannel = client.guilds.cache.get('1090772624608612393').channels.cache.get('1161343721003032607');
  console.log(logChannel)

    if (logChannel) {
      // Envie a mensagem para o canal de logs
      logChannel.send(logMessage, { code: 'markdown' });
    }



 // Substitua com o token do seu bot


};
};
module.exports = pc