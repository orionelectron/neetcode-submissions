class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let total_length = 0;
        let delete_index = 0;
        let index = 0;
        let current = head;
        let prev = null;

        while (current) {
            current = current.next;
            total_length++;
        }

        delete_index = total_length - n;
        if (delete_index < 0) {
            return head;
        }
        //console.log(total_length, delete_index)

        current = head;

        while (current) {
            
            if(delete_index == 0 && index == delete_index){
                const nextNode = current.next;
                current.next = null;
                head = nextNode;
                return head;
            }

            if (index == delete_index) {
                if (prev)
                    prev.next = current.next;
                current.next = null;
                return head;
            }
            prev = current;
            current = current.next;
            index++;
        }


    }
}
