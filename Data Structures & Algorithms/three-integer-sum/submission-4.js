class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        console.log(nums)

        const result = [];

        for (let fixedIndex = 0; fixedIndex < nums.length - 2; fixedIndex++) {

            // Skip duplicate fixed numbers
            if (fixedIndex > 0 && nums[fixedIndex] === nums[fixedIndex - 1]) {
                continue;
            }
            let left = fixedIndex + 1;
            let right = nums.length - 1;

            while (left < right) {
                //console.log(fixedIndex, left, right)
                const sum = nums[left] + nums[right] + nums[fixedIndex];

                if (sum == 0) {
                    result.push([nums[left], nums[right], nums[fixedIndex]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;

                    //console.log(result);
                }

                else if (sum < 0) {
                    left++;
                }
                else {
                    right--;
                }



            }


        }



        return result;
    }
}