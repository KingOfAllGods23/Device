const code = async (client, interaction, queue) => {
//inicio da função  
//----------------------------------------------------------------

//variáveis
var sc = interaction.commandName
var slash = interaction.options.data[0]?.value
var embeds = require('./embed_master.js');
var voiceChannel = interaction.member.voice.channel;
if (!voiceChannel) { 
interaction.editReply({embeds: [embeds.entre_primeiro], ephemeral: true}); return;
};
var endoesqueleto = interaction.client.user
var youtubesearchapi = require('youtube-search-api');
var Discord = require('@discordjs/voice');
var ytdl = require('ytdl-core');
var color = process.env.COLOR;
var delay = ms => new Promise(resolve => setTimeout(resolve, ms));
var permissions = voiceChannel.permissionsFor(endoesqueleto);
var caminho_do_gerador_de_resultado = process.env.PATH_RESULTADO;
var id_de_servidor = interaction.guild.id
var { createAudioPlayer, createAudioResource } = require('@discordjs/voice');
var serverQueue = queue.get(id_de_servidor);
var playdl = require('play-dl')
var connection = Discord.joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
//highWaterMark: 33554432,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator});
stream_config = {
//fmt: "ogg",
//highWaterMark: 33554432,
//liveBuffer: 33554432,
//dlChunkSize: 0,
//bitrate: 128,
//type: 'opus',
//quality: "highestaudio",
};
//comandos;
if (sc === 'play') {
    const feito = {
  color: process.env.COLOR,
  title: "done!",
  thumbnail: {
    url: 'https://media.discordapp.net/attachments/1160968118072516608/1165893713990529104/giphy.gif?ex=65488222&is=65360d22&hm=e0309061a03c73ef5961947979aa48cdf64ecc8186edf27c300195393414e427&='
  },
  description:'processing your request'
  }

interaction.editReply({embeds: [feito], ephemeral: true, fetchReply: true});
console.log('Um erro foi detectado na fábrica de musicas!');
}
  
if (sc === 'skip') {
skip(interaction, serverQueue);
return;
} ;
if (sc === 'stop') {
var comando = 'sim'
sai(interaction, serverQueue, comando);
return;
};
if (sc === 'list') {
lista(interaction, serverQueue);
return;
};
if (sc === 'play') {
try {



//if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
//return interaction.editReply({embeds: [embeds.sem_permissão], ephemeral: true}); 
//};


//coletor de música
try {

var resultados = require('./result.js');
await resultados.run(`${slash}`);  


} catch (err) { 

console.log('Um erro foi detectado na etapa de coletar o link pelo YTDL-CORE no resultados.js, veja o que aconteceu:' + err)
interaction.channel.send({embeds: [embeds.erro_fabrica_de_musicas]});
return;
};

await delay(500);

const {songs, tem_playlist, lista} = require('./result.js');
let song
if (songs) { song = songs };
playlist = tem_playlist
 //organizador de fila
  if (!serverQueue) {
var queueContruct = {
textChannel: interaction.channel,
voiceChannel: voiceChannel,
connection: null,
songs: [],
volume: 5,
playing: true
};


const abacate = interaction.guild.id
//console.log('A lista: '+lista);
//console.log('o song'+song);

queue.set(abacate, queueContruct);
if (playlist === 'sim') { queueContruct.songs.push(...lista) } else if (playlist === 'não' && song) { queueContruct.songs.push(song)};
console.log(queueContruct.songs)
await delay(2000);

try {
  //const connection = Discord.joinVoiceChannel({
   // channelId: interaction.member.voice.channel.id,
  //  guildId: interaction.guild.id,
   // adapterCreator: interaction.guild.voiceAdapterCreator
//});
  queueContruct.connection = connection;
  transform(interaction.guild.id, queueContruct.songs[0]);
//var lista_de_musicas_yt = queueContruct.songs.map((song) => `**• ${queueContruct.songs.indexOf(song) + 1} | ${song.title}**`).slice(40).join('\n');
var playlista_yt = {
  title: 'Playlist detected!',
  color: color,
  description: "```" + 'your playlist will be played! To verify, use /list' + "```"
}  
  if (tem_playlist === 'sim') { interaction.channel.send({embeds: [playlista_yt]}) };
  //console.log(queueContruct.songs);
 } catch (err) {
      //console.log(err);
  queue.delete(interaction.guild.id);
  return console.log(err);
 }
  };
  if (serverQueue) {
await delay(1000)
interaction.deleteReply();
if (playlist === 'sim') { serverQueue.songs.push(...lista) } else if (playlist === 'não' && song) { serverQueue.songs.push(song)};

if (tem_playlist === 'não') { const descrição = `The device received the song **${song.title}** and added sucessfully to the queue. use /list to check out`

const adicionado = {
color: color,
description: descrição
}

return interaction.channel.send({embeds: [adicionado]})} else {
  var playlist_adicionada = {
    tittle: 'Playlist detected!',
    description: "```"+"All musics from the chosen playlist were added right at the end of the currect queue in order. In case you want to directly skip to it, use /list then find the number of the first song in your playlist, so use /skip and use the optional function to jump to the exact number where the playlist starts"+"```",
    color: color
  }
  interaction.channel.send({embeds: [playlist_adicionada]});
}
};
} catch (err) {

console.log(err)
interaction.channel.send({embeds: [embeds.erro_fabrica_de_musicas]})
}
};
if (sc === 'aleatório') {
guild = interaction.guild
random_gen(interaction, guild);
}
if (sc === 'delete') {
  remove(interaction, serverQueue)
}

//funções
async function random_gen(interaction, guild) {

try {

try {

randomizador = require('/home/runner/Marryana/núcleo/central-sonora/randomizer.js');
randomizador.run();
} catch (err) {console.log('Erro no randomizador!' + err)};

if (!voiceChannel) { 
interaction.editReply({embeds: [embeds.entre_primeiro], ephemeral: true}); return;
};

if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
return interaction.editReply({embeds: [embeds.sem_permissão], ephemeral: true}); 
};

//Determinador de link aleatório
var rname = require('/home/runner/Omnitrix/núcleo/central-sonora/randomizer.js')    
var song_name_result = rname.rname
var pesquisa_de_texto = `music ${song_name_result}`
const { items } = await youtubesearchapi.GetListByKeyword(pesquisa_de_texto);
var resultado = `https://youtube.com?v=${items[0].id}`;
var link = resultado  

await delay (500)
//coletor de música
try {

var resultados = require(caminho_do_gerador_de_resultado);
await resultados.run(link);  


} catch (err) {console.log('Um erro foi detectado na etapa de coletar o link pelo YTDL-CORE no resultados.js, veja o que aconteceu:' + err)};

await delay(500);

const songs = require('./resultado.js');
let song = songs.songs
 //organizador de fila
  if (!serverQueue) {
    var queueContruct = {
      textChannel: interaction.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };


const abacate = interaction.guild.id

queue.set(abacate, queueContruct);
queueContruct.songs.push(song);


try {
const connection = Discord.joinVoiceChannel({

channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator
});
queueContruct.connection = connection;
random(interaction.guild.id, queueContruct.songs[0])
//console.log(queueContruct.songs);

} catch (err) {
//console.log(err);
queue.delete(interaction.guild.id);
return console.log(err);
}
  };
  if (serverQueue) {
await delay(1000)
serverQueue.songs.push(song);

const descrição = `Meus sistemas detectaram um pedido! Você pediu **${song.title}** certo? Não se preocupe, o pedido foi adicionado com sucesso na lista de reprodução! use /lista para saber quantas músicas estão na fila!`

const adicionado = {
color: color,
description: descrição
}

return interaction.channel.send({embeds: [adicionado]})
}; 

} catch (err) {console.log('Um erro foi detectado na fábrica de musicas do MODO ALEATÓRIO!' + err)}

};
async function skip(interaction, guild) {

//const serverQueue = queue.get(interaction.guild.id);
//mensagens em caso de não haver como pular

if (!serverQueue) {
interaction.editReply({embeds: [embeds.nada_tocando]});
return;
};

if (!serverQueue.songs[1]) return interaction.editReply({embeds: [embeds.sem_músicas_para_pular], ephemeral: true});

if (!interaction.member.voice.channel) return interaction.reply({embeds: [embeds.necessário_mesmo_canal_para_pular], ephemeral: true});

if (!serverQueue) return interaction.reply({embeds: [embeds.não_pula_fila_vazia], ephemeral: true});

//mensagem indicando o pulo

interaction.editReply({embeds: [embeds.pulada]});

//Pulando a musica e reproduzindo a proxima caso haja
try {
if (typeof interaction.options.data[0] != 'undefined') {
  console.log(interaction.options)
  const número = interaction.options.data[0].value || 1
  console.log(número);
  if (número < 1) { console.log('ERRAAADOOOOOOOOOOO AAAAA ')}
  serverQueue.songs.splice(0, número);
} else { serverQueue.songs.shift() }
await delay(500)
transform(guild, serverQueue.songs[0]);
} catch (err) {console.log(err)}
}
async function pla(guild, song) {
//conexão ao canal de voz
const serverQueue = queue.get(interaction.guild.id);
//configurações da stream de reprodução
var info = song.url
var dlstream = await playdl.stream(info, {discordPlayerCompatiblity: true});
var resource = createAudioResource(dlstream.stream, {
     inputType : dlstream.type
});
var player = createAudioPlayer();
connection.subscribe(player);
//Reproduzir as músicas  
player.addListener("stateChange", (oldOne, newOne) => {
if (newOne.status == "idle") {
console.log("The song finished");
}
});
player.play(resource);
//mensagens a serem enviadas!  
var mensagem_do_que_reproduz = `Now playing the following song in <#${interaction.member.voice.channel.id}> 

**${song.title}**`;
var vou_reproduzir = {
description: mensagem_do_que_reproduz,
color: color,
thumbnail: {
  url: song.imagem
}
};
serverQueue.textChannel.send({embeds: [vou_reproduzir]});
if (interaction) { try { interaction.deleteReply(); } catch (err) {console.log(err) } };
player.on(Discord.AudioPlayerStatus.Idle, () => {
serverQueue.songs.shift()
transform(guild, serverQueue.songs[0])
}).on("error", error => console.error(error));






};
async function random(guild, song) {

//conexão ao canal de voz
const serverQueue = queue.get(interaction.guild.id);
const connection = Discord.joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
highWaterMark: 50,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator});
//O que fazer quando não tem mais músicas
if (!song) {
connection.destroy();
queue.delete(id_de_servidor);
interaction.channel.send({embeds: [fim_de_musicas]})
return;
};
//configurações da stream de reprodução
var dlstream = await playdl.stream(song.url);
var resource_random = createAudioResource(dlstream.stream, {
     inputType : dlstream.type
});
//Reproduzir as músicas  
var player = createAudioPlayer();
connection.subscribe(player);
await delay(500);
player.play(resource_random);


player.on(Discord.AudioPlayerStatus.Idle, () => {
serverQueue.songs.shift();
random_gen(interaction, guild);
}).on("error", error => console.error(error));

//mensagens a serem enviadas!  
var mensagem_do_que_reproduz = `Agora, vou tocar no <#${interaction.member.voice.channel.id}> a seguinte música!: 

**${song.title}**`;

var vou_reproduzir = {
description: mensagem_do_que_reproduz,
color: color
};

serverQueue.textChannel.send({embeds: [vou_reproduzir]});

};
async function lista(interaction, song, queueContruct) {
try {
jaja = interaction.guild.id

//const serverQueue = queue.get(interaction.guild.id);

if (!serverQueue) return interaction.editReply({embeds: [embeds.semlista], ephemeral: true});

reproduct = serverQueue.songs
const lista2 = reproduct.filter(song => song.title !=  serverQueue.songs[0].title).map((song) => "```"+`${serverQueue.songs.indexOf(song)}.• | ${song.title}`+"```").slice(0, 40).join('\n');
const lista3 = reproduct.filter(song => song.title !=  serverQueue.songs[0].title).map((song) => "```"+`${serverQueue.songs.indexOf(song)}.• | ${song.title}`+"```").slice(40, 85).join('\n');
const lista4 = reproduct.filter(song => song.title !=  serverQueue.songs[0].title).map((song) => "```"+`${serverQueue.songs.indexOf(song)}.• | ${song.title}`+"```").slice(86, 120).join('\n');


//const lista3 = reproduct.filter(song => song.title !=  serverQueue.songs[10].title).map((song) => "```"+`${serverQueue.songs.indexOf(song)}.• | ${song.title}`+"```").slice(11, 20).join('\n');

const listamusic = serverQueue.songs.map((song) => `**• | ${song.title}**`).join('\n');

const listaSolo = {
color: color,
title: "Showing queue",
fields: [{

name:`**playing now:**`,

value:`${serverQueue.songs[0].title}`}

]

};

const listaDual = {
color: color,
title: "Showing queue",
description: `**playing now:** `+"```"+`${serverQueue.songs[0].title}`+"```"+`
`+`
`+"next songs on the queue:"+`
`+`
`+`${lista2}`

};
const listaTriple = {
color: color,
title: "Showing extended queue list | 1 ",
description: `${lista3}`

};

const listaQuad = {
color: color,
title: "Showing extended queue list | 2",
description: `${lista4}`

};
let numeral = await serverQueue.songs

let qnumeros = await numeral.length

console.log(qnumeros);


if (serverQueue.songs[1] && !serverQueue.songs[41]) { 
  var lista = listaDual
  console.log(lista2)
  interaction.editReply({embeds: [lista], ephemeral: true, fetchReply: true})
} else if (serverQueue.songs[0] && !serverQueue.songs[1]) {

var lista = listaSolo;
interaction.editReply({embeds: [lista], ephemeral: true, fetchReply: true})

} else if (qnumeros > 1 && serverQueue.songs[41] && !serverQueue.songs[86]) {
  var lista = listaDual;
  console.log('extendida')


  interaction.editReply({embeds: [lista, listaTriple], ephemeral: true, fetchReply: true})
} else if (qnumeros > 1 && serverQueue.songs[41] && serverQueue.songs[86]) {
  var lista = listaDual;
  interaction.editReply({embeds: [lista, listaTriple]}).then(() => interaction.channel.send({embeds: [listaQuad]}));
}

//else if (qnumeros > 1 && lista2.lenght > 1024) {
//listaDual.fields.push({
  //name: `Ordem de 11 a 20`,
  //value: lista3
//})
 // var lista = listaDual

//  }



} catch (err) {console.log(err)}};
async function sai(message, guild, comando) {
//"você precisa estar em um canal de voz para parar a musica!"
const serverQueue = queue.get(interaction.guild.id);

if (!serverQueue) return;

juju = interaction.guild.id



var mensagem_saiu = { 
description:`**Stoped playing music in <#${interaction.member.voice.channel.id}>!**

In case you wish to continue later, use /play!`,
color:color
};

if (!interaction.member.voice.channel)
return interaction.editReply({embeds: [embeds.mesmo_canal_para_parar], ephemeral: true});
serverQueue.songs = [];

if (comando === 'não') {
  serverQueue.textChannel.send({embeds: [embeds.fim_de_musicas]});
} else {
  interaction.editReply({embeds: [mensagem_saiu]});
}

//const connection = Discord.joinVoiceChannel({
//channelId: interaction.member.voice.channel.id,
//guildId: interaction.guild.id,
//adapterCreator: interaction.guild.voiceAdapterCreator
//});
//var stream_off = ytdl('https://www.youtube.com/watch?v=0YMmSw0Hbak&ab_channel=Candycat', {filter: 'audioonly'});
var resource_off = createAudioResource('/home/runner/projecA/device/music core/merasmus_disappear.wav');
var player_off = createAudioPlayer();
await delay(500);
connection.subscribe(player_off);
player_off.play(resource_off);
player_off.on(Discord.AudioPlayerStatus.Idle, () => {
queue.delete(juju);
connection.destroy();
}).on("error", error => console.error(error));  


  queue.delete(guild.id);

};
async function transform(guild, song) {
const serverQueue = queue.get(interaction.guild.id);

if (!song) {
var nope = 'não'
sai(song, guild, nope);
//interaction.channel.send({embeds: [fim_de_musicas]})
return;
};
//configurações da stream de reprodução
//var stream2 = ytdl('https://www.youtube.com/watch?v=LUBAIzdcXN4&ab_channel=Uzumakirimuru', {filter: 'audioonly'});
//console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA '//+stream2.readableHighWaterMark)
//Reproduzir as músicas  
var playerr = createAudioPlayer();
var resource2 = createAudioResource('/home/runner/projecA/device/music core/spell_mirv_cast.wav');

await delay(500);

connection.subscribe(playerr);

playerr.addListener("stateChange", (oldOne, newOne) => {
if (newOne.status == "idle") {
console.log("The song finished");
}
});
playerr.play(resource2);
//mensagens a serem enviadas!  

playerr.on(Discord.AudioPlayerStatus.Idle, () => {
pla(guild, serverQueue.songs[0])
}).on("error", error => console.error(error));
};
async function remove(interaction, fila) {

var playlist_limpada = {
  color: color,
  title: 'feito!',
  description: "```"+"All songs removed. You can add more using /play. If no songs are added, the device will disconnect on the ending of the current song"+"```"
}
  if (typeof interaction.options.data[0] != 'undefined' && interaction.options.data[0].value != 0) {
   var remove_n = interaction.options.data[0].value
   var m_removida = {
    color: color,
    title:'entendido!',
    description: `The song **${fila.songs[remove_n ].title}** has been removed! To check out, use /list`
  };
   interaction.editReply({embeds: [m_removida]});


  fila.songs.splice(remove_n, 1)
} else if (typeof interaction.options.data[0] != 'undefined' && interaction.options.data[0].value <= 0) {
var impossivel_zero = {
      color: color,
      tittle: 'Denied',
      description: "```"+"0 means the current song, you can't also add negative numbers! If you wish to remove the current song, use skip instead. If there's no song left in queue, use /play do add more, then skip. Also if you feel like wants to stop listening, use /stop."+"```"
  }
interaction.editReply({embeds: [impossivel_zero]})
} else { 
  fila.songs.splice(1);
  interaction.editReply({embeds: [playlist_limpada]}) }
 // var remover_musicas = {
   // color: color,
   // description: 
  //}
};

//fim da função
//-----------------------------------------------------------------
};

module.exports = code