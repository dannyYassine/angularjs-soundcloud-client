/**
 * Created by dannyyassine on 2017-12-10.
 */

const UserDetailController = function (soundCloudService) {
    let vm = this;

    /**
     * Life cycles
     * @type {$onInit}
     */
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;
    vm.$postLink = $postLink;

    function $onInit() {

    }

    function $postLink() {
    }

    function $onChanges($event) {
        // console.log($event);
    }

};

module.exports = UserDetailController;