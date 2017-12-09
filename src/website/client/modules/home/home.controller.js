/**
 * Created by dannyyassine on 2017-12-04.
 */

function HomeContainerController (soundcloudService) {
    let vm = this;
    
    vm.$onInit = $onInit;
    
    function $onInit() {
        soundcloudService.getFeaturedTracks().then(response => {
            vm.tracks = response;
        });
    }
}

module.exports = HomeContainerController;