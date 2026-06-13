class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const reverse = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }

        if (s.length % 2 !== 0) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
                stack.push(s[i])
            }
            else{
                //console.log(stack)
                const value = stack.pop();
                //console.log(s[i], value)
                if(value !== reverse[s[i]]){
                    return false;
                }
            }
        }

        

        if(stack.length==0){
            return true;
        }
        return false;
    }
}