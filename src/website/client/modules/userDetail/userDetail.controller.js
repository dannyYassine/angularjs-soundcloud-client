/**
 * Created by dannyyassine on 2017-12-10.
 */

const UserDetailController = function (soundCloudService) {
    let vm = this;
    vm.tracks = [];
    vm.isLoading = false;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;
    vm.$postLink = $postLink;

    function $onInit() {
        vm.isLoading = true;
        soundCloudService.getUserTracks(vm.user.id)
            .then((response) => {
                vm.isLoading = false;
                vm.tracks = response;
            });
    }

    function $postLink() {
    }

    function $onChanges($event) {
        // console.log($event);
    }

};

module.exports = UserDetailController;