class Solution {
    isValidSudoku(board) {

        let boxMap = {};

        for (let i = 0; i < 9; i++) {
            let rowMap = {};
            let colMap = {};

            for (let j = 0; j < 9; j++) {

                // ROW
                let rowVal = board[i][j];
                if (rowVal !== ".") {
                    if (rowMap[rowVal]) return false;
                    rowMap[rowVal] = true;
                }

                // COLUMN
                let colVal = board[j][i];
                if (colVal !== ".") {
                    if (colMap[colVal]) return false;
                    colMap[colVal] = true;
                }

                // BOX (NEW PART)
                let boxRow = Math.floor(i / 3);
                let boxCol = Math.floor(j / 3);
                let boxId = boxRow * 3 + boxCol;

                let boxVal = board[i][j];

                if (boxVal !== ".") {
                    let key = boxId + "-" + boxVal;

                    if (boxMap[key]) return false;
                    boxMap[key] = true;
                }
            }
        }

        return true;
    }
}