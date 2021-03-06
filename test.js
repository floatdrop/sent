/* global it */

'use strict';
var assert = require('assert');
var sent = require('./index');

var devNull = 'http://devnull-as-a-service.com/dev/null';

it('should send Buffer', function (done) {
	sent(devNull, new Buffer('Hello'), function (err) {
		assert.ifError(err);
		done();
	});
});

it('should send string', function (done) {
	sent(devNull, 'Hello', function (err) {
		assert.ifError(err);
		done();
	});
});
