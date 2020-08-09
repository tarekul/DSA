class minBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let prntIdx = Math.floor((idx - 1) / 2);
      if (this.values[prntIdx] <= this.values[idx]) break;

      [this.values[prntIdx], this.values[idx]] = [
        this.values[idx],
        this.values[prntIdx],
      ];

      idx = prntIdx;
    }
  }
  extractmin() {
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
        if (leftChild > element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
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

const heap = new minBinaryHeap();
heap.insert(100);
heap.insert(19);
heap.insert(36);
heap.insert(17);
heap.insert(12);
heap.insert(25);
heap.insert(5);
heap.insert(9);
heap.insert(15);
heap.insert(18);
console.log(heap.values);
//heap.extractMin();
