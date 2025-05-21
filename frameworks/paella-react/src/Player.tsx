import { useEffect, useId, useRef } from "react"
import { Paella } from "@asicupv/paella-core"
import "./Player.css"

import "@asicupv/paella-core/paella-core.css";

export default function Player() {
    const playerId = useId();
    const playerInstance = useRef<Paella | null>(null);

    useEffect(() => {
        if (!playerInstance.current) {
            playerInstance.current = new Paella(playerId, {});
        }
        console.log(playerInstance.current);

        playerInstance.current.loadManifest()
            .then(() => {
                console.log("Loaded manifest");
            });
    }, [playerId]);

    return <div className="player-container" id={playerId}></div>
}