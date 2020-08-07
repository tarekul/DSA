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
