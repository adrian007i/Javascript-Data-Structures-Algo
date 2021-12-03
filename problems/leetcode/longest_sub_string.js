// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let count=0;
    let pointer_a =0;
    let pointer_b =0; 
    
    let map={};
     
    let prev;
    while(pointer_b < s.length){
        
        if(!map[s[pointer_b]] || map[s[pointer_b]] == false){
            map[s[pointer_b]] = true;
            pointer_b++;
            count++;
            if(count>max)
                max = count;
        }else{
            map[s[pointer_a]] = false;
            pointer_a++;
            count --;
        }
    }
    
    return max;
};

console.log(lengthOfLongestSubstring("ab"));