class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    dfs(node, visited, adjMap) {





        //console.log(adjMap)

        let queue = [node];
        let front = 0;
        visited.add(node);
        while (front < queue.length) {

            const node = queue[front++];



            const neighbors = adjMap.get(node);

            if (!neighbors) {
                continue;
            }

            for (let i = 0; i < neighbors.length; i++) {

                const neighbor = neighbors[i];




                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }


            }
        }


        return visited;
    }
    countComponents(n, edges) {
        let count = 0;
        const visited = new Set();
        let adjMap = new Map();

        if (edges.length == 0) {
            return n;
        }

        for (let i = 0; i < n; i++) {
            adjMap.set(i, [])
        }


        for (let i = 0; i < edges.length; i++) {
            const [u, v] = edges[i];



            adjMap.get(u).push(v);
            adjMap.get(v).push(u)


        }

        // console.log(adjMap)
        for (const [key, value] of adjMap) {
            if (!visited.has(key)) {

                count++;
                this.dfs(key, visited, adjMap)
                //console.log(key, visited)

            }

        }


        return count;


    }
}
