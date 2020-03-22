let recur = (f, rest, res) => {

    if (rest.length === 0) {

        //res.push(f);

        res.add(f)

    } else {

        let char = rest.charAt(0);

        recur(f + char.toUpperCase(), rest.substr(1), res);

        recur(f + char.toLowerCase(), rest.substr(1), res);
    }
}

let result = new Set()
recur('', 'ab7c', result)

//console.log(result)

console.log(Array.from(result))
