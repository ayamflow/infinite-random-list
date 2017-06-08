
infinite-random-list
===

### An infinite list of shuffled elements ∞

Takes a reference set of items , returns a random item from this array, infinitely. Never pass 2 identical items in a row.

- non-deterministic
- goes through a full set before shuffling again
- will `slice()` the given array

Useful for generating an infinite grid based on different patterns/positions, or showing random informations without showing the same item multiple times.

### Installation :package:

`npm i infinite-random-list -S`

### Usage & example :floppy_disk:

```
    import InfiniteRandomList from 'infinite-random-list'

    let list = new InfiniteRandomList(['Emma', 'Hannah', 'Alex', 'Mia'])
    list.get() // 'Alex'
    list.get() // 'Mia'
    list.get() // 'Emma'
    list.get() // 'Hannah'
    // shuffles again here
    list.get() // 'Mia'
    list.get() // 'Alex'
    ...
```

* `new InfiniteRandomList(items)`
Returns a list instance populated with `items`.

* `list.set(items)`
Sets **items** (Array) as the reference items.

* `list.get()`
Returns one item from the original set (passed using `list.set(items)` or the constructor). Always returns something (i.e. the list doesn't get empty). Always return a different item.

### License :pencil:
MIT.