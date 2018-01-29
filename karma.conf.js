
var path = require('path');

module.exports = function(config) {
    config.set({
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/website/client/**/*.test.js'
        ],
        exclude: [
            'src/website/public'
        ],
        frameworks: ['jasmine', 'mocha'],
        preprocessors: {
            'src/website/client/**/*.test.js': ['webpack']
        },
        reporters: [ 'progress', 'coverage-istanbul' ],
        browsers: ['Chrome'],
        singleRun: false,
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-mocha',
            'istanbul-instrumenter-loader',
            'karma-coverage-istanbul-reporter'
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: [
                                {
                                    loader: 'babel-loader',
                                },
                                {
                                    loader: 'istanbul-instrumenter-loader',
                                    options: { esModules: true }
                                }
                            ],
                        include: path.resolve('src/')
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
        },
        coverageIstanbulReporter: {
            reports: [ 'html', 'text' ],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true
        }
    });
};
