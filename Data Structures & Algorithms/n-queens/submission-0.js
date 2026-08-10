class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    createBoard(n) {
        const board = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < n; j++) {
                row.push(".")
            }
            board.push(row)
        }
        return board;
    }

    checkUp(board, i, j) {
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
            return false;
        }
        if (board[i][j] == "Q") {
            return true;
        }
        return this.checkUp(board, i - 1, j);
    }

    checkUpLeft(board, i, j) {
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
            return false;
        }
        if (board[i][j] == "Q") {
            return true;
        }
        return this.checkUpLeft(board, i - 1, j - 1);
    }

    checkUpRight(board, i, j) {
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
            return false;
        }
        if (board[i][j] == "Q") {
            return true;
        }
        return this.checkUpRight(board, i - 1, j + 1);
    }



    copyBoard(board) {
        const copyBoard = [];
        for (let i = 0; i < board.length; i++) {
            let row = "";
            for (let j = 0; j < board[0].length; j++) {
                row = row + board[i][j];
            }
            copyBoard.push(row)
        }
        return copyBoard;
    }

    dfs(n, board, i, j, solvedBoards) {
        if (n == 0) {
            solvedBoards.push(this.copyBoard(board))
            return;
        }



        const boardRow = board[i];

        for (let k = 0; k < boardRow.length; k++) {
            if (this.checkUp(board, i - 1, k) || this.checkUpLeft(board, i - 1, k - 1) || this.checkUpRight(board, i - 1, k + 1)) {
                continue;
            }
            board[i][k] = "Q";
            this.dfs(n - 1, board, i + 1, k, solvedBoards);
            board[i][k] = ".";

        }
    }

    solveNQueens(n) {

        const solvedBoards = []
        const board = this.createBoard(n);
        this.dfs(n, board, 0, 0, solvedBoards);
        return solvedBoards;
    }
}