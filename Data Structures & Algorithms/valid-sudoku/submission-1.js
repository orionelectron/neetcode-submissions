class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let rowMap = {};
        let colMap = {};
        let boxMap = {};
        for (let i = 0; i < 9; i++) {
            rowMap = {};
            colMap = {};
            for (let j = 0; j < 9; j++) {
                const rowVal = board[i][j];
                const colVal = board[j][i];

                //console.log(rowVal, colVal, rowMap, colMap)

                if (rowMap[rowVal] && rowVal != ".") {
                    //console.log("Row val match: ", rowMap, rowVal)
                    return false;
                }
                if (colMap[colVal] && colVal != ".") {
                    //console.log("Col val match: ", colMap, colVal)
                    return false;
                }

                rowMap[rowVal] = true;
                colMap[colVal] = true;

                const boxRow = Math.floor(i / 3)
                const boxCol = Math.floor(j / 3);
                const boxId = boxRow * 3 + boxCol;
                //console.log(boxRow, boxCol, boxId, boxMap)

                let boxIdList = boxMap[boxId];
                if (!boxIdList) {
                    boxIdList = [];
                }


                if (boxIdList.includes(rowVal) && rowVal !== ".") {
                    //console.log("Boxmap match: ", boxMap, rowVal)
                    return false;
                }
                boxIdList.push(rowVal);
                boxMap[boxId] = boxIdList

            }
        }
        return true;
    }
}