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
        let strs=[];

        while (true) {
            if (prevStrEndIndex >= str.length) {
                break;
            }

            let strLength = ""
            let strLengthIndicatorEndIndex = 0;

            for (let i = prevStrEndIndex; i < str.length; i++) {
                if (str[i] == "#") {
                    strLengthIndicatorEndIndex = i
                    strLength = Number(strLength)
                    break;
                }
                strLength = strLength + str[i]
            }




            const start = strLengthIndicatorEndIndex + 1;
            const end = Number(strLengthIndicatorEndIndex + 1 + strLength)
            console.log(prevStrEndIndex, strLengthIndicatorEndIndex, strLength, start, end)
            const text = str.slice(start, end)
            //console.log(text)
            strs.push(text)
            prevStrEndIndex = end;
            console.log(prevStrEndIndex)

        }

        return strs


    }
}
