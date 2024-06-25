class Minheap{
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
        while(i > 0 && this.heap[i] < this.heap[this.getParent(i)])
            this.swap(i, this.getParent(i))
            i = this.getParent(i)  
    }

    pop(){
        return this.extractMin()
    } 

    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop() 

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }

    heapifyDown(){
        let i = 0
        let length = this.heap.length 

        while(true){
            let left = this.leftChild(i)
            let right = this.rightChild(i)
            let smallest = i

            if(left < length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }
            if(right < length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }
            if(smallest === i) break; 
            this.swap(i, smallest)
            i = smallest
        }  
    }

}

const Heap = new Minheap()

console.log(Heap);

Heap.insert(54) 
Heap.insert(78)
Heap.insert(3)
Heap.insert(12)
Heap.insert(35)
Heap.insert(99)
console.log(Heap);
console.log('After removed....');
Heap.pop() 
console.log(Heap);
