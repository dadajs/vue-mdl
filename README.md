# Vue-webpack
A component-based Vue and webpack app starter/example.

- [Overview](#overview)
- [Features](#features)
- [Quick start](#quick-start)
- [Workflow](#workflow)
- [References](#references)

## Overview
This project provides a starting point for building web apps from organized, highly [composable](https://en.wikipedia.org/wiki/Composability) components.

There are [many such starters](https://www.google.com/search?sourceid=chrome-psyapi2&ion=1&espv=2&ie=UTF-8&q=react%20webpack%20starter&oq=react%20webpack%20starter&aqs=chrome.0.0j69i60j69i57j69i60l2.2247j1j7) for webpack and React. This project is for webpack and [Vue.js](http://vuejs.org/).

Use this as a starter, or as inspiration for your own setup.

## Features
This is the default setup. Expand, swap, and otherwise customize as you see fit:

- VueJS:
    - [vue-router](https://github.com/vuejs/vue-router)
- Webpack:
    - [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
    - Hot module reloading
    - Style injection
    - ES6 support via [Babel](https://babeljs.io/)
- [PostCSS] plugins:
    - [postcss-import](https://github.com/postcss/postcss-import)
    - [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) *or* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
    - [postcss-calc](https://github.com/postcss/postcss-calc)
    - [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
    - [postcss-mixins](https://github.com/postcss/postcss-mixins)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [pixrem](https://github.com/robwierzbowski/node-pixrem)

## Quick start
```sh

# Clone this repo
$ git clone git@github.com:elcontraption/vue-webpack

# Install dependencies
$ cd vue-webpack
$ npm install

# Fire up webpack-dev-server
$ npm run dev

# Build to /dist
$ npm run build

``` 
Customize [webpack.config.js](webpack.config.js) as you need.

## Workflow

### Initial setup
By default, the app entry point is [`src/main.js`](src/main.js). Define routes in [`src/routes.js`](src/routes.js).

### Organized modules
Each module (view/component) has its own directory within [`src/views`](src/views) or [`src/components`](src/components). A module's scripts, styles, and template are all namespaced and organized within their respective directory.

### Style dependencies
Style dependencies must be resolved at the module level. First, import a stylesheet directly in your module's javascript file:

```js
import './style.css';

module.exports = {
    //...
};
```

Declare style dependencies in the stylesheet:
```css
/* Import the colors config file */
@import 'colors';
```

**Important**: because config stylesheets are imported every time they are called by a dependency, you should avoid writing any selector styles in them. Instead, declare reusable variables in config stylesheets.

## References
- [Nicholas Gallagher: Thinking beyond "Scalable CSS"](https://www.youtube.com/watch?v=L8w3v9m6G04)
- [Simon Smith: Using webpack to build React components and their assets](http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/)
- [VueJS: Building Larger Apps–Modularization](http://vuejs.org/guide/application.html#Modularization)

