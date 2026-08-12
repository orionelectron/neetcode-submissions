class MinHeap {
    constructor() {
        this.heap = [];
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
            [this.heap[parentIndex], this.heap[childIndex]] =
                [this.heap[childIndex], this.heap[parentIndex]];

            childIndex = parentIndex;
        }
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

            if (
                leftChild < this.heap.length &&
                this.heap[leftChild] < this.heap[smallest]
            ) {
                smallest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild] < this.heap[smallest]
            ) {
                smallest = rightChild;
            }

            // Parent is already smaller
            if (smallest === parentIndex) {
                break;
            }

            [this.heap[parentIndex], this.heap[smallest]] =
                [this.heap[smallest], this.heap[parentIndex]];

            parentIndex = smallest;
        }

        return min;
    }

    size() {
        return this.heap.length;
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinHeap()

        for (let i = 0; i < nums.length; i++) {
            minHeap.add(nums[i]);

            if (minHeap.heap.length > k) {
                const removed = minHeap.remove();
                
            }
        }

        return minHeap.heap.length > 0 ? minHeap.heap[0] : 0;
    }
}





const nums = [2, 3, 1, 5, 4]
const k = 2;

const solution = new Solution();



console.log(solution.findKthLargest(nums, k));