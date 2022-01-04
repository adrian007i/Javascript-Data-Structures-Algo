function  fib() {
    let fibs = {}
    return function f (n) {

        if(n<2)
            return n;

        else if (n in fibs){
            return fibs[n];
        }

        fibs [n] = f(n-1)+f(n-2) 
        return fibs [n]
        
    } 
}
const fibClass = fib();
console.log(fibClass(20));