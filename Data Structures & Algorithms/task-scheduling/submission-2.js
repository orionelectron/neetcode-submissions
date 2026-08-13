class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Add a task
    add(task, frequency) {
        this.heap.push({ task, frequency });

        let childIndex = this.heap.length - 1;

        // Bubble up
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            // Parent already has a greater/equal frequency
            if (
                this.heap[parentIndex].frequency >=
                this.heap[childIndex].frequency
            ) {
                break;
            }

            // Swap
            [this.heap[parentIndex], this.heap[childIndex]] =
                [this.heap[childIndex], this.heap[parentIndex]];

            childIndex = parentIndex;
        }
    }

    // Get task with highest frequency without removing it
    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    // Remove and return task with highest frequency
    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        // Bubble down
        let parentIndex = 0;

        while (true) {
            const leftChild = 2 * parentIndex + 1;
            const rightChild = 2 * parentIndex + 2;

            let largest = parentIndex;

            if (
                leftChild < this.heap.length &&
                this.heap[leftChild].frequency >
                this.heap[largest].frequency
            ) {
                largest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild].frequency >
                this.heap[largest].frequency
            ) {
                largest = rightChild;
            }

            // Parent is already the largest
            if (largest === parentIndex) {
                break;
            }

            [this.heap[parentIndex], this.heap[largest]] =
                [this.heap[largest], this.heap[parentIndex]];

            parentIndex = largest;
        }

        return max;
    }

    size() {
        return this.heap.length;
    }
}


class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freqMap = {};
        let time = 0;
        // Count frequencies
        for (const task of tasks) {
            freqMap[task] = (freqMap[task] || 0) + 1;
        }

        const maxHeap = new MaxHeap();

        // Put tasks into heap
        for (const [task, frequency] of Object.entries(freqMap)) {
            maxHeap.add(task, frequency);
        }


        while (maxHeap.size() > 0) {
            let temp = [];
            for (let i = 1; i <= n + 1; i++) {
                const val = maxHeap.remove();

                if (!val) {
                    if (temp.length > 0 || maxHeap.size() > 0) {
                        time++;
                    }
                    continue;
                }



                val.frequency--;
                time++;
                if (val.frequency > 0) {
                    temp.push(val);
                }


            }

            temp.forEach((val) => {
                maxHeap.add(val.task, val.frequency)
            })

        }

        return time;

    }
}
