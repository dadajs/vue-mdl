# Vue-MDL-Starter
A starter based [elcontraption/vue-webpack](https://github.com/elcontraption/vue-webpack), added Material Design Lite.


- [Overview](#overview)
- [Features](#features)
- [Quick start](#quick-start)

## Overview
这就是一个在别人基础上加入了 MDL 的脚手架/样板文件. 拿去用,别客气.

## Features
我赋予了它:

- Material Design Lite:
    - [Material Design Lite](http://www.getmdl.io/)

它原来的 po 主 elcontraption 赋予了它: 

- Vue:
    - [vue](http://cn.vuejs.org/)
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
$ git clone git@github.com:dadajs/vue-mdl-starter.git

# Install dependencies
$ cd vue-mdl-starter
$ npm install

# Fire up webpack-dev-server
$ npm run dev

# Build to /dist
$ npm run build

``` 
