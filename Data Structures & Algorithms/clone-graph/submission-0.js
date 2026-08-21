class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    constructor() {
        this.nodeMap = new Map();
    }



    cloneGraph(node) {
        if (!node) {
            return null;
        }
        let stack = [node];

        let visited = new Set();


        while (stack.length > 0) {
            const currentNode = stack.pop();


            if (visited.has(currentNode)) {
                continue;
            }

            visited.add(currentNode);

            if (!this.nodeMap.has(currentNode)) {
                this.nodeMap.set(currentNode, new Node(currentNode.val))
            }


            const currentNeighbors = currentNode.neighbors;
            const currentNodeCopy = this.nodeMap.get(currentNode);
            for (let i = 0; i < currentNeighbors.length; i++) {
                const neighbor = currentNeighbors[i];

                if (!this.nodeMap.has(neighbor)) {
                    this.nodeMap.set(neighbor, new Node(neighbor.val));

                }

                const neighborCopy = this.nodeMap.get(neighbor);
                currentNodeCopy.neighbors.push(neighborCopy)
                if (!visited.has(neighbor)) {
                    stack.push(neighbor)
                }

            }


        }

        return this.nodeMap.get(node);
    }
}