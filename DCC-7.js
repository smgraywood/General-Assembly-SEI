// Prompt:

// - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.

// Examples:

// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
// -----------------------------------------------------------------*/
// // Your solution for 07-reverseUpcaseString here:

reverseUpcaseString = (str) => {
	return str.toUpperCase().split("").reverse().join("")
}

console.log(reverseUpcaseString("SEI ROCKS!")) // => "!SKCOR IES"
