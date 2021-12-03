// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]])
            map[nums[i]] = true;
    }
    console.log(map)

    for (let i = 0; i <= nums.length; i++) {

        if (!map[i]) {
            return i;
        }
    }
};