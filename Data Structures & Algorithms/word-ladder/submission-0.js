class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */

    isValid(word1, word2) {
        let differences = 0;

        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                differences++;
            }
        }

        return differences === 1;
    }

    ladderLength(beginWord, endWord, wordList) {
        let queue = [[beginWord, 1]];
        let visited = new Set()
        let front = 0;

        while (front < queue.length) {
            const [word, steps] = queue[front++];
            if (word == endWord) {
                visited.add(word);
                return steps;
            
            }
            if (visited.has(word)) {
                continue;
            }
            visited.add(word);
            for (let i = 0; i < wordList.length; i++) {
                const candidate = wordList[i];
                if (this.isValid(word, candidate)) {

                    queue.push([candidate, steps+1])



                }
            }
        }

        return 0;


    }
}