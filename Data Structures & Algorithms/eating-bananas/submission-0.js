class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       

        let min_rate = Infinity;
        let left = 1;
        let right = Math.max(...piles);

        //console.log(left, right)

        while (left <= right) {
            let k = left + Math.floor((right - left) / 2);
            let hours_taken = 0;
            for (let j = 0; j < piles.length; j++) {
                hours_taken = hours_taken + Math.ceil(piles[j] / k)
            }

          

            if (hours_taken <= h) {
                min_rate = Math.min(min_rate, k);
                right = k - 1;
            }
            else {
                left = k + 1;
            }
        }

        return min_rate
    }
}

