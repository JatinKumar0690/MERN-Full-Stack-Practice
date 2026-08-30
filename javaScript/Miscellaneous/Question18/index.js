// Take a number n as input from user
//  create an Array of numbers from 1 to n and use the
//  reduced method to calculate sum of all numbers in the array
// use the reduced method to
//  calculate product of whole numbers in the array

const userInput = parseInt(prompt("Enter a valid number"));
const array = [];

for (let i = 1; i <= userInput; i++) {
  array.push(i);
}

console.log(array);

const sumArr = array.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
}, 0);

const productArr = array.reduce((accumulator, currentVal) => {
  return accumulator * currentVal;
}, 1);

console.log("The sum of array is ", sumArr);
console.log("The product of array is ", productArr);
