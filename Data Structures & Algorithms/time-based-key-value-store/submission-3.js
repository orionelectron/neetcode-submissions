class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let values = this.keyStore.get(key);

        if (!values) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push({
            timestamp, value
        });



        return null;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);

        if (!values) {
            return "";
        }

        let left = 0;
        let right = values.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (values[mid].timestamp === timestamp) {
                return values[mid].value;
            }

            if (values[mid].timestamp < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return right >= 0 ? values[right].value : "";
    }
}