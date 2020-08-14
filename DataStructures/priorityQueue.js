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
    return this.bubbleUp();
  }
  bubbleUp = () => {
    let idx = this.values.length - 1;
    const child = this.values[idx];
    while (idx > 0) {
      const pIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[pIdx];
      if (child.priority <= parent.priority) {
        const temp = this.values[pIdx];
        this.values[pIdx] = this.values[idx];
        this.values[idx] = temp;
        idx = pIdx;
      } else break;
    }
    return this.values;
  };
  extractMin() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const min = this.values.pop();
    this.sinkDown();
    return min;
  }
  sinkDown() {
    let idx = 0;
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      const leftChild = this.values[leftIdx];
      const rightChild = this.values[rightIdx];
      const node = this.values[idx];
      let swap;
      if (node.priority > leftChild.priority) swap = leftIdx;
      else if (
        (!swap && node.priority > rightChild.priority) ||
        (swap && rightChild.priority < leftChild.priority)
      ) {
        swap = rightIdx;
      }

      if (!swap) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
    }
    return this.values;
  }
}

const pq = new PriorityQueue();
pq.enqueue("low fever", 5);
pq.enqueue("fever", 3);
pq.enqueue("concussion", 2);
pq.enqueue("accident", 1);
pq.enqueue("minor cut", 4);
console.log(pq.extractMin());
console.log(pq.extractMin());
console.log(pq.values);
