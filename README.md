isnan
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes an element-wise isNaN provided an input array.


## Installation

``` bash
$ npm install compute-isnan
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var foo = require( 'compute-isnan' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-isnan' );
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
