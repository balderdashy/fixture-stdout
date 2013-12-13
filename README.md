fixture-stdout
==============

A test fixture to intercept writes to stdout.

#### Install:
```sh
npm install fixture-stdout
```

#### Example Usage:

```javascript
var stdoutFixture = require('fixture-stdout');


stdoutFixture.capture();

// Uses intercepted version of stdout
console.log('a');
console.log('b');

stdoutFixture.release();

// Now we're back to the original version of stdout
console.log('c');
console.log('d');
```


#### Credit
Based on [@pguillory's example](https://gist.github.com/pguillory/729616).


#### License

MIT
