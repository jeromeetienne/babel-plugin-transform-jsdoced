/**
 * This is a super function
 * @param {String} myString1 - a super string
 * @param {String} myString2 - a super string
 * @return {String} - super returned string
 */
function myFunctionDeclaration(myString1, myString2){
        return myString1+myString2;
}


console.log('return is ', myFunctionDeclaration('foo', 'bar'))
 

/**
 * Test if it is odd
 * @param {Number} n - my number
 */
function isOdd(n){
	if( n % 2 ){
		console.log(n+' is odd')
	}else{
		console.log(n+' is even')
	}
}

// Let's use this function
isOdd(0)
isOdd(1)
isOdd('foobar')
