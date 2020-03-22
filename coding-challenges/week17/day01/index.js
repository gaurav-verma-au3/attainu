let bubbleSort = (arr) => {
    let len = arr.length
    let max1 = - Infinity;
    let max2 = - Infinity;
    for (let i = 0; i <= len; i++) {
        if (arr[i] > max1) {
            max2 = max1
            max1 = arr[i]
        }
        else if (arr[i] > max2) {
            max2 = arr[i]
        }

    }
    console.log(arr.filter(value => value < max2))
}

bubbleSort([2, 8, 7, 1, 5])