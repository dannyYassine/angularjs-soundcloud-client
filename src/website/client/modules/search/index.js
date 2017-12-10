/**
 * Created by dannyyassine on 2017-12-03.
 */
import angular from 'angular';
import SearchComponent from './search.component';

SearchComponent.$inject = ['soundcloundAPI'];

angular.module('sdn')
    .component('search', SearchComponent);