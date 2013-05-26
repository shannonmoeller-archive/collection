
# Collection.js

  A basic JavaScript collection.

## Installation

  Server-side ([Node.js](http://nodejs.org)):

    $ npm install shannonmoeller/collection.js

  Client-side ([component(1)](https://github.com/component)):

    $ component install shannonmoeller/collection.js

## API

### `Collection(array)`

Create a new model which wraps around `object`.

```js
var Collection = require('collection');
var foo = Collection([{ a: 1 }, { a: 2 }, { a: 3 }]);
```

### `.model`

### `.filter(filterer)`

### `.map(mapper)`

### `.pluck(key):Array.<*>` <br /> `.pluck(array):Array.&lt;Object&gt;`

### `.sort(sorter)`

### `.toJSON()`

  Returns the current state of the internal data as a plain object.

```js
var foo = Collection([{ a: 1 }, { a: 2 }, { a: 3 }]);

foo.toJSON(); // [{ a: 1 }, { a: 2 }, { a: 3 }]
```

## License

  MIT
