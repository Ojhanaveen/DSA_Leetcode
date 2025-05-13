/** Date - 13/05/2025
 * 136. Single Number
 * 
 * Problem statement:- Given a non-empty array of integers nums, 
 * every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.

**/
function singleNumbar(nums){
    let res = 0;
    for(let i = 0 ; i < nums.length; i++){
        res ^= nums[i];
    }
    return res;
};

let nums = [2,2,1];
console.log(singleNumbar(nums));