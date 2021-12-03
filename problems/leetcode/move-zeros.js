// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {

    let arrLen = nums.length;
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < arrLen; i++) {

        if (nums[i] != 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    for (let i = lastNonZeroFoundAt; i < arrLen; i++) {
        nums[i] = 0
    }

};
