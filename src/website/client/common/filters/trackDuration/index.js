/**
 * Created by dannyyassine on 2017-12-09.
 */

import angular from 'angular';

angular.module('sdn.filters')
    .filter('trackDurationFilter', function() {

        function trackDurationFilter(duration, format, inMiliSeconds) {
            let timeDuration = duration;
            let timeFormat = format || "mm:ss";
            inMiliSeconds = inMiliSeconds === undefined ? true : inMiliSeconds;

            if (!isNaN(duration)) {
                timeDuration = Number(duration);
            }
    
            timeDuration = timeDuration / (inMiliSeconds ? 1000 : 1);

            let stringOutput = "";

            let minutes = Math.floor(Math.floor(timeDuration) / 60);
            let seconds = Math.floor(timeDuration - minutes * 60);

            if (timeFormat === "mm:ss") {
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0"+seconds;
                }
                stringOutput = minutes + ":" + seconds;
            } else if (timeFormat === "ss") {
                let seconds = Math.floor(timeDuration) / 3600;
                stringOutput = seconds + "secs";
            }
            return stringOutput;
        }

        return trackDurationFilter;
    });