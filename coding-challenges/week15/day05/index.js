const csv = require('csvtojson')
const csvFilePath = __dirname + "/computers-datafile.csv"

function bubbleSort(arr, key) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i][key] < arr[i + 1][key]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr
}

let data

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        data = jsonObj
        for (let i = 0; i < data.length; i++) {
            bubbleSort(data, 'Percentage');
        }
        console.log(data)
    })