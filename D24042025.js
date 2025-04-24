/** Date - 24/04/2025
 * 2799. Count Complete Subarrays in an Array
 * 
 * Problem statement:- You are given an array nums consisting of positive integers.
 * We call a subarray of an array complete if the following condition is satisfied:
 * The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array
 * Return the number of complete subarrays.
 * A subarray is a contiguous non-empty part of an array.
 * 
**/
var countCompleteSubarrays = function(nums){
    let distinctCount = new Set(nums).size;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        let seen = new Set();
        for(let j = i; j < nums.length; j++){
            seen.add(nums[j]);
            if(seen.size === distinctCount){
                count++;
            }
        }
    }
    return count;
};
let nums = [1,3,1,2,2];
console.log(countCompleteSubarrays(nums));