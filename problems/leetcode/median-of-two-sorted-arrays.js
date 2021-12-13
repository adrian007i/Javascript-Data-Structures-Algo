// https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function (nums1, nums2) {

    const median_1 = Math.floor((nums1.length + nums2.length - 1) / 2);
    const median_2 = Math.ceil((nums1.length + nums2.length - 1) / 2);
    const length = (nums1.length > nums2.length ? nums1.length : nums2.length);
    let sorted = [];

    let i = 0;
    let j = 0;

    while (nums1.length + nums2.length !== sorted.length) {


        if (j >= nums2.length || nums1[i] < nums2[j]) {
            sorted.push(nums1[i]);
            i++;
        }
        else if (i >= nums1.length || nums1[i] > nums2[j]) {
            sorted.push(nums2[j]);
            j++;
        } else {
            console.log(i + '===' + j)
            sorted.push(nums1[i]);
            sorted.push(nums2[j]);
            i++; j++;
        }
    }
    return (sorted[median_1] + sorted[median_2]) / 2;
};




