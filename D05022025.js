/** Date - 05/02/2025
  1752. Check if Array Is Sorted and Rotated
 * 
 * Problem Statement:- Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 
*/
var check = function(nums) {
    let Breaks = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            Breaks++;
        }
    }

    if (nums[nums.length - 1] > nums[0]) {
        Breaks++;
    }
    return Breaks <= 1;
};


let nums = [3,4,5,1,2];
console.log(check(nums));