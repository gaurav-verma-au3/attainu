"use strict";

var a = 5;
var b = 5;

var sum = function sum(a, b) {
  return a + b;
};

var exp = function exp(a, b) {
  return Math.pow(a, b);
};

console.log(sum(a, b));
console.log(exp(a, b));