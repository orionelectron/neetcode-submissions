class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        intervals.sort((i1, i2) => {
            return i1.start - i2.start
        })
        for (let i = 0; i < intervals.length - 1; i++) {
            const iLeft = intervals[i];
            const iRight = intervals[i + 1];

            if (iRight.start < iLeft.end) {
                return false;
            }
        }
        return true;
    }
}
