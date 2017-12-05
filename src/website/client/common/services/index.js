/**
 * Created by dannyyassine on 2017-12-04.
 */
import angular from 'angular';
import _ from "lodash";
import "restangular";

let api_services = angular.module('sdn.api.services', ['restangular']);

api_services.config(configRestAngularProvider);

function configRestAngularProvider(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api.soundcloud.com/');
    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
        return data;
    });
}

require('./soundcloud');


