/**
 * Created by dannyyassine on 2017-12-09.
 */

import angular from 'angular';

angular.module('sdn.filters')
    .filter('trackDuration', function() {

        function trackDurationFilter(duration, format) {
            let timeFormat = format || "mm:ss";

            if (timeFormat === "mm:ss") {
                return duration;
            }

            return "duration";
        }

        return trackDurationFilter;
    });