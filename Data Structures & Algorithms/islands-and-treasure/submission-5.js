class Solution {

    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = [];
        let visited = new Set();

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] == 0) {
                    queue.push({
                        i, j, distance: 0
                    })



                }

            }
        }
        let front = 0;

        while (front < queue.length) {
            const current = queue[front];
            front++;

            const { i, j, distance } = current;
            //console.log(current)

            if (
                current.i < 0 ||
                current.j < 0 ||
                current.i >= grid.length ||
                current.j >= grid[0].length

            ) {

                continue;
            }

            if (grid[current.i][current.j] !== -1 && !visited.has(`${current.i}:${current.j}`)) {
                if (grid[current.i][current.j] !== 0) {
                    grid[current.i][current.j] = current.distance + 1
                }


                visited.add(`${current.i}:${current.j}`)

                // Add all four neighbors to the queue.
                for (const [di, dj] of directions) {
                    queue.push({
                        i: i + di,
                        j: j + dj,
                        distance: grid[i][j]
                    });
                }

            }







        }

        return grid
    }
}
