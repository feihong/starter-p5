# Starter App for p5.js

Deployed to https://starter-p5.glitch.me/

Starter app for [p5.js](https://p5js.org/). You can add .js source files to the `public/examples` directory and they will automatically be listed on the home page. Clicking on an example will open a new page with the given example loaded. If you want to develop locally instead of on Glitch you can  [clone the repo](https://github.com/feihong/starter-p5).

## Loading additional libraries for complex examples

For more complex examples, you can load external libraries by modifying the `extraLibs` variable inside `server.js`. For example:

```javascript
const extraLibs = {
  'falling-emojis.js': [
    'https://cdn.jsdelivr.net/npm/emojione@3.1.6/lib/js/emojione.min.js'
  ]
}
```

The configuration above will cause the emojione library to be loaded along with the `falling-emojis.js` example.

## Prerequisites for local development

    yarn global add nodemon
    yarn install

## Scripts

Run server (only used on Glitch)

    npm start

Run dev server (automatically restarts on changes)

    yarn dev
