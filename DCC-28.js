// Prompt:

// - This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
// - Write a function called gridTrip that accepts two arguments.
// - The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
// - The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
// - The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).

// Hint:
// - Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

// Examples:

// gridTrip( [0, 0], 'U2R1' ) // => [2, 1]
// gridTrip( [5, 10], 'D5L15U2' ) //-> [2, -5]
// gridTrip( [-22, 100], 'L2L15D50U1D9') //=> [-80, 83]

const gridTrip = (startingPos, moves) => {
	const directions = {
		U: [1, 0],
		D: [-1, 0],
		R: [0, 1],
		L: [0, -1],
	};

	let [x, y] = startingPos;

	moves.match(/[UDLR]\d+/g).forEach((move) => {
		const [direction, units] = [move[0], Number(move.slice(1))];
		const [dx, dy] = directions[direction];
		x += dx * units;
		y += dy * units;
	});

	return [x, y];
};
