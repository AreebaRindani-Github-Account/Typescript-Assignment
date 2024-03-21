
//Equality and inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "orange");


// Tests using the lower case function 3
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");


// Numerical tests involving equality and inequality
console.log("Equality test with number: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with number: ", (26 as number) != 35);


// Greater than test 
console.log("Greater than test", 10 > 5);
// Less than test
console.log("less than test", 5 < 10);

// Greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// Less than or equal to
console.log("less than or equal to test: ", 5 <= 10);


// Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using "or" operator
console.log("Or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));


// Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));