import { 
    Paella, 
    defaultLoadConfigFunction,
    utils,
    PlayPauseButtonPlugin
} from 'paella-core';
import {
    basicPlugins
} from 'paella-basic-plugins';

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',

    loadConfig: async (configUrl, player) => {
        const config = await defaultLoadConfigFunction(configUrl, player);
        utils.mergeObjects(config, {
            plugins: {
                //"es.upv.paella.playPauseButton": {
                //    "enabled": true
                //}
            }
        })
        return config;
    },

    defaultVideoPreview: "/settings/default_preview_landscape.jpg",

    plugins: [
        PlayPauseButtonPlugin,
        ...basicPlugins
    ]
};
const player = new Paella('player-container', initParams);

await player.loadManifest();
