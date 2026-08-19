class Solution {
    dfs(grid, i, j) {
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === "0" ||
            grid[i][j] === "#"
        ) {
            return;
        }

        grid[i][j] = "#";

        this.dfs(grid, i - 1, j);
        this.dfs(grid, i + 1, j);
        this.dfs(grid, i, j - 1);
        this.dfs(grid, i, j + 1);
    }

    numIslands(grid) {
        let islandCount = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] === "1") {
                    islandCount++;
                    this.dfs(grid, i, j);
                }

            }
        }

        return islandCount;
    }
}