
let hashMap = new Set()

let removeDuplicate = (arr) => {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1])
            count++
    }
    return count
}


//call
console.log(removeDuplicate([2, 2, 2, 11]))