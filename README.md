fixture-stdout
==============

A test fixture to intercept writes to stdout.

#### Install:
```sh
npm install fixture-stdout
```

#### Example Usage:

```javascript
var StdOutFixture = require('fixture-stdout');
var fixture = new StdOutFixture();

// Keep track of writes so we can check them later..
var _writes = [];

// Capture a write to stdout
fixture.capture( function onWrite (string, encoding, fd) {
  _writes.push({
    string: string,
    encoding: encoding,
    fd: fd
  });
});

// Uses intercepted version of stdout
console.log('a');
console.log('b');

fixture.release();

// Now we're back to the original version of stdout
console.log('c');
console.log('d');

// Voila!
// Only the first two logs ("a" and "b") are in our `_writes` array
```


#### Credit
Based on [@pguillory's example](https://gist.github.com/pguillory/729616).


#### License

MIT
