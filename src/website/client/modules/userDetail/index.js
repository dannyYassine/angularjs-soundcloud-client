/**
 * Created by dannyyassine on 2017-12-03.
 */
import angular from 'angular';
import UserDetailComponent from './userDetail.component';

UserDetailComponent.$inject = ['soundcloundAPI'];

angular.module('sdn')
    .component('userDetail', UserDetailComponent);