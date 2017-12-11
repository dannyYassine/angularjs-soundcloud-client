/**
 * Created by dannyyassine on 2017-12-04.
 */

function AppController ($scope) {
    let vm = this;
    vm.isLoading = false;

    vm.$onInit = $onInit;

    function $onInit() {
        $scope.$on('$locationChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            window.scrollTo(0, 0);
        });
    }
}

module.exports = AppController;