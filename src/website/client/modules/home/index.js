/**
 * Created by dannyyassine on 2017-12-03.
 */
import angular from 'angular';
import HomeComponent from './home.component';
import HomeContainerController from './home.controller';

HomeContainerController.$inject = ['soundcloundAPI'];
HomeComponent.controller = HomeContainerController;

angular.module('sdn')
    .component('home', HomeComponent);