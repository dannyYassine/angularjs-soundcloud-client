/**
 * Created by dannyyassine on 2017-12-04.
 */

function TrackListController (playerService) {
    let vm = this;

    vm.$onInit = $onInit;

    vm.onPlayClicked = onPlayClicked;
    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;

    /**
     * Life Cycles
     */
    function $onInit() {

    }

    /**
     * Input methods
     */

    function onPlayClicked(track) {
        playerService.play(track);
    }

    function onPauseClicked() {
        playerService.pause();
    }

    function onStopClicked() {
        playerService.stop();
    }

}

module.exports = TrackListController;