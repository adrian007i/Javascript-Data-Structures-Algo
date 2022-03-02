
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length)
};

var binarySearch = function (nums, value, left, right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`${left} --- ${mid} --- ${right}`);
    // check mid position
    if(value === nums[mid]) return mid;
    
    // if array is small, check each element
    if (right - left < 4) { 
        switch (value) {
            case nums[left]: return left;
            case nums[right - 1]: return right - 1
            default: return -1
        }
    }
    // check if left array is in order
    else if ((nums[left] < nums[mid])) {

        // value is possibly in the left range
        if (value >= nums[left] && value < nums[mid]) return binarySearch(nums, value, left, mid);
        // value is possibly in the right range
        else return binarySearch(nums, value, mid + 1, right);
    }

    // check if right array sorted
    else if (nums[mid] < nums[right - 1]) { 
        console.log(123);
        // value is possibly in the right 
        if (value > nums[mid] && value <= nums[right-1]) return binarySearch(nums, value, mid+1, right)
        // value is possibly in the left
        else return binarySearch(nums, value, left, mid)
    } 
    
    return -1;
}

// console.log(search([1],1));
// console.log(search([1],0));
// console.log(search([1,2],1));
// console.log(search([2,1],2));
// console.log(search([2,1],1));
// console.log(search([2,1],2));

// console.log(search([1, 2, 3], 4));
// console.log(search([3, 1, 2], 3));
// console.log(search([7,8,1,2,3,4,5,6], 2)); 
console.log(search([5,1,2,3,4], 4)); 
 

 