class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, mem = {}) {
        if (mem[`${n}`]) {
            return mem[`${n}`];
        }
        if (n < 2) {
            return 1;
        }
        mem[`${n}`] = this.climbStairs(n - 1, mem) + this.climbStairs(n - 2, mem);
        return mem[`${n}`];
    }
}
