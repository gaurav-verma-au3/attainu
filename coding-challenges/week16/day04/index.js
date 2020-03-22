function search(arr, key) {
    let first = 0, last = arr.length - 1;
    while (first <= last) {
        let pivot = Math.floor((first + last) / 2);
        if (key === arr[pivot]) {
            return pivot;
        }
        if (arr[pivot] <= arr[last]) {
            if (key < arr[pivot] || key > arr[last]) {
                last = pivot - 1;
            } else {
                first = pivot + 1;
            }
        } else if (arr[pivot] >= arr[first]) {
            if (key > arr[pivot] || key < arr[first]) {
                first = pivot + 1;
            } else {
                last = pivot - 1;
            }
        }
    }
    return -1;
}
console.log(search([4, 5, 6, 1, 2, 3], 3))