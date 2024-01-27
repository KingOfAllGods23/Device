module.exports.run = async (link) => {
console.log('mecanismo de resultado de SONG');
const play = require('play-dl');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const youtubesearchapi = require('youtube-search-api')
if (link.includes('https://open.spotify.com/')) { spotify = 'sim'; tipo = 'spotfy'} else {spotify = 'não'};
if (link.includes('https://soundcloud.com/')) { soundcloud = 'sim'; tipo = 'soundcloud'} else {soundcloud = 'não'};

//const ytdl = require('ytdl-core');
//const songInfo = await ytdl.getBasicInfo(link);
//YOUTUBE
if (link.includes('https://youtube.com/playlist')) { tipo = 'youtube'; tem_playlist = 'sim'} else {tem_playlist = 'não'}
//console.log('Se no link '+link+' tem playlist? A resposta é: '+tem_playlist)
if (spotify === 'não' && soundcloud === 'não' && tem_playlist === 'não') {
//tem_playlist = 'não'
//if (spotify === 'sim') return;  
const { items } = await youtubesearchapi.GetListByKeyword(link);
var url_video = `https://youtube.com/watch?v=${items[0].id}`
console.log('Informação capturada');
if (!items[0].thumbnail.thumbnails[1] && items[0].thumbnail.thumbnails[0]) { logs = items[0].thumbnail.thumbnails[0]['url']
console.log('não tem a 1')} else { console.log('tem a 1'); logs = items[0].thumbnail.thumbnails[1]['url']}

//await delay(600);  
var songs = {
title: items[0].title,
url: url_video,
imagem: logs
};
//var bananinha = {
 // title: songInfo.videoDetails.title,
 // url: songInfo.videoDetails.video_url
//}

//exports.songs = songs;
}

//playlists do YT  
if (tem_playlist === 'sim' && tipo === 'youtube') {

const playlist = await play.playlist_info(link, {incomplete: true});
const videos = await playlist.all_videos();
var lista = videos.map((video) => {
return {title: video.title, url: video.url, imagem: video.thumbnails[3].url};
})
//module.lista = lista
}
//console.log(lista);






//SPOTIFY
if (tem_playlist === 'não' && spotify === 'sim') {

};

if (tem_playlist === 'não' && soundcloud === 'sim') {

}
//exports =   
exports.lista = lista
exports.tem_playlist = tem_playlist
//lista? exports = lista : "";
exports.songs = songs 
//module.exports = bananinha

console.log('Som exportado')
}
