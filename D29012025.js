/** Date - 29/01/2025
  1. Two Sum
 * 
 * Problem Statement:- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


here we have given a array named nums and a target , we have to give the indicese of the elements who sum is equal to the target.
 
*/

var twoSum = function(nums, target) {
    const m = new Map();
  for (let i = 0; ; ++i) {
      const x = nums[i];
      const y = target - x;
      if (m.has(y)) {
          return [m.get(y), i];
      }
      m.set(x, i);
  }
}

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums, target));