class Heap {
    constructor() {
        this.heap = [];
    }
    swap(x, y) {
        let temp = this.heap[x]
        this.heap[x] = this.heap[y]
        this.heap[y] = temp

    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2)
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex)
            } else {
                break;
            }
            currentIndex = parentIndex
        }
    }

    remove() {
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
    }

    heapifyDown() {
        let currentIndex = 0;
        let swapIndex;
        let length = this.heap.length - 1
        while (currentIndex < length) {
            let left = 2 * currentIndex + 1
            let right = 2 * currentIndex + 2
            if (right <= length && this.heap[left] < this.heap[right]) swapIndex = right
            else if (left <= length) swapIndex = left
            else break
            if (this.heap[currentIndex] < this.heap[swapIndex]) this.swap(currentIndex, swapIndex);
            else break
            currentIndex = swapIndex;
        }
    }
}

let bt = new Heap()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.remove()


console.log(bt)