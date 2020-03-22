function selection_sort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let x = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[x]) {
                x = j;
            }
        }
        if (x !== i) {
            let temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
        }
    }
    return arr
}

console.log(
    selection_sort([1, 5, 9, 8, 2, 1, 4, 5, 6])
)