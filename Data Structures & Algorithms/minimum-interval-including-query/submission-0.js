
class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    // Compare intervals based on LENGTH
    compare(a, b) {
        const lengthA = a[1] - a[0] + 1;
        const lengthB = b[1] - b[0] + 1;

        return lengthA - lengthB;
    }

    // Insert [start, end]
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.compare(
                this.heap[index],
                this.heap[this.parent(index)]
            ) < 0
        ) {
            const parentIndex = this.parent(index);

            [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    // Remove shortest interval
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return min;
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const left = this.leftChild(index);
            const right = this.rightChild(index);

            let smallest = index;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}



class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */

    minInterval(intervals, queries) {
        let output = new Array(queries.length).fill(-1)
        //console.log(output)
        intervals.sort((i1, i2) => {
            return i1[0] - i2[0]
        })
       
        const sortedQueries = queries
            .map((query, index) => [query, index])
            .sort((a, b) => a[0] - b[0]);
        //console.log(sortedQueries)
        const minHeap = new MinHeap();
        let j = 0;

        for (const query of sortedQueries) {
            while (j < intervals.length && intervals[j][0] <= query[0]) {
                minHeap.insert(intervals[j]);
                j++;
            }

            while (!minHeap.isEmpty() && minHeap.peek()[1] < query[0]) {
                minHeap.extractMin()
            }

            if (!minHeap.isEmpty()) {
                output[query[1]] = minHeap.peek()[1] - minHeap.peek()[0] + 1
            }
            
        }



        return output;
    }
}