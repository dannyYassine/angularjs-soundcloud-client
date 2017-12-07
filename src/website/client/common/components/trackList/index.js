/**
 * Created by dannyyassine on 2017-12-04.
 */

import angular from 'angular';
import TrackListComponent from './trackList.component';

TrackListComponent.$inject = ['playerService'];

angular.module('sdn.components')
    .component('trackList', TrackListComponent);