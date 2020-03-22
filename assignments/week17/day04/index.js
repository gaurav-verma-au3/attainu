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
    if (this.root === null) this.root = newNode;
    else {
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(node, newNode) {
    if (node.data >= newNode.data) {
      if (node.left == null) node.left = newNode;
      else this.insertNewNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNewNode(node.right, newNode);
    }
  }

  delete(root, value) {
    if (root == null) return null;
    if (root.data > value) {
      root.left = this.delete(root.left, value);
    } else if (root.data < value) {
      root.right = this.delete(root.right, value);
    } else {
      if (root.left == null && root.right == null) {
        root = null;
      } else if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        let minNode = this.findMin(root.right);
        console.log("inside function call : ", minNode.data);
        root.data = minNode.data;
        root.right = this.delete(root.right, minNode.data);
      }
    }
    return root;
  }
  findMin(node) {
    if (node == null) return;
    while (node.left) {
      node = node.left;
    }
    console.log(node.data);
    return node;
  }

  findElement(data) {
    let node = this.root;
    let index = 0;
    if (node == null) return;
    else {
      while (node) {
        if (node.data == data) {
          return "Data : " + node.data + " || Found at Index : " + index;
        } else if (node.data >= data) {
          node = node.left;
        } else if (node.data < data) {
          node = node.right;
        }
        index++;
      }
      return "Value Not Found";
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

let arr = [
  1,
  10,
  2,
  4,
  9,
  8,
  7,
  13,
  18,
  17,
  5,
  21,
  12,
  16,
  23,
  20,
  6,
  0,
  22,
  14,
  24,
  15,
  3,
  11,
  19
];

for (i = 0; i < arr.length; i++) {
  bstObj.insert(arr[i]);
}
bstObj.root = bstObj.delete(bstObj.root, 3);
bstObj.inorder(bstObj.root);
console.log(bstObj.findElement(5));
