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

    /**
     * Methods
     */
    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;
    vm.onProgressClicked = onProgressClicked;

    function $onInit() {
        vm.player = playerService.player;
        playerService.on('sdn.notifications.player.update', (player) => {
            let canvasElement = document.getElementById('progress');
            if (player.audio) {
                let progress = player.audio.currentTime / player.audio.duration;
                canvasElement.style.width = progress * document.body.clientWidth + "px";
                $scope.$evalAsync();
            }
        });
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