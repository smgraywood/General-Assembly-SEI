// Prompt:

// - Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
// - A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

const isPrime = (num) => {
	// 1 is not a prime number
	if (num <= 1) {
		return false;
	}
	// 2 is a prime number
	if (num === 2) {
		return true;
	}
	// Check if num is divisible by any integer from 2 to its square root
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

console.log(isPrime(2)) //=> true
console.log(isPrime(3)) //=> true 
console.log(isPrime(4)) //=> false
console.log(isPrime(29)) //=> true
console.log(isPrime(200)) //=> false
