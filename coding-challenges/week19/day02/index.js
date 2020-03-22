let subSetCount = (arr, k) => {
    let n = arr.length
    let subSet = 0
    for (let i = 0; i < n; i++) {
        let sum = arr[i];
        if (sum >= k) return 1;
        for (let j = i + 1; j < n; j++) {
            sum += arr[j];
            if (sum >= k || (j - i + 1) < subSet) {
                subSet = (j - i + 1);
            }
        }
    }
    return subSet;
}


//call
console.log(subSetCount([2, 1, 5, 2, 8], 7))