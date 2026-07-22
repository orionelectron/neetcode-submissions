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

    isValidBST(root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true;
        }

        let isValid = root.val > min && root.val < max;

        const isLeftSubTreeValid = this.isValidBST(root.left, min, root.val);
        const isRightSubTreeValid = this.isValidBST(root.right, root.val, max);

        return isValid && isLeftSubTreeValid && isRightSubTreeValid;
    }
}
