class MinHeap {
    constructor() {
        this.heap = [];
    }

    getHeap() {
        return this.heap;
    }

    // Add an element
    add(value) {
        this.heap.push(value);

        let childIndex = this.heap.length - 1;

        // Bubble up
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[childIndex]) {
                break;
            }

            // Swap
            [this.heap[parentIndex], this.heap[childIndex]] = [
                this.heap[childIndex],
                this.heap[parentIndex],
            ];

            childIndex = parentIndex;
        }

        return this.getHeap();
    }

    // Get minimum element without removing it
    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    // Remove and return minimum element
    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        // Bubble down
        let parentIndex = 0;

        while (true) {
            const leftChild = 2 * parentIndex + 1;
            const rightChild = 2 * parentIndex + 2;

            let smallest = parentIndex;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            // Parent is already smaller
            if (smallest === parentIndex) {
                break;
            }

            [this.heap[parentIndex], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[parentIndex],
            ];

            parentIndex = smallest;
        }

        return min;
    }

    size() {
        return this.heap.length;
    }
}


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getHeap() {
        return this.heap;
    }

    // Add an element
    add(value) {
        this.heap.push(value);

        let childIndex = this.heap.length - 1;

        // Bubble up
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            // Parent is already greater than or equal to child
            if (this.heap[parentIndex] >= this.heap[childIndex]) {
                break;
            }

            // Swap
            [this.heap[parentIndex], this.heap[childIndex]] = [
                this.heap[childIndex],
                this.heap[parentIndex],
            ];

            childIndex = parentIndex;
        }

        return this.getHeap();
    }

    // Get maximum element without removing it
    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    // Remove and return maximum element
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

            // Find larger child
            if (
                leftChild < this.heap.length &&
                this.heap[leftChild] > this.heap[largest]
            ) {
                largest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild] > this.heap[largest]
            ) {
                largest = rightChild;
            }

            // Parent is already larger
            if (largest === parentIndex) {
                break;
            }

            // Swap
            [this.heap[parentIndex], this.heap[largest]] = [
                this.heap[largest],
                this.heap[parentIndex],
            ];

            parentIndex = largest;
        }

        return max;
    }

    size() {
        return this.heap.length;
    }
}

class MedianFinder {
    constructor() {
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.add(num);
        } else {
            this.minHeap.add(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.add(this.maxHeap.remove());
        } else if (this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.add(this.minHeap.remove());
        }
    }

    /**
     * @return {number}
     */



    findMedian() {
        const leftSize = this.maxHeap.size();
        const rightSize = this.minHeap.size();

        if (leftSize > rightSize) {
            return this.maxHeap.peek();
        }

        if (rightSize > leftSize) {
            return this.minHeap.peek();
        }

        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }


}
