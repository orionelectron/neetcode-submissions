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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */

    buildTree(preorder, inorder) {
        let nextPreorderIndex = 0;
        let inorderMap = {};
        for (let i = 0; i < inorder.length; i++) {
            inorderMap[inorder[i]] = i;
        }
        const buildRecur = (preorder, inorder, start, end) => {
            if (start > end) {
                return null;
            }

            const rootVal = preorder[nextPreorderIndex++];
           

            let mid = inorderMap[rootVal];

            const leftSubtree = buildRecur(preorder, inorder, start, mid - 1);
            const rightSubtree = buildRecur(preorder, inorder, mid + 1, end);
            const rootNode = new TreeNode(rootVal, leftSubtree, rightSubtree);
            return rootNode;
        };
        return buildRecur(preorder, inorder, 0, inorder.length - 1);
    }
}
