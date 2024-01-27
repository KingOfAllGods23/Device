command = async (client, interaction) => {
let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} days\n🗓️ ${hours.toFixed()} hours\n🗓️ ${minutes.toFixed()} minutes\n🗓️ ${seconds.toFixed()} seconds`;

  const embed = {
title:`Up time 🕰️`,
description:`**The device has been active for:**\n${uptime}`
}

  

interaction.editReply({embeds: [embed]})
}

module.exports = command