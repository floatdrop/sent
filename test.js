/* global it */

'use strict';
var assert = require('assert');
var sent = require('./index');

it('should send Buffer', function (done) {
	sent('http://devnull-as-a-service.com/dev/null', '', function (err) {
		if (err) {
			console.error(err);
			assert(false);
			return;
		}
		done();
	});
});
