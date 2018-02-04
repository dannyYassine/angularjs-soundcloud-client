/**
 * Created by dannyyassine on 2017-12-03.
 */
import TrackListController from './trackList.controller';

const TrackListComponent = {
    bindings: {
        tracks: '<'
    },
    template: require('./template.html'),
    controller: TrackListController,
    controllerAs: 'vm'
};

module.exports = TrackListComponent;