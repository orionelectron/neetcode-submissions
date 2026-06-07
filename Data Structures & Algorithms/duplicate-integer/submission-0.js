class Solution {
    constructor() {
        this.seen = new Set();
    }

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (this.seen.has(nums[i])) {
                return true;
            }
            this.seen.add(nums[i]);
        }

        return false;
    }
}