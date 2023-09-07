import { 
    Paella,
    PlayPauseButtonPlugin,
    utils
} from 'paella-core';
import { basicPlugins } from 'paella-basic-plugins';
import { slidePlugins } from 'paella-slide-plugins';

const [
    volumeHigh,
    volumeMid,
    volumeLow,
    volumeMute
] = await Promise.all([
    utils.loadSvgIcon('icons/volume_high.svg'),
    utils.loadSvgIcon('icons/volume_mid.svg'),
    utils.loadSvgIcon('icons/volume_low.svg'),
    utils.loadSvgIcon('icons/volume_mute.svg')
]);


const initParams = {
    // Initialization parameters
    configResourcesUrl: 'settings/',
    configUrl: 'settings/settings.json',

    defaultVideoPreview: "/settings/default_preview_landscape.jpg",

    plugins: [
        PlayPauseButtonPlugin,
        ...basicPlugins,
        ...slidePlugins
    ]
};
const player = new Paella('player-container', initParams);

await player.loadManifest();

player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeHighIcon',volumeHigh);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMidIcon',volumeMid);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeLowIcon',volumeLow);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMuteIcon',volumeMute);


await utils.loadStyle('style.css');

