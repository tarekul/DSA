/*
Rotate each node to k places
e.g the start should be kth element, the second should be k+1th element
*/
const rotateRight = function (head, k) {
  if (!head) return head;

  for (let i = 0; i < k; i++) {
    let tail = head;
    let beforeTail = head;
    while (tail.next) {
      beforeTail = tail;
      tail = tail.next;
    }
    tail.next = head;
    head = tail;
    beforeTail.next = null;
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
