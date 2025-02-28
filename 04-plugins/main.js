import { 
    Paella, 
    defaultLoadConfigFunction,
    utils,
    PlayPauseButtonPlugin
} from '@asicupv/paella-core';
import {
    basicPlugins
} from '@asicupv/paella-basic-plugins';

import '@asicupv/paella-core/paella-core.css';
import '@asicupv/paella-basic-plugins/paella-basic-plugins.css';

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',
    defaultVideoPreview: "/settings/default_preview_landscape.jpg",
    loadConfig: async (configUrl, player) => {
        const config = await defaultLoadConfigFunction(configUrl, player);
        utils.mergeObjects(config, {
            plugins: {
                "es.upv.paella.playPauseButton": {
                    enabled: true
                }
            }
        });
        return config;
    },

    plugins: [
        PlayPauseButtonPlugin,
        ...basicPlugins
    ]
};
const player = new Paella('playerContainer', initParams);

await player.loadManifest();
