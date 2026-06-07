class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set();
        let lastValue = Infinity;
        nums.sort((a, b) => {
            return a - b
        })

        //console.log(nums)
        let prevConsecutiveLength = 0;
        let currentConsecutiveLength = 0;


        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];


            // console.log("Value and Last Set Value", value, lastValue)

            if (numSet.has(value)) {
                // console.log("Numset already has the value: ", value)
                continue;
            }

            else if (lastValue == undefined) {
                numSet.add(value);
                lastValue = value;
                currentConsecutiveLength++;
                continue;
            }

            else if (Math.abs(value - lastValue) == 1) {
                numSet.add(value);
                lastValue = value;
                currentConsecutiveLength++;
                //console.log("Value and last set value difference is , ", numSet, value - lastValue, currentConsecutiveLength, prevConsecutiveLength)
                continue;

            }

            else if (Math.abs(value - lastValue) > 1) {
                prevConsecutiveLength = prevConsecutiveLength < numSet.size ? numSet.size : prevConsecutiveLength;
                numSet = new Set();
                numSet.add(value);
                lastValue = value;
                currentConsecutiveLength = 1;

            }




        }

        //console.log(numSet)
        // console.log(prevConsecutiveLength, currentConsecutiveLength)
        return Math.max(prevConsecutiveLength, currentConsecutiveLength)


    }
}