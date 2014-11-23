/* global it */

'use strict';
var assert = require('assert');
var sent = require('./index');
var fs = require('fs');

var devNull = 'http://devnull-as-a-service.com/dev/null';

it('should send Buffer', function (done) {
	sent(devNull, new Buffer('Hello'), function (err, data, res) {
		fine(err);
		assert.equal(res.statusCode, 200);
		done();
	});
});

it('should send string', function (done) {
	sent(devNull, 'Hello', function (err, data, res) {
		fine(err);
		assert.equal(res.statusCode, 200);
		done();
	});
});

it('should send Stream', function (done) {
	sent(devNull, fs.createReadStream(__filename), function (err, data, res) {
		fine(err);
		assert.equal(res.statusCode, 200);
		done();
	});
});

it('should return Stream without callback', function () {
	var stream = sent(devNull, fs.createReadStream(__filename));
	assert.notEqual(stream, undefined);
	assert.notEqual(stream.pipe, undefined);
});

it('should support timeout option', function (done) {
	var stream = sent(devNull, fs.createReadStream(__filename), { timeout: 1 });

	stream.on('error', function (error) {
		assert.strictEqual(error.code, 'ETIMEDOUT');
		done();
	});
});

function fine (err) {
	if (err) {
		console.error(err);
		assert(false);
		return;
	}
}
