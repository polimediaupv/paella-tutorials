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


// If you add the dictionary outside initParams.loadDictionaries callback,
// the translation strings will have more priority than the default plugin
// translation strings:
player.addDictionary("es", {
    "Seek video to the next slide": "Siguiente diapositiva",
    "Seek video to the previous slide": "Diapositiva anterior",
})


player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeHighIcon',volumeHigh);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMidIcon',volumeMid);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeLowIcon',volumeLow);
player.addCustomPluginIcon('es.upv.paella.volumeButtonPlugin','volumeMuteIcon',volumeMute);


await utils.loadStyle('style.css');

