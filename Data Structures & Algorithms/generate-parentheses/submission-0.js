class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    countOccurrences(arr, value) {
        // Validate input
        if (!Array.isArray(arr)) {
            throw new TypeError("First argument must be an array.");
        }

        return arr.reduce((count, current) => {
            return current === value ? count + 1 : count;
        }, 0);
    }

    isValid(s) {
        const stack = [];

        const reverse = {
            ")": "(",
            "]": "[",
            "}": "{"
        }

        if (s.length % 2 !== 0) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
                stack.push(s[i])
            }
            else {

                const value = stack.pop();

                if (value !== reverse[s[i]]) {
                    return false;
                }
            }
        }



        if (stack.length == 0) {
            return true;
        }
        return false;
    }

    dfs(n, parenList, subSet) {
        if (n < 1) {
            if (this.isValid([...parenList])) {
                subSet.push(parenList.join(''))
            }

            return;
        }

        parenList.push("(");
        this.dfs(n - 1, parenList, subSet);
        parenList.pop();
        parenList.push(")");
        this.dfs(n - 1, parenList, subSet);
        parenList.pop();




    }
    generateParenthesis(n) {
        let subSet = [];

        this.dfs(2 * n, [], subSet);

        return subSet;
    }
}
