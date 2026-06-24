class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const final = [...nums1, ...nums2];

        final.sort((a, b) => {
            return a - b;
        });

        if (final.length % 2 != 0) {
            return final[Math.floor(final.length / 2)];
        }

        else {
            const mid = Math.floor(final.length / 2);
            //console.log(mid);
            const left = mid - 1;
            const right = mid;

            return (final[left] + final[right]) / 2;

        }

        console.log(final)
    }
}
