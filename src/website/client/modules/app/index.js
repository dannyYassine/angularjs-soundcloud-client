/**
 * Created by dannyyassine on 2017-12-03.
 */
import angular from 'angular';
import AppComponent from './app.component';
import AppController from './app.controller';

AppController.$inject = ['$scope', '$timeout'];

AppComponent.controller = AppController;

angular.module('sdn')
    .component('app', AppComponent);
