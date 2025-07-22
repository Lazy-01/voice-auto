// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1360789078403977246",
        serverId: "996135517320134776",
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
        channelId: "1396961252541993090",
        serverId: "1213494504317919292",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "invisible",
        },
        selfMute: true,
    },
];
