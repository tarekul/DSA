class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /*
  Time complexity of insert, and find
  Worse Case  Avg Case  Best Case
    O(n)      O(log n)    O(1)  

  The worse case is O(n) is because if tree has nodes ONLY on one side from the root, such as
    1 
      2
        3
          4
            5
              6
                7
  than you have to check at worse case all the nodes to find 7.
  Avg case is O(log n) because if you have balanced tree than you are checking from root node to the leaf node
  and that at most will be log (n) checks. If you have 32 nodes than you will have to check at most 5 times to find node.
  */
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      const findEmptySpot = (current, newNode) => {
        if (newNode.val <= current.val) {
          if (!current.left) current.left = newNode;
          else findEmptySpot(current.left, newNode);
        } else if (newNode.val > current.val) {
          if (!current.right) current.right = newNode;
          else findEmptySpot(current.right, newNode);
        }
      };
      findEmptySpot(this.root, newNode);
      return this;
    }
  }
  find(val, node = this.root) {
    if (!node) return false;
    else if (node.val === val) return true;
    else if (val <= node.val) return this.find(val, node.left);
    else if (val > node.val) return this.find(val, node.right);
  }

  bfs() {
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      const out = queue.pop();
      result.push(out.val);
      if (out.left) queue.unshift(out.left);
      if (out.right) queue.unshift(out.right);
    }
    return result;
  }
}

const bst = new BST();
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(2);
console.log(bst.bfs());
