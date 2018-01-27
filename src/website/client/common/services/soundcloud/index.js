/**
 * Created by dannyyassine on 2017-12-04.
 */
import angular from 'angular';

const SoundcloudModule = require('./soundcloud.api.service');
SoundcloudModule.$inject = ['Restangular', 'soundCloudConfigAPI'];

angular.module('sdn.api.services')
    .service('soundcloundAPI', SoundcloudModule);
