'use strict';

var got = require('got');

module.exports = function (url, content, opts, cb) {
	if (typeof opts === 'function') {
		// If `cb` has been specified but `opts` has not.
		cb = opts;
		opts = {};
	} else if (!opts) {
		// opts has not been specified.
		opts = {};
	}

	opts.body = content;

	return got(url, opts, cb);
};
