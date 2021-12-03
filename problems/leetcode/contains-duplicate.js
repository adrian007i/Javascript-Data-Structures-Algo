// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false

};