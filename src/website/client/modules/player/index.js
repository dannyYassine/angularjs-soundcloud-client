/**
 * Created by dannyyassine on 2017-12-04.
 */

import angular from 'angular';
import PlayerComponent from './player.component';

PlayerComponent.$inject = ['$scope', 'playerService'];

export default angular.module('sdn.player', [])
    .component('player', PlayerComponent);