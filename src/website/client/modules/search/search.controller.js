/**
 * Created by dannyyassine on 2017-12-10.
 */

const SearchController = function ($scope, soundCloudService) {
    let vm = this;
    vm.tracks = [];
    vm.isLoading = false;

    /**
     * Used for throttling
     */
    let eventTimeout;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;

    vm.onSearchInputChange = onSearchInputChange;

    function $onInit() {

    }

    function onSearchInputChange(value) {
        if (eventTimeout) {
            clearTimeout(eventTimeout);
        }
        eventTimeout = setTimeout(function() {
            eventTimeout = null;
            searchTracks(value);
        }, 500);
    }

    function searchTracks(query) {
        if (query.length === 0) {
            vm.tracks.length = 0;
            $scope.$apply();
            return;
        }

        vm.isLoading = true;
        soundCloudService.searchTracks(query)
            .then((response) => {
                vm.isLoading = false;
                vm.tracks = response;
                $scope.$evalAsync();
            });
    }


};

module.exports = SearchController;