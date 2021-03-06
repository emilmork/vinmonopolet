'use strict';

var expect = require('chai').expect;
var number = require('../../src/filters/number');

describe('number filter', function() {
    it('returns null when input is an empty string', function() {
        expect(number('')).to.be.null;
    });

    it('handles commas and spaces after the norwegian number display rules', function() {
        expect(number('166,15')).to.equal(166.15);
        expect(number('1 337,17')).to.equal(1337.17);
    });

    it('can replace all non-number chars using greedy filter', function() {
        expect(number.greedy('Moo50Tools')).to.equal(50);
        expect(number.greedy('Pi is rougly 3.14. Roughly.')).to.equal(3.14);
        expect(number.greedy(' ')).to.equal(null);
    });

    it('can nullify given values', function() {
        expect(number.nullify(['moo'])('50')).to.equal(50);
        expect(number.nullify(['moo'])('moo')).to.equal(null);
    });
});
