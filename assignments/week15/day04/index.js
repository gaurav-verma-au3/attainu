function mergeSort(arr) {

    let len = arr.length;
    //break condition
    if (len == 1)
        return arr;
    //divide in two arrays
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    //pass divided arays for further divide and merge (recuesive call)
    return merge(mergeSort(left), mergeSort(right));
}



function merge(left, right) {
    let result = [];
    let lLen = left.length;
    let rLen = right.length;
    let l = 0;
    let r = 0;
    //conditional loop for pushing in result array
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }

    //concat and return resultant array
    return result.concat(left.slice(l)).concat(right.slice(r));
}

//call
console.log(mergeSort([1, 2, 2, 5, 3, 4]))