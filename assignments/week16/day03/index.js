// Construct Single Node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      node.next = null;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  pop() {
    let current = this.head;
    let previous;
    let count = 0;
    while (current.next) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(value) {

    let node = new Node(value);
    let current;
    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  dequeue() {
    let current = this.head;
    this.head = current.next;
  }
}

let listStack = new Stack()
let listQueue = new Queue()
////////////////////////////////
listStack.push(1)
listStack.push(2)
listStack.push(3)
listStack.push(4)
listStack.pop()
console.log(listStack)
//////////////////////////////
///////////////////////////////
listQueue.enqueue(1)
listQueue.enqueue(2)
listQueue.enqueue(3)
listQueue.enqueue(4)
listQueue.dequeue()
console.log(listQueue)
