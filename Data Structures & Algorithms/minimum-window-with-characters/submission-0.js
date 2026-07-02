class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    isValid(a, b) {
        for (let key in a) {
            if (a[key] > (b[key] || 0)) {
                return false;
            }
        }
        return true;
    }

    minWindow(s, t) {
        let left = 0;
        let right = 0;
        let minLength = Infinity;
        let answerStart = 0;
        let tHash = {}
        let sHash = {}
        for (let char of t) {
            tHash[char] = (tHash[char] || 0) + 1;
        }
        const subStrings = []

        while (right < s.length) {

            sHash[s[right]] = (sHash[s[right]] || 0) + 1
            //console.log(tHash, sHash, this.isValid(tHash, sHash))




            while (this.isValid(tHash, sHash)) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    answerStart = left;
                }
                sHash[s[left]] = (sHash[s[left]] || 0) - 1;


                if (sHash[s[left]] < 1) {
                    delete sHash[s[left]]

                }
                left++;

                //console.log(tHash, sHash, this.isValid(tHash, sHash))

            }
            //console.log(left, right, s.slice(left, right))
            right++;
        }



        //console.log(answerStart, minLength)

        return minLength === Infinity
            ? ""
            : s.slice(answerStart, answerStart + minLength);



    }
}
