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
     * @param {number} k
     * @return {number}
     */
    recurse(root, list = []) {
        if (!root) {
            return;
        }
        this.recurse(root.left, list);
        list.push(root.val);
        this.recurse(root.right, list);
        return list;
    }
    kthSmallest(root, k) {
        const list = this.recurse(root);
        
        return list[k - 1];
    }
}
