class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let farthest = 0;
        let jump_count = 0;
        let currentEnd = 0;
        for (let i = 0; i < nums.length - 1; i++) {

            farthest = Math.max(farthest, i + nums[i]);


            if (i == currentEnd) {
                currentEnd = farthest;
                jump_count++;
            }

        }
        return jump_count;

    }
}
