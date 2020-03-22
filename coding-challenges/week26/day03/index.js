const accum = s => {
  s = s.toLowerCase();
  let result = "";
  for (i = 0; i < s.length; i++) {
    let char = s[i];
    if (result.length > 0) result += "-";
    for (j = 0; j < i + 1; j++) {
      if (result.length > 0) {
        if (result[result.length - 1].toLowerCase() != char.toLowerCase())
          result += char.toUpperCase();
        else {
          result += char;
        }
      } else result += char.toUpperCase();
    }
  }
  return result;
};

console.log(`${accum("RqaEzty")}
=====================================
${accum("abcd")}
=====================================
${accum("cWat")}`);
