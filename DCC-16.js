// Prompt:

// - Write a function named findHighestPriced that accepts a single array of objects.
// - The objects contained in the array are guaranteed to have a price property holding a numeric value.
// - The function should return the object in the array that has the largest value held in the price property.
// - If there's a tie between two or more objects, return the first of those objects in the array.
// - Return the original object, not a copy.
// - Do not mutate the array being passed in.

// Examples:

// findHighestPriced([
// 	{ sku: 'a1', price: 25 },
// 	{ sku: 'b2', price: 5 },
// 	{ sku: 'c3', price: 50 },
// 	{ sku: 'd4', price: 10 }
// ]);
// //=> { sku: 'c3', price: 50 } 

// findHighestPriced([
// 	{ sku: 'a1', price: 25 },
// 	{ sku: 'b2', price: 50 },
// 	{ sku: 'c3', price: 50 },
// 	{ sku: 'd4', price: 10 }
// ]);
// //=> { sku: 'b2', price: 50 }

const findHighestPriced = (products) => {
	if (products.length === 0) return
	if (products.length === 1) return arr[0]
	
	let highestPricedProduct = products[0];

	for (let i = 1; i < products.length; i++) {
		if (products[i].price > highestPricedProduct.price) {
			highestPricedProduct = products[i];
		}
	}

	return highestPricedProduct;
};
