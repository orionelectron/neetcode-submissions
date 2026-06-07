class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set();
        const sorted = nums.sort((a, b) => {
            return a - b
        })

        //console.log(sorted)
        let prevConsecutiveLength = 0;
        let currentConsecutiveLength = 0;


        for (let i = 0; i < sorted.length; i++) {
            const value = sorted[i];
            let lastSetValue = (Array.from(numSet)[numSet.size - 1])


           // console.log("Value and Last Set Value", value, lastSetValue)

            if (numSet.has(value)) {
               // console.log("Numset already has the value: ", value)
                continue;
            }

            else if (lastSetValue == undefined) {
                numSet.add(value);
                currentConsecutiveLength++;
                continue;
            }

            else if (Math.abs(value - lastSetValue) == 1) {
                numSet.add(value);
                currentConsecutiveLength++;
                //console.log("Value and last set value difference is , ", numSet, value - lastSetValue, currentConsecutiveLength, prevConsecutiveLength)
                continue;

            }

            else if (Math.abs(value - lastSetValue) > 1) {
                prevConsecutiveLength = prevConsecutiveLength < numSet.size ? numSet.size : prevConsecutiveLength;
                numSet = new Set();
                numSet.add(value)
                currentConsecutiveLength = 1;

            }




        }

        //console.log(numSet)
       // console.log(prevConsecutiveLength, currentConsecutiveLength)
        return Math.max(prevConsecutiveLength, currentConsecutiveLength)


    }
}
