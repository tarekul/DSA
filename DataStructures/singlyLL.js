/*
TO-DO Methods: 
  push ✔️
  pop ✔️
  shift ✔️
  unshift ✔️
  get ✔️
  set ✔️
  insert ✔️
  remove ✔️
  reverse ✔️
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLL {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(idx, val) {
    var node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    else if (idx === this.length) this.push(val);
    else if (idx === 0) this.unshift(val);
    else {
      const preNode = this.get(idx - 1);
      const newNode = new Node(val);

      newNode.next = preNode.next;
      preNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    else if (idx === this.length - 1) return this.pop();
    else if (idx === 0) return this.shift();

    const preNode = this.get(idx - 1);
    const postNode = preNode.next.next;
    const removeNode = preNode.next;

    preNode.next = postNode;
    this.length--;
    return removeNode;
  }

  reverse() {
    if (!this.head) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLL();
list.push("hello");
list.pop();
// list.push("bye");
// list.push("alvida");
// list.unshift("sigh");
// list.unshift("ok");
// list.remove(2);
console.log(list.head);
