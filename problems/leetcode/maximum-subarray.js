https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function(nums) {
    
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) { 

        if(nums[i] < sum + nums[i]) { 
            sum = sum + nums[i];
        }
        else sum = nums[i];

        if(sum > max) max = sum;  
    } 
    return max; 
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));