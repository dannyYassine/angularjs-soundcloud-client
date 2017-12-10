/**
 * Created by dannyyassine on 2017-12-04.
 */

function HomeContainerController (soundcloudService) {
    let vm = this;
    vm.isLoading = false;

    vm.$onInit = $onInit;
    
    function $onInit() {
        vm.isLoading = true;
        soundcloudService.getFeaturedTracks().then(response => {
            vm.isLoading = false;
            vm.tracks = response;
        });
    }
}

module.exports = HomeContainerController;