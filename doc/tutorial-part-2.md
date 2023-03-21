# Integrate Paella 7 in your website (Part 2)


Most of the paella features are added as plugins. 

In [part 1](./tutorial-part-1.md), we created a simple player using only the `paella-core`package.
`paella-core` package in only the player core and some core plugins needed to work correctly.
We only added plugins to manage multiple streams and to add a `play/pause` button.

![](img/paella-take-1.png)


Now we want to add more buttons to the player:

- backward/forward buttons
- volume control
- fullscreen button
- frame control button
- layout control button

## Adding plugins

All these features are provided by `paella-basic-plugins` and `paella-slide-plugins` packages

Each plugins package can contain one or more plugins. You can learn more about witch plugins provides each package at their github repository.

- `paella-basic-plugins`: [github](https://github.com/polimediaupv/paella-basic-plugins)
- `paella-slide-plugins`: [github](https://github.com/polimediaupv/paella-slide-plugins)


To install both plugins we can simply run this command:

```sh
$ npm install paella-basic-plugins paella-slide-plugins
```

Now, we need to instruct paella to use these plugins. We can do this in the Paella [initialization](https://paellaplayer.upv.es/#/doc/initialization.md)

You can add an parameter to the Paella constructor to control some aspects of paella. For now, we need to use the `customPluginContext` to pass an array of all plugin packages paella is going to use.

We need to modify our `main.js` file:

- `main.js` diff:

    ```diff
      import { Paella } from 'paella-core';
    + import getBasicPluginsContext from 'paella-basic-plugins';
    + import getSlidePluginsContext from 'paella-slide-plugins';
    
    import './style.css'
    
    + const initParams = {
    +     customPluginContext: [
    +         getBasicPluginsContext(),
    +         getSlidePluginsContext()
    +     ]
    + };

    - const paella = new Paella('player-container');
    + const paella = new Paella('player-container', initParams);
      paella.loadManifest()
          .then(() => console.log("done"))
          .catch(e => console.error(e));
    ```

Also we need add and configure the plugins we want uo use.

```json
    {
        "plugins": {
            ...
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
    }
```

We need to configure some basic properties:

    - `enabled`: If plugin is `enabled` or `disabled`.
    - `side`: It can be `left` or `right` in button plugins and it indicated if the button is showed in right or left in the playbar.
    - `order`: configures how buttons are ordered in the playbar (`left` and `right` are independent orders)

Some plugins need extra parameters. For example Forward/Backward plugins that need a `time`parameter that configures the number of seconds to forward/backward.

All parameters are documented in the plugins documentation in their package github repository.

## Test the changes

We are done. To test the chnages, run the following command:

```sh
$ npm run dev

VITE v4.1.4  ready in 256 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
Now we can open the following URL in a browser: `http://localhost:5173/?id=video-test`.

![](img/paella-take-2.png)