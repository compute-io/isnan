/**
*
*	COMPUTE: isnan
*
*
*	DESCRIPTION:
*		- Computes for each array element whether an element is NaN.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// ISNAN //

/**
* FUNCTION: isnan( arr )
*	Computes for each array element whether an element is NaN.
*
* @param {Array} arr - input array
* @param {Array} array of 1s and 0s indicating if an element is NaN
*/
function isnan( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'isnan()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		out = new Array( len ),
		val;

	for ( var i = 0; i < len; i++ ) {
		out[ i ] = 0;
		val = arr[ i ];
		if ( typeof val !== 'number' || val !== val ) {
			out[ i ] = 1;
		}
	}
	return out;
} // end FUNCTION isnan()


// EXPORTS //

module.exports = isnan;
