import { 
    Paella, 
    defaultLoadConfigFunction,
    utils
} from 'paella-core';
import getBasicPluginContext from 'paella-basic-plugins';
import getSlidePluginContext from 'paella-slide-plugins';

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
        getSlidePluginContext()
    ],

    loadDictionaries: player => {
        player.setLanguage(navigator.language);
        const en = {
            "other_settings": "Other settings"
        }
        const es = {
            "other_settings": "Otros ajustes"
        }
        player.addDictionary('en', en);
        player.addDictionary('en-UK', en);
        player.addDictionary('en-US', en);
        player.addDictionary('es', es);
        player.addDictionary('es-ES', es);
        player.addDictionary('es-LA', es);
    }
};
const player = new Paella('player-container', initParams);

await player.loadManifest();
player.addDictionary("es", {
    "Seek video to the next slide": "Tira palante"
})


player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeHighIcon',volumeHigh);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMidIcon',volumeMid);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeLowIcon',volumeLow);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMuteIcon',volumeMute);


await utils.loadStyle('style.css');

