class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */

    reverseList(head) {

        let prev = null;
        let curr = head;

        while (curr) {
            const next = curr.next; // Save next node
            curr.next = prev;       // Reverse pointer
            prev = curr;            // Move prev forward
            curr = next;            // Move curr forward
        }

        return prev;
    }

    reorderList(head) {
        let current = head;
        let total_items = 0;
        let index = 0;
        let prev = null;

        while (current) {
            current = current.next;

            total_items++;
        }

        if (total_items <= 2) {
            return head;
        }


        const mid = Math.floor((total_items - 1) / 2)

        current = head;

        while (current) {
            //console.log(index)
            if (index > mid) {
                current = this.reverseList(current)
                prev.next = current;
                break;
            }
            index++;
            prev = current;
            current = current.next;
        }

        let next1 = head;
        let next2 = current;


        index = 0;
        while (true) {
            if (index == mid) {
                next1.next = next2;
                break;
            }

            console.log(next1.val, next2.val)
            let next1Next = next1.next;
            let next2Next = next2.next;
            next1.next = next2;
            next2.next = next1Next;

            next1 = next1Next;
            next2 = next2Next;

            index++;
        }





        return head;



    }
}
