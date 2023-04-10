// Challenge: 11-isPalindrome

// Difficulty: Intermediate

// Prompt:

// - Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
// - A palindrome is a word or phrase that are the same forward or backward.
// - Casing and spaces are not included when considering whether or not a string is a palindrome.
// - If the length of the string is 0 or 1, return true.

// Examples:

// isPalindrome('SEI Rocks'); //=> false
// isPalindrome('rotor'); //=> true
// isPalindrome('A nut for a jar of tuna'); //=> true
// isPalindrome(''); //=> true

const isPalindrome = (str) => {
	let noSpaceString = str.toLowerCase().replace(/\s+/g, "");
	if (str.length === 0 || str.length === 1) {
		return true;
	}
	let changedString = str
		.toLowerCase()
		.split("")
		.reverse()
		.join("")
		.replace(/\s+/g, "");
	if (changedString === noSpaceString) {
		return true;
	}
	return false;
};
