class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let tank = 0;
        let start = 0;
        let total = 0;
        for (let i = 0; i < gas.length; i++) {
            const gain = gas[i] - cost[i];
            tank = tank + gain;
            total = total + gain;
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }

        }

        return total >= 0 ? start : -1;
    }
}