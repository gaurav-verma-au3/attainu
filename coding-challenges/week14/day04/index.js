function merger(arr1, arr2) {
    let result = []

    while (arr1.length && arr2.length) {
        let elem
        if (arr1[0] < arr2[0])
            elem = arr1.shift()
        else m = arr2.shift()

        result.push(elem)

    }
    if (arr1.length) result = result.concat(arr1)
    if (arr2.length) result = result.concat(arr2)
    return result
}

console.log(merger([1, 2, 5], [7, 9, 10]))