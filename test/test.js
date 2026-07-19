const fruits = ["apple", "banana", "cherry", "date"];

const index = fruits.indexOf("cherry");

console.log(index); 
// Output: 2 (because "cherry" is at index 2)

const missing = fruits.indexOf("orange");

console.log(missing); 
// Output: -1 (because it's not in the array)