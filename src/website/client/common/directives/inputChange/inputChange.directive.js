/**
 * Created by dannyyassine on 2017-12-01.
 */

const InputChangeDirective = (function () {
    let value = '';
    let inputChange = null;

    let directive = {
        scope: {
            onChange: '&',
        },
        link: link,
        restrict: 'A'
    };

    function link(scope, element, attrs) {
        let raw = element[0];

        raw.addEventListener('input', () => {
            if (value !== raw.value) {
                scope.onChange({value: raw.value});
            }
            value = raw.value;
        });
    }

    return directive;
});

module.exports = InputChangeDirective;