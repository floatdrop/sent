'use strict';
var urlLib = require('url');
var http = require('http');
var https = require('https');
var zlib = require('zlib');
var assign = require('object-assign');

module.exports = function (url, content, opts, cb) {
	var redirectCount = 0;

	var send = function (url, content, opts, cb) {
		if (typeof opts === 'function') {
			cb = opts;
			opts = {};
		}

		cb = cb || function () {};
		opts = opts || {};

		opts.headers = assign({
			'user-agent': 'https://github.com/floatdrop/sent',
			'accept-encoding': 'gzip,deflate'
		}, opts.headers || {});

		var parsedUrl = urlLib.parse(url);
		var fn = parsedUrl.protocol === 'https:' ? https : http;
		var arg = assign({ method: 'POST' }, parsedUrl, opts);

		var req = fn.request(arg, function (res) {
			var ret = '';

			// redirect
			if (res.statusCode < 400 && res.statusCode >= 300 && res.headers.location) {
				res.destroy();

				if (++redirectCount > 10) {
					cb(new Error('Redirected 10 times. Aborting.'));
					return;
				}

				send(urlLib.resolve(url, res.headers.location), content, opts, cb);
				return;
			}

			if (res.statusCode !== 200) {
				res.destroy();
				cb(res.statusCode);
				return;
			}

			if (['gzip', 'deflate'].indexOf(res.headers['content-encoding']) !== -1) {
				var unzip = zlib.createUnzip();
				res.pipe(unzip);
				res = unzip;
			}

			res.setEncoding('utf8');

			res.on('data', function (data) {
				ret += data;
			});

			res.once('error', cb);

			res.once('end', function () {
				cb(null, ret, res);
			});
		}).once('error', cb);

		if (content.pipe) {
			content.pipe(req);
		} else {
			req.write(content);
			req.end();
		}
	};

	send(url, content, opts, cb);
};
