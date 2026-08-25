class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    dfs(heights, i, j, visited = new Set()) {

        if (visited.has(`${i}:${j}`)) {
            return visited;
        }


        visited.add(`${i}:${j}`);


        const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        for (let d = 0; d < directions.length; d++) {
            const [di, dj] = directions[d];
            const ni = i + di;
            const nj = j + dj;

            if (ni < 0 || nj < 0 || ni > heights.length - 1 || nj > heights[0].length - 1) {
                continue;
            }

            if (heights[i][j] <= heights[ni][nj]) {
                this.dfs(heights, ni, nj, visited);
            }


        }

        return visited;

    }

    pacificAtlantic(heights) {

        const map = { "pacific": new Set(), "atlantic": new Set() };
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {

                if (i == 0 || j == 0) {
                    const pacific = this.dfs(heights, i, j)
                    map["pacific"] = map["pacific"].union(pacific);
                }
                if (i == heights.length - 1 || j == heights[0].length - 1) {
                    const atlantic = this.dfs(heights, i, j);
                    map["atlantic"] = map["atlantic"].union(atlantic)
                }



            }
        }

        const atlantic = map["atlantic"];
        const pacific = map["pacific"];

        let result = [...atlantic.intersection(pacific)]

        result = result.map((item) => {
            const ij = item.split(":")
            ij[0] = Number(ij[0]);
            ij[1] = Number(ij[1]);
            return ij
        })

        return result 
    }
}