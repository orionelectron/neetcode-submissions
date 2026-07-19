/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    findLastMatching(arr1, arr2) {
        const set2 = new Set(arr2);

        for (let i = arr1.length - 1; i >= 0; i--) {
            if (set2.has(arr1[i])) {
                return arr1[i];
            }
        }

        return null;
    }
    lowestCommonAncestor(root, p, q) {
        let ancestorsP = [];
        let ancestorsQ = [];

        let currentP = root;

        while (currentP !== null) {
            // console.log(currentP.val, p.val);
            if (currentP.val == p.val) {
                ancestorsP.push(currentP);
                break;
            }
            ancestorsP.push(currentP);
            if (p.val < currentP.val) {
                currentP = currentP.left;
            } else {
                currentP = currentP.right;
            }
        }

        //console.log(ancestorsP)

        let currentQ = root;
        while (currentQ !== null) {
            //console.log(currentQ.val, q)
            if (currentQ.val == q.val) {
                ancestorsQ.push(currentQ);
                break;
            }
            ancestorsQ.push(currentQ);
            if (q.val < currentQ.val) {
                currentQ = currentQ.left;
            } else {
                currentQ = currentQ.right;
            }
        }

        //console.log(ancestorsP, ancestorsQ)
        return this.findLastMatching(ancestorsP, ancestorsQ)
    }
}
