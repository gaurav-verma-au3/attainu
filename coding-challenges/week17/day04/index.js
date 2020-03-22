class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            this.head = new Node(value, this.head);
        }
    }


    reverse() {

        let first = this.head;
        if (!first) {
            return
        }
        else {
            let second = first.next;
            while (second) {
                let temp = second.next;
                second.next = first;
                first = second;
                second = temp;
            }
            this.head.next = null;
            this.head = first;
            console.log('List Reversed')
        }
    }

    print() {
        let node = this.head;
        if (!node) {
            return
        }
        else {
            while (node) {
                console.log(node.value)
                node = node.next
            }
        }
    }
}

let ll = new LinkedList()

ll.add(3)
ll.add(2)
ll.add(1)
ll.print();
ll.reverse()
ll.print();
