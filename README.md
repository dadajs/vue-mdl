# Vue-webpack app
A component-based Vue and webpack app starter/example.

- [Overview](#overview)
- [Features](#features)
- [Technology](#technology)
- [Development](#development)
- [References](#references)

## Overview
This project provides a starting point for creating web apps from moderately [composable](https://en.wikipedia.org/wiki/Composability) and modular components. The underlying philosophy is that each component of your UI is self-contained and independent from any other part of the UI.

Use this as a starter, or as inspiration for your own setup.

## Features
- VueJS:
    - [vue-router](https://github.com/vuejs/vue-router)
- Webpack:
    - [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
    - Hot module reloading
    - Style injection
- [PostCSS] plugins:
    - [postcss-import](https://github.com/postcss/postcss-import)
    - [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
    - [postcss-calc](https://github.com/postcss/postcss-calc)
    - [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
    - [postcss-mixins](https://github.com/postcss/postcss-mixins)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [pixrem](https://github.com/robwierzbowski/node-pixrem)

## Technology
These same ideas can be accomplished with React, Angular, etc., but I find [VueJS](http://vuejs.org/) to be extremely flexible and easy to integrate. See Simon Smith's [article](http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/) for a nice implementation using React.

## Development
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

Customize [webpack.config.js] as you need.

## References
- [Nicholas Gallagher: Thinking beyond "Scalable CSS"](https://www.youtube.com/watch?v=L8w3v9m6G04)
- [Simon Smith: Using webpack to build React components and their assets](http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/)
- [VueJS: Building Larger Apps–Modularization](http://vuejs.org/guide/application.html#Modularization)