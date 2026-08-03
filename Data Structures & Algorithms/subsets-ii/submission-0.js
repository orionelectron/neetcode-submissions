class Solution {



    dfs(nums, startIndex, list = [], subSet) {
        subSet.push([...list])


        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] == nums[i - 1]) {
                continue;
            }

            list.push(nums[i]);
            this.dfs(nums, i + 1, list, subSet);
            list.pop();
        }



    }


    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => { return a - b })

        const subSet = [];
        const startIndex = 0;

        this.dfs(nums, startIndex, [], subSet)

        return subSet;
    }
}
