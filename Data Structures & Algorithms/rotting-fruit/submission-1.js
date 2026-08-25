class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        let queue = [];
        let fresh = 0;
        let front = 0;
        let minutes = 0;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]



        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] == 2) {
                    queue.push([i, j])
                }
                if (grid[i][j] == 1) {
                    fresh++;
                }


            }
        }

        while (front < queue.length && fresh > 0) {
            const levelsize = queue.length - front;

            for (let k = 0; k < levelsize; k++) {
                const [i, j] = queue[front];
                front++;

                for (const [di, dj] of directions) {
                    const ni = i + di;
                    const nj = j + dj;

                    // Outside grid
                    if (
                        ni < 0 ||
                        nj < 0 ||
                        ni >= grid.length ||
                        nj >= grid[0].length
                    ) {
                        continue;
                    }

                    if (grid[ni][nj] == 1) {
                        grid[ni][nj] = 2;
                        fresh--;

                        queue.push([ni, nj])
                    }
                }
            }
            minutes++;
        }

        return fresh == 0 ? minutes : -1;
    }
}