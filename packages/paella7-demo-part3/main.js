import './style.css';
import { createPaellaPlayer } from './createPaellaPlayer';
import config from './src/config.json?raw'
import manifest from './src/repository/video-test/data.json?raw';

const paella = createPaellaPlayer('player-container', 'videoid', JSON.parse(config), JSON.parse(manifest))

paella.loadManifest()
    .then(() => console.log("done"))
    .catch(e => console.error(e));
