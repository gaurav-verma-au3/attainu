let findMissing = (arr) => {
    let s = arr.sort()

    // let init = s[0]
    // let dummy = []
    // let result = []
    // let len = s.length
    // for (let i = 0; i < len; i++) {
    //     dummy[i] = init++
    // }

    // for (let j = 0; j < len; j++) {
    //     if (s[j] != dummy[j]) {
    //         result.push(dummy[j])
    //     }
    // }
    // console.log(s)
    // console.log(dummy)

    console.log(s)
    let result = []
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            result.push(s[i])
        }
        if (s[i + 1] - s[i] != 1 && s[i + 1] - s[i] != 0) {
            result.push(s[i] + 1)
        }
    }
    if (s[s.length - 1] != s[0] + s.length - 1) {
        result.push(s[0] + s.length - 1)
    }
    return result
}
console.log(findMissing([3, 4, 2, 5, 2]))