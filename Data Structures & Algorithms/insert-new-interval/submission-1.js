class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
       
        let [nStart, nEnd] = newInterval;
        let i = 0;
        while (i < intervals.length && intervals[i][1] < nStart) {
            i++;


        }

        
    
        let j = i;
        while (j < intervals.length && intervals[j][0] <= nEnd) {

            nStart = Math.min(nStart, intervals[j][0]);
            nEnd = Math.max(nEnd, intervals[j][1]);
            j++;

        }

        intervals.splice(i, j-i, [nStart, nEnd])

       
        

        return intervals;
      
    }
}