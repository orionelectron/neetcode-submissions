class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length <= 1) {
            return 0;
        }

        intervals.sort((i1, i2) => i1[0] - i2[0])
        //console.log(intervals)

        let result = [intervals[0]];

        let i = 1;
        let removed_count = 0;
        while (i < intervals.length) {
            const left = result[result.length - 1];
            const right = intervals[i]

            if (right[0] < left[1]) {
                if (right[1] < left[1]) {
                    result[result.length - 1] = right;
                }

                removed_count++;
            }
            else {
                result.push(right);
            }

            i++;

        }

        return removed_count;
    }
}