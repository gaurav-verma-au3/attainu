const fs = require('fs');

function search(file, string) {
    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) throw err;
        let array = data.split(/\r?\n/);
        array.forEach((line, index) => {
            if (line.includes(string)) {
                console.log(`"${string}"` + ' is on line no : ' + (index + 1));
            }
        })
    });
}

search("demo.txt", "Gaurav")