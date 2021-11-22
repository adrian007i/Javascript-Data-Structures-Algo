function recurringCharacters(array){

    const hashmap = {};

    for (let i = 0; i < array.length; i++) {
        
        if(hashmap[array[i]]){
            return array[i]
        }else{
            hashmap[array[i]] = true;
        }
        
    }
    return undefined;
}

console.log(recurringCharacters([2,5,1,2,3,5,1,2,4]));
console.log(recurringCharacters([1,5,1,2,3,5,1,2,4]));