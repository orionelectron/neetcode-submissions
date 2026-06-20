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
        const flatLength = rows * cols;

        let left = 0;
        let right = flatLength - 1;

        while (left <= right) {

            const mid = left + Math.floor((right - left) / 2);
            //console.log(mid, Math.floor(mid / cols), mid % cols)
            const row = Math.floor(mid / cols);
            const col = mid % cols;

            //console.log(mid, nums[mid], target)


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

        //console.log(rows, cols, flatLength)
    }
}