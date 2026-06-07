class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    const textMapS = {};
    const textMapT = {};
    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (!textMapS[s[i]]) {
            textMapS[s[i]] = 1;
            continue;
        }
        textMapS[s[i]]++;
    }

    for (let i = 0; i < t.length; i++) {
        if (!textMapT[t[i]]) {
            textMapT[t[i]] = 1;
            continue;
        }
        textMapT[t[i]]++;
    }

    console.log(textMapS, textMapT)

    for (let i = 0; i < s.length; i++) {
        console.log(s[i], t[i])
        if (textMapS[s[i]] !== textMapT[s[i]]) {
            return false;
        }
    }
    return true;
}
}
