class Solution {
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '*', '/'];

        for (let i = 0; i < tokens.length; i++) {
            if (!operators.includes(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                const b = stack.pop();
                const a = stack.pop();

                if (tokens[i] === '+')
                    stack.push(a + b);

                if (tokens[i] === '-')
                    stack.push(a - b);

                if (tokens[i] === '*')
                    stack.push(a * b);

                if (tokens[i] === '/')
                    stack.push(Math.trunc(a / b));
            }
        }

        return stack.pop();
    }
}