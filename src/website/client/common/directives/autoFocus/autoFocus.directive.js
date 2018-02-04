/**
 * Created by dannyyassine on 2017-12-01.
 */
const AutoFocusDirective = (function () {
    let directive = {
        link: link,
        restrict: 'A'
    };

    function link(scope, element, attr) {
        let indexCount = attr.index;
        let raw = element[0];
        raw.focus();
    }

    return directive;
});
module.exports = AutoFocusDirective;