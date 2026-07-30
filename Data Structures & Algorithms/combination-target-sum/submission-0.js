class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    dfs(nums, target, list, startIndex, combinationSet) {

        if (target == 0) {
            combinationSet.push([...list])
            return;
        }
        for (let i = startIndex; i < nums.length; i++) {

            if (target >= nums[i]) {
                list.push(nums[i])
                this.dfs(nums, target - nums[i], list, i, combinationSet)
                list.pop();
            }


        }
    }
    combinationSum(nums, target) {
        let combinationSet = [];

        this.dfs(nums, target, [], 0, combinationSet);

        return [...combinationSet];
    }
}
