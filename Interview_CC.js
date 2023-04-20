// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function validAnagram(s, t) {
  //split t into an array to use array method
  let splitT = t.split("") // => [c,a,r]
  //fail fast
  if (s.length !== t.length) {
    return false
  }
  //result array to push into
  let result = []
  //for loop to iterate over s
  for (let i = 0; i < s.length; i++) {
		//if letter in split t exists in s[i] push into results array
    if (splitT.indexOf(s[i]) !== -1) {
      result.push(s[i])
    }
  }
	//if after all checks length of result is the same as t then return true
  if (result.length === t.length) {
    return true
  }
  return false
}

console.log(validAnagram("rat", "car"))
console.log(validAnagram("anagram", "nagaram"))
