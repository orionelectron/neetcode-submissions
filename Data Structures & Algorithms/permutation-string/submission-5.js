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

        if (windowLength > s2.length) return false;

        // build frequency map for s1
        let hashS1 = {};
        for (let ch of s1) {
            hashS1[ch] = (hashS1[ch] || 0) + 1;
        }

        let hashS2 = {};
        let left = 0;

        // expand right pointer
        for (let right = 0; right < s2.length; right++) {

            let charRight = s2[right];
            hashS2[charRight] = (hashS2[charRight] || 0) + 1;

            // if window size exceeds s1 length, shrink from left
            if (right - left + 1 > windowLength) {
                let charLeft = s2[left];

                hashS2[charLeft]--;

                if (hashS2[charLeft] === 0) {
                    delete hashS2[charLeft];
                }

                left++;
            }

            // check only when window size matches
            if (right - left + 1 === windowLength) {
                if (this.isEqual(hashS1, hashS2)) {
                    return true;
                }
            }
        }

        return false;
    }
}