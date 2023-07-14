import { 
    Paella, 
    defaultLoadConfigFunction,
    utils
} from 'paella-core';
import getBasicPluginContext from 'paella-basic-plugins';

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',

    loadConfig: async (configUrl, player) => {
        const config = await defaultLoadConfigFunction(configUrl, player);
        utils.mergeObjects(config, {
            plugins: {
                "es.upv.paella.playPauseButton": {
                    "enabled": true
                }
            }
        })
        return config;
    },

    defaultVideoPreview: "/settings/default_preview_landscape.jpg",

    customPluginContext: [
        getBasicPluginContext(),
    ]
};
const player = new Paella('player-container', initParams);

await player.loadManifest();

await utils.loadStyle('style.css');

