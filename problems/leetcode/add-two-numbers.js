// https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
    let returnHead;
    let tracker;
    let remainder = 0;
    
    while(l1 !== null || l2 !== null){
        let first=0,second = 0;
       
        
        if(l1){
            first = l1.val;
            l1 = l1.next;
        }
        
        if(l2){
            second = l2.val;
            l2=l2.next;
        }  
        // 
        let sum = (first+second+remainder)%10;
        remainder = Math.floor((first+second+remainder)/10);
        
        if(!returnHead){
            returnHead = new ListNode(sum); 
        }else{ 
            let tmp = returnHead;
            
            while(tmp.next != null){
                tmp = tmp.next
            }
            tmp.next = new ListNode(sum);
        } 
    }
     
    if(remainder != 0){
        let tmp = returnHead;
            
        while(tmp.next != null){
            tmp = tmp.next
        }
        tmp.next = new ListNode(remainder);
         
    } 
    return returnHead;
};
 