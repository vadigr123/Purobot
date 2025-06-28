module.exports.data = {
    name: "play",
    description: "Phát nhạc",
    type: 1,
    options: [],
    intergration_types: [0],
    contexts: [0],
}

module.exports.excute = async (client, interaction) => {
    const ping = client.ws.ping;
    interaction.reply(ping);
    return;
}