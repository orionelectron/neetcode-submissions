class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefixArr = new Array(n);
        const postfixArr = new Array(n);
        const productList = new Array(n);

        prefixArr[0] = 1;
        postfixArr[n - 1] = 1;

        for (let i = 1; i < n; i++) {
            prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
        }

        for (let i = n - 2; i >= 0; i--) {
            postfixArr[i] = postfixArr[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < n; i++) {
            productList[i] = prefixArr[i] * postfixArr[i]
        }

        console.log(prefixArr, postfixArr)
        return productList;
    }
}
