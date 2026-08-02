class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    dfs(nums, list, currentIndex, permutationSet) {
        if (currentIndex == nums.length) {
            permutationSet.push([...list]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (list.includes(nums[i])) {
                continue;
            }
            list.push(nums[i]);
            this.dfs(nums, list, currentIndex + 1, permutationSet);
            list.pop();
        }
    }
    permute(nums) {
        let permutationSet = [];

        this.dfs(nums, [], 0, permutationSet);

        return [...permutationSet];
    }
}
