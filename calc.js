const add = require('./add');
const subtract = require('./sub');
const multiply = require('./product');
const divide = require('./divide');

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);