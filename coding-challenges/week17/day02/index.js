let bubbleSort = (arr) => {
    let zeroCount = 0
    let oneCount = 0
    let twoCount = 0
    let len = arr.length
    for (let i = 0; i <= len; i++) {
        if (arr[i] == 0) { zeroCount++ }
        if (arr[i] == 1) { oneCount++ }
        if (arr[i] == 2) { twoCount++ }
    }
    let idx = 0
    while (zeroCount > 0) {
        arr[idx] = 0
        idx++
        zeroCount--
    }
    while (oneCount > 0) {
        arr[idx] = 1
        idx++
        oneCount--
    }
    while (twoCount > 0) {
        arr[idx] = 2
        idx++
        twoCount--
    }
    console.log(arr)
}

bubbleSort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])