class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let answer = 0;

        for (let i = 0; i < 32; i++) {
            if ((n & (1 << i)) > 0) {
                answer++;
            }
        }

        return answer;
    }
}