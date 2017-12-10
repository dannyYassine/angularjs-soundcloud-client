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
    vm.$postLink = $postLink;

    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;
    vm.onProgressClicked = onProgressClicked;

    function $onInit() {
        vm.player = playerService.player;
        $scope.$on('sdn.notifications.player.update', (event, player) => {
            let canvasElement = document.getElementById('progress');
            let progress = player.audio.currentTime / player.audio.duration;
            canvasElement.style.width = progress * document.body.clientWidth + "px";
            $scope.$apply();
        });
    }

    function $postLink() {

    }

    function $onChanges($event) {
    }

    function onPauseClicked() {
        playerService.player.isPaused()
            ? playerService.pause()
            : playerService.resume();
    }

    function onStopClicked() {
        playerService.stop();
        let canvasElement = document.getElementById('progress');
        canvasElement.style.width = "0px";
    }

    function onProgressClicked(evt) {
        var e = evt.target;
        var dim = e.getClientRects()[0];
        var x = evt.clientX - dim.left;
        var position = x/document.body.clientWidth;
        playerService.seek(position);
    }
}

module.exports = PlayerController;