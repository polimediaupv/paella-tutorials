import { 
    Paella
} from '@asicupv/paella-core';
import {
    basicPlugins
} from '@asicupv/paella-basic-plugins';
import {
    slidePlugins
} from '@asicupv/paella-slide-plugins';

import "@asicupv/paella-core/paella-core.css";
import "@asicupv/paella-basic-plugins/paella-basic-plugins.css";
import "@asicupv/paella-slide-plugins/paella-slide-plugins.css";

const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',
    defaultVideoPreview: "/settings/default_preview_landscape.jpg",

    plugins: [
        ...basicPlugins,
        ...slidePlugins
    ]
};
const player = new Paella('playerContainer', initParams);

await player.loadManifest();

