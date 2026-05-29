class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = {};

        for (let i = 0; i < nums.length; i++) {
            const needed = target - nums[i]

            if (hashmap[needed] !== undefined) {
                return [i, hashmap[needed]].sort();
            }

            hashmap[nums[i]] = i;
        }
        return [-1, -1]
    }
}
