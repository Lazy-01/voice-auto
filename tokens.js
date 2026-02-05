// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1406991400683307099",
        serverId: "1383515088803070103",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
        {
        channelId: "1406991400683307099",
        serverId: "1383515088803070103",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },
];
