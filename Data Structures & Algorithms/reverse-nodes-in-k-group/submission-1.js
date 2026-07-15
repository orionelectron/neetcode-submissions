
class Solution {

    // Returns the last node of the next group of size k.
    // Returns null if there aren't enough nodes.
    findGroupEnd(nodeBeforeGroup, k) {
        let current = nodeBeforeGroup;

        while (current && k > 0) {
            current = current.next;
            k--;
        }

        return current;
    }

    reverseKGroup(head, k) {
        if (!head || k === 1) return head;

        const dummy = new ListNode(0, head);

        // Always points to the node before the current group.
        let nodeBeforeGroup = dummy;

        while (true) {

            // Find the last node of this group.
            const groupEnd = this.findGroupEnd(nodeBeforeGroup, k);

            // Not enough nodes left.
            if (!groupEnd) break;

            const nodeAfterGroup = groupEnd.next;
            const groupStart = nodeBeforeGroup.next;

            // Reverse this group.
            let previous = nodeAfterGroup;
            let current = groupStart;

            while (current !== nodeAfterGroup) {
                const nextNode = current.next;

                current.next = previous;

                previous = current;
                current = nextNode;
            }

            // Reconnect the reversed group.
            nodeBeforeGroup.next = groupEnd;

            // The old start is now the tail.
            nodeBeforeGroup = groupStart;
        }

        return dummy.next;
    }
}