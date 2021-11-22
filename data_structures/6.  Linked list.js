// array vs linked list
// - array are faster at reading
// - inserts in middle are faster

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList { 
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    append(value){ 
        this.tail.next = new Node(value)
        this.tail = this.tail.next;
        this.length++;
        return this;


    }

    prepend(value){
        let myNode = new Node(value) 
        myNode.next = this.head;
        this.head = myNode;
        this.length++;
        return this;
    }

    insert(index, value){

        // index is bigger than the list
        if(index >= this.length-1){
            this.append(value) 
            return this;
        }
        // index is zero
        else if(index == 0){
            this.prepend(value)
        }


        let previous = this.head; 
        let NewNode = new Node(value); 
        let i = 1;

        while(i != index ){   
            previous = previous.next;
            i++;
        }
        NewNode.next = previous.next;
        previous.next = NewNode; 
        this.length++;
        
    }

    remove(index){

        if(index > this.length-1){
            return this;
        }else if (index == 0){
            this.length--;
            this.head = this.head.next;
            return this;
        }

        let i = 1 ;
        let current = this.head;

        while(i != index){
            current = current.next;
            i++
        } 

        console.log(this.head)
        console.log(current)
        current.next = current.next.next;
        console.log(this.head)
        this.length--;
    }

    print(){

        let tmpHead = this.head;

        while(tmpHead != null ){
            console.log(tmpHead.value + "----->");
            tmpHead = tmpHead.next;
            
        }

    }

    reverse(){
        if(this.length === 0 || this.length === 1)
            return 0;

        let prev = this.head;
        let curr = this.head.next;
        let future = curr.next;
        
        this.head.next = null;
 
        while(future != null){ 
            curr.next = prev;
            prev = curr;
            curr= future;
            future = future.next; 
            
        }
        curr.next = prev;
        this.head = curr;
    }
}

const mylist = new LinkedList (0);
mylist.append(1)
mylist.append(2)
// mylist.append(3)
// mylist.append(4)
// mylist.append(5)
// mylist.prepend(-11)
// mylist.insert(10, 99)
//  mylist.remove(2)
// mylist.print()
mylist.reverse()
mylist.print()
 
