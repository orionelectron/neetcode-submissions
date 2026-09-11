class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let index = 0;

        if (nums.length == 1) {
            return true;
        }

        while (true) {

            const steps = nums[index];
            if (steps === 0) {
                return false;
            }

            let farthest = index;
            let bestPosition = index;
            //console.log(index);

            for (let i = 1; i <= steps; i++) {
                const nextIndex = index + i;

                if (nextIndex >= nums.length - 1) {
                    return true;
                }

                const reach = nextIndex + nums[nextIndex];

                if (reach > farthest) {
                    farthest = reach;
                    bestPosition = nextIndex;
                }


            }

            if (bestPosition == index) {
                return false;
            }

            index = bestPosition;
        }

    }
}