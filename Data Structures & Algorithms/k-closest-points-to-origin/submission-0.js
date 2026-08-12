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

        // Bubble up
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[parentIndex].distance <= this.heap[childIndex].distance) {
                break;
            }

            [this.heap[parentIndex], this.heap[childIndex]] = [
                this.heap[childIndex],
                this.heap[parentIndex],
            ];

            childIndex = parentIndex;
        }
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
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
                this.heap[leftChild].distance < this.heap[smallest].distance
            ) {
                smallest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild].distance < this.heap[smallest].distance
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

    size() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    constructor() {
        this.minHeap = new MinHeap();
    }
    square(num) {
        return num * num;
    }
    calculateEuclideanDistance(point1, point2 = [0, 0]) {
        const x1 = point1[0];
        const y1 = point1[1];

        const x2 = point2[0];
        const y2 = point2[1];

        return Math.sqrt(this.square(x1 - x2) + this.square(y1 - y2));
    }
    kClosest(points, k) {
        let kClosest = [];
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const distance = this.calculateEuclideanDistance(point);

            this.minHeap.add(point, distance);
        }

        while (k > 0) {
            const val = this.minHeap.remove();
            kClosest.push(val.point);
            k--;
        }

        return kClosest;
    }
}
