class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let [nStart, nEnd] = newInterval;
        let i = 0;
        while (i < intervals.length && intervals[i][1] < nStart) {

            result.push(intervals[i])
            i++;


        }

        


        while (i < intervals.length && intervals[i][0] <= nEnd) {

            nStart = Math.min(nStart, intervals[i][0]);
            nEnd = Math.max(nEnd, intervals[i][1]);
            i++;

        }

        result.push([nStart, nEnd])

        while (i < intervals.length) {
            result.push(intervals[i]);
            i++
        }

        return result;
      
    }
}