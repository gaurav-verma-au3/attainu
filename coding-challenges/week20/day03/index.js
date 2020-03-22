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
        this.length = 0;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            this.length += 1
        }
        else {
            this.insertNewNode(this.root, newNode);
            this.length += 1
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
    BFS(root) {
        let queue = [root]
        let result = []

        while (queue.length) {
            let curr = queue.shift()
            result.push(curr.data)


            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }

        }

        return result
    }

    DFS(root) {
        let stack = [root]
        let result = []
        while (stack.length) {
            let curr = stack.pop()
            result.push(curr.data)

            if (curr.right) {
                stack.push(curr.right)
            }

            if (curr.left) {
                stack.push(curr.left)
            }
        }
        return result
    }


    levelOrderSuccessor(key) {

        let level = this.BFS(this.root)
        let index = level.indexOf(key)
        return level[index + 1]
    }
}


let bstObj = new BST();

/*
               15
              / \
            /    \
          /       \
        10        20
        /\        /\ 
      /   \     /   \
    8     12   18   25
*/


bstObj.insert(15);
bstObj.insert(10);
bstObj.insert(8);
bstObj.insert(12);
bstObj.insert(20);
bstObj.insert(18);
bstObj.insert(25);

console.log(bstObj)
/*
console.log(bstObj.DFS(bstObj.root))

console.log(bstObj.BFS(bstObj.root))



console.log(bstObj.root.data)
console.log(bstObj.root.left.data)
console.log(bstObj.root.right.data)
console.log(bstObj.root.left.left.data)
console.log(bstObj.root.left.right.data)
console.log(bstObj.root.right.left.data)
console.log(bstObj.root.right.right.data)
    */

console.log(bstObj.levelOrderSuccessor(20))