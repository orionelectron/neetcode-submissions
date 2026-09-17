class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let low = 0;
        let high = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(") {
                low++;
                high++;
            }
            else if (s[i] == ")") {
                low--;
                high--;
            }
            else {
                low--;
                high++;
            }

            if (high < 0) {
                return false;
            }

            low = Math.max(0, low)
        }

        return low == 0;
    }
}