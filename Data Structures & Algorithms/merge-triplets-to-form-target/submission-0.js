class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let a = 0;
        let b = 0;
        let c = 0;
        for (let i = 0; i < triplets.length; i++) {
            const triplet = triplets[i];

            if (target[0] >= triplet[0] && target[1] >= triplet[1] && target[2] >= triplet[2]) {
                a = Math.max(a, triplet[0]);
                b = Math.max(b, triplet[1]);
                c = Math.max(c, triplet[2]);
            }

        }

        if (a == target[0] && b == target[1] && c == target[2]) {
            return true;
        }

        return false;
    }
}