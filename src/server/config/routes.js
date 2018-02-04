/**
 * Created by dannyyassine on 2017-11-29.
 */

const path = require('path');
const { exec } = require('child_process');

module.exports = app => {

    /**
     * Tests
     */
    app.get('/tests/run', (request, response) => {
        if (request.query.run == true) {
            exec('npm run test', (err, stdout, stderr) => {
                response.redirect('/tests');
            });
        } else {
            response.render('run_test.html', {host: request.headers.host});
        }
    });


    /**
     * Front-end application
     */

    app.get('/*', (request, response) => {
        response.render('index.html');
    });

    /**
     * Errors
     */
    app.use((request, response, err) => {
        response.render('404.html');
    });


};