// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const assemble = s => {
  if (s.length < 1) return "";
  let word = s.split(" ");
  let indexes = [];
  let sentence = [];
  word.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (!isNaN(parseInt(element[i]))) indexes.push(parseInt(element[i]));
    }
  });
  for (let i = 0; i < word.length; i++) {
    sentence[indexes[i] - 1] = word[i];
  }
  return sentence.join(" ");
};

console.log(assemble(""));
