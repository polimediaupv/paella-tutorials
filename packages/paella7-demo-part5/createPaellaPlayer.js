import { Paella, utils } from 'paella-core';
import getBasicPluginsContext from 'paella-basic-plugins';
import getSlidePluginsContext from 'paella-slide-plugins';
import BackwardIcon from "./icons/backward-icon.svg?raw";
import ForwardIcon from "./icons/forward-icon.svg?raw";
import FullscreenIcon from "./icons/fullscreen-icon.svg?raw";



export async function createPaellaPlayer(htmlElement, videoid, config, manifest) {

    async function getCustomVideoId(config, player) {
        player.log.info("Using custom getVideoId function.");
        return videoid;
    }

    async function loadCustomConfig(configUrl, player) {
        player.log.info("Using custom loadConfig function.");
        return config;
    }
    
    async function customLoadVideoManifestFunction(videoManifestUrl, config, player) {
        player.log.info("Using custom loadVideoManifest function");
        return manifest;
    }

    const initParams = {      
        customPluginContext: [
            getBasicPluginsContext(),
            getSlidePluginsContext()
        ],  
        getVideoId: getCustomVideoId,
        loadConfig: loadCustomConfig,
        loadVideoManifest: customLoadVideoManifestFunction
    };

    const paella = new Paella(htmlElement, initParams);

    // change the icons
    await paella.addCustomPluginIcon("es.upv.paella.fullscreenButton", "fullscreenIcon", FullscreenIcon);
    await paella.addCustomPluginIcon("es.upv.paella.backwardButtonPlugin", "backwardIcon", BackwardIcon);
    await paella.addCustomPluginIcon("es.upv.paella.forwardButtonPlugin", "forwardIcon", ForwardIcon);

    return paella;
}