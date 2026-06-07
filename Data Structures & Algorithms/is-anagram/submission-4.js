class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const characterBank = {};

        // Deposit
        for (let i = 0; i < s.length; i++) {
            characterBank[s[i]] = (characterBank[s[i]] || 0) + 1;
        }

        // Withdraw
        for (let i = 0; i < t.length; i++) {
            if (!characterBank[t[i]]) {
                return false;
            }
            characterBank[t[i]]--;
        }

        return true;
    }
}
