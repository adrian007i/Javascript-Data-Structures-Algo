 // 3 rules
// identify base case
// identify recursive case
// get closer and closer and return when you need.  Usually you have 2 returns 

// -------------------------------------------when to use recursion----------------------------------
// - every time you are using a tree or converting something into a tree, consider recurion
// - Problem can be divided into smaller instances of the same problem
// - each instance of the problem is identical in nature
// - the solution of each problem can be combined to create the overall problem


// ------------------------------------------- Recursion vs Loops-------------------------------------
// PROS
//  - easier to write/ more readable code
//  - good for traversing data structures where you dont know how deep it goes or how many level down you need to drill through


// CONS
//  - CAN BE SLOWER
//  - stack overflow
//  - have to keep function in memory until we can discard of it

let counter = 0 ;

function inception (){
    debugger;
    console.log(counter);
    if ( counter == 10){
        return "finished"
    }
 
    return inception(counter++)
}
// console.log(inception());

// O(N)
function factorialRecursive (number){

    if (number === 1 || number === 0)
        return 1;
    
    return number * factorialRecursive (number -1)
}
// O(N)
function factorialLoop (number){
    let factorial = 1
    
    for(let i=2 ; i <= number; i++){ 
        factorial *= i;
    }
    return factorial;
}

// O(N+N)
function fibonacciRecursive (number){

    if (number === 0)
        return 0;
    else if (number === 1 || number === 2)
        return 1;

    
    return  fibonacciRecursive (number -1) + fibonacciRecursive (number -2);
}

// O(2 ^ N) Exponential
function fibonacciLoop (number){

    if(number === 0)
        return 0;
    else if (number === 1 || number === 2)
        return 1;
       
    let prev1 = 1;
    let prev2 = 1; 
    let tmp_new;
    
    for(let i=3 ; i <= number; i++){  
        tmp_new = prev1 + prev2;
        prev1 = prev2;
        prev2 = tmp_new;
        
    }
    return tmp_new;
}

// console.log(fibonacciLoop (11))


function reverseString(str){
    if(str.length === 1) 
        return str; 
    else if(str.length === 0 )
        return "Invalid Input"
    
    return  str.slice(-1) + reverseString(str.slice(0, -1))
    
}
 console.log(reverseString(''));
 
 