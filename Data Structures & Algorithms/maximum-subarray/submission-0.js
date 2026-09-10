class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        let currentSum = nums[0];
        let maxSumSeenSoFar = nums[0];
        for (let i = 1; i < nums.length; i++) {

            if (currentSum < 0) {

                currentSum = nums[i];
            }
            else {
                currentSum = nums[i] + currentSum;

            }

            maxSumSeenSoFar = Math.max(currentSum, maxSumSeenSoFar);

        }

        return maxSumSeenSoFar;
    }
}