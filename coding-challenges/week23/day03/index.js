const xAndO = (s) => {
    let x = 0
    let o = 0
    for (i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() == "x") {
            x = x + 1
        }
        else if (s[i].toLowerCase() == "o") {
            o = o + 1
        }
    }
    if (x === o) {
        return true
    } return false
}



console.log(xAndO("zzoo"))