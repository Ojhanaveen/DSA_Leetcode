/** Date - 08/04/2025
 * 3396. Minimum Number of Operations to Make Elements in Array Distinct 
 * 
 * Problem statement:- You are given an integer array nums. 
 * You need to ensure that the elements in the array are distinct.
 *  To achieve this, you can perform the following operation any number of times:
 * Remove 3 elements from the beginning of the array. 
 * If the array has fewer than 3 elements, remove all remaining elements
 * Note that an empty array is considered to have distinct elements.
 *  Return the minimum number of operations needed to make the elements in the array distinct.

**/
var minimumOperation = function(nums){
    let set  = new Set();
    for(let i = nums.length; i >= 0; i--){
        if(set.has(nums[i])){
            return Math.floor(i/3)+ 1;
        }
        set.add(nums[i]);
    }
    return 0;
};

let nums = [1,2,3,4,2,3,3,5,7];
console.log(minimumOperation(nums));