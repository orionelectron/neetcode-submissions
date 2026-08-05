class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */

    dfs(board, word, i, j, index) {


        if (i < 0 || j < 0 || i > (board.length - 1) || j > (board[0].length - 1)) {
            return false;
        }


        let ch = board[i][j];



        if (ch == "#") {
            return false;
        }

        if (word[index] !== ch) {
            return false;
        }

        if (index == word.length - 1) {
            return true;
        }


        board[i][j] = "#";
        if (this.dfs(board, word, i - 1, j, index + 1)) {
            board[i][j] = ch;
            return true;
        }
        if (this.dfs(board, word, i + 1, j, index + 1)) {
            board[i][j] = ch;
            return true;
        }
        if (this.dfs(board, word, i, j - 1, index + 1)) {
            board[i][j] = ch;
            return true;
        }
        if (this.dfs(board, word, i, j + 1, index + 1)) {
            board[i][j] = ch;
            return true;
        }
        board[i][j] = ch;
        return false;

    }

    exist(board, word) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const result = this.dfs(board, word, i, j, 0);
                if (result) {
                    return true;
                }
            }
        }
        return false;
    }
}
