/*
Rotate each node to k places
e.g the start should be kth element, the second should be k+1th element
*/
const rotateRight = function (head, k) {
  if (!head) return head;

  let current = head;
  const arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  for (let i = 1; i <= k; i++) {
    const e = arr.pop();
    arr.unshift(e);
  }
  let node = head;
  for (let i = 0; i < arr.length; i++) {
    node.val = arr[i];
    node = node.next;
  }
  return head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
let current = head;
current.next = new Node(2);
current = current.next;
current.next = new Node(3);
current = current.next;
current.next = new Node(4);
current = current.next;
current.next = new Node(5);

console.log(rotateRight(head, 2));
