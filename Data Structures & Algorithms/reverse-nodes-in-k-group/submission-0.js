class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */

    reverseList(startPoint, endPoint) {
        let prev = null;
        let curr = startPoint;

        while (curr && curr !== endPoint) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return {
            head: prev,       // new head
            tail: startPoint, // new tail
            next: curr        // first node after reversed part
        };
    }

    reverseKGroup(head, k) {
        let dummy = new ListNode(-1, head)
        let groupPrev = dummy;
        let current = head;
        let count = 1;
        let groupNext = null
        while (current) {
            if (count == k) {
                groupNext = current.next
                const reversed = this.reverseList(groupPrev.next, groupNext);
                groupPrev.next = reversed.head;
                reversed.tail.next = groupNext;
                current = groupNext;
                groupPrev = reversed.tail;
                count = 1;
                //console.log(groupPrev.val, reversed, current.val)
                continue;
            }

            current = current.next;
            count++;

        }

        return dummy.next;


    }
}
