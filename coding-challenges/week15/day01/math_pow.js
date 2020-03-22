let num = BigInt(Math.pow(2, 1000))

let result = num.toString().match(/-?\d/g).reduce(function (a, b) {
    return +a + +b;
});

console.log(result)