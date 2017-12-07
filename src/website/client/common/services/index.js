/**
 * Created by dannyyassine on 2017-12-04.
 */
import angular from 'angular';
import _ from "lodash";
import "restangular";

let api_services = angular.module('sdn.api.services', ['restangular']);

require('./soundcloudAPIProvider');

api_services.config(configRestAngularProvider);
api_services.config(configSoundCloundProvider);

function configRestAngularProvider(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api.soundcloud.com/');
    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
        return data;
    });
}

function configSoundCloundProvider(soundCloudConfigAPIProvider) {
    soundCloudConfigAPIProvider.setClientID('ShH74NlijJdrezMwJlhCWxRr4TlUqG3U');
}

require('./soundcloud');
require('./player');



