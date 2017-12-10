/**
 * Created by dannyyassine on 2017-12-09.
 */

import angular from 'angular';

angular.module('sdn.filters')
    .filter('trackArtworkFilter', function() {

        function trackArtworkFilter(url, size) {
            if (!url) {
                return "";
            }
            return url.replace('-large', '-t'+size+'x'+size);
        }
        // trackArtworkFilter.$stateful = true;

        return trackArtworkFilter;
    });