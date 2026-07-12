/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sum = null;
        let prev = null;
        let current1 = l1;
        let current2 = l2;
        let carry = 0;

        while (current1 || current2 || carry !== 0) {
            const d1 = current1 ? current1.val : 0;
            const d2 = current2 ? current2.val : 0;
            let d3 = 0;

            const digitSum = d1 + d2 + carry;

            carry = Math.floor(digitSum / 10);
            d3 = digitSum % 10;

            const newNode = new ListNode(d3);

            if (!sum) {
                sum = newNode;
                prev = sum;
            } else {
                prev.next = newNode;
                prev = newNode;
            }

            current1 = current1 ? current1.next : null;
            current2 = current2 ? current2.next : null;
        }

        return sum;
    }
}
