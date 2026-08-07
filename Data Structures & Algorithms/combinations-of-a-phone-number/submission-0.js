class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */

    constructor() {
        this.digitCharsMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }
    }

    dfs(digits, digitIndex, charsList, combinationList) {

        if (digitIndex > digits.length - 1) {
            combinationList.push(charsList.join(''));
            return;
        }
        const digit = digits[digitIndex];
        const digitChars = this.digitCharsMap[digit];

        console.log(digit, digitChars)

        for (let i = 0; i < digitChars.length; i++) {
            charsList.push(digitChars[i]);
            this.dfs(digits, digitIndex + 1, charsList, combinationList);
            charsList.pop();
        }
    }
    letterCombinations(digits) {
        if (digits.length == 0) {
            return [];
        }
        let combinationList = []

        this.dfs(digits, 0, [], combinationList);

        return combinationList;

    }
}