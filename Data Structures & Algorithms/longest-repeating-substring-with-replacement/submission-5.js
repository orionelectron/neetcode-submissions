class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */


    getMaxFrequency(frequencyMap) {
        let maxFrequency = 0;

        for (let key in frequencyMap) {
            maxFrequency = Math.max(maxFrequency, frequencyMap[key]);
        }

        return maxFrequency;
    }

    characterReplacement(s, k) {

        const frequencyMap = {};

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            frequencyMap[s[right]] =
                (frequencyMap[s[right]] || 0) + 1;

            let maxFrequency =
                this.getMaxFrequency(frequencyMap);

            while ((right - left + 1) - maxFrequency > k) {

                frequencyMap[s[left]]--;
                left++;

                maxFrequency =
                    this.getMaxFrequency(frequencyMap);
            }

            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }

        return maxLength;
    }
}
