/**
 * Created by dannyyassine on 2017-12-04.
 */

function AppController ($scope, $timeout) {
    let vm = this;
    vm.isLoading = false;
    vm.launched = false;
    vm.$onInit = $onInit;

    vm.scrollToTop = scrollToTop;

    function $onInit() {
        $scope.$on('$locationChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            vm.scrollToTop();
        });
        $timeout(function () {
            vm.launched = true;
            $timeout(function () {
                vm.removeSplash = true;
            })
        }, 1000);
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }
}

module.exports = AppController;