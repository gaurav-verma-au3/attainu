function recur(n) {
    let result = 1
    for (i = 1; i < n; i++) {
        result = mul(result, i + 1)
    }
    return result
}

function mul(a, b) {
    return a * b
}

console.log(recur(23))