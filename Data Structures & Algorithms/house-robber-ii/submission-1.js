
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    _rob(start, end,nums) {

        if(nums.length == 1){
            return nums[0]
        }
        const dp = new Array(nums.length + 2).fill(0);

        for (let i = end; i >= start; i--) {
            dp[i] = Math.max(nums[i] + dp[i+2], dp[i+1])
        }

        return dp[start]


    }

    rob(nums) {
        return Math.max(this._rob(0, nums.length - 2, nums), this._rob(1, nums.length - 1, nums))
    }
}