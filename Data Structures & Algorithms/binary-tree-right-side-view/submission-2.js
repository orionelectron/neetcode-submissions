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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root){
            return []
        }
        let list = [];

        let queue = [];

        queue.push(root);

        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }

                if (i == size - 1) {
                    list.push(node.val);
                }
            }
        }

        return list;
    }
}
