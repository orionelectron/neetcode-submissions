class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            else if (nums[left] <= nums[mid]) {
                //console.log("Left half sorted!!");
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }
            else {
                //console.log("Right half sorted!!");
                if (target <= nums[right] && target > nums[mid]) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }

        return -1;

    }
}