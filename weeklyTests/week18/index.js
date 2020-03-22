let isValid = (data) => {
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            let value = parseInt(data[col][row]);
            if (value) {
                // Checking row
                for (let row2 = 0; row2 < 9; row2++) {
                    let valueRow = parseInt(data[col][row2])
                    if (row2 != row && valueRow == value) {
                        return false;
                    }
                }
                // Check the column
                for (var col2 = 0; col2 < 9; col2++) {
                    let valueCol = parseInt(data[col2][row])
                    if (col2 != col && valueCol == value) {
                        return false;
                    }
                }
                // checking squareGrid
                let gridY = Math.floor(col / 3) * 3;
                for (var col2 = gridY; col2 < gridY + 3; col2++) {
                    var gridX = Math.floor(row / 3) * 3;
                    for (row2 = gridX; row2 < gridX + 3; row2++) {
                        let valueGrid = parseInt(data[col2][row2])
                        if ((col2 != col || row2 != row) && valueGrid == value) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}


var data = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]


console.log(isValid(data))