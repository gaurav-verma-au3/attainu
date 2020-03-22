function quickSort(arr, left, right) {
    let len = arr.length;
    let index

    if (len > 1) {

        index = partition(arr, left, right)

        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }

        if (index < right) {
            quickSort(arr, index, right)
        }

    }

    return arr

}

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2)
    let pivot = arr[middle]
    let i = left
    let j = right
    while (i <= j) {

        while (arr[i] < pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }

    return i

}

let arr = [1, 5, 9, 3, 6, 4, 7, 8, 1, 2, 5, 8, 6]
console.log(quickSort(arr, 0, arr.length - 1))