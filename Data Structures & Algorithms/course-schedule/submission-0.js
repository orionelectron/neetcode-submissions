class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = new Map();
        const graph = new Map();

        let queue = [];
        let front = 0;
        let processed = 0;

        // Initialize every course
        for (let i = 0; i < numCourses; i++) {
            indegree.set(i, 0);
            graph.set(i, []);
        }

        // Build graph: u -> v
        for (const [v, u] of prerequisites) {
            graph.get(u).push(v);
            indegree.set(v, indegree.get(v) + 1);
        }
        //console.log("Indegree", indegree)
        //console.log("Graph ", graph)

        for (let [key, value] of indegree) {
            if (value == 0) {
                queue.push(key)
            }
        }

       // console.log("Queue ", queue)

        while (front < queue.length) {
            const node = queue[front++];
            processed++;

            for (const neighbor of graph.get(node)) {
                indegree.set(neighbor, indegree.get(neighbor) - 1)
                if (indegree.get(neighbor) == 0) {
                    queue.push(neighbor);
                }
            }

        }

        return numCourses === processed;
    }
}
