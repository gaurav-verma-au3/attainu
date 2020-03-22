// Construct Single Node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addFirst(value) {
    // add the new node in the beginning of the list
    this.head = new Node(value, this.head);
    this.tail = this.head
    this.size++;
  }
  addEnd(value) {
    // add the new node in the end of the list
    let node = new Node(value);
    let current;
    // If empty, make head
    if (!this.head) {
      this.head = node;
      this.tail = this.head
      this.size++;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node
      this.tail = node;
      this.size++
    }
  }

  addMiddle(value) {
    // add the element in the middle of the list
    const index = Math.floor(this.size / 2)
    const node = new Node(value);
    //  If index is out of range
    if (index < 0 && index > this.size) {
      return;
    }
    //if mid is first
    if (index === 0) {
      this.head = node
      this.tail = this.head
      this.size++
      return;
    }
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  deleteFirst() {
    // delete the first node in the list
    let current = this.head;
    this.head = current.next;
    this.size--;
  }
  deleteEnd() {
    // delete the last node in the list
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next
    }
    previous.next = null;
    this.tail = previous
    this.size--;
  }
  deleteMiddle() {
    // delete the node in the middle
    const index = Math.floor(this.size / 2)
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }
  searchElement(key) {
    // Given an element k, search for the element in the list and return true/false
    let current = this.head;
    let flag = false
    while (current) {
      if (current.value == key) {
        flag = true
        break
      }
      current = current.next;
    }
    console.log("search flag is :", flag)
  }
  print() {
    let current = this.head;
    console.log("size : ", this.size)
    while (current) {
      console.log(current.value);
      current = current.next;
    }

  }
}

const list = new LinkedList();

// list.addFirst(1);
// list.addEnd(2);
// list.addEnd(3);
// list.addEnd(4);
// list.addEnd(5);
// list.addMiddle(0)
// list.deleteFirst()
// list.deleteEnd()
// list.deleteMiddle()
// list.searchElement(4)

list.print();