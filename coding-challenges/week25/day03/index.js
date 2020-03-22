const brackets = str => {
  let flag = true;
  let stack = [];
  let validationRef = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (char of str) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
      console.log(`${char}=====  ${char}=====  stack : [${stack}]`);
    } else {
      let popped = stack.pop();
      if (validationRef[popped] != char) flag = false;
      console.log(`${char}=====  ${popped}=====  stack : [${stack}]`);
    }
  }
  if (stack.length != 0) flag = false;

  return flag;
};

console.log(brackets("([({[({{()}})]})[{(){}[]}]])"));

//({[]})
//([({[({{()}})]})[{(){}[]}]])
