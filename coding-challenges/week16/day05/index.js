function shiftZero(arr) {
    const len = arr.length
    let count = 0
    let current
    for (i = 0; i < len; i++) {
        current = arr[i];
        if (current != 0) {
            arr[count] = current
            count++
        }
    }
    while (count < len) {
        arr[count++] = 0
    }
    return arr
}
console.log(shiftZero([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))