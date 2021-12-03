// https://leetcode.com/problems/rotate-array/

var rotate = function (nums, k) {

    const arrLength = nums.length;
    if (arrLength < 2 || k === 0)
        return
    const other = [...nums];
    k = k % arrLength

    for (let i = 0; i < arrLength; i++) {

        if (i - k < 0)
            nums[i] = other[arrLength - k + i]
        else
            nums[i] = other[i - k]
    }

};
