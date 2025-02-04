/** Date - 04/02/2025
  1800. Maximum Ascending Subarray Sum
 * 
 * Problem Statement:- Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.


here we have to return the maximum possible sum of an ascending subarray in nums. It means if to check for a sub-array which total is higher than others.

Input: nums = [10,20,30,5,10,50]
 
*/

/** This is optimal approach means, it's having o(n) -TC */
var maxAscendingSum = function(nums) {
    let n = nums.length;
    let maxSum = 0;
    let sum = nums[0];

    for(let i = 0; i < n; i++){
        if(nums[i] > nums[ i - 1]){
            sum = sum + nums[i];
        }
        else{
            maxSum = Math.max(maxSum, sum);
            sum = nums[i];
        }
    } 
    // return maxSum;// yes to hume output 60 mila kyuki hum itrate krte agge badh to 65 store huya hi nhi.
    return Math.max(maxSum, sum);
};

/** This is brute force approach means, it's having o(n^2) -TC */

var maxAscendingSum = function(nums) {
    let maxSum = 0;

    for(let i = 0; i < nums.length; i++){
        let sum = nums[i];
        for(let j = i + 1; j < nums.length && nums[j] > nums[j - 1]; j++){
            sum = sum + nums[j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum; 
};