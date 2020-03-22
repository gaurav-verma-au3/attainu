function heapAlgo(k, arr) {
    if (k == 1) {
        console.log(arr)
        return 0
    }
    for (let i = 0; i < k; i++) {

        heapAlgo(k - 1, arr)
        if (i < k - 1) {
            k % 2 ? [arr[0], arr[k - 1]] = [arr[k - 1], arr[0]] : [arr[i], arr[k - 1]] = [arr[k - 1], arr[i]]
        }
    }
    return arr
}

console.log(heapAlgo(4, ['A', 'B', 'C', 'D']))