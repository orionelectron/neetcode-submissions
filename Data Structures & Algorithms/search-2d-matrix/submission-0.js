class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        //console.log(rows, cols)

        if (rows < 0 || cols < 0) {
            return false;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                //console.log(target, matrix[i][j])
                if (target == matrix[i][j]) {
                    return true;
                }
            }
        }

        return false;
    }
}
