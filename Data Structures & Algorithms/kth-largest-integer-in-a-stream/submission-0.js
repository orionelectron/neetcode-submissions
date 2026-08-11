class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
        this.heap = []

        for (let i = 0; i < this.nums.length; i++) {
            this.add(nums[i])
        }


    }


    add(val) {
        this.heap.push(val);

        let childIndex = this.heap.length - 1;

        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[childIndex]) {
                break;
            }

            [this.heap[parentIndex], this.heap[childIndex]] =
                [this.heap[childIndex], this.heap[parentIndex]];

            childIndex = parentIndex;
        }

        if (this.heap.length > this.k) {
            this.pop()
        }

        return this.heap[0]
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

            let smallestIndex = currentIndex;

            if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === currentIndex) {
                break;
            }

            [this.heap[currentIndex], this.heap[smallestIndex]] =
                [this.heap[smallestIndex], this.heap[currentIndex]];

            currentIndex = smallestIndex;
        }

        return poppedItem;
    }

}