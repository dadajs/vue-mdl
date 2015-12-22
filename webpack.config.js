var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var pixrem = require('pixrem');
var postcssCalc = require('postcss-calc');
var postcssCustomProperties = require('postcss-custom-properties');
var postcssCustomMedia = require('postcss-custom-media');
var postcssImport = require('postcss-import');
var postcssMixins = require('postcss-mixins');
var postcssSimpleVars = require('postcss-simple-vars');
var webpack = require('webpack');

var getEnv = function() {
    return process.env.NODE_ENV;
};

var isDev = function() {
    return getEnv() === 'development';
};

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'scripts.js'
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            './src/'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: isDev() ?

                    // Load styles in <head> for development (enables style injection)
                    'style-loader!css-loader!postcss-loader' :

                    // Break styles into a stylesheet for production
                    ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),

                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                exclude: /node_modules/,
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    postcss: function(webpack) {

        var plugins = [
            postcssImport({
                path: ['./src/styles/config'],
                addDependencyTo: webpack
            }),
            postcssCalc,
            postcssCustomMedia,
            postcssMixins,

            // Use custom properties that are W3C spec-compliant:
            // postcssCustomProperties,

            // Use SASS-like variables:
            postcssSimpleVars,
        ];

        // Production plugins
        if ( ! isDev()) {
            plugins = plugins.concat([
                autoprefixer,
            ]);
        }

        return plugins;
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};

if ( ! isDev()) {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]);
} else {
    module.exports.devtool = '#source-map';
}
