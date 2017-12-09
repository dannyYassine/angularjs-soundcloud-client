/**
 * Created by dannyyassine on 2017-12-04.
 */

function PlayerController ($scope, playerService) {
    let vm = this;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;

    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;

    function $onInit() {
        vm.player = playerService.player;
    }

    function $onChanges($event) {
        console.log($event);
    }
    /**
     * Input methods
     */
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