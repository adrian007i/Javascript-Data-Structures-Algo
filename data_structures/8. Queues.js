class Node {
    constructor(data){
        this.data =  data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last=null;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(!this.first){
            this.first = newNode;

        }else{
            this.last.next = newNode;
        }
        
        this.last = newNode;

    }

    dequeue(){
        const returnValue = this.first;
        if(!returnValue){
            return null;
        }
        if(!returnValue.next){
            this.last = null;
        }

        this.first = this.first.next;
        return returnValue;
    }

    peek(){
        return this.first.data;
    }
}

const que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);

console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que);