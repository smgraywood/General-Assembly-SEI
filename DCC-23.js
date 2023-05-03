// Prompt:

// - Write a function called balancedBrackets that accepts a single string as argument.
// - The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
// - The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
// - The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...

// Examples:

// balancedBrackets( '()' ) // => true
// balancedBrackets( '(]' ) // => false
// balancedBrackets( '[{}]' ) // => true
// balancedBrackets( '[(])' ) // => false
// balancedBrackets( '[({}[])]' ) // => true

const balancedBrackets = (str) => {
	const stack = [];
	const openingBraces = ["(", "[", "{"];
	const closingBraces = [")", "]", "}"];

	for (let i = 0; i < str.length; i++) {
		const brace = str[i];
		if (openingBraces.includes(brace)) {
			stack.push(brace);
		} else if (closingBraces.includes(brace)) {
			const lastOpeningBrace = stack.pop();
			if (
				openingBraces.indexOf(lastOpeningBrace) !==
				closingBraces.indexOf(brace)
			) {
				return false;
			}
		}
	}
	return stack.length === 0;
};
