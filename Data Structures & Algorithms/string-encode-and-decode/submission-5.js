class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let i = 0; i < strs.length; i++) {

            encoded = encoded + strs[i].length + "#" + strs[i];

        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let prevStrEndIndex = 0;
        let strs = [];

        while (true) {
            if (prevStrEndIndex >= str.length) {
                break;
            }

            let strLength = ""
            let strLengthIndicatorEndIndex = 0;

            for (let i = prevStrEndIndex; i < str.length; i++) {
                if (str[i] == "#") {
                    strLengthIndicatorEndIndex = i
                    const start = strLengthIndicatorEndIndex + 1;
                    const end = strLengthIndicatorEndIndex + 1 + Number(strLength)
                    //console.log(start, end)
                    const text = str.slice(start, end)
                    strs.push(text)
                    prevStrEndIndex = end;
                    break;
                }
                strLength = strLength + str[i]
            }

        }

        return strs


    }
}

