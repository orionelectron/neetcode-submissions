class MinStack {
    constructor() {
        this.values = []
        this.sorted = [];
    }

    insertAtIndex(arr, index, value) {
        // Validate index range
        if (index < 0 || index > arr.length) {
            throw new Error("Index out of bounds");
        }
        // Insert without removing any element
        arr.splice(index, 0, value);
        return arr;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.values.push(val);

        if (this.sorted.length === 0) {
            this.sorted.push(val);
        } else {
            this.sorted.push(
                Math.min(this.sorted[this.sorted.length - 1], val)
            );
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const value = this.values.pop();
        this.sorted.pop();
        if (value !== undefined) {

        }
        return value;
    }

    /**
     * @return {number}
     */
    top() {
        return this.values[this.values.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.sorted[this.sorted.length - 1];
    }
}
