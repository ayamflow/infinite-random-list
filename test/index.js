'use strict';

var _ = require('underscore');
var test = require('tape');
var InfiniteRandomList = require('../');

var set = [1, 2, 3, 4, 5];

// Each test is ran 100 times
var repeater = _.times(100, function(){return 0;});

// test list contain the same items
test('input/output comparison', function(assert) {
    var list = new InfiniteRandomList(set);
    var pass = repeater.reduce(function(reduce, item) {
        var output = _.times(set.length, function() {
            return list.get();
        });
        return set.length === _.union(output, set).length && reduce;
    }, true);

    assert.ok(pass, 'The list should return the same items as the reference set');
    assert.end();
});

// test list is shuffled
test('shuffle test', function(assert) {
    // Assume if at least 1 item is out of place, the array is considered shuffled
    var list = new InfiniteRandomList(set);
    var pass = repeater.reduce(function(reduce, item) {
        var output = _.times(set.length, function() {
            return list.get();
        });
        return output.reduce(function(reduce, value, i) {
            return reduce || value != set[i]
        }, reduce);
    }, true);

    assert.ok(pass, 'The list should return shuffled items');
    assert.end();
});

// test 1st item and last are different
test('different items test', function(assert) {
    var list = new InfiniteRandomList(set);

    var pass = repeater.reduce(function(reduce, item, i) {
        var lastItem;
        var firstItem;

        let length = i > 0 ? set.length - 2 : set.length - 1;
        _.times(length, function() {
            list.get();
        });

        lastItem = list.get();
        // the list will reshuffle here
        firstItem = list.get();

        return lastItem !== firstItem && reduce;
    }, true);

    assert.ok(pass, 'Two consecutive items should always be different');
    assert.end();
});