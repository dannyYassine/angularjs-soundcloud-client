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
    vm.$postLink = $postLink;

    vm.getCurrentTime = getCurrentTime;
    vm.onPauseClicked = onPauseClicked;
    vm.onStopClicked = onStopClicked;
    vm.onProgressClicked = onProgressClicked;

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
        let canvasElement = document.getElementById('progress');
        let context = document.getElementById('progress').getContext('2d');
        context.translate(0.5, 0.5);
        context.fillRect(0, 0, canvasElement.offsetWidth, 100);
        context.width = document.body.clientWidth;
    }

    function $onChanges($event) {
        // console.log($event);
    }
    
    function updateProgress() {
        let canvasElement = document.getElementById('progress');
        let canvas = document.getElementById('progress').getContext('2d');

        canvas.clearRect(0, 0, canvas.width, 100);
        canvas.fillStyle = "#000";
        canvas.fillRect(0, 0, canvas.width, 100);

        canvas.fillStyle = "#ff3300";
        let progress = vm.player.audio.currentTime / vm.player.audio.duration;
        console.log(vm.player.audio.currentTime, vm.player.audio.duration, progress, canvasElement.offsetWidth, canvas.width, progress * canvasElement.offsetWidth + 0.5);
        canvas.fillRect(0, 0, progress * canvas.width, 100);
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
        let canvas = document.getElementById('progress').getContext('2d');
        canvas.fillRect(0, 0, 0, 100);
    }

    function onProgressClicked(evt) {
        var e = evt.target;
        var dim = e.getBoundingClientRect();
        var x = evt.clientX - dim.left;
        var position = x/dim.width;
        playerService.seek(position);
    }
}

module.exports = PlayerController;