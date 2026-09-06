class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        

        if (intervals.length <= 1) {
            return intervals;
        }

        intervals.sort((i1, i2) => i1[0] - i2[0])
        //console.log(intervals)

        let result = [intervals[0]];

        let i = 1;

        while (i < intervals.length) {
            const left = result[result.length - 1];
            const right = intervals[i]
            let start = 0;
            let end = 0;
            if (right[0] <= left[1]) {
                start = Math.min(left[0], right[0]);
                end = Math.max(left[1], right[1]);
                result[result.length - 1] = [start, end]
            }
            else{
                result.push(right);
            }

            i++;

        }

        return result

    }
}
