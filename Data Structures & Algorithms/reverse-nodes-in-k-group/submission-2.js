
class Solution {

    findGroupEnd(nodeBeforeGroup, k) {
        let current = nodeBeforeGroup;

        while (current && k > 0) {
            current = current.next;
            k--;
        }

        return current;
    }

    reverseGroup(groupStart, nodeAfterGroup) {
        let previous = nodeAfterGroup;
        let current = groupStart;

        while (current !== nodeAfterGroup) {
            const nextNode = current.next;

            current.next = previous;

            previous = current;
            current = nextNode;
        }

        return previous; // New head of the reversed group
    }

    reverseKGroup(head, k) {
        if (!head || k === 1) return head;

        const dummy = new ListNode(0, head);

        let nodeBeforeGroup = dummy;

        while (true) {

            // Find the current group.
            const groupEnd = this.findGroupEnd(nodeBeforeGroup, k);

            if (!groupEnd) {
                break;
            }

            const groupStart = nodeBeforeGroup.next;
            const nodeAfterGroup = groupEnd.next;

            // Reverse the group.
            const newGroupHead = this.reverseGroup(
                groupStart,
                nodeAfterGroup
            );

            // Connect the previous part to the reversed group.
            nodeBeforeGroup.next = newGroupHead;

            // Move to the next group.
            nodeBeforeGroup = groupStart;
        }

        return dummy.next;
    }
}