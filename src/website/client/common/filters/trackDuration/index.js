/**
 * Created by dannyyassine on 2017-12-09.
 */

import angular from 'angular';

angular.module('sdn.filters')
    .filter('trackDurationFilter', function() {

        function trackDurationFilter(duration, format) {
            let timeDuration = duration;
            let timeFormat = format || "mm:ss";

            if (!isNaN(duration)) {
                timeDuration = Number(duration);
            }

            timeDuration = timeDuration / 1000;

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
            console.log(format, stringOutput);
            return stringOutput;
        }

        return trackDurationFilter;
    });