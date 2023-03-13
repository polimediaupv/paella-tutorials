import './style.css'
import { Paella } from 'paella-core';
import getBasicPluginsContext from 'paella-basic-plugins';
import getSlidePluginsContext from 'paella-slide-plugins';

const initParams = {
    customPluginContext: [
        getBasicPluginsContext(),
        getSlidePluginsContext()
    ]
};

const paella = new Paella('player-container', initParams);
paella.loadManifest()
    .then(() => console.log("done"))
    .catch(e => console.error(e));
