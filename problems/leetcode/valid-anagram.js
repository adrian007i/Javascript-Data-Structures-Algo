// https://leetcode.com/problems/valid-anagram/s
var isAnagram = function(s, t) {

    // determine smaller string
    let s1,s2;

    if(s.length < t.length)
        s1 = s ,s2 =t;
    else
        s2= s, s1=t;
    
    let letters ={}; 
    

    for (let i = 0; i < s1.length; i++) {
        letters [s1[i]] = (letters [s1[i]] ? letters [s1[i]]+1 : 1 ) 
    }  

    for (let i = 0; i < s2.length; i++) {
        if(!letters[s2[i]] || letters[s2[i]] == 0)
            return false;   
        letters[s2[i]] = letters[s2[i]] -1

    }
    return true;
}; 
console.log(isAnagram('ab', 'a'));