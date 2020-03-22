let getSingles = (arr) => {
    let doubles = []
    let result = []
    arr.map((val, index) => {
        for (i = index + 1; i < arr.length; i++) {
            if (val === arr[i]) {
                doubles.push(val)
            }
        }
    })
    arr.map((val) => {
        if (!doubles.includes(val)) {
            result.push(val)
        }
    })
    return result
}



console.log(getSingles([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]))