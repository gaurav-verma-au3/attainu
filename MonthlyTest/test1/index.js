//problem 1

let subSet = str => {
    let n = str.length;
    let curLen = 0; // length of current substring 
    let maxLen = 1; // result 
    let prev; // previous index 
    let visited = {}

    for (let i = 0; i < n; i++)
        visited[i] = -1;
    visited[str[0]] = 0;

    for (let i = 1; i < n; i++) {
        prev = visited[str[i]];

        if (prev == -1 || i - curLen > prev)
            curLen++;

        else {
            if (curLen > maxLen)
                maxLen = curLen;

            curLen = i - prev;
        }
        visited[str[i]] = i;
    }
    if (curLen > maxLen)
        maxLen = curLen;

    return maxLen;
}

//PROBLEM 2
let swap = (arr, first, second) => {
    [arr[first], arr[second]] = [arr[second], arr[first]]
}


function dnf(arr) {

    let low = 0;
    let mid = 0;
    let high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, mid++, low++)
        } else if (arr[mid] === 2) {
            swap(arr, mid, high--)
        } else if (arr[mid] === 1) {
            mid++
        }
    }
    return arr
}



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

    //problem 3
    zigzag() {

        let root = this.root
        if (!root) return [];

        const result = [];
        let level = [];
        let stack1 = [root];
        let stack2 = [];
        let flag = true;
        while (stack1.length > 0) {
            let node = stack1.pop();
            let { left, right } = node;

            level.push(node.data);

            if (flag) {
                if (left) stack2.push(left);
                if (right) stack2.push(right);
            } else {
                if (right) stack2.push(right);
                if (left) stack2.push(left);
            }

            if (stack1.length === 0) {
                result.push(level);
                flag = !flag;
                stack1 = stack2;
                stack2 = [];
                level = [];
            }
        }
        return result;
    }


    //problem 4
    isPath(arr) {


    }
}


//problem 5
let minJumps = (arr) => {
    let index = 0;
    let Jump = 0;

    while (index < arr.length - 1) {
        let nextMaximumSteps = arr[index];
        let jumps = arr.slice(index + 1, index + nextMaximumSteps + 1);
        let distances = jumps.map((value, index, array) => value - (array.length - index));
        let maxIndex = distances.reduce((iMax, value, i, arr) => value > arr[iMax] ? i : iMax, 0);

        index += 1 + maxIndex;
        Jump++;
    }

    return Jump;
}



//CALL

//PROLEM  1
console.log(subSet("aabccbb"))
console.log(dnf([1, 0, 2, 1, 0]))

let bstObj = new BST();
bstObj.insert(10);
bstObj.insert(11);
bstObj.insert(1);
bstObj.insert(2);
bstObj.insert(3);
bstObj.insert(4);
bstObj.insert(5);
console.log(bstObj.zigzag())
//console.log(bstObj.isPath())
console.log(minJumps([2, 3, 1, 1, 4]))