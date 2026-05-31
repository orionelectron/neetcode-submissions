class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        const freq = new Map();

        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        return [...freq.entries()]
            .sort(([, a], [, b]) => b - a)
            .slice(0, k)
            .map(([num]) => num);
    }
}
