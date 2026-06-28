class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let max = 0;
        let set = new Set();

        while (right < s.length) {
            while (set.has(s[right])) {
                set.delete(set.values().next().value);
                left++;
            }

            set.add(s[right]);
            max = Math.max(max, set.size);
            right++;
        }

        return max;

    }
}
