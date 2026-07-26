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
    search(word, node, charIndex = 0) {
        let nextNode = node || this.root;
        for (let i = charIndex; i < word.length; i++) {
            if (word[i] == ".") {
                for (const child of Object.values(nextNode.children)) {
                    if (this.search(word, child, i + 1)) {
                        return true;
                    }
                }
                return false;
            }
            if (!nextNode.children[word[i]]) {
                return false;
            }
            nextNode = nextNode.children[word[i]];
        }
        if (nextNode.isEnd) {
            return true;
        }
        return false;
    }


}

class WordDictionary {
    constructor() {
        this.trie = new PrefixTree();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.trie.insert(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word) {

        return this.trie.search(word)
    }
}