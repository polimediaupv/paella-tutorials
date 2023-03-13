import { createPaellaPlayer } from './createPaellaPlayer';
import config from './src/config.json?raw'
import manifest from './src/repository/video-test/data.json?raw';

import './style.css';

const paella = await createPaellaPlayer('player-container', 'videoid', JSON.parse(config), JSON.parse(manifest))

paella.loadManifest()
    .then(() => console.log("done"))
    .catch(e => console.error(e));


document.querySelector('#playButton').addEventListener('click', () => { paella.play(); });
document.querySelector('#pauseButton').addEventListener('click', () => { paella.pause(); });