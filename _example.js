var StdOutFixture = require('./');




var fixture = new StdOutFixture();

fixture.capture( /* optionally, provide a capture fn. See readme for args. */ );

// Uses intercepted version of stdout
console.log('a');
console.log('b');

fixture.release();

// Now we're back to the original version of stdout
console.log('c');
console.log('d');