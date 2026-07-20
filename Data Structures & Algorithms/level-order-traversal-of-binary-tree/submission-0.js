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
     * @return {number[][]}
     */
    levelOrder(root) {
        let list = [];

        let queue = [];

        queue.push(root);

        while (queue.length > 0) {
            let temp = [];
            const currentQlen = queue.length;
            for (let i = 0; i < currentQlen; i++) {
                const node = queue.shift();
                if (node) {
                    queue.push(node.left);
                    queue.push(node.right);
                    temp.push(node.val);
                }
            }
            if(temp.length > 0){
                list.push(temp);
            }
            
        }
        console.log(list);
        return list;
    }
}
