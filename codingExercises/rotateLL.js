class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  get(idx) {
    if (this.length <= idx) return undefined;

    let current = this.head;
    let currIdx = 0;
    while (currIdx < idx) {
      current = current.next;
      currIdx++;
    }
    return current;
  }
  rotate(k) {
    if (this.length <= 1) return this;

    for (let i = 1; i <= k; i++) {
      let newTail = this.head;
      let newHead = this.head;
      while (newHead.next) {
        newTail = newHead;
        newHead = newHead.next;
      }
      newHead.next = this.head;
      newTail.next = null;
      this.head = newHead;
      this.tail = newTail;
    }
    return this;
  }
}

const sl = new SinglyLinkedList();
sl.push(5).push(10).push(15).push(20);
sl.get(0);
sl.get(1);
sl.get(2);
sl.get(10);
console.log(sl.head);
sl.rotate(2);
console.log(sl.head);
