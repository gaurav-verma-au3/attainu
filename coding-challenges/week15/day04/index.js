class Stack {
    constructor() {
        this.elem = [];
    }

    push(input) {
        this.elem.push(input)
    }

    pop() {
        if (this.elem.length === 0) console.log("Stack is empty");
        else return this.elem.pop()
    }
}

let stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(10);
stack.push(50);
stack.push(55);
stack.push(28);
stack.push(44);


//console.log(stack)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log(stack)
