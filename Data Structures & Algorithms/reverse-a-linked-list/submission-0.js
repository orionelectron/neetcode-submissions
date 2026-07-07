class Solution {
    

    
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
}