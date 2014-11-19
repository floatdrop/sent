# sent [![Build Status](https://travis-ci.org/floatdrop/sent.svg?branch=master)](https://travis-ci.org/floatdrop/sent)

> Simplified HTTP/HTTPS upload requests

A nicer interface to the built-in [`http`](http://nodejs.org/api/http.html) module.

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

##### options.encoding

Type: `string`, `null`  
Default: `'utf8'`

Encoding to be used on `setEncoding` of the response data. If null, the body is returned as a Buffer.

##### options.timeout

Type: `Number`  

Time in ms, after which request will be aborted and error event with `ECONNRESET` code will be emitted.

##### callback(err, data, response)

###### err

`Error` object with `code` property.

###### data

Answer from server on your request.

###### response

The [response object](http://nodejs.org/api/http.html#http_http_incomingmessage).

## Related

See [got](https://github.com/sindresorhus/got) if you need to download something.

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)
