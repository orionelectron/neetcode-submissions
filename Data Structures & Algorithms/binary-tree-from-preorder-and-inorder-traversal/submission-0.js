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

        const buildRecur = (preorder, inorder, start, end) => {
            if (start > end) {
                return null;
            }

            const rootVal = preorder[nextPreorderIndex++];
            let leftIndices = { start: -1, end: -1 };
            let rightIndices = { start: -1, end: -1 };
            for (let i = start; i <= end; i++) {
                if (inorder[i] == rootVal) {
                    leftIndices = {
                        start: start,
                        end: i - 1,
                    };
                    rightIndices = {
                        start: i + 1,
                        end: end,
                    };
                    break;
                }
            }
            const leftSubtree = buildRecur(preorder, inorder, leftIndices.start, leftIndices.end);
            const rightSubtree = buildRecur(
                preorder,
                inorder,
                rightIndices.start,
                rightIndices.end,
            );
            const rootNode = new TreeNode(rootVal, leftSubtree, rightSubtree);
            return rootNode;
        };
        return buildRecur(preorder, inorder, 0, inorder.length - 1);
    }
}
