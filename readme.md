# sent [![Build Status](https://travis-ci.org/floatdrop/sent.svg?branch=master)](https://travis-ci.org/floatdrop/sent)

> Simplified HTTP/HTTPS upload requests

Wrapper around [got](https://github.com/sindresorhus/got) to send POST data from arguments.

Use [request](https://github.com/mikeal/request) if you need more.

## Install

```sh
$ npm install --save sent
```

## Usage

```js
var sent = require('sent');

// Callback mode.
sent('http://devnull-as-a-service.com/dev/null', 'Hello', function (err, data, res) {
	console.log(res.statusCode);
});

// Stream mode.
sent('http://devnull-as-a-service.com/dev/null', 'Hello').pipe(fs.createWriteStream('index.html'));
```

#### sent(url, content, [options], [callback])

See [got](https://github.com/sindresorhus/got) for options explanation.

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)
