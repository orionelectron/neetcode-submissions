class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let i = 0;
        let j = heights.length - 1;
        //console.log(heights);
        const hashmap = {};
        let max = 0;

        while (i < j) {

            const area = (j - i) * Math.min(heights[i], heights[j])
            max = Math.max(max, area);
            if (heights[i] < heights[j]) {
                i++;
            }
            else {
                j--;
            }
            //console.log(i, j)



        }

        return max
    }
}