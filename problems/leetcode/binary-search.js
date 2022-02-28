 
var search = function(nums, target) {
    return binarySearch (nums, target, 0, nums.length)
};

var binarySearch = function (nums, value, left, right) { 
    let mid = Math.floor((left+right) / 2); 

    // equal
    if (nums[mid] === value)
        return mid;

    // if element does not exist
    if(right - left  < 2)
        return -1;

    // greater than target
    if (nums[mid] > value)
        return binarySearch(nums,value, left, mid)

    // less than target
    if (nums[mid] < value) {
        return binarySearch(nums,value, mid, right)
    }
    
    return -1;

};


console.log(search([4, 6, 7, 12], 1 ))  