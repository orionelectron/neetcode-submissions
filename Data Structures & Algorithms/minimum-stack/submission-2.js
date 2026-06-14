class MinStack {
    constructor() {
        this.values = [];
        this.sorted = [];
    }

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

    pop() {
        this.sorted.pop();
        return this.values.pop();
    }

    top() {
        return this.values[this.values.length - 1];
    }

    getMin() {
        return this.sorted[this.sorted.length - 1];
    }
}
