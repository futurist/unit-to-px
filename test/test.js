'use strict';

var assert = this.chai ? this.chai.assert : require('assert');

var almostEqual = (function () {
    "use strict"

    var abs = Math.abs,
        min = Math.min

    function almostEqual(a, b, absoluteError, relativeError) {
        var d = abs(a - b)

        if (absoluteError == null) absoluteError = almostEqual.DBL_EPSILON;
        if (relativeError == null) relativeError = absoluteError;

        if (d <= absoluteError) {
            return true
        }
        if (d <= relativeError * min(abs(a), abs(b))) {
            return true
        }
        return a === b
    }

    almostEqual.FLT_EPSILON = 1.19209290e-7
    almostEqual.DBL_EPSILON = 2.2204460492503131e-16
    return almostEqual
})();

function parseUnit(str, out) {
    if (!out)
        out = [0, '']

    str = String(str)
    var num = parseFloat(str, 10)
    out[0] = num
    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
    return out
}

var units = [
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
    'em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc',
]

var fontSizes = ['20px', '30px', '1em', '2in']

function testUnitsEmpirically(element, number) {
    var bare = number==null
    number = bare ? '' : number
    var testDiv = document.createElement('div')
    element.appendChild(testDiv)
    for (var i = 0; i < units.length; ++i) {
        testDiv.style['font-size'] = 20 * (bare?1:number) + units[i]
        var expected = parseUnit(getComputedStyle(testDiv).getPropertyValue('font-size'))[0] / 20
        var actual = unitToPx(number + units[i], element)

        // console.log(units[i], actual, expected)
        assert.equal(true, almostEqual(actual, expected, 0.01, almostEqual.FLT_EPSILON),
            'testing: ' + units[i] + ' ' + actual + ' ~ ' + expected)
    }
    element.removeChild(testDiv)
}

describe('test', function () {

        it('document.body', function () {

            testUnitsEmpirically(document.body)
            testUnitsEmpirically(document.body, 0)

        });

        it('h1', function () {

            var header = document.createElement('h1')
            document.body.appendChild(header)
            testUnitsEmpirically(header)
            testUnitsEmpirically(header, 2)
            testUnitsEmpirically(header, 0)

        });

        it('different font-size on container', function () {

            var container = document.createElement('div')
            document.body.appendChild(container)
            for (var i = 0; i < fontSizes.length; ++i) {
                container.style['font-size'] = fontSizes[i]
                testUnitsEmpirically(container)
                testUnitsEmpirically(container, 2)
            }

            var header = document.createElement('h1')
            document.body.appendChild(header)
            testUnitsEmpirically(header)

        });
});