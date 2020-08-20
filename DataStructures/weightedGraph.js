class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //O(1)
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }
  addEdge(v1, v2, w) {
    //O(1)
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    this.adjacencyList[v1].push({ node: v2, w });

    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v2].push({ node: v1, w });

    return this;
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    for (let vertex in this.adjacencyList) {
      //set intial state
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        const result = [smallest];
        while (previous[smallest]) {
          result.push(previous[smallest]);
          smallest = previous[smallest];
        }
        return result.reverse();
      }
      for (let vertex in this.adjacencyList[smallest]) {
        const neighbor = this.adjacencyList[smallest][vertex];
        if (distances[smallest] + neighbor.w < distances[neighbor.node]) {
          distances[neighbor.node] = distances[smallest] + neighbor.w;
          nodes.enqueue(neighbor.node, distances[smallest] + neighbor.w);
          previous[neighbor.node] = smallest;
        }
      }
    }
  }
}

// Naive Priority Q
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue = () => this.values.shift();
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

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
  dequeue() {
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

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

console.log(wg.adjacencyList);
console.log(wg.dijkstra("A", "E"));

// wg.addEdge("A", "B", 2);
// wg.addEdge("B", "C", 3);
// wg.addEdge("B", "E", 2);
// wg.addEdge("C", "D", 1);
// console.log(wg.dijkstra("A", "D"));
