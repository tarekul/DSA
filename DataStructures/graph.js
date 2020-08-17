class Graph {
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
  addEdge(v1, v2) {
    //O(1)
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    this.adjacencyList[v1].push(v2);

    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v2].push(v1);

    return this;
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
    return this;
  }
  removeVertex(vertex) {
    for (let v in this.adjacencyList) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
  dfs_recursive(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);
      for (let edge of this.adjacencyList[vertex]) {
        if (!visited[edge]) dfs(edge);
      }
    };
    dfs(vertex);
    console.log(result);
    return result;
  }
  dfs_iterative(vertex) {
    let s = [];
    const visited = {};
    const result = [];
    s.push(vertex);
    while (s.length > 0) {
      const v = s.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        for (let edge of this.adjacencyList[v]) s.push(edge);
      }
    }
    console.log(result);
    return result;
  }
  bfs(vertex) {
    const result = [];
    const visited = {};
    const q = [];
    q.push(vertex);
    while (q.length) {
      const v = q.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        for (let edge of this.adjacencyList[v]) q.unshift(edge);
      }
    }
    console.log(result);
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("F", "E");
g.dfs_recursive("A");
g.dfs_iterative("A");
g.bfs("A");
