class Solution {
    dfs(grid, i, j) {

        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === 0 ||
            grid[i][j] === "#"
        ) {


            return 0;
        }

        grid[i][j] = "#";

        return 1
            + this.dfs(grid, i - 1, j)
            + this.dfs(grid, i + 1, j)
            + this.dfs(grid, i, j - 1)
            + this.dfs(grid, i, j + 1);

    }




    maxAreaOfIsland(grid) {
        let max_area = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] == 1) {
                    const area = this.dfs(grid, i, j);
                    max_area = Math.max(max_area, area)
                }

            }
        }

        return max_area;



    }
}