// Prompt:

// - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.

// Examples:

// removeEnds('SEI Rocks!'); //=> "DI Rocks"
// removeEnds('a'); //=> "" (empty string)


const removeEnds = (str) => {
  if (str.length < 3){
    return ""
  }
  let newStr = str.slice(1).slice(0,-1)
  return newStr
}
