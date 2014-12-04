'use strict';

var got = require('got');

module.exports = function (url, content, opts, cb) {
	console.warn('sent is deprecated. use got instead - https://github.com/sindresorhus/got');

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
