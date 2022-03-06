// https://leetcode.com/problems/group-anagrams/
var groupAnagrams = function(strs) {
    let letters = {};
    for (let i = 0; i < strs.length; i++) { 
        let sorted = strs[i].split("").sort().join("");

        if(!letters [sorted]){
            letters [sorted] = [strs[i]];
        }else{
            letters[sorted].push(strs[i]);
        } 
    }
    let results  =[];
    for (let element in letters )  {
        results.push(letters[element])
    }
    return results;  
};

 




// eat 

groupAnagrams(["eat","tea","tan","ate","nat","bat"])