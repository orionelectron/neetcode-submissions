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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let isSame = true;

        const sameChecker = (p, q) => {
            if ((p && !q) || (!p && q)) {
                isSame = false;
                return;
            }

            if (p == null && q == null) {
                return;
            }

            if(p.val !== q.val){
                isSame = false;
            }

            sameChecker(p.left, q.left);
            sameChecker(p.right, q.right);
        };

        sameChecker(p, q)

        return isSame;
    }
}
