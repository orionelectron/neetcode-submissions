class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //console.log(list1, list2)

        let next1 = list1;
        let next2 = list2;
        let merged = null;
        let curr = null;

        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }


        while (next1 && next2) {

            // console.log(next1, next2)

            if (!next1) {
                merged.next = next2;
                break;
            }
            if (!next2) {
                merged.next = next1;
                break;
            }



            const node1 = new ListNode(next1.val, null);
            const node2 = new ListNode(next2.val, null);

            //console.log(merged, next1.val, next2.val)
            if (next1.val <= next2.val) {


                if (!merged) {
                    merged = node1;
                    curr = merged;

                }
                else {
                    curr.next = node1;
                    curr = curr.next;

                }

                next1 = next1.next;

            }
            else {

                if (!merged) {
                    merged = node2;
                    curr = merged;
                }
                else {
                    curr.next = node2;
                    curr = curr.next
                }

                next2 = next2.next;
            }

        }


        curr.next = next1 ? next1 : next2;

        //console.log(listToArr(merged))

        return merged;
    }
}