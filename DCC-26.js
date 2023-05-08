// Prompt:

// - Write a function called toCamelCase that accepts a single string as argument.
// - The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
// - If the string argument does not contain a "_" or a "-", return the same string.

// Hints:

// - This is a great challenge for using regular expressions combined with the String.replace method.

// Examples:

// toCamelCase( 'sei' ) // => 'sei'
// toCamelCase( 'sei-rocks' ) // => 'seiRocks'
// toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
// toCamelCase( 'Mama-mia' ) // => 'MamaMia'
// toCamelCase( 'A_b_c' ) // => 'ABC'

const toCamelCase = (str) => {
	return str.replace(/[-_]\w/g, (match) => {
		return match.charAt(1).toUpperCase();
	});
};
