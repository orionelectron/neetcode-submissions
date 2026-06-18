class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    peek(stack) {
        return stack[stack.length - 1] !== undefined ? stack[stack.length - 1] : {
            position: -1,
            height: -1
        };
    }

    largestRectangleArea(heights) {
       
        let maxArea = 0;



        for (let i = 0; i < heights.length; i++) {
            const currentHeight = heights[i];
            maxArea = Math.max(maxArea, currentHeight)

            let left = i;
            let right = i;

            //process left side
            for (let j = i - 1; j >= 0; j--) {
                const height = heights[j];

                if (currentHeight > height) {
                    break;
                }

                left = j;

            }

            //process right side
            for (let j = i + 1; j < heights.length; j++) {

                const height = heights[j];
                if (currentHeight > height) {
                    break;
                }

                right = j;
            }
            //console.log(left, right)

            maxArea = Math.max(((right - left) + 1) * currentHeight, maxArea)

        }



        return maxArea;
    }
}