var color = 13107275

var entre_primeiro = {

description:'Error! Mus be in a voice channel to play songs',
color: color
};
var sem_permissão = {
color: color,
description: 'The device has not permission to connect and/or speak'
};
var sem_músicas_para_pular = {
description:'Error, you can not skip to a next song because there is nothing left. If you wish to play something different that the current song, use /play then, once the song is added, use /skip to jump to it',
color:color};
var necessário_mesmo_canal_para_pular = {
description: "Error! In order to skip songs you must be connect to the same voice channel as the device",
color: color
};
var não_pula_fila_vazia = {
description:"Error! No songs left!",
color:color
};
var pulada = {
color: process.env.COLOR,
description: `skipping to the next song`
};
var semlista = {
description:`Error! There's no song queue, use /play to play a song`,
color: color
};
var mesmo_canal_para_parar = {
description:"Error! To stop the music, you must be in the same voice channel as the device",
color: color,
};
var nada_tocando = {
description: 'Nothing playing. Device waiting for commands',
color: color
};
var fim_de_musicas = {
description: 'song queue finished. you can request more using /play or /random. the last one plays random music',
color: color
};
var erro_fabrica_de_musicas = {
  description: 'Error! Please be sure the song name is correct or try to paste a link instead. If the error persists, contact the developer',
color: color
}

var embeds = {
  "entre_primeiro": entre_primeiro,
  "sem_permissão": sem_permissão,
  "sem_músicas_para_pular": sem_músicas_para_pular,
  "necessário_mesmo_canal_para_pular": necessário_mesmo_canal_para_pular,
  "não_pula_fila_vazia": não_pula_fila_vazia,
  "pulada": pulada,
  "semlista": semlista,
  "mesmo_canal_para_parar": mesmo_canal_para_parar,
  "nada_tocando": nada_tocando,
  "fim_de_musicas": fim_de_musicas,
  "erro_fabrica_de_musicas": erro_fabrica_de_musicas
};
e_master2 = [entre_primeiro]
//console.log(embeds);
//console.log(e_master2[0])
//console.log(entre_primeiro)
//module.exports = { entre_primeiro, sem_permissão, sem_músicas_para_pular, necessário_mesmo_canal_para_pular, não_pula_fila_vazia, pulada, semlista, mesmo_canal_para_parar, nada_tocando, fim_de_musicas, erro_fabrica_de_musicas }

module.exports = embeds;