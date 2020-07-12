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
    this.prev = null;
  }
}

class DoublyLL {
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
    let oldTail;
    if (!this.head) return undefined;
    else if (this.length === 1) {
      oldTail = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;

    return oldTail;
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

  unshift(val) {
    var newNode = newNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    else if (idx < Math.floor(this.length / 2)) {
      let current = this.head;
      let counter = 0;
      while (counter != idx) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while (counter != idx) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }

  set(idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    const prevNode = this.get(idx - 1);
    const postNode = prevNode.next;
    const newNode = new Node(val);

    postNode.prev = newNode;
    newNode.next = postNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    else if (idx === 0) this.shift();
    else if (idx === this.length - 1) this.pop();
    else {
      const removeNode = this.get(idx);
      const prevNode = removeNode.prev;
      const postNode = removeNode.next;

      prevNode.next = postNode;
      postNode.prev = prevNode;

      return removeNode;
    }
  }

  reverse() {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    return this;
  }
}

const dlist = new DoublyLL();
dlist.push(1);
dlist.push(2);
dlist.push(3);
dlist.push(4);
dlist.push(5);
dlist.set(2, 10);
dlist.insert(1, 11);
dlist.remove(1);
dlist.reverse();
console.log(dlist.head);
