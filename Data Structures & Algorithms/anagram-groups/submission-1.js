class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        console.log(strs);
        let hashmap = {};

        for (let i = 0; i < strs.length; i++) {
            const sorted_string = strs[i].split("").sort().join("");

            if (!hashmap[sorted_string]) {
                hashmap[sorted_string] = [strs[i]];
            } else {
                hashmap[sorted_string].push(strs[i]);
            }
        }

        console.log(hashmap);

        return Object.values(hashmap);
    }
}
