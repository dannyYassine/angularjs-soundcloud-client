/**
 * Created by dannyyassine on 2017-12-03.
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

require('./common/filters');
require('./common/services');
require('./common/components');

let app = angular.module('sdn',
    [
        uiRouter,

        'sdn.api.services',
        'sdn.components',
        'sdn.filters'
    ]);

require('./modules');

app
    .config(configLocationProvider)
    .config(configRouterProvider);

configLocationProvider.$inject = ['$locationProvider'];
function configLocationProvider ($locationProvider) {
    $locationProvider.html5Mode(true);
}

configRouterProvider.$inject = ['$urlRouterProvider'];
function configRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

app.config(function($stateProvider) {
    const homeState = {
        name: 'featured',
        url: '/',
        component: 'home'
    };

    const searchState = {
        name: 'search',
        url: '/search',
        component: 'home'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(searchState);
});