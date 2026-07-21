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
        if (!root) {
            return [];
        }
        let list = [];
        let firstPointer = 0;
        let queue = [];

        queue.push(root);

        while (firstPointer < queue.length) {
            const levelSize = queue.length - firstPointer;
            for (let i = 0; i < levelSize; i++) {
                const node = queue[firstPointer];
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }

                if (i === levelSize - 1) {
                    list.push(node.val);
                }
                firstPointer++;
            }
        }

        return list;
    }
}
