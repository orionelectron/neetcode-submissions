class Solution {

    isEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) return false;
        }

        return true;
    }

    checkInclusion(s1, s2) {
        let windowLength = s1.length;

        let hashS1 = {};
        for (let ch of s1) {
            hashS1[ch] = (hashS1[ch] || 0) + 1;
        }

        let hashS2 = {};
        let left = 0;

        while (left <= s2.length - windowLength) {

            hashS2 = {};

            let right = left + windowLength - 1;

            for (let i = left; i <= right; i++) {
                hashS2[s2[i]] = (hashS2[s2[i]] || 0) + 1;
            }

            if (this.isEqual(hashS1, hashS2)) {
                return true;
            }

            left++;
        }

        return false;
    }
}