class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */


    peek(stack) {
        return stack[stack.length - 1] != undefined ? stack[stack.length - 1] : {
            position: -1,
            speed: -1,
            remaining_time: -1
        }
    }

    carFleet(target, position, speed) {


        const result = [];

        const stack = [];
      



        for (let i = 0; i < position.length; i++) {
            const pos_speed = {
                position: position[i],
                speed: speed[i],
                remaining_time: (target - position[i]) / speed[i]
            }

            result.push(pos_speed)

        };

        result.sort((a, b) => {
            return a.position - b.position
        });

        //console.log(result)

        for (let i = result.length - 1; i >= 0; i--) {
            let topValue = this.peek(stack);
            console.log("TopValue Current", topValue, result[i])
            // console.log(result[i])

            if (topValue.position < 0) {
                stack.push(result[i]);
                continue;
            }


            if (topValue.remaining_time < result[i].remaining_time) {
                stack.push(result[i])

            }
        


        }



        return stack.length; // TODO
    }
}

