/**
 * Created by dannyyassine on 2017-12-04.
 */

export default function TrackListController (playerService) {
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

    function onPlayClicked(index) {
        playerService.play(vm.tracks[index]);
    }

    function onPauseClicked() {
        playerService.pause();
    }

    function onStopClicked() {
        playerService.stop();
    }

}
