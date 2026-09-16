class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastCharIndex = {};
        const result = []
        for (let i = S.length - 1; i >= 0; i--) {
            if (!lastCharIndex[S[i]]) {
                lastCharIndex[S[i]] = i;
            }

        }

        let start = 0;
        let end = 0;

        for (let i = 0; i < S.length; i++) {
            end = Math.max(end, lastCharIndex[S[i]])
            if (i == end) {
                result.push(end - start + 1)
                start = i+1;
                end = i+1;
            }


        }

        return result;




    }
}