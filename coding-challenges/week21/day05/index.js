class Node {
    constructor(data, left, right, next) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else {
            this.insertNewNode(this.root, newNode);
        }
    }
    insertNewNode(node, newNode) {
        if (node.data >= newNode.data) {
            if (node.left == null)
                node.left = newNode;
            else
                this.insertNewNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNewNode(node.right, newNode);
        }
    }
    findMin() {
        let node = this.root;
        if (node == null)
            return;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    findElement(data) {
        let node = this.root;
        if (node == null) return;
        else {
            while (node) {
                if (node.data == data) {
                    return node.data
                }
                else if (node.data >= data) {
                    node = node.left
                }
                else if (node.data < data) {
                    node = node.right
                }
            }
            return "Value Not Found"
        }
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log("val: ", node.data);
            this.inorder(node.right);
        }
    }

    /*
                    3
                   /\
                 /   \
                2     5
              /      /\
             1      4  7
    */


    connectLevelOrder(root) {


        if (!root) {
            return "pass a valid node as an argument to function";
        }
        let first = root;
        while (first !== null) {
            let curr = first;
            let node = new Node(0);
            let prev = node;
            while (curr !== null) {
                if (curr.left !== null) {
                    prev.next = curr.left;
                    prev = curr.left;
                }
                if (curr.right !== null) {
                    prev.next = curr.right;
                    prev = curr.right;
                }
                curr = curr.next;
            }
            first = node.next;
        }

        return root
    };
}

let bstObj = new BST();
bstObj.insert(3);
bstObj.insert(2);
bstObj.insert(5);
bstObj.insert(1);
bstObj.insert(4);
bstObj.insert(7);


console.log(bstObj.connectLevelOrder(bstObj.root))
