class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;

        const parent = Array.from({ length: n + 1 }, (_, i) => i);



        const find = (x) => {
            while (parent[x] !== x) {
                x = parent[x];
            }

            return x;
        }

        for(const [u, v] of edges){
            const rootU = find(u);
            const rootV = find(v);

            if(rootU === rootV){
                return [u, v];
            }

            parent[rootV] = rootU;
        }






    }
}