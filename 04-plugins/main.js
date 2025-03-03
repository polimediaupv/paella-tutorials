import { 
    Paella,
    defaultLoadConfigFunction
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
        return config;
    },

    plugins: [
        ...basicPlugins
    ]
};
const player = new Paella('playerContainer', initParams);

await player.loadManifest();
