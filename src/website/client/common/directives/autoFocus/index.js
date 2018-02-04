/**
 * Created by dannyyassine on 2017-12-01.
 */
const angular = require('angular');

const AutoFocusDirective = require('./autoFocus.directive');

angular.module('sdn.directives')
    .directive('autoFocus', AutoFocusDirective);
