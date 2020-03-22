const players = [
  { name: "Roger Federer", rank: 1 },
  { name: "Rafel Nadal", rank: 2 },
  { name: "Nalbandian", rank: 12 },
  { name: "Andy Murray", rank: 14 },
  { name: "Andy Roddick", rank: 4 },
  { name: "Pete Sampras", rank: 3 },
  { name: "Rod Laver", rank: 190 },
  { name: "Andre Agassi", rank: 11 },
  { name: "Novak Djokovic", rank: 5 },
  { name: "Arthur Ashe", rank: 8 }
];

for (player of players) {
  if (player.rank <= 10) console.log(player);
}

const initials = name => {
  let result = "";
  name.split(" ").map(parts => (result += parts[0]));
  return result;
};

const compareArrays = (arr1, arr2) => {
  let l1 = arr1.length;
  let l2 = arr2.length;
  let flag = true;
  if (l1 === l2) {
    let i = 0;
    while (i < l1) {
      flag = arr1[i] != arr2[i] ? false : true;
      i++;
    }
  } else flag = false;

  return flag;
};

console.log(`================================================
${initials("Mahendra Singh Dhoni")}
================================================
${compareArrays([1, 2, 3, 4], [1, 2, 3, 4])}
`);
