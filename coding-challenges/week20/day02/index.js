let calc = n => {
    let squares = n.toString().split('').map(val => val ** 2)
    let sum = squares.reduce((a, b) => a + b, 0)
    return sum
}

let isHappyN = (n) => {
    let result = n
    while (result != 1 && result != 4) {
        result = calc(result);
    }
    if (result == 1) {
        return true
    } else return false
}
console.log(isHappyN(23))