function findPairs(arr, n) {
    let result = []
    if (arr.length == 1) return 'no matching pairs'
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == n) { result.push(arr[i], arr[j]) }
        }
    }
    return result;
}


console.log(findPairs([1, 2, 4, 5, 6, 10, 12], 10))