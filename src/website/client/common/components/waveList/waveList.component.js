/**
 * Created by dannyyassine on 2017-12-03.
 */

const WaveListComponent = {
    bindings: {
        tracks: '<'
    },
    template: require('./template.html'),
    controller: require('./waveList.controller'),
    controllerAs: 'vm'
};

module.exports = WaveListComponent;