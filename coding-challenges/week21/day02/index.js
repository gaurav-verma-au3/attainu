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
        this.size = 0;
    }
    addFirst(value) {
        // add the new node in the beginning of the list
        this.head = new Node(value, this.head);
        this.size++;
    }
    addEnd(value) {
        // add the new node in the end of the list
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
        this.size++;
    }
    addMiddle(value) {
        // add the element in the middle of the list
        const index = Math.floor(this.size / 2)
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }
        //if mid is first
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        const node = new Node(value);
        let current,
            previous;
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
        let count = 0;
        while (current.next) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
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
        while (current.next) {
            if (current.value == key) {
                flag = true
                break
            }
            current = current.next;
        }
        console.log(flag)
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    findMid() {
        let fast = this.head
        let slow = this.head
        if (fast != null) {
            while (fast && fast.next != null) {
                slow = slow.next
                fast = fast.next.next
            }
            return slow.value
        }
    }

    reverseList(head) {
        let curr = head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    };

    isPalindrome() {

        let fast = this.head
        let slow = this.head

        if (fast != null) {
            while (fast && fast.next != null) {
                slow = slow.next
                fast = fast.next.next
            }
        }
        let secondHead = slow.next
        let secondList = this.reverseList(secondHead)
        slow.next = secondList

        let first = this.head
        let second = slow.next

        let flag = true
        while (second && flag) {
            if (first.value === second.value) {
                flag = true
            } else flag = false
            first = first.next
            second = second.next
        }
        secondList = this.reverseList(secondList)
        slow.next = secondList
        return flag
    }

}

const list = new LinkedList();

list.addEnd(1);
list.addEnd(2);
list.addEnd(3);
list.addEnd(4);
list.addEnd(5);
list.addEnd(6);
list.addEnd(7);
list.addEnd(8);
list.addEnd(9);
list.addEnd(10);
list.addEnd(9);
list.addEnd(8);
list.addEnd(7);
list.addEnd(6);
list.addEnd(5);
list.addEnd(4);
list.addEnd(3);
list.addEnd(2);
list.addEnd(1);


//list.addEnd(2);




//list.addEnd(11);


// list.deleteFirst() list.deleteEnd() list.deleteMiddle()

//list.print();
console.log(list.isPalindrome())
//console.log(list.reverseList(list.head.next))
list.print()