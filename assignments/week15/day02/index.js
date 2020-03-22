function binarySearch(arr, n) {
    let first = 0
    let last = arr.length - 1
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (arr[mid] === n) return mid;
        else if (arr[mid] > n) last = mid - 1;
        else if (arr[mid] < n) first = mid + 1;
        else return -1
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))