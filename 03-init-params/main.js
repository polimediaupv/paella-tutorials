import { 
    Paella
} from 'paella-core';

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',
    defaultVideoPreview: "/settings/default_preview_landscape.jpg"
};
const player = new Paella('player-container', initParams);

await player.loadManifest();
