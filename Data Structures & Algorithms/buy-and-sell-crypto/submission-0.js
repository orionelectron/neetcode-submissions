class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const profit = prices[j] - prices[i];
                maxProfit = Math.max(profit, maxProfit);
            }
        }

        return maxProfit > 0 ? maxProfit : 0

    }
}