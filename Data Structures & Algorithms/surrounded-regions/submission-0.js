class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let queue = [];
        let front = 0;

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if ((i == 0 || j == 0 || i == board.length - 1 || j == board[0].length - 1) && board[i][j] == 'O') {
                    queue.push(`${i}:${j}`)
                }
            }

        }

        const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];

        while (front < queue.length && queue.length > 0) {
            let [i, j] = queue[front].split(":").map(Number);
            console.log(i, j)
            front++;

            if (board[i][j] == "#") {
                continue;
            }

            board[i][j] = "#";

            for (let k = 0; k < dirs.length; k++) {
                const [di, dj] = dirs[k];

                const ni = i + di;
                const nj = j + dj;

                if (ni < 0 || nj < 0 || ni > board.length - 1 || nj > board[0].length - 1) {
                    continue;
                }

                if (board[ni][nj] == "O") {
                    queue.push(`${ni}:${nj}`);
                }


            }


        }


        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == "O") {
                    board[i][j] = "X"
                }
                else if (board[i][j] == "#") {
                    board[i][j] = "O"
                }
            }

        }



    }
}