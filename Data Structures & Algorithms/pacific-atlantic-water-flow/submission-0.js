class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    dfs(heights, i, j, visited = new Set(), oceans = new Set()) {

        if (visited.has(`${i}:${j}`)) {
            return oceans;
        }

        if (oceans.size === 2) {
            return oceans;
        }

        visited.add(`${i}:${j}`);

        if (i == 0 || j == 0) {
            oceans.add("pacific");

        }
        if (i == heights.length - 1 || j == heights[0].length - 1) {
            oceans.add("atlantic");

        }

        const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        for (let d = 0; d < directions.length; d++) {
            const [di, dj] = directions[d];
            const ni = i + di;
            const nj = j + dj;

            if (ni < 0 || nj < 0 || ni > heights.length - 1 || nj > heights[0].length - 1) {
                continue;
            }

            if (heights[i][j] >= heights[ni][nj]) {
                this.dfs(heights, ni, nj, visited, oceans);
            }


        }

        return oceans;

    }

    pacificAtlantic(heights) {

        let pa_list = [];
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                const oceans = this.dfs(heights, i, j)
                if (oceans.has("pacific") && oceans.has("atlantic")) {
                    pa_list.push([i, j])
                }
            }
        }

        return pa_list
    }
}
