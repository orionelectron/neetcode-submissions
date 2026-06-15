class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['/', '+', '-', '*'];
        let i = 0;
        for (let i = 0; i < tokens.length; i++) {
            if (!operators.includes(tokens[i])) {
                stack.push(tokens[i]);
            }
            else {
                const b = Number(stack.pop());
                const a = Number(stack.pop());
                console.log(a, b, tokens[i])


                if (tokens[i] == "+") {
                    stack.push(a + b);
                }
                if (tokens[i] == "-") {
                    stack.push(a - b);
                }
                if (tokens[i] == "*") {
                    stack.push(a * b);
                }
                if (tokens[i] == "/") {
                    stack.push(Math.trunc(a / b));
                }

            }
        }


        return stack.pop()

    }
}