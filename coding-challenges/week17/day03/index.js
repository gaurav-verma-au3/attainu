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
    createLoop() {
        let node = this.head
        let node2 = this.head
        let midLink
        while (node.next !== null) {
            if (node.value == 2) {
                midLink = node
            }
            node = node.next
        }
        while (node2.next) {
            if (node2.next.next == null) {
                node2.next.next = midLink
                break
            }
            else {
                node2 = node2.next
            }
        }
    }

    checkLoop() {
        let fast = this.head
        let slow = this.head
        while (fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) return true
        }
        return false
    }
    print() {
        let node = this.head
        while (node) {
            console.log(node.value)
            node = node.next
        }
    }

}

let ll = new LinkedList()

ll.add(5)
ll.add(4)
ll.add(3)
ll.add(2)
ll.add(1)
//ll.createLoop()
console.log(ll.checkLoop())
