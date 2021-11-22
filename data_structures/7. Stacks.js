class Node {

    constructor (value){
        this.value =value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null; //tail
        this.bottom = null; // head
        this.length = 0;
    }
    
    push(value){
        const newNode  = new Node(value);
        this.length++;

        if(this.bottom === null){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            newNode.next = this.top;
            this.top= newNode;
        }
    }

    peeks(){
        return this.top;
    }

    pop (){
        if(this.top == null){
            return null;
        }

        if(this.top.next == null)
            this.bottom = null;

        this.length --;
        const data = this.top.value;
        this.top = this.top.next;
        return data;
    }
    
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
console.log(st);
console.log(st.pop());
console.log(st);
console.log(st.pop());
console.log(st);
console.log(st.pop());
console.log(st);
console.log(st.pop());
console.log(st);