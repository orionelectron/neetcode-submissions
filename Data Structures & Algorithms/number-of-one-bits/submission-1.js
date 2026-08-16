class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let answer = 0;

        while(n !== 0){
            n = n & (n-1);
            answer++;
        }

        return answer;
    }
}