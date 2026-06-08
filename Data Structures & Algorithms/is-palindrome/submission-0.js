class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLocaleLowerCase()
        s = s.replace(/[^a-z0-9]/gi, '')

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            const charA = s[i];
            const charB = s[j];

            if (charA !== charB) {
                return false;
            }

            i++;
            j--;
        }

        return true;


    }

}
