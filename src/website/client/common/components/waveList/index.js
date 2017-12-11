/**
 * Created by dannyyassine on 2017-12-04.
 */

import angular from 'angular';
import WaveListComponent from './waveList.component';

WaveListComponent.$inject = ['playerService'];

angular.module('sdn.components')
    .component('waveList', WaveListComponent);