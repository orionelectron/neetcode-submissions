class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    recurse(cost, floor, memo = {}) {
        if (memo[`${floor}`]) {
            return memo[`${floor}`];
        }
        if (floor > cost.length - 1) {
            return 0;
        }
        memo[`${floor}`] = Math.min(
            cost[floor] + this.recurse(cost, floor + 1, memo),
            cost[floor] + this.recurse(cost, floor + 2, memo),
        );

        return memo[`${floor}`];
    }
    minCostClimbingStairs(cost) {
        return Math.min(this.recurse(cost, 0), this.recurse(cost, 1));
    }
}
