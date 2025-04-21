/** Date - 21/04/2025
 * 2006. Count Number of Pairs With Absolute Difference K
 * 
 * Problem statement:- Given an integer array nums and an integer k,
 *  return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
 * The value of |x| is defined as:
 * x if x >= 0
 * -x if x < 0.
 * 
**/

var countKDifference = function(nums, k){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j <nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k){
                count++;
            }
        }
    }
    return count;
};

let nums = [1,2,2,1], k = 1;

console.log(countKDifference(nums, k));