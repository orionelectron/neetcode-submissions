class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let index = 0;

        if (nums.length <= 1) {
            return 0;
        }
        let bestPositions = []

        while (true) {

            const steps = nums[index];
            if (steps === 0) {
                return -1;
            }

            let farthest = index;
            let bestPosition = index;
            //console.log(index);

            for (let i = 1; i <= steps; i++) {
                const nextIndex = index + i;

                if (nextIndex >= nums.length - 1) {
                    bestPositions.push(nextIndex)
                   return bestPositions.length
                }

                const reach = nextIndex + nums[nextIndex];

                if (reach > farthest) {
                    farthest = reach;
                    bestPosition = nextIndex;
                }


            }

            if (bestPosition == index) {
                return -1
            }
            bestPositions.push(bestPosition)
            index = bestPosition;
            
        }

        

        
    }
}