let num = "012345"
num[0]
console.log(isDuck(num))


function isDuck(num) {
    if (num[0] != "0") {
        for (i = 0; i < num.length; i++) {
            if (num[i] == 0)
                return true
        }
    }
    return false
}