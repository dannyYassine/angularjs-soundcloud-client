/**
 * Created by dannyyassine on 2017-12-01.
 */
const angular = require('angular');

const InputChangeDirective = require('./inputChange.directive');

angular.module('sdn.directives')
    .directive('inputChange', InputChangeDirective);
