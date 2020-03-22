const library = exhibition => {
  let last = exhibition.length - 1;
  let smallestIndex = -1;
  let result;
  for (i = last; i >= 0; i--) {
    if (exhibition[i] > exhibition[i - 1]) smallestIndex = i - 1;
  }
  if (smallestIndex === -1) return [];
  else {
    return [
      ...exhibition.slice(0, smallestIndex),
      ...exhibition.slice(smallestIndex + 1)
    ];
  }
};

console.log(library([2, 2, 1, 2, 1]));
