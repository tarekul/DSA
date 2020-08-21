class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
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
  pop() {
    if (!this.head) return undefined;
    let newTail = this.head;
    let current = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return oldHead;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    else if (idx === this.length - 1) return this.pop();

    const prevNode = this.get(idx - 1);
    const currentNode = this.get(idx);

    prevNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }
}

var list = new SinglyLinkedList();
list.push("hello");
list.push("bye");
list.push("sigh");
list.push("hmm");
list.push("zzzzz");
list.push("meh");
console.log(list.pop().val);
console.log(list.shift().val);
console.log(list.remove(1).val);
console.log(list);
