/**
 * Created by dannyyassine on 2017-11-29.
 */

const app = require('./app');

require('./config/routes')(app);
require('./config/env')(app);

const server = app.listen(app.get('port'), '0.0.0.0', function () {
    console.log("*\n*");
    console.log("/****************************************/");
    console.log('server listening on port ' + server.address().port);
    console.log("/****************************************/");
    console.log("*\n*");
});