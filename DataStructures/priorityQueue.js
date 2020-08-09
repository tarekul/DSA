class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp = () => {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let prntIdx = Math.floor((idx - 1) / 2);
      if (this.values[prntIdx].priority <= this.values[idx].priority) break;

      [this.values[prntIdx], this.values[idx]] = [
        this.values[idx],
        this.values[prntIdx],
      ];

      idx = prntIdx;
    }
  };
  extractMin() {
    if (this.values.length === 1) return this.values.pop();
    //swap first and last element
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    //pop of last element
    const removed = this.values.pop();
    //sink down
    this.sinkDown();
    console.log(removed);
    console.log(this.values);
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[idx];
    const length = this.values.length;
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild <= element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild <= element) ||
          (swap && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue("low fever", 5);
pq.enqueue("fever", 3);
pq.enqueue("concussion", 2);
pq.enqueue("accident", 1);
pq.enqueue("minor cut", 4);
pq.extractMin();
//console.log(pq.values);
