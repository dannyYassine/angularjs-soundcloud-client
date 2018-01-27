/**
 * Created by dannyyassine on 2017-11-29.
 */

const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: 'main' + '.css'
});

module.exports = {
    devtool: 'sourcemap',
    entry: { bundle: './src/website/index.js', styles: './src/website/styles/main.less' },
    output: {
        filename: './src/website/public/dist/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },{
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        url: false
                    }
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};