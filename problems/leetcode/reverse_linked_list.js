
// iterative solution
var reverseList = function(head) {
    
    let prev = null;
    let curr = head;
    
    while(curr){
        let remaining_list = curr.next;
        curr.next = prev; 
        prev = curr;
        curr = remaining_list;
    }
    return prev;
    
};

