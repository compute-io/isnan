'use strict';

var isnan = require( './../lib' );

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
