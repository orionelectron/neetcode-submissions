class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */



    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const flatLength = rows * cols;

        let left = 0;
        let right = flatLength - 1;

        while (left <= right) {

            const mid = left + Math.floor((right - left) / 2);

            const row = Math.floor(mid / cols);
            const col = mid % cols;

            if (matrix[row][col] === target) {
                return true;
            }
            else if (target < matrix[row][col]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }

        }

        return false;
    }
}