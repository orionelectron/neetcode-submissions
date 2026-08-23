class Solution {

    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = [];
        let visited = new Set();
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] == 0) {
                    queue.push({
                        i, j, distance: 0
                    })
                   


                }

            }
        }
        let front=0;

        while (front < queue.length) {
            const current = queue[front];
            front++;
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
                queue.push({
                    i: current.i - 1,
                    j: current.j,
                    distance: grid[current.i][current.j]
                })
                queue.push({
                    i: current.i + 1,
                    j: current.j,
                    distance: grid[current.i][current.j]
                })
                queue.push({
                    i: current.i,
                    j: current.j - 1,
                    distance: grid[current.i][current.j]

                })

                queue.push({
                    i: current.i,
                    j: current.j + 1,
                    distance: grid[current.i][current.j]
                })

            }







        }

        return grid
    }
}
