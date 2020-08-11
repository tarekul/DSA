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
  /*
    Breath first is good for trees that are linear or lean to one side because 
    than you are just storing ONE node each time and popping it off

  */
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
  /*
  One example of when pre order can be benefical is when you want to take a list and extract it into a tree
  preorder return in a order that you reconstruct a tree
  */
  pre_dfs() {
    const result = [];
    function traverse(node) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  //inorder gives you the tree values from least to greatest
  in_dfs() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  post_dfs() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
    traverse(this.root);
    return result;
  }
  /*
  Depth first is good when you have a very wide tree. Its not space efficient to use breadth first search
  as you are storing alot of nodes in memory as you go down the tree
  */
  //[10, 6, 3, 8, 15, 20]
  preToTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    const node = new Node(arr[start]);
    let i = start;
    while (i <= end) {
      if (node.val < arr[i]) break;
      i++;
    }

    node.left = this.preToTree(arr, start + 1, i - 1);
    node.right = this.preToTree(arr, i, end);

    return node;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
//console.log(bst.root);
// console.log("breath first search", bst.bfs());
// console.log("preorder", bst.pre_dfs());
// console.log("inorder", bst.in_dfs());
// console.log("postorder", bst.post_dfs());
//console.log(bst.preToTree([10, 6, 3, 8, 15, 20]));

//given a root of a tree determine if tree is a binary search tree
function checkBst(
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (root === null) return true;
  else if (root.val < min) return false;
  else if (root.val > max) return false;

  return (
    checkBst(root.left, min, root.val) && checkBst(root.right, root.val, max)
  );
}

console.log(checkBst(bst.root));
