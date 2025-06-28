module.exports.data = {
    name: "ping",
    description: "Ping!",
    type: 1,
    options: [],
    intergration_types: [0, 1],
    contexts: [0, 1, 2],
}

module.exports.excute = async (client, interaction) => {
    const ping = client.ws.ping;
    interaction.reply(ping);
    return;
}