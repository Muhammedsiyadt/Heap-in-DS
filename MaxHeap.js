class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParent(i){
        return Math.floor((i - 1) / 2)
    }

    leftChild(i){
        return 2 * i + 1
    }

    rightChild(i){
        return 2 * i + 2
    }

    swap(i, j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let i = this.heap.length - 1
        while(i > 0 && this.heap[i] > this.heap[this.getParent(i)]){
            this.swap(i, this.getParent(i))
            i = this.getParent(i)
        }
    }

    pop(){
        return this.extractMax()
    }

    extractMax(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()

        return max
    }

    heapifyDown(){
        let i = 0
        let length = this.heap.length

        while(true){
            let left = this.leftChild(i)
            let right = this.rightChild(i) 
            let largest = i

            if(left < length && this.heap[left] > this.heap[largest]){
                largest = left
            }
            if(right < length && this.heap[right] > this.heap[largest]){
                largest = right
            }
            if(largest === i){
                break
            }
            this.swap(i, largest)
            i = largest
        }
    }
}

const Heap = new MaxHeap()

Heap.insert(48)
Heap.insert(4)
Heap.insert(2)
Heap.insert(1)
Heap.insert(22)
Heap.insert(11)

console.log(Heap); 