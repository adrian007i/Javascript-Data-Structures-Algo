var productExceptSelf = function(nums) {

    const len= nums.length;

    // prefix values
    let prefix = new Array(len);
    prefix[0] = nums[0];    

    for (let i = 1; i < len; i++) {
        prefix[i] = prefix[i-1] * nums[i]
    }

    // postfix values
    let postfix = new Array(len);
    postfix[len -1] = nums[len -1];    

    for (let i = len-2; i >=0; i--) {
        postfix[i] = postfix[i+1] * nums[i]
    }

    let output = new Array(len);
    output[0] = postfix[1];
    output[len -1] = prefix [len - 2];    

    for (let i = 1; i < len-1; i++) {
        output[i] = prefix[i-1] * postfix [i +1]
    }
    
    console.log(output)
};

// productExceptSelf([1,2,3,4])