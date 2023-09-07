import { 
    Paella, 
    PlayPauseButtonPlugin
} from 'paella-core';
import {
    basicPlugins
} from 'paella-basic-plugins';

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',
    defaultVideoPreview: "/settings/default_preview_landscape.jpg",

    plugins: [
        PlayPauseButtonPlugin,
        ...basicPlugins
    ]
};
const player = new Paella('player-container', initParams);

await player.loadManifest();
