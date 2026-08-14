class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Add a tweet
    add(tweet, timestamp) {
        this.heap.push({ tweet, timestamp });

        let childIndex = this.heap.length - 1;

        // Bubble up
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            // Parent already has a greater/equal timestamp
            if (
                this.heap[parentIndex].timestamp >=
                this.heap[childIndex].timestamp
            ) {
                break;
            }

            // Swap
            [this.heap[parentIndex], this.heap[childIndex]] =
                [this.heap[childIndex], this.heap[parentIndex]];

            childIndex = parentIndex;
        }
    }

    // Get tweet with the latest timestamp without removing it
    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    // Remove and return tweet with the latest timestamp
    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        // Bubble down
        let parentIndex = 0;

        while (true) {
            const leftChild = 2 * parentIndex + 1;
            const rightChild = 2 * parentIndex + 2;

            let largest = parentIndex;

            if (
                leftChild < this.heap.length &&
                this.heap[leftChild].timestamp >
                this.heap[largest].timestamp
            ) {
                largest = leftChild;
            }

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild].timestamp >
                this.heap[largest].timestamp
            ) {
                largest = rightChild;
            }

            // Parent is already the largest
            if (largest === parentIndex) {
                break;
            }

            [this.heap[parentIndex], this.heap[largest]] =
                [this.heap[largest], this.heap[parentIndex]];

            parentIndex = largest;
        }

        return max;
    }

    size() {
        return this.heap.length;
    }
}

class Twitter {
    constructor() {
        this.userFeedMap = {};
        this.userFollowingMap = {};
        this.userFollowersMap = {};
        this.timestamp = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */


    postTweet(userId, tweetId) {
        if (!this.userFeedMap[userId]) {
            this.userFeedMap[userId] = new MaxHeap();
        }

        this.userFeedMap[userId].add(
            { userId, tweetId },
            this.timestamp++
        );
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */

    getTop10Tweets(userId) {
        const newsHeap = this.userFeedMap[userId];

        if (!newsHeap) {
            return [];
        }

        const tempList = [];

        while (tempList.length < 10) {
            const feedItem = newsHeap.remove();

            if (!feedItem) {
                break;
            }

            tempList.push(feedItem);
        }

        tempList.forEach((tempTweet) => {
            newsHeap.add(tempTweet.tweet, tempTweet.timestamp);
        });

        return tempList;
    }


    getNewsFeed(userId) {

        const maxHeap = new MaxHeap();
        let userIds = [userId];
        const followingList = this.userFollowingMap[userId] ? this.userFollowingMap[userId] : [];

        userIds = [...userIds, ...followingList];


        for (let i = 0; i < userIds.length; i++) {
            const uId = userIds[i];

            const top10Tweets = this.getTop10Tweets(uId);

            top10Tweets.forEach((heapTweet) => {
                maxHeap.add(heapTweet.tweet, heapTweet.timestamp)
            })

        }

        let feedCounter = 0;

        const feedList = [];

        while (feedCounter < 10) {
            const feedItem = maxHeap.remove()

            if (!feedItem) {
                break;
            }

            feedList.push(feedItem.tweet.tweetId);
            feedCounter++;

        }


        return feedList;






    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) {
            return;
        }

        if (!this.userFollowingMap[followerId]) {
            this.userFollowingMap[followerId] = [];
        }

        if (!this.userFollowingMap[followerId].includes(followeeId)) {
            this.userFollowingMap[followerId].push(followeeId);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const followingList = this.userFollowingMap[followerId];

        if (!followingList) {
            return;
        }

        this.userFollowingMap[followerId] =
            followingList.filter(id => id !== followeeId);
    }
}
