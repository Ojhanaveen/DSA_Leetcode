/** Date - 03/02/2025
  169. Majority Element
 * 
 * Problem Statement:- Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


here we have return that element which have the highest frequency, mean a majority element.
this question can be solved with several ways but the best one is "Boyer-Moore-Majority-Algorithm". 
 
*/

var majorityElement = function(nums) {
    let checkNum = nums[0]; 
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === checkNum) {
            count++;
        } else {
            count--;
            if (count === 0) {
                checkNum = nums[i]; 
                count = 1;
            }
        }
    }
    
    return checkNum; 
};

let nums = [3,2,3];

console.log(majorityElement(nums));