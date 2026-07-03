class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let maxList = [];
        let left = 0;
        let right = k + left - 1;

        while (right < nums.length) {
            let max = -Infinity;
            for (let i = left; i <= right; i++) {
                max = Math.max(max, nums[i])
            }
            maxList.push(max);
            left++;
            right++;
        }

        return maxList;

    }
}