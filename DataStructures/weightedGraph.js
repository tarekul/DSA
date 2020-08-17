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
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addEdge("A", "B", 9);
wg.addEdge("A", "C", 5);
wg.addEdge("B", "C", 7);
console.log(wg.adjacencyList);
