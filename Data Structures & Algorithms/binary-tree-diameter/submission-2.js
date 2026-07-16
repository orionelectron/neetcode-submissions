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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const height = (root) => {
            if (root == null) {
                return 0;
            }

            const leftHeight = height(root.left);
            const rightHeight = height(root.right);

            diameter = Math.max(diameter, leftHeight + rightHeight)

            return 1 + Math.max(leftHeight, rightHeight);
        };

        height(root);
        return diameter;
    }
}
