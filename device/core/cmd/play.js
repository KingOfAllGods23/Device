command = async (client, interaction, queue) => {
music_core = require('/home/runner/projecA/device/music core/main.js');
console.log('Queue at play: '+queue)
music_core(client, interaction, queue);
}

module.exports = command