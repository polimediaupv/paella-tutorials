export const preloadedConfig = {
    "repositoryUrl": "/repository",
    "manifestFileName": "data.json",

    "defaultLayout": "presenter-presentation",
    "defaultAudioStream": "presenter",

    "plugins": {
        "es.upv.paella.mp4VideoFormat": {
            "enabled": true,
            "order": 1
        },
        "es.upv.paella.videoCanvas": {
            "enabled": true,
            "order": 1
        },            
        "es.upv.paella.singleVideo": {
            "enabled": true,
            "dualVideoContentIds": ["presenter-presentation"],
            "validContent": [
                { "id": "presenter", "content": ["presenter"], "icon": "present-mode-2.svg", "title": "Presenter" },
                { "id": "presentation", "content": ["presentation"], "icon": "present-mode-1.svg", "title": "Presentation" }
            ]
        },
        "es.upv.paella.dualVideoDynamic": {
            "enabled": true,
            "validContent": [
                { "id": "presenter-presentation", "content": ["presentation","presenter"], "icon": "present-mode-3.svg", "title": "Presenter and presentation" }
            ]
        },
        "es.upv.paella.playPauseButton": {
            "enabled": true,
            "order": 1
        },


        "es.upv.paella.backwardButtonPlugin": {
            "enabled": true,
            "side": "left",
            "order": 1,
            "time": 30
        },
        "es.upv.paella.forwardButtonPlugin": {
            "enabled": true,
            "side": "left",
            "order": 2,
            "time": 30
        },
        "es.upv.paella.volumeButtonPlugin": {
            "enabled": true,
            "side": "left",
            "order": 3
        },
        "es.upv.paella.layoutSelector": {
            "enabled": true,
            "side": "right",
            "order": 1
        },
        "es.upv.paella.frameControlButtonPlugin": {
            "enabled": true,
            "side": "right",
            "order": 2
        },
        "es.upv.paella.fullscreenButton": {
            "enabled": true,
            "side": "right",
            "order": 3
        }
    }
};
