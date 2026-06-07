class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length
    }
}