class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, memo = {}) {
        if (memo[i]) {
            return memo[i];
        }
        if (i > nums.length - 1) {
            return 0;
        }

        memo[i] = Math.max(nums[i] + this.rob(nums, i + 2, memo), this.rob(nums, i + 1, memo));
        return memo[i];
    }
}
