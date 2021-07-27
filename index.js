const rpc = require('discord-rpc');
const client = new rpc.Client({ transport: 'ipc' });
const clientId = '869345861564530688';

client.on('ready', () => {
    client.setActivity({
        details: 'Gaymer',
        state: 'gaming <3',
        startTimestamp: new Date(),
        largeImageKey: "discord_pfp",
        largeImageText: 'Do you wanna Gayme with me? I play Minecraft.',
        smallImageKey: 'discord_pfp',
        buttons: [{label: "Simplistic Advertising", url: "https://discord.gg/DZQHt8dNGU"}, {label: "LGBTQ+ Discord Server", url: "https://discord.gg/faudc6dgXH"}]
    });

    console.log('Ready, and on your profile')
});

client.login({ clientId })

// You can change all the details as you please.
