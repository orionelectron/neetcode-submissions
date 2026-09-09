/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent/child indices
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    // Insert a value
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Restore heap property upward
    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            index > 0 &&
            this.heap[index] < this.heap[this.parent(index)]
        ) {
            const parentIndex = this.parent(index);

            [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    // Remove and return minimum element
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

    // Restore heap property downward
    heapifyDown() {
        let index = 0;

        while (true) {
            const left = this.leftChild(index);
            const right = this.rightChild(index);

            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
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

    // Return minimum without removing it
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Check if empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Number of elements
    size() {
        return this.heap.length;
    }
}
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        const minHeap = new MinHeap()
        if (intervals.length === 0) {
            return 0;
        }

        intervals.sort((a, b) => a.start - b.start);

        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];

            if (minHeap.isEmpty()) {
                minHeap.insert(interval.end)
                continue;
            }

            const earliestFreeTime = minHeap.peek();
            if (interval.start < earliestFreeTime) {
                minHeap.insert(interval.end);
                
            }
            else{
                minHeap.extractMin();
                minHeap.insert(interval.end)
            }


        }

        return minHeap.size();
    }
}