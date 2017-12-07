/**
 * Created by dannyyassine on 2017-12-03.
 */

const TrackListComponent = {
    bindings: {
        tracks: '<'
    },
    template: require('./template.html'),
    controller: require('./trackList.controller'),
    controllerAs: 'vm'
};

module.exports = TrackListComponent;