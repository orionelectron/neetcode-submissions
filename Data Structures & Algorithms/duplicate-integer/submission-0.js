class Solution {
    
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set(nums);
        if(nums.length === seen.size){
            return false;
        }
        return true;

    }
}
