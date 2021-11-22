// Since memory is limited memory a collasion between 2 pieces of data can occur 
// this means the 2 pieces of data will be stored in the same memory address block
// this process slows down hashmaps
 

// building a hash table 
class HashTable {
    constructor(size){
        this.data  =  new Array (size);
    }

    _hash(key){
        let hash = 0 ;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    } 
    set(key, value){ 
        const hashedIndex =  this._hash(key);

        if(this.data[hashedIndex]){ 
            for (let i = 0; i < this.data[hashedIndex].length; i++) { 
                if(this.data[hashedIndex][i][0] === key){ 
                    this.data[hashedIndex][i][1] =value ;
                    return;
                } 
            }  
            this.data[this._hash(key)].push([key, value]);   

        }else{
            this.data[this._hash(key)] = [[key, value]];
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
            return this.data[hashedIndex][0][1]
        } 
    }
}

const myhashtable =new HashTable(50);
myhashtable.set("name", "adrian");
myhashtable.set("age", 24);
myhashtable.set("name", "adrian john");
console.log(myhashtable.get("test"))  
