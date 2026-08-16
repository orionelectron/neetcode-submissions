class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let answer = 0;

        nums.forEach((num) => {
            answer = answer ^ num;
        });

        return answer;
    }
}
