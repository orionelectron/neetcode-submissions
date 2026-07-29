class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    dfs(nums, i, list = [], subSet) {
        if (i >= nums.length) {
            subSet.push([...list]);
            return;
        }

        list.push(nums[i]);
        this.dfs(nums, i + 1, list, subSet);
        list.pop();
        this.dfs(nums, i + 1, list, subSet);






    }

    subsets(nums) {
        const subSet = [];

        this.dfs(nums, 0, [], subSet)

        return subSet;
    }
}