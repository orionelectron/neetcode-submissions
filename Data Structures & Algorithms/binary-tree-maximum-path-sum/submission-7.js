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
     * @return {number}
     */

    maxPathSum(root) {
        let bestSum = -Infinity;
        const recur = (root) => {
            if (!root) {
                return 0;
            }

            const leftGain = Math.max(0, recur(root.left));
            const rightGain = Math.max(0, recur(root.right));
            bestSum = Math.max(bestSum, root.val + leftGain + rightGain);
            return root.val + Math.max(leftGain, rightGain);
        };
        recur(root);
        return bestSum;
    }
}
