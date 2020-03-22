const findNextSquare = n => {

let nextNum = Math.sqrt(n)+1

if(nextNum%1 === 0){

  return nextNum**2

} else return -1

};

console.log(findNextSquare(121));
console.log(findNextSquare(144));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

