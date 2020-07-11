/*
TO-DO Methods: 
  push ✔️
  pop ✔️
  shift ✔️
  unshift 
  get 
  set 
  insert 
  remove 
  reverse 
*/

class Node {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    else if (this.length == 0) {
      this.head = null;
      this.tail = null;
    } else {
      const oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return this;
  }

  unshift(val) {}

  get(idx) {}

  set(idx, val) {}

  insert(idx, val) {}

  remove(idx) {}

  reverse() {}
}
