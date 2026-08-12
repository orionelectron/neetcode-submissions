class MaxHeap {
    constructor() {
        this.heap = [];

    }


    add(n) {
        this.heap.push(n);

        let childIndex = this.heap.length - 1;

        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[childIndex]) {
                break;
            }

            [this.heap[parentIndex], this.heap[childIndex]] =
                [this.heap[childIndex], this.heap[parentIndex]];

            childIndex = parentIndex;
        }
    }

    seek() {
        if (this.heap.length == 0) {
            return -1;
        }

        return this.heap[0]
    }

    getHeap() {
        return this.heap;
    }

    pop() {
        if (this.heap.length === 0) {
            return -1;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }


        const poppedItem = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1];

        this.heap.pop();

        let currentIndex = 0;

        while (true) {
            const leftIndex = 2 * currentIndex + 1;
            const rightIndex = 2 * currentIndex + 2;

            let largestIndex = currentIndex;

            if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex] > this.heap[largestIndex]
            ) {
                largestIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] > this.heap[largestIndex]
            ) {
                largestIndex = rightIndex;
            }

            if (largestIndex === currentIndex) {
                break;
            }

            [this.heap[currentIndex], this.heap[largestIndex]] =
                [this.heap[largestIndex], this.heap[currentIndex]];

            currentIndex = largestIndex;
        }

        return poppedItem;
    }

}


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxHeap();

        for (let i = 0; i < stones.length; i++) {
            pq.add(stones[i]);
        }

        while (pq.getHeap().length > 1) {
            const x = pq.pop();
            const y = pq.pop();
            if (x == y) {
                continue;
            }
            else {
                pq.add(Math.abs(x - y))
            }
        }

        return pq.getHeap().length === 0
            ? 0
            : pq.seek();
    }
}