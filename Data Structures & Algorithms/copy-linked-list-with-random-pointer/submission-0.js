// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let newList = null;
        let current = head;
        let currentNew = null;
        let nodeMap = new Map();
        let prev = null;

        while (current) {
            const newNode = new Node(current.val);
            if (!newList) {
                newList = newNode;
                prev = newList;
            } else {
                prev.next = newNode;
            }
            nodeMap.set(current, newNode);
            prev = newNode;
            current = current.next;
        }
        currentNew = newList;
        current = head;
        console.log(nodeMap);
        while (currentNew && current) {
            currentNew.random = nodeMap.get(current.random);
            currentNew = currentNew.next;
            current = current.next;
        }

        return newList;
    }
}
