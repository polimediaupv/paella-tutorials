import { useEffect, useId, useRef } from "react"
import { Paella } from "@asicupv/paella-core"
import { basicPlugins } from "@asicupv/paella-basic-plugins";

import "@asicupv/paella-core/paella-core.css";
import "@asicupv/paella-basic-plugins/paella-basic-plugins.css";

import "./Player.css"


export default function Player() {
    const playerId = useId();
    const playerInstance = useRef<Paella | null>(null);

    useEffect(() => {
        if (!playerInstance.current) {
            playerInstance.current = new Paella(playerId, {
                plugins: [
                    ...basicPlugins
                ]
            });

            playerInstance.current.loadManifest()
                .then(() => {
                    console.log("Loaded manifest");
                });
        }

    }, [playerId]);

    return <div className="player-container" id={playerId}></div>
}