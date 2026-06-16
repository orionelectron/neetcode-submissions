class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];

        for (let i = 0; i < temperatures.length; i++) {
            result[i] = 0;
            for (let j = i+1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    result[i] = j-i;
                    break;
                }
            }
        }


        return result;
    }
}

