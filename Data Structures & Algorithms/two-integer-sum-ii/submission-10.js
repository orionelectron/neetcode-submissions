class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        let indices = [];

        while (i < j) {
            const leftNumber = numbers[i];
            const rightNumber = numbers[j]

            if (leftNumber + rightNumber > target) {
                j--;
                continue;
            }
            if (leftNumber + rightNumber < target) {
                i++;
                continue;
            }
            if (leftNumber + rightNumber === target) {
                indices.push(i + 1);
                indices.push(j + 1);
                return indices;
            }
        }

        return indices;
    }
}