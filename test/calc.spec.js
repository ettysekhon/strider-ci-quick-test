var calc = require('../lib/calc');
var assert = require('assert');

describe('calc', function () {


    it('adds 2 numbers', function () {
        var result = calc.add(1, 2);
        assert(result === 4, 'Add not working');
    });

});
