class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[0];
        let rightMax = height[height.length - 1];

        console.log(left, right, leftMax, rightMax)

        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                result = result + leftMax - height[left]
            }
            else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                result = result + rightMax - height[right];
            }


        }

        return result;

    }
}
