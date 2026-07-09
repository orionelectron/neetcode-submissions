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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) {
            return false;
        }

        let sp = head;
        let fp = head.next;
        if (fp) {
            fp = fp.next;
        }


        while (true) {
            if (sp == null || fp == null) {
                return false;
            }

            if (sp === fp) {
                return true;
            }

            sp = sp.next;
            fp = fp.next;
            if (fp) {
                fp = fp.next;
            }
        }

    }
}



