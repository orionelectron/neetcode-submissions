class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrevPrice = prices[0]
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {

            maxProfit = Math.max(maxProfit, prices[i] - minPrevPrice);
            minPrevPrice = Math.min(prices[i], minPrevPrice);



        }

        return maxProfit

    }
}
