//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) { 
    if(x < 0 )
        return false;
    
    if(x < 10)
        return true;
    
    let stack = []
    
    while(x > 0){
        stack.push(x % 10);
        x = parseInt(x / 10);
    }
    let half = Math.floor(stack.length/2)
    
    for (let i = 0; i < half ; i++) {
        if(stack[i] != stack[stack.length - i -1])
            return false; 
    }
    return true;
};