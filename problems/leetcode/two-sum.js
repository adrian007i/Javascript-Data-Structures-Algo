// https://leetcode.com/problems/two-sum/
var twoSum = function (nums, target) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {

        if (!map[nums[i]]) {
            map[nums[i]] = i;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] && map[target - nums[i]] != i) {
            return [i, map[target - nums[i]]];
        }
    }


};