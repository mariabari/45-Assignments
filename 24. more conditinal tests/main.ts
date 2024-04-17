// Q24: expand condition test to cover wider range of camparisons ?

// equality 
console.log("testing equality with strings");
console.log("car" == "car"); // true
console.log("car" != "car") // false

// case function test
console.log("testing lowerCase to upperCase")
console.log("car".toLowerCase == "car".toUpperCase) // false
console.log("car".toLowerCase != "car".toUpperCase) // true

// testing numbers
console.log("Arthmetic testing")
console.log(2 <= 1) // false
console.log(4 >= 2) // true


// logical AND logical OR
console.log("testing logical'and' and 'or'")
console.log(2 <= 1 && 4 >= 2) // false
console.log(2 <= 1 || 4 >= 2) // true
