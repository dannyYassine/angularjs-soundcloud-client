//jshint strict: false
module.exports = function(config) {
    config.set({
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/website/client/**/*.js',
        ],
        exclude: [
            'src/website/public'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'src/website/client/**/*.js': ['webpack'],
        },
        browsers: ['Chrome'],
        singleRun: false,
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-mocha'
        ],
        webpack: {
            module: {
                loaders: [
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
            },
            watch: false
        },
        webpackMiddleware: {
            stats: 'errors-only'
        }
    });
};
