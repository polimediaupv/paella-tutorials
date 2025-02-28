import { 
    Paella,
    defaultLoadConfigFunction,
    utils
} from '@asicupv/paella-core';
import '@asicupv/paella-core/paella-core.css';

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
    }
};
const player = new Paella('playerContainer', initParams);

await player.loadManifest();
