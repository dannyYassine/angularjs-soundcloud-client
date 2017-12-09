/**
 * Created by dannyyassine on 2017-12-04.
 */

function PlayerController ($scope, playerService, trackDurationFilter) {
    let vm = this;
    vm.local = {};
    $scope.currentTime = 0.0;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;

    vm.getCurrentTime = getCurrentTime;
    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;

    function $onInit() {
        vm.player = playerService.player;
        $scope.$on('sdn.notifications.player.play', (e) => {
            vm.player.audio.addEventListener('timeupdate', () => {
                $scope.$apply();
            });
        });
    }

    function $onChanges($event) {
        // console.log($event);
    }
    /**
     * Input methods
     */
    function getCurrentTime() {
        if (!vm.player.audio) {
            return 0.00;
        }
        let time = vm.player.audio.currentTime || 0.0;
        return trackDurationFilter(time, "mm:ss", false);
    }

    function onPauseClicked() {
        playerService.pause();
    }
    function onStopClicked() {
        playerService.stop();
    }

    function onProgressClicked(evt) {
        var e = evt.target;
        var dim = e.getBoundingClientRect();
        var x = evt.clientX - dim.left;
        var position = x/dim.width;
    }
}

module.exports = PlayerController;