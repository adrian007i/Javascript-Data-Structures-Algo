
class HashTable {
    constructor(size){
        this.data  =  new Array (size);
    }

    _hash(value){
        return value % this.data.length; 
    } 

    set(value){ 
        const hashedIndex =  this._hash(value);

        if(this.data[hashedIndex]){ 
            for (let i = 0; i < this.data[hashedIndex].length; i++) { 
                
                if(this.data[hashedIndex][i][0] === value){ 
                    this.data[hashedIndex][i][1] = value ;
                    return;
                }  
            }  
            this.data[hashedIndex].push([value]);   

        }else{
            this.data[hashedIndex] = [[value]];
        } 
    } 

    get(key){  
        const hashedIndex =  this._hash(key); 
        if(this.data[hashedIndex].length > 1){
            for (let i = 0; i < this.data[hashedIndex].length; i++) {
                if(this.data[hashedIndex][i][0] === key){
                    return this.data[hashedIndex][i][1];
                    
                } 
            }  

        }else{
            return this.data[hashedIndex][0][1];
        } 
    }
}