class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    dfs(grid, i, j, visited) {
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === "0" ||
            visited.has(`${i}:${j}`)
        ) {
            
            return;
        }

        visited.add(`${i}:${j}`);

        this.dfs(grid, i - 1, j, visited);
        this.dfs(grid, i + 1, j, visited);
        this.dfs(grid, i, j - 1, visited);
        this.dfs(grid, i, j + 1, visited);
    }

    numIslands(grid) {
        let visited = new Set();
        let islandCount = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == "1" && !visited.has(`${i}:${j}`)) {
                    islandCount++;
                    this.dfs(grid, i, j, visited)
                }

            }

        }

        return islandCount
    }
}