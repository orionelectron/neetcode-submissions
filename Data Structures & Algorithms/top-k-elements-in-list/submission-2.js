class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        const hashmap = {};

        for (let i = 0; i < nums.length; i++) {
            if (!hashmap[nums[i]]) {
                hashmap[nums[i]] = 1;
            } else {
                hashmap[nums[i]]++;
            }
        }

        const topKeys = Object.entries(hashmap)
            .sort(([, valueA], [, valueB]) => valueB - valueA)
            .map((sortedPair) => {
                return sortedPair[0];
            });
        return topKeys.slice(0, k);
        //console.log(topKeys.slice(0, k))
    }
}
