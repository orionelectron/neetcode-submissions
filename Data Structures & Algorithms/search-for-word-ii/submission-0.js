class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.word = "";
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
        nextNode.word = word;

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
        if (nextNode.isEnd) {
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
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    constructor() {
        this.trie = new PrefixTree()
    }

    dfs(board, i, j, trieNode, foundList) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return;
        }

        const ch = board[i][j]

        if (ch == "#") {
            return;
        }


        if (!trieNode.children[ch]) {
            return;
        }

        board[i][j] = "#"

        const nextNode = trieNode.children[ch];

        if (nextNode.isEnd) {
            foundList.add(nextNode.word);
        }



        this.dfs(board, i - 1, j, nextNode, foundList);
        this.dfs(board, i, j - 1, nextNode, foundList);
        this.dfs(board, i + 1, j, nextNode, foundList);
        this.dfs(board, i, j + 1, nextNode, foundList);

        board[i][j] = ch;


    }

    findWords(board, words) {

        let foundList = new Set()

        for (let i = 0; i < words.length; i++) {
            this.trie.insert(words[i]);
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                this.dfs(board, i, j, this.trie.root, foundList);
            }
        }

        return [...foundList];
    }
}
