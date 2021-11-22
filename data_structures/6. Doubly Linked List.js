// 2 ponters per node
// [1,2,3,4,5]
// Single vs Double
// single faster insert and delete
// doubly is faster for triversal, requires more memory

//  1 <--> 2 <--> 3 -> 4 -> 5 -> null 


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        let new_node = new Node(value);
        this.length++;
        // new_node.previous = tail;

        if (this.head === null)
            this.head = new_node;
        else {
            new_node.previous = this.tail;
            this.tail.next = new_node
        }


        this.tail = new_node
    }

    prepend(value) {
        this.length++;
        let new_node = new Node(value);
        this.head.previous = new_node;
        new_node.next = this.head;
        this.head = new_node;

    }

    lookup(index) {

        // iterate from head
        if (index < Math.ceil(this.length / 2)) {
            let current = this.head;
            let i = 0;

            while (current != null) {
                if (i == index)
                    return current.value;
                current = current.next;
                i++;
            } 

        // iterate from tail
        } else {
            let current = this.tail;
            let i = this.length-1;

            while(current != null){
                if(index == i)
                    return current.value;
                current = current.previous;
                i--;
            }

        }
    }

    remove_first(){
        this.head = this.head.next;
        this.head.previous = null;
    }

    remove_last(){
        this.tail.previous.next = null
        this.tail = this.tail.previous;
    }

    remove_index(index){  

        if(index > 0)
            this.length--;
        else
            return;

        if(index == 0){ 
            this.head = this.head.next;
            
            if(this.head != null)
             this.head.previous = null;             
            return
        }
        else if(index == this.length - 1){  
            this.tail.previous.next = null;
            this.tail = this.tail.previous;
            return;
        } 
 
        let current = this.head;
        let i=0;

        while(current != null){ 
            if(index == i){
                current.previous.next = current.next
                current.next.previous=current.previous;
                return;
                
            } 
            i++
            current = current.next;
        } 
        
    }

    print() {

        let current = this.head;

        while (current != null) {
            console.log(current.value);
            
            
            current = current.next
        }
    }

    reverse_print() {

        let current = this.tail;

        while (current != null) {
            console.log(current.value);
            current = current.previous
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(0)
// list.reverse_print()
// console.log(list.lookup(6));

list.remove_index(1)
list.print()
console.log(list.head.next);