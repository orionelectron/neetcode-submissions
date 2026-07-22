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
    goodNodes(root, max = -Infinity) {
        if (!root) {
            return 0;
        }

        let isCurrentGood = root.val >= max;

        const newMax = Math.max(root.val, max);

        let leftGoodCount = this.goodNodes(root.left, newMax);
        let rightGoodCount = this.goodNodes(root.right, newMax);

        return (isCurrentGood ? 1 : 0) + leftGoodCount + rightGoodCount;
    }
}
