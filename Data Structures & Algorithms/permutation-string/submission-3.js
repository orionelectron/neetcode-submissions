class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    isEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }
    checkInclusion(s1, s2) {
        let windowLength = s1.length;
        let s1Chars = s1.split("");
        let s2Chars = s2.split("");
        // console.log(s1Chars, s2Chars)
        let left = 0;
        let right = 0;
        let hashS1 = {};
        let hashS2 = {};
        for (let i = 0; i < s1.length; i++) {
            hashS1[s1[i]] = (hashS1[s1[i]] || 0) + 1;
        }


        let effectiveBoundary = windowLength + left - 1;
        while (left <= s2.length - windowLength) {


            console.log(effectiveBoundary)

            for (let i = left; i <= effectiveBoundary; i++) {
                hashS2[s2[i]] = (hashS2[s2[i]] || 0) + 1;

            }

            console.log(hashS1, hashS2, left, right);

            if (this.isEqual(hashS1, hashS2)) {
                return true;
            }
            else {
                left++;
                effectiveBoundary++;


            }

            hashS2 = {}






        }



        return false;

    }
}
