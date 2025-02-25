import { Paella } from '@asicupv/paella-core';

import "@asicupv/paella-core/paella-core.css";

const player = new Paella('player-container');

await player.loadManifest();
