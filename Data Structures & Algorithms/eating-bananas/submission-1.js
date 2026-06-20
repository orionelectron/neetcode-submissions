class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {


        let left = 1;
        let right = Math.max(...piles);

        while (left <= right) {
            let k = Math.floor((left + right) / 2);

            let hours_taken = 0;
            for (let j = 0; j < piles.length; j++) {
                hours_taken += Math.ceil(piles[j] / k);
            }

            if (hours_taken <= h) {
                right = k - 1;
            } else {
                left = k + 1;
            }
        }

        return left;
    }
}
