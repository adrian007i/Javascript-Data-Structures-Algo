//https://leetcode.com/problems/climbing-stairs/

function climbStairs(n) { 
    let stairsAmt = {}

    function f(n){

        if(n < 4)
            return n;
        else if (n in stairsAmt){
            return stairsAmt[n];
        }
        stairsAmt[n] = f(n-1) + f(n-2)
        return stairsAmt[n];
        
    }
    
    return f(n)
} 
console.log(climbStairs(7));
