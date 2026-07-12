class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums.length < 3) {
            return nums[0];
        }

        nums.sort((a, b) => {
            return a - b;
        });

        let slow_pointer = 0;
        let fast_pointer = 1;

        while (fast_pointer < nums.length) {
            if (nums[slow_pointer] == nums[fast_pointer]) {
                return nums[slow_pointer];
            }
            slow_pointer++;
            fast_pointer++;
        }

        return -1;
    }
}
