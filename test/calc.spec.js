var calc = require('../lib/calc');
var assert = require('assert');

describe('calc', function () {


    it('adds 2 numbers', function () {
        var result = calc.add(1, 3);
        assert(result === 9, 'Add not working');
    });

});
