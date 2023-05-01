// Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
// - Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
// - The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
// - If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.

// Examples:

// primeFactors(2) //=> [2]
// primeFactors(3) //=> [3]
// primeFactors(4) //=> [2, 2]
// primeFactors(18) //=> [2, 3, 3]
// primeFactors(29) //=> [29]
// primeFactors(105) //=> [3, 5, 7]
// primeFactors(200) //=> [2, 2, 2, 5, 5]

const primeFactors = (num) => {
	// Return an empty array if num is not a whole number greater than 1
	if (!Number.isInteger(num) || num <= 1) {
		return [];
	}

	const factors = [];

	// Divide num by the lowest possible factor, which is 2
	while (num % 2 === 0) {
		factors.push(2);
		num /= 2;
	}

	// Divide num by odd factors starting from 3
	for (let factor = 3; factor <= Math.sqrt(num); factor += 2) {
		while (num % factor === 0) {
			factors.push(factor);
			num /= factor;
		}
	}

	// If num is still greater than 2, it must be a prime factor
	if (num > 2) {
		factors.push(num);
	}

	return factors;
};
