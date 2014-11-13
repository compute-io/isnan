isnan
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes for each array element whether an element is NaN.


## Installation

``` bash
$ npm install compute-isnan
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var isnan = require( 'compute-isnan' );
```

#### isnan( arr )

Computes for each `array` element whether an element is `NaN`. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is `NaN` and `0` means that an element is __not__ `NaN`.

``` javascript
var out = isnan( [ 5, 'beep', 3, 9, true ] );
// returns [ 0, 1, 0, 0, 1 ]
```


## Examples

``` javascript
var isnan = require( 'compute-isnan' );

// Simulate some data...
var data = new Array( 100 ),
	len = data.length,
	rand;

// Division by `undefined` returns NaN...
for ( var i = 0; i < len; i++ ) {
	rand = Math.random()*10;
	if ( rand < 0.5 ) {
		rand = undefined;
	}
	data[ i ] = 100 / rand;
}

var out = isnan( data );

// Count the number of NaNs detected...
var sum = 0;
for ( var i = 0; i < len; i++ ) {
	sum += out[ i ];
}

console.log( 'Count: %d', sum );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-isnan.svg
[npm-url]: https://npmjs.org/package/compute-isnan

[travis-image]: http://img.shields.io/travis/compute-io/isnan/master.svg
[travis-url]: https://travis-ci.org/compute-io/isnan

[coveralls-image]: https://img.shields.io/coveralls/compute-io/isnan/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/isnan?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/isnan.svg
[dependencies-url]: https://david-dm.org/compute-io/isnan

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/isnan.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/isnan

[github-issues-image]: http://img.shields.io/github/issues/compute-io/isnan.svg
[github-issues-url]: https://github.com/compute-io/isnan/issues
