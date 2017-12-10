/**
 * Created by dannyyassine on 2017-12-10.
 */

const SearchController = function (soundCloudService) {
    let vm = this;
    vm.tracks = [];

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;
    vm.$postLink = $postLink;

    vm.onSearchSubmit = onSearchSubmit;
    
    function $onInit() {

    }

    function $postLink() {
        document.getElementById('search_input').focus();
    }

    function $onChanges($event) {
        // console.log($event);
    }
    
    function onSearchSubmit(event) {
        let query = document.getElementById('search_input').value;
        soundCloudService.searchTracks(query)
            .then((response) => {
                vm.tracks = response;
            });
    }
    
};

module.exports = SearchController;