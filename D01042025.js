/** Date - 01/04/2025
 * 238. Product of Array Except Self
 * 
 * Problem statement:- Given an integer array nums, return an array answer such that answer[i] is 
 * equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.

 
**/

var productExceptSelf = function(nums){
    let n = nums.length;
    let ans = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        ans[i] = ans[i - 1] * nums[i - 1];
    };
    let previousSuffix = 1;

    for(let i = n - 2; i >=0 ; i--){
        previousSuffix = previousSuffix * nums[i + 1];
        ans[i] = ans[i] * previousSuffix;
    };

    return ans;
};

let nums = [1,2,3,4];
