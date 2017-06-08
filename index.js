'use strict';

var shuffle = require('array-shuffle');

module.exports = InfiniteRandomList;
function InfiniteRandomList(items) {
    this.set(items);
}

InfiniteRandomList.prototype.set = function(items) {
    this.original = items.slice();
    this.items = [];
    this.lastItem = null;
};

InfiniteRandomList.prototype.get = function() {
    var item = this.items.pop();

    if (!item) {
        this.items = shuffle(this.original.slice());
        var l = this.items.length - 1;
        // If first shuffled item is the same as the last one, push it further into the pile
        if (this.original.length > 1 && this.items[l] == this.lastItem) {
            let offset = Math.max(0, Math.floor(this.original.length * 0.5));
            let swapIndex = Math.floor(Math.random() * (this.original.length - offset));
            let temp = this.items[swapIndex];
            this.items[swapIndex] = this.items[l];
            this.items[l] = temp;
        }

        return this.get();

    } else {
        // Store last item to compare to the newly shuffled array
        this.lastItem = item;
    }

    return item;
};