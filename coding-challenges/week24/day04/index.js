const toBrackets = s => {
  let char = s.toLowerCase().split("");
  let arr = char.filter(function(a, b) {
    return char.indexOf(a) !== b;
  });
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      result = result + ")";
    } else {
      result = result + "(";
    }
  }
  return result;
};
console.log(toBrackets("(( @"));
