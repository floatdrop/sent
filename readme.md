# sent [![Build Status](https://travis-ci.org/floatdrop/sent.svg?branch=master)](https://travis-ci.org/floatdrop/sent)

> Simplified HTTP/HTTPS upload requests

A nicer interface to the built-in [`http`](http://nodejs.org/api/http.html) module. It heavily inspired by [got](https://github.com/sindresorhus/got) module (cudos to Sindre Sorhus).

Use [request](https://github.com/mikeal/request) if you need more.

## Install

```sh
$ npm install --save sent
```

## Usage

```js
var sent = require('sent');

sent('http://devnull-as-a-service.com/dev/null', 'Hello', function (err, data, res) {
	console.log(res.statusCode);
});
```

### API

It's a `POST` request by default, but can be changed in `options`.

#### sent(url, content, [options], [callback])

##### url

*Required*  
Type: `string`

The url to request.

##### content

*Required*  
Type: `Stream`, `Buffer` or `string`

Content to send.

##### options

Type: `object`

Any of the [`http.request`](http://nodejs.org/api/http.html#http_http_request_options_callback) options.

##### callback(err, data, response)

###### data

Answer from server on your request.

###### response

The [response object](http://nodejs.org/api/http.html#http_http_incomingmessage).

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)
