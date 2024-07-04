class MinHeap{
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
        while(i > 0 && this.heap[i] < this.heap[this.getParent(i)]){
            this.swap(i, this.getParent(i))
            i = this.getParent(i)
        }
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
            const left = this.leftChild(i)
            const right = this.rightChild(i)
            let smallest = i

            if(left < length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }
            if(right < length && this.heap[left] < this.heap[smallest]){
                smallest = right
            }
            if(smallest === i){
                break
            }
            this.swap(i , smallest)
            i = smallest
        }
    }
}

const heapObj = new MinHeap() 

heapObj.insert(15)
heapObj.insert(3)
heapObj.insert(78)
heapObj.insert(96)
heapObj.insert(41)
heapObj.insert(1)


console.log(heapObj); 
