class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];   // stores indices
        const result = [];

        for (let right = 0; right < nums.length; right++) {

            // Remove indices that are outside the current window
            while (deque.length > 0 && deque[0] <= right - k) {
                deque.shift();
            }

            // Remove all smaller values from the back
            while (
                deque.length > 0 &&
                nums[deque[deque.length - 1]] < nums[right]
            ) {
                deque.pop();
            }

            // Add current index
            deque.push(right);

            // Once we've formed a complete window
            if (right >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}