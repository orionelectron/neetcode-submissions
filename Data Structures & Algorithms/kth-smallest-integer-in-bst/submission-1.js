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
        list.push(root.val);
        this.recurse(root.left, list);
        this.recurse(root.right, list);
        return list;
    }
    kthSmallest(root, k) {
        const list = this.recurse(root);
        list.sort((a, b) => {
            return a - b;
        });
        return list[k-1];
    }
}
