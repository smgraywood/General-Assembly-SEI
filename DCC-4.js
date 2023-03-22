/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

addList = (...nums) => {
let total = 0
  if (nums === undefined){
   return 0 
  }
  else {
    for(let num = 0; num < nums.length; num++){
      total += nums[num]
    }
    return total
  }
}

console.log(addList(5, 10, 11)) //=> 26
