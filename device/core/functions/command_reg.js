fn = async (client) => {
console.log('Registering commands [✔️]')
const commands = client.application?.commands
  
//commands?.create({
  //name: 'ping',
 // description: 'Answers with pong',
//}); //ping
//commands?.create({
 // name: 'status',
 // description: 'shows how long is the bot active'
//}); //status
//commands?.create({
  //  name: 'memory_eraser',
   // description: 'erase the memory of someone. also messages but you need to be an admin or owner.',
  //  options:[
  //  {
   //   name: 'user',
   //  description: 'choose a user to use the memory eraser',
    // type: 6,
   //   required: false
   // },
  //  {
   // name: 'message_count',
  //  description: 'Erase messages. You must be an admin or owner to use this',
   // type: 4,
 //   required: false
 // }]
 // }); //eraser

  
//commands?.create({
   // name: 'bonk',
  //  description: 'alguém está te incomodando? usa o bonk!',
   // options:[
  //  {
     // name: 'usuário',
     // description: 'selecione alguém para dar um bonk!',
     // type: 6,
     // required: true
    //}]
 // }); //bonk


  //commands?.create({
     // name: 'teleport',
     // description: 'use teleportation to a channel',
     // options:[
     // {
      //  name: 'channel',
       // description: 'select the channel to use teleportation!',
       // type: 7,
       // required: true
     // }]
  // }); //bonk

  commands?.create({

    name: 'play',
    description: 'Plays a song or a playlist, both from youtube',
    options: [
      {
        type: 3,
        name: "request",
        description: "please insert the name or the link for a music. you can also add a playlist link",
        required: true,
      }
    ],


  }); //play
  
  commands?.create({

    name: 'skip',
    description: 'Skip the current playing song',
    options: [
      {
        type: 4,
        name: 'position',
        description: 'you can use /list to get a position of a song and then you will be able to skip directly to it',
        required: 'false'
      }
    ]


  }); //skip
 
  commands?.create({

    name: 'list',
    description: 'Shows what is currently playing. If there is a queue it will also be displayed',


  }); //lista
 
  commands?.create({

    name: 'stop',
    description: 'This option erase the queue, stops the music and disconnects the device',


  }); //pare
  
  commands?.create({

    name: 'delete',
    description: 'deletes the whole playlist. can also delete a specific song using the optional function',
    options: [
      {
        type: 4,
        name: 'remove',
        description: 'use /list to get a song number, put the number here and the song will be deleted',
        required: 'false'
      }
    ]


  }); //remove
console.log('comandos registrados!')  
//  options: [
    //{
     // type: 3,
     // name: "pedido",
     // description: "INSIRA O NOME OU LINK DA MÚSICA",
     // required: true,
   // }
 // ],  
}
module.exports = fn