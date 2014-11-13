'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isnan = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-isnan', function tests() {

	it( 'should export a function', function test() {
		expect( isnan ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isnan( value );
			};
		}
	});

	it( 'should compute whether each array element is NaN', function test() {
		var data, expected, actual;

		data = [ 5, 'beep', 3, 9, true ];

		expected = [ 0, 1, 0, 0, 1 ];
		actual = isnan( data );

		assert.deepEqual( actual, expected );
	});

});
