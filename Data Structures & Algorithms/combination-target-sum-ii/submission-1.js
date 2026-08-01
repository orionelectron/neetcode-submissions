class Solution {
    dfs(nums, target, list, startIndex, combinationSet) {
        if (target == 0) {
            combinationSet.push([...list]);
            return;
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && (nums[i] == nums[i - 1])) {
                continue;
            }
            if (target >= nums[i]) {

                list.push(nums[i]);
                this.dfs(nums, target - nums[i], list, i + 1, combinationSet);
                list.pop();
            }
        }
    }
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let combinationSet = [];

        this.dfs(candidates.sort((a, b) => { return a - b }), target, [], 0, combinationSet);

        return combinationSet;
    }
}
