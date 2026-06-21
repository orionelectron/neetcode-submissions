class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1
        let effective_right = -1
        let min_value = Infinity

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] <= nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }


        return nums[left]
       
        


    }
}
