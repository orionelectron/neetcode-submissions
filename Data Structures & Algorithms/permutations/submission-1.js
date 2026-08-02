class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    dfs(nums, list, permutationSet) {
        if (list.length == nums.length) {
            permutationSet.push([...list]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (list.includes(nums[i])) {
                continue;
            }
            list.push(nums[i]);
            this.dfs(nums, list, permutationSet);
            list.pop();
        }
    }
    permute(nums) {
        let permutationSet = [];

        this.dfs(nums, [], permutationSet);

        return [...permutationSet];
    }
}
