/**
 * Created by dannyyassine on 2017-12-03.
 */

import angular from 'angular';
import AppComponent from './app.component';
import AppController from './app.controller';

AppController.$inject = ['$scope', '$timeout'];

AppComponent.controller = AppController;

export default angular.module('sdn.app', [])
    .component('app', AppComponent);
