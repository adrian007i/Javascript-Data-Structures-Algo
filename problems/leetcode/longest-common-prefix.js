var longestCommonPrefix = function(strs) { 
      
    let prefix = "";

    for (let i = 0; i < strs.length; i++) { 
        if (i === 0) prefix = strs[0];

        let tmp_prefix =""

        for (let j = 0; j < prefix.length; j++) {
            
            if(strs[i][j] === prefix[j]){
                 tmp_prefix += strs[i][j];
            }else{
                break;
            }  
        }

        if(tmp_prefix === "")
            return "";
        else 
            prefix = tmp_prefix;
    }

    return prefix;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["a"]));