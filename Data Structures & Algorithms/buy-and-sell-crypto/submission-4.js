class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrevPrice = prices[0]
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            const sellPrice = prices[i]

            maxProfit = Math.max(maxProfit, sellPrice - minPrevPrice);
            minPrevPrice = Math.min(sellPrice, minPrevPrice);



        }

        return maxProfit > 0 ? maxProfit : 0

    }
}
