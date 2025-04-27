/** Date - 27/04/2025
 * 3392. Count Subarrays of Length Three With a Condition
 * 
 * Problem statement:- Given an integer array nums, return the number of subarrays of length 3 such
 *  that the sum of the first and third numbers equals exactly half of the second number.
 * 
**/
var countSubarrays = function(nums) {
    let count = 0;

    for(let i = 0; i <= nums.length - 3; i++){
        let first = nums[i];
        let second = nums[i + 1];
        let third = nums[i + 2];

        if(first + third === second / 2){
            count++;
        }
    }
    return count;
};
let nums = [1,2,1,4,1];
console.log(countSubarrays(nums));