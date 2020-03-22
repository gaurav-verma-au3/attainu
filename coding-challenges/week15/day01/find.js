var a = [2, 5, 10],
    missing = [];

for (var i = a[0]; i <= a[a.length - 1]; i++) {
    if (a.indexOf(i) == -1) {
        missing.push(i);
    }
}

console.log(missing)