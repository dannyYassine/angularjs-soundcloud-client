/**
 * Created by dannyyassine on 2017-11-29.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: './src/website/index.js',
    output: {
        filename: './src/website/public/js/bundle.js'
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
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};