// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function sumToK(array, k) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
        if(!map[array[i]]){
            map[array[i]] = 1;
        }else{
            map[array[i]]++;
        }
    } 

    for (let i = 0; i < array.length; i++) {

        if(map[k - array [i]])
             return true;
    }

    return false;
}

console.log(sumToK([10, 15, 3, 7,7], 17));