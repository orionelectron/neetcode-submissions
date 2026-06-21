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

        effective_right = left;
        left = 0;
        right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let effective_mid = nums[mid] <= nums[effective_right] ? mid : (mid + effective_right) % nums.length;
            console.log(left, right, mid, effective_mid)



            if (nums[mid] <= nums[right]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }

            min_value = Math.min(min_value, nums[effective_mid])
        }

        return min_value;


    }
}
