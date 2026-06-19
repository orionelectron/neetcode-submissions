class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;



        while (left <= right) {

            const mid = left + Math.floor((right - left) / 2);
            //console.log(mid, nums[mid], target)

            if (nums[mid] === target) {
                return mid;
            }
            else if (target < nums[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        return -1;
    }
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        //console.log(rows, cols)

        if (rows < 0 || cols < 0) {
            return false;
        }

        for (let i = 0; i < rows; i++) {
            const row = matrix[i];
            row.sort((a, b) => {
                return a - b
            })
            const searchIndex = this.search(row, target);
            if (searchIndex >= 0) {
                return true;
            }
        }

        return false;
    }
}
