/**
 * Created by dannyyassine on 2017-12-04.
 */
import angular from 'angular';

const PlayerService = require('./player.service');
PlayerService.$inject = ['soundCloudConfigAPI'];

angular.module('sdn.api.services')
    .service('playerService', PlayerService);


