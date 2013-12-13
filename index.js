/**
 * Module Dependencies
 */
var util = require('util');


/**
 * Test fixture which globally intercepts writes 
 * to stdout.
 *
 * Based on: https://gist.github.com/pguillory/729616
 * 
 * @return {Function}          [an instance of the fixture]
 */

var StdOutFixture = function () {

	// Replace stdout
	var _intercept = function (callback) {
		var original_stdout_write = process.stdout.write;

		process.stdout.write = (function (write) {
			return function (string, encoding, fd) {
				write.apply(process.stdout, arguments);
				callback(string, encoding, fd);
			};
		})(process.stdout.write);

		return function _revert () {
			process.stdout.write = original_stdout_write;
		};
	};

	// Revert to the original stdout
	var _release;


	/**
	 * [Capture writes sent to stdout]
	 * @param  {[type]} interceptFn [run each time a write is intercepted]
	 */
	this.capture = function (interceptFn) {

		// Default interceptFn
		interceptFn = interceptFn || function (string, encoding, fd) {
			util.debug('(intercepted a write to stdout) ::\n' + util.inspect(string));
		};

		// Save private `release` method for use later.
		_release = _intercept(interceptFn);
	};

	/**
	 * Stop capturing writes to stdout
	 */
	this.release = function () {
		_release();
	};
};



// Export the constructor
module.exports = StdOutFixture;

