'use strict';

const a = prompt('Enter the first number');
const b = prompt('Enter the second number');

function add(a, b) {
  console.log(`Result: ${a} + ${b} = ${Number(a) + Number(b)}`);
}

function sub(a, b) {
  console.log(`Result: ${a} - ${b} = ${a - b}`);
}

function mult(a, b) {
  console.log(`Result: ${a} * ${b} = ${a * b}`);
}

function div(a, b) {
  console.log(`Result: ${a} / ${b} = ${a / b}`);
}

add(a, b);
sub(a, b);
mult(a, b);
div(a, b);
