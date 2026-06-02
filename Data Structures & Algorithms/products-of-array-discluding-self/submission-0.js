class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productsFinal = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i == j) {
                    continue;
                }
                product = product * nums[j]
            }
            productsFinal.push(product);
        }

        return productsFinal;
    }
}
