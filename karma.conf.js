
var path = require('path');

module.exports = function(config) {
    config.set({
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/website/client/**/*.spec.js'
        ],
        exclude: [
            'src/website/public'
        ],
        frameworks: ['jasmine', 'mocha'],
        preprocessors: {
            'src/website/client/**/*.spec.js': ['webpack']
        },
        reporters: [ 'mocha', 'html', 'coverage-istanbul' ],
        browsers: ['Chrome'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-mocha',
            'istanbul-instrumenter-loader',
            'karma-coverage-istanbul-reporter',
            'karma-mocha-reporter',
            'karma-html-reporter'
        ],
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },
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
                                options: {esModules: true}
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
            reports: ['html'],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true
        },
            htmlReporter: {
            outputDir: 'tests_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: true, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'index', // report summary filename; browser info by default

            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false, // reports start folded (only with preserveDescribeNesting)
        }
    });
};
