import { Paella } from 'paella-core';
import getBasicPluginsContext from 'paella-basic-plugins';
import getSlidePluginsContext from 'paella-slide-plugins';

export function createPaellaPlayer(htmlElement, videoid, config, manifest) {

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
    return paella;
}