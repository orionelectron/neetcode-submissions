
class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {

        if (hand.length % groupSize !== 0) {
            return false;
        }
        const freqMap = new Map();

        for (let i = 0; i < hand.length; i++) {
            if (!freqMap.get(hand[i])) {
                freqMap.set(hand[i], 0);
            }

            freqMap.set(hand[i], freqMap.get(hand[i]) + 1)
        }
        console.log(freqMap)

        hand.sort((a, b) => a - b);

        for (let i = 0; i < hand.length; i++) {
            if (!freqMap.get(hand[i])) {
                continue;
            }

            const count = freqMap.get(hand[i]);

            for (let j = 0; j < groupSize; j++) {
                const nextCard = hand[i] + j;

                if ((freqMap.get(nextCard) || 0) < count) {
                    return false;
                }

                freqMap.set(nextCard, freqMap.get(nextCard) - count)
            }
        }

        return true;


    }
}