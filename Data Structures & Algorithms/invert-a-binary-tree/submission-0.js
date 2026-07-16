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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root== null){
            return null;
        }

        const left = root.left;
        const right = root.right;
        root.right = left;
        root.left = right;
        this.invertTree(left);
        this.invertTree(right);

        return root;
    }
}
