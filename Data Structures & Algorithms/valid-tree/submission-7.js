class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const visited = new Set();

        let adjMap = new Map();

        if(edges.length == 0){
            return true;
        }


        for (let i = 0; i < edges.length; i++) {
            const [u, v] = edges[i];

            if (!adjMap.get(u)) {
                adjMap.set(u, [])
            }

            if (!adjMap.get(v)) {
                adjMap.set(v, [])
            }

            adjMap.get(u).push(v);
            adjMap.get(v).push(u)

        }


        //console.log(adjMap)

        let queue = [[0, -1]];
        let front = 0;
        visited.add(0);
        while (front < queue.length) {

            const [node, nodeParent] = queue[front++];

            //console.log("Node NodeParent", node, nodeParent)


            const neighbors = adjMap.get(node);

            if (!neighbors) {
                continue;
            }

            for (let i = 0; i < neighbors.length; i++) {

                const neighbor = neighbors[i];


                if (neighbor == nodeParent) {
                    continue;
                }


                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, node]);
                }

                else {
                    return false;
                }
            }
        }


        return visited.size == n;


       


    }
}