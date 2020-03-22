function search(arr, key) {
    var first = 0, last = arr.length - 1;

    while (first <= last) {
        var mid = Math.floor((first + last) / 2);
        if (key === arr[mid]) {
            return mid;
        }

        if (arr[mid] <= arr[last]) {
            // if right is sorted and key does not fall between mid to   
            // max search left
            if (key < arr[mid] || key > arr[last]) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        } else if (arr[mid] >= arr[first]) {
            // if left is sorted and key does not fall between min to    
            // mid, search right
            if (key > arr[mid] || key < arr[first]) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
    }
    return -1;
}


console.log(search([3, 4, 5, 1, 2], 5))