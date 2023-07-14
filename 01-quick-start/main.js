import { Paella } from 'paella-core';

const player = new Paella('player-container');

const videoUrl = "https://repository.paellaplayer.upv.es/belmar-multiresolution/media/480-presenter.mp4";
const preview = "https://repository.paellaplayer.upv.es/belmar-multiresolution/preview/belmar-preview.jpg";
await player.loadUrl(videoUrl, { preview });
