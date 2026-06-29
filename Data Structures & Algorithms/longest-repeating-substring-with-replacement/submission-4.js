class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */


    getMostFrequentCharacter(frequencyMap) {
        let mostFrequent = {
            char: null,
            value: 0,
        };

        let totalWindow = 0;

        for (let key in frequencyMap) {
            totalWindow += frequencyMap[key];

            if (frequencyMap[key] > mostFrequent.value) {
                mostFrequent = {
                    char: key,
                    value: frequencyMap[key]
                };
            }
        }

        mostFrequent.totalWindow = totalWindow;
        return mostFrequent;
    }


    characterReplacement(s, k) {

        let frequencyMap = {};


        let left = 0;
        let right = 0;
        let maxLength = 0;


        while (left <= right && right < s.length) {
            frequencyMap[s[right]] = (frequencyMap[s[right]] || 0) + 1;



            let mostFrequent = this.getMostFrequentCharacter(frequencyMap)

            let char = mostFrequent.char;
            let frequency = mostFrequent.value;
            let window_size = mostFrequent.totalWindow;

            while ((window_size - frequency) > k) {
                frequencyMap[s[left]] = (frequencyMap[s[left]] || 0) - 1;
                left++;
                mostFrequent = this.getMostFrequentCharacter(frequencyMap)

                char = mostFrequent.char;
                frequency = mostFrequent.value;
                window_size = mostFrequent.totalWindow;

            }

            mostFrequent = this.getMostFrequentCharacter(frequencyMap)

            maxLength = Math.max(maxLength, mostFrequent.totalWindow)


            right++;







        }

        return maxLength;





    }
}