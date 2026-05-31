class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        const hashmap = {};
        const topK = Array(k).fill(0);

        for (let i = 0; i < nums.length; i++) {
            if (!hashmap[nums[i]]) {
                hashmap[nums[i]] = 1;
            } else {
                hashmap[nums[i]]++;
            }
        }
        console.log(hashmap, topK);
        const sorted = Object.entries(hashmap).sort(([, valueA], [, valueB]) => valueB - valueA);

        const topKeys = sorted.map((sortedPair) => {
            return sortedPair[0];
        });

        //console.log(topKeys)

        for (let i = 0; i < sorted.length; i++) {
            const k = sorted[i][0];
            const v = sorted[i][1];

            //  console.log(k, v)
        }
        return topKeys.slice(0, k);
        //console.log(topKeys.slice(0, k));
    }
}
