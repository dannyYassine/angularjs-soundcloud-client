/**
 * Created by dannyyassine on 2017-12-04.
 */

function PlayerController ($scope, playerService, trackDurationFilter) {
    let vm = this;
    vm.playText = "PAUSE";
    $scope.currentTime = 0.0;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;
    vm.$postLink = $postLink;

    vm.getCurrentTime = getCurrentTime;
    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;
    vm.onProgressClicked = onProgressClicked;
    vm.isPlaying = isPlaying;

    function $onInit() {
        vm.player = playerService.player;
        $scope.$on('sdn.notifications.player.play', (e) => {
            vm.player.audio.addEventListener('timeupdate', () => {
                updateProgress();
                $scope.$apply();
            });
        });
    }

    function $postLink() {

    }

    function $onChanges($event) {
        // console.log($event);
    }
    
    function updateProgress() {
        let canvasElement = document.getElementById('progress');
        let progress = vm.player.audio.currentTime / vm.player.audio.duration;
        canvasElement.style.width = progress * document.body.clientWidth + "px";
        if (playerService.isPlaying()) {
            vm.playText = "PAUSE";
        } else {
            vm.playText = "PLAY";
        }
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
        if (playerService.isPlaying()) {
            playerService.pause();
        } else {
            playerService.resume();
        }
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

    function isPlaying() {
        return playerService.isPlaying();
    }
}

module.exports = PlayerController;