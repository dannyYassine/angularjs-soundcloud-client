/**
 * Created by dannyyassine on 2017-12-06.
 */

import angular from 'angular';
import SoundCloudConfigAPIProvider from './soundcloudAPI';

angular.module('sdn.api.services')
    .provider('soundCloudConfigAPI', SoundCloudConfigAPIProvider);
