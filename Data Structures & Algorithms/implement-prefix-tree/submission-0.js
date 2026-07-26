class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let nextNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!nextNode.children[word[i]]) {
                nextNode.children[word[i]] = new TrieNode();
                nextNode = nextNode.children[word[i]];
            } else {
                nextNode = nextNode.children[word[i]];
                
            }
        }
        nextNode.isEnd = true;

        //console.log(nextNode);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let nextNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!nextNode.children[word[i]]) {
                return false;
            }
            nextNode = nextNode.children[word[i]];
        }
        if(nextNode.isEnd){
            return true;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let nextNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!nextNode.children[prefix[i]]) {
                return false;
            }
            nextNode = nextNode.children[prefix[i]];
        }
        return true;
    }
}