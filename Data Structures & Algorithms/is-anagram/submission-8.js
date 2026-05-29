class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let characterBank = {};
        for (let i = 0; i < s.length; i++) {
            if (!characterBank[s[i]]) {
                characterBank[s[i]] = 1;
            } else {
                characterBank[s[i]]++;
            }
        }
        console.log(characterBank);
        for (let i = 0; i < t.length; i++) {
            if (!characterBank[t[i]]) {
                return false;
            }
            characterBank[t[i]]--;
        }

        console.log(characterBank);

        for (let i = 0; i < s.length; i++) {
            if (characterBank[s[i]] > 0) {
                return false;
            }
        }

        return true;
    }
}
