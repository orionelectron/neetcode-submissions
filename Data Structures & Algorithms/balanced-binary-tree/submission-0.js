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
     * @return {boolean}
     */

    isBalanced(root) {
        let isBalanced = true;

        const height = (root) => {
            if (root == null) {
                return 0;
            }

            const leftHeight = height(root.left);
            const rightHeight = height(root.right);

            if (Math.abs(leftHeight - rightHeight) > 1) {
                isBalanced = false;
            }

            return 1 + Math.max(leftHeight, rightHeight);
        };

        height(root)

        return isBalanced;
    }
}
