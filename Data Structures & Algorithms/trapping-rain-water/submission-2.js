class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        let maxLeftArr = new Array(height.length).fill(0);
        let maxRightArr = new Array(height.length).fill(0);

        maxLeftArr[0] = height[0];
        maxRightArr[height.length - 1] = height[height.length - 1];

        //console.log(maxLeftArr, maxRightArr)


        for (let i = 1; i < height.length; i++) {
            maxLeftArr[i] = Math.max(height[i], maxLeftArr[i - 1])
        }

        for (let j = height.length - 2; j >= 0; j--) {
            maxRightArr[j] = Math.max(height[j], maxRightArr[j + 1])
        }

        for (let i = 0; i < height.length; i++) {
            result += Math.min(maxLeftArr[i], maxRightArr[i]) - height[i];
        }


        return result;

    }
}