/**
 * Created by dannyyassine on 2017-12-03.
 */

const PlayerComponent = {
    bindings: {
      track: '<'
    },
    template: require('./template.html'),
    controller: require('./player.controller'),
    controllerAs: 'vm'
};

module.exports = PlayerComponent;