import { Paella } from '@asicupv/paella-core';

import "@asicupv/paella-core/paella-core.css";

const player = new Paella('playerContainer');

const videoUrl = "https://repository.paellaplayer.upv.es/belmar-multiresolution/media/480-presenter.mp4";
const preview = "https://repository.paellaplayer.upv.es/belmar-multiresolution/preview/belmar-preview.jpg";
await player.loadUrl(videoUrl, { preview });
