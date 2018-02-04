/**
 * Created by dannyyassine on 2017-12-04.
 */
import WaveSurfer from 'wavesurfer.js';

export default function WaveController ($scope, $timeout, playerService, soundCloudConfigAPI) {
    let vm = this;
    vm.isLoading = true;
    vm.wavesurfer = {};

    vm.$onInit = $onInit;
    vm.$postLink = $postLink;

    vm.onPlayClicked = onPlayClicked;
    vm.onProgressClicked = onProgressClicked;

    /**
     * Life Cycles
     */
    function $onInit() {
        vm.player = playerService.player;
        playerService.on('sdn.notifications.player.update', (player) => {
            if (player.track.id !== vm.trackData.id) {
                return;
            }
            let progress = player.audio.currentTime / player.audio.duration;
            vm.wavesurfer.seekTo(progress);
            $scope.$evalAsync();
        });
    }

    function $postLink() {
        $timeout(function () {
            //DOM has finished rendering
            let container = '#track'+vm.trackData.id;
            vm.wavesurfer = WaveSurfer.create({
                container: container,
                waveColor: 'darkgray',
                progressColor: '#FF5400',
                cursorColor: '#fff',
                barWidth: 5
            });
            vm.wavesurfer.load(`${vm.trackData.stream_url}?client_id=${soundCloudConfigAPI.clientID()}`);
            vm.wavesurfer.on('loading', function (percents) {
            });
            vm.wavesurfer.on('ready', function (percents) {
                $timeout(function () {
                    vm.isLoading = false;
                });
            });
        });
    }

    /**
     * Input methods
     */

    function onPlayClicked() {
        playerService.play(vm.trackData);
    }

    function onProgressClicked(evt) {
        if (!vm.player.audio) {
            return;
        }
        console.log(vm.wavesurfer);
        var e = evt.target;
        var dim = e.getClientRects()[0];
        var x = evt.clientX - dim.left;
        var position = x/vm.wavesurfer.container.clientWidth;
        playerService.seek(position);
    }

}
