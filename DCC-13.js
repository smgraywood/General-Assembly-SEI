// Prompt:

// - Write a function called mumble that accepts a single string argument.
// - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
// - Examples describe it best..

// Examples:

// mumble('X'); //=> 'X'
// mumble('abc'); //=> 'a-bb-ccc'
// mumble('121'); //=> '1-22-111'
// mumble('!A 2'); //=> '!-AA-   -2222'

const mumble = (str) => {
	let resultArr = [];
	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		let repeatedChars = `${char}${char.repeat(i)}-`;
		resultArr.push(repeatedChars);
	}
	return resultArr.join("").slice(0, -1);
};
