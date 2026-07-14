class ListNode{
    constructor(key=-1, val=-1, prev=null, next=null){
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;

        // create left dummy
        this.left = new ListNode();

        // create right dummy
        this.right = new ListNode();
        // connect them
        this.left.next = this.right;
        this.right.prev = this.left;
        this.map = new Map();
    }

    remove(node) {
        const nodePrev = node.prev;
        const nodeNext = node.next;

        nodePrev.next = nodeNext;
        nodeNext.prev = nodePrev;

        node.prev = null;
        node.next = null;
    }

    insert(node) {
        const rightPrev = this.right.prev;
        rightPrev.next = node;
        node.prev = rightPrev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const keyNode = this.map.get(key);
        if (!keyNode) {
            return -1;
        } else {
            this.remove(keyNode);
            this.insert(keyNode);

            return keyNode.val;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let keyNode = this.map.get(key);

        if (keyNode) {
            keyNode.val = value;
            this.remove(keyNode);
            this.insert(keyNode);
            return;
        } else {
            keyNode = new ListNode(key, value);
            this.insert(keyNode);
            this.map.set(key, keyNode);
        }

        if (this.map.size > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}
