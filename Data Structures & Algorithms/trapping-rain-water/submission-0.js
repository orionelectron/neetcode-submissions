class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        for (let i = 0; i < height.length; i++) {
            let maxLeft = 0;
            let maxRight = 0;
            let currentHeight = height[i];

            for (let k = 0; k < i; k++) {
                if (height[k] >= maxLeft) {
                    maxLeft = height[k];
                }
            }
            for (let j = i + 1; j < height.length; j++) {
                if (height[j] > maxRight) {
                    maxRight = height[j];
                }
            };

            const currentResult = Math.min(maxLeft, maxRight) - currentHeight;
            result = currentResult >= 0 ? result + currentResult : result;

        }
        return result;

    }
}
