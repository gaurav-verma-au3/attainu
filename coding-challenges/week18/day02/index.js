let mat = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];


let reverse = (mat) => {
    let inner;
    for (let i = 0; i < mat.length; i++) {
        inner = mat[i]
        if (i % 2 !== 0) {
            for (let k = inner.length - 1; k >= 0; k--) {
                console.log(inner[k])
            }
        }
        if (i % 2 == 0) {
            for (let j = 0; j < inner.length; j++) {
                console.log(inner[j])
            }
        }
    }
}
reverse(mat)