// Prompt:

// - Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
// - The function should return a new array containing all elements in common, including repeating element values.
// - The ordering of the elements in the returned is not important.
// - If there are no elements in the arrays in common,  the intersection function should return an empty array.
// - The function should not mutate (change) either argument.

// Examples:

// intersection(['a', 1], []) //=> []
// intersection(['a', 1], [true, 'a', 15]) //=> ['a']
// intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]

const intersection = (arr1, arr2) => {
	const result = [];
	const arr2Copy = arr2.slice();

	for (let i = 0; i < arr1.length; i++) {
		const index = arr2Copy.indexOf(arr1[i]);
		if (index !== -1) {
			result.push(arr1[i]);
			arr2Copy.splice(index, 1);
		}
	}

	return result;
};
