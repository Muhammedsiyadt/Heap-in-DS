class minHeap {
    constructor(){
        this.heap = []
    }

    parent(i){
        return Math.floor((i - 1) / 2)
    }

    leftChild(i){
        return 2 * i + 1
    }

    rightChild(i){
        return 2 * i + 2
    }

    swap(i , j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]] 
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyUp(){
        let i = this.heap.length - 1
        while(i > 0 && this.heap[i] < this.heap[this.parent(i)]){
            this.swap(i , this.parent(i))
             i = this.parent(i)
        }
    }

    pop(){
        if(this.heap.length == 0 ) return null
        if(this.heap.length === 1) return this.heap.pop()

        this.heap[0] = this.heap.pop() 
        this.heapifyDown()
    }

    heapifyDown(){
        let i = 0
        let length = this.heap.length

        while(true){
            let left  = this.leftChild(i)
            let right = this.rightChild(i)
            let smallest = i

            if(left < length && this.heap[left] < this.heap[this.parent(i)]){
                smallest = left
            }else if(right < length && this.heap[right] < this.heap[this.parent(i)]){
                smallest = right
            }

            if(smallest == i) break

            this.swap(i , smallest)
            i = smallest 
        }
    }
}

const Heap  = new minHeap()

Heap.insert(48)
Heap.insert(4)
Heap.insert(2)
Heap.insert(1)
Heap.insert(22)
Heap.insert(11)

console.log(Heap); 

console.log('Removed...');

Heap.pop()

console.log(Heap); 