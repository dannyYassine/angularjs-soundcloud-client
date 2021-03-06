/**
 * Created by dannyyassine on 2017-12-03.
 */

const UserDetailComponent = {
    bindings: {
        user: '<'
    },
    template: require('./template.html'),
    controller: require('./userDetail.controller'),
    controllerAs: 'vm'
};

module.exports = UserDetailComponent;