/**
 * Created by dannyyassine on 2017-12-03.
 */
import angular from 'angular';
import SearchComponent from './search.component';

SearchComponent.$inject = ['$scope', 'soundcloundAPI'];

export default angular.module('sdn.search', [])
    .component('search', SearchComponent);