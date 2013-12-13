var stdoutFixture = require('./');


stdoutFixture.capture();

// Uses intercepted version of stdout
console.log('a');
console.log('b');

stdoutFixture.release();

// Now we're back to the original version of stdout
console.log('c');
console.log('d');