class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
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
}

let bstObj = new BST();
bstObj.insert(50);
bstObj.insert(51);
bstObj.insert(53);
bstObj.insert(54);
bstObj.inorder(bstObj.root);
console.log(bstObj.findMin())
console.log(bstObj.findElement(9))