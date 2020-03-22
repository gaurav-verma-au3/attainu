
let hashMap = new Set()

let printPairs = (arr, s) => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] == s)
            return [i, j];
        else if (arr[i] + arr[j] < s)
            i++;
        else
            j--;
    }
    return "not found";
}


//call
console.log(printPairs([1, 2, 3, 4, 6], 6))