const highAndLow = s => {
  let numbers = s.split(" ");
  let sorted = numbers.sort(function(a, b) {
    return Number(a) - Number(b);
  });
  return `${sorted[sorted.length - 1]} ${sorted[0]} `;
};

console.log(highAndLow("1 9 3 4 -5"));
