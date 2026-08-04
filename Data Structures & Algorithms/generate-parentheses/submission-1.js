class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */



    

    dfs(n, openUsed = 0, closeUsed = 0, parenList, subSet) {

        if (openUsed > n || closeUsed > openUsed) {
            return;
        }

        if (openUsed == n && openUsed == closeUsed) {

            subSet.push(parenList.join(''))


            return;
        }

        parenList.push("(");
        this.dfs(n, openUsed + 1, closeUsed, parenList, subSet);
        parenList.pop();
        parenList.push(")");
        this.dfs(n, openUsed, closeUsed + 1, parenList, subSet);
        parenList.pop();




    }
    generateParenthesis(n) {
        let subSet = [];

        this.dfs(n, 0, 0, [], subSet);

        return subSet;
    }
}
