let mat = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let maxOnes = mat => {
  let inner;
  let result = 0;
  let index;
  for (let i = 0; i < mat.length; i++) {
    inner = mat[i];
    let sum = inner.reduce((a, b) => a + b);
    if (sum > result) {
      result = sum;
      index = i;
    }
  }
  return index;
};
console.log(maxOnes(mat));
