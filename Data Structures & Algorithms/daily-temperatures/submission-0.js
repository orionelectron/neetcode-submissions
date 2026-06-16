class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    encodeValue(index, value) {
        return {
            index: index,
            value: value
        };
    }

    decodeValue(objectValue) {
        if (!objectValue) {
            return {
                index: -1,
                value: -1
            }
        }
        return objectValue;
    }

    top(stack) {
        if (!stack) {
            return null;
        }
        return stack[stack.length - 1] || null
    }

    dailyTemperatures(temperatures) {
        let result = Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            let stackValue = this.decodeValue(this.top(stack));
            let tempIndex = i;
            let tempValue = temperatures[i]
            //console.log(stackValue.index, stackValue.value, stack);

            if (stackValue.index < 0) {
                stack.push(this.encodeValue(tempIndex, tempValue));
                continue;
            }

            //console.log("Stack Value, Temp Index, Temp Value", stackValue, tempIndex, tempValue)

            while (stackValue.index >= 0) {
                if (stackValue.value < tempValue) {
                    let poppedValue = stack.pop();
                    //console.log("Popped Value", poppedValue)
                    result[poppedValue.index] = tempIndex - poppedValue.index;
                    stackValue = this.decodeValue(this.top(stack))
                }
                else {

                    break;
                }
            }

            stack.push(this.encodeValue(tempIndex, tempValue));

        }


        return result;
    }
}