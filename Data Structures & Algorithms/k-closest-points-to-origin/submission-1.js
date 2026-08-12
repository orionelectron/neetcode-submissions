class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(point, distance) {
        const node = {
            point,
            distance,
        };

        this.heap.push(node);

        let childIndex = this.heap.length - 1;

        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (
                this.heap[parentIndex].distance <=
                this.heap[childIndex].distance
            ) {
                break;
            }

            [this.heap[parentIndex], this.heap[childIndex]] = [
                this.heap[childIndex],
                this.heap[parentIndex],
            ];

            childIndex = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let parentIndex = 0;

        while (true) {
            const leftChild = 2 * parentIndex + 1;
            const rightChild = 2 * parentIndex + 2;

            let smallest = parentIndex;

            if (
                leftChild < this.heap.length &&
                this.heap[leftChild].distance <
                    this.heap[smallest].distance
            ) {
                smallest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild].distance <
                    this.heap[smallest].distance
            ) {
                smallest = rightChild;
            }

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
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    square(num) {
        return num * num;
    }

    calculateDistance(point) {
        return this.square(point[0]) + this.square(point[1]);
    }

    kClosest(points, k) {
        const minHeap = new MinHeap();
        const result = [];

        for (const point of points) {
            const distance = this.calculateDistance(point);

            minHeap.add(point, distance);
        }

        while (result.length < k) {
            result.push(minHeap.remove().point);
        }

        return result;
    }
}