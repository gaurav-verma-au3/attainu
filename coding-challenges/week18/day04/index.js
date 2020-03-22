let addBinary = (bin1, bin2) => {
    let answer = "";
    let carry = 0;
    let len1 = bin1.length - 1
    let len2 = bin2.length - 1
    while (len1 >= 0 || len2 >= 0) {

        let bit1 = bin1[len1]
        let bit2 = bin2[len2]
        answer = String(bit1 ^ bit2 ^ carry) + answer
        if (bit1 == bit2 && bit1 != String(carry)) {
            carry = Number(!carry)
        }
        len1--
        len2--

    }
    if (carry) answer = String(carry) + answer
    return answer
}
console.log(addBinary("11", "1"))