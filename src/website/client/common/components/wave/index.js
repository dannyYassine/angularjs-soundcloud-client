/**
 * Created by dannyyassine on 2017-12-04.
 */

import angular from 'angular';
import WaveComponent from './wave.component';
import WaveController from './wave.controller';

WaveComponent.controller = WaveController;
WaveComponent.$inject = ['$scope', '$timeout', 'playerService', 'soundCloudConfigAPI'];

angular.module('sdn.components')
    .component('waveform', WaveComponent);