"use strict";

var User = require('./person');

var sort = require('./module');

var _ = require('lodash'); //constructors and methods


var John = new User('John', 26, 'j@this.com');
John.sayHello();
var Dave = new User('Dave', 30, 'd@that.com');
Dave.sayHello(); //closures

var click = function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}();

console.log(click());
console.log(click());
console.log(click());
console.log(click());
console.log(click()); //sort

console.log(sort(['a', 'd', 'f', 'b', 'h', 'g']));
var array = [{
  'name': 'Jason',
  'age': 30
}, {
  'name': 'Lucifer',
  'age': 25
}, {
  'name': 'Scott',
  'age': 40
}, {
  'name': 'Matt',
  'age': 22
}, {
  'name': 'Davis',
  'age': 26
}]; //filter

var filter = array.filter(function (person) {
  return person.age <= 30;
});
console.log(filter); //reduce

var reduced = array.reduce(function (acc, obj) {
  return (acc + obj.age) / array.length;
}, 0);
console.log(reduced); //lodash

var lodashFilter = _.filter(array, function (o) {
  return o.age <= 30;
});

console.log(lodashFilter);

var lodashReduce = _.reduce(array, function (result, value) {
  console.log(value.age);
  result = Number(result);
  result = result + Number(value.age);
  return result / array.length;
}, 0);

console.log(lodashReduce);