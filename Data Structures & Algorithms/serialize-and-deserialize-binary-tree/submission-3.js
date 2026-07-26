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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */

    serialize(root) {
        let treeStr = "";

        let queue = [];

        queue.push(root);

        while (queue.length > 0) {
            const currentQlen = queue.length;
            for (let i = 0; i < currentQlen; i++) {
                const node = queue.shift();
                if (node) {
                    queue.push(node.left);
                    queue.push(node.right);
                    //list.push(node.val);

                    treeStr = treeStr + node.val + ",";
                } else {
                    treeStr = treeStr + "#" + ",";
                }
            }
        }
        treeStr = treeStr.slice(0, -1);

        return treeStr;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");
        console.log(data);
        /**
         * let treeMap = {};
        for (let i = 0; i < data.length; i++) {
            let treeNode = null;
            if (data[i] !== "#") {
                treeNode = new TreeNode(Number(data[i]));
            }
            if (data[i] !== "") {
                treeMap[data[i]] = treeNode;
            }
        }
         */

        let index = 0;
        let queue = [data[index] != "#" ? new TreeNode(data[index]) : null];
        let root = null;
        while (queue.length > 0) {
            const rootNode = queue.shift();
            if (index == 0) {
                root = rootNode;
            }
            if(!rootNode){
                continue;
            }
            index++;
            let leftVal = data[index];
            let leftNode = data[index] != "#" ? new TreeNode(leftVal) : null;

            index++;
            let rightVal = data[index];
            let rightNode = data[index] != "#" ? new TreeNode(rightVal) : null;

            rootNode.left = leftNode;
            rootNode.right = rightNode;

            if (leftNode) {
                queue.push(leftNode);
            }
            if (rightNode) {
                queue.push(rightNode);
            }
        }

        return root;
    }
}
