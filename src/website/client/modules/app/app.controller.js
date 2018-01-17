/**
 * Created by dannyyassine on 2017-12-04.
 */

function AppController ($scope, $timeout) {
    let vm = this;
    vm.isLoading = false;
    vm.launched = false;
    vm.$onInit = $onInit;

    function $onInit() {
        $scope.$on('$locationChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            window.scrollTo(0, 0);
        });
        $timeout(function () {
            vm.launched = true;
        }, 1000);
    }
}

module.exports = AppController;