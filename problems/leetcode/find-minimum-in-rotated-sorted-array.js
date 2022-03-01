
var findMin = function (nums) {
    return binary_min(nums, 0, nums.length)
};

var binary_min = function (nums, left, right) {
    let mid = Math.floor((left + right) / 2);

    // checks left right and mid 
    if (right - left < 4) return Math.min(nums[left], nums[mid], nums[right - 1]);

    // check if we are on the mid value
    else if (nums[left] < nums[mid - 1] && nums[mid] < nums[right - 1] && nums[mid - 1] > nums[mid]) return nums[mid];

    // check second half
    else if (nums[mid] < nums[right - 1]) return binary_min(nums, left, mid);

    // check first half
    else if (nums[left] < nums[mid]) return binary_min(nums, mid, right); 
};


console.log(findMin([1, 2, 3, 4, 5]))
console.log(findMin([5, 1, 2, 3, 4]))
console.log(findMin([4, 5, 1, 2, 3]))
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([2, 3, 4, 5, 1])) 