class Solution {
    /**
     * @param {ListNode[]} lists
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

         
            
            //console.log(merged, next1.val, next2.val)
            if (next1.val <= next2.val) {


                if (!merged) {
                    merged = next1;
                    curr = merged;

                }
                else {
                    curr.next = next1;
                    curr = curr.next;

                }

                next1 = next1.next;

            }
            else {

                if (!merged) {
                    merged = next2;
                    curr = merged;
                }
                else {
                    curr.next = next2;
                    curr = curr.next
                }

                next2 = next2.next;
            }

        }


        curr.next = next1 ? next1 : next2;

        //console.log(listToArr(merged))

        return merged;
    }
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }

        let result = lists[0];

        for (let i = 1; i < lists.length; i++) {
            result = this.mergeTwoLists(result, lists[i]);
        }

        return result;
    }
}
